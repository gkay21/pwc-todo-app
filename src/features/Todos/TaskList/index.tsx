import React from "react";
import { useSelector } from "react-redux";
import { getCompletedCount, getCount, getTasks } from "../slice";
import { Wrapper, List, Count } from "./styles";
import Task from "features/Todos/TaskView";
import GridHeader from "../GridHeader";

const TaskList = () => {
  const count = useSelector(getCount);
  const completedCount = useSelector(getCompletedCount);
  const tasks = useSelector(getTasks);
  return (
    <Wrapper>
      <List>
        <GridHeader />
        {tasks.map((task) => (
          <Task key={task.uuid} task={task} />
        ))}
      </List>
      <Count>
        {completedCount} / {count}
      </Count>
    </Wrapper>
  );
};

export default TaskList;
