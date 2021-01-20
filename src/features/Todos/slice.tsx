import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { v4 as uuid } from "uuid";

export interface Task {
  uuid?: string;
  title: string;
  done: boolean;
  priority: number;
}

export enum SortKey {
  priority = "PRIORITY",
  title = "TITLE",
  done = "DONE",
}

export interface Sort {
  SortKey: SortKey;
  isAscending: boolean;
}

interface TasksState {
  tasks: Task[];
  sortKey: SortKey;
  isAscending: boolean;
}

const initialState: TasksState = {
  tasks: [
    {
      uuid: uuid(),
      title: "Create Some More Tasks",
      done: false,
      priority: 1,
    },
  ],
  sortKey: SortKey.priority,
  isAscending: true,
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Task>) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      const task = { ...action.payload, uuid: uuid() };
      state.tasks.push(task);
    },
    edit: (state, action: PayloadAction<Task>) => {
      const index = state.tasks.findIndex(
        (task) => task.uuid === action.payload.uuid
      );
      state.tasks[index] = action.payload;
    },
    remove: (state, action: PayloadAction<string>) => {
      state.tasks = state.tasks.filter((task) => task.uuid !== action.payload);
    },
    sort: (state, action: PayloadAction<Sort>) => {
      return {
        ...state,
        tasks: state.tasks
          .slice()
          .sort((a, b) =>
            compare(a, b, action.payload.SortKey, action.payload.isAscending)
          ),
        sortKey: action.payload.SortKey,
        isAscending: action.payload.isAscending,
      };
    },
  },
});

export const { add, edit, remove, sort } = todoSlice.actions;

const compare = (a: Task, b: Task, key: SortKey, isAscending: boolean) => {
  let comparison = 0;
  if (key === SortKey.priority) {
    if (!isAscending) {
      return b.priority - a.priority;
    }
    return a.priority - b.priority;
  }
  if (key === SortKey.title) {
    if (a.title.toLowerCase() > b.title.toLowerCase()) {
      comparison = 1;
    } else if (a.title.toLowerCase() < b.title.toLowerCase()) {
      comparison = -1;
    }
    if (!isAscending) {
      comparison *= -1;
    }
  }
  if (key === SortKey.done) {
    if (!isAscending) {
      return Number(a.done) - Number(b.done);
    }
    return Number(b.done) - Number(a.done);
  }
  return comparison;
};

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const getTasks = (state: RootState) => state.todoState.tasks;
export const getCount = (state: RootState) => state.todoState.tasks.length;
export const getCompletedCount = (state: RootState) =>
  state.todoState.tasks.filter((task) => task.done).length;

export default todoSlice.reducer;
