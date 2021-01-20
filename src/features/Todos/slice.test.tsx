jest.mock("uuid", () => ({ v4: () => "aaaa-bbbb-cccc-dddd" }));
import * as actions from "./slice";
import todo from "./slice";

describe("actions", () => {
  it("should create an action to add a todo", () => {
    const payload = {
      title: "Create Some More Tasks",
      done: false,
      priority: 1,
    };
    const expected = {
      type: "todo/add",
      payload,
    };

    expect(actions.add(payload)).toEqual(expected);
  });

  it("should create an action to edit a todo", () => {
    const payload = {
      uuid: "aaaa-bbbb-cccc-dddd",
      title: "title",
      done: true,
      priority: 1,
    };
    const expected = {
      type: "todo/edit",
      payload,
    };

    expect(actions.edit(payload)).toEqual(expected);
  });

  it("should create an action to remove a todo", () => {
    const payload = "aaaa-bbbb-cccc-dddd";
    const expected = {
      type: "todo/remove",
      payload,
    };

    expect(actions.remove(payload)).toEqual(expected);
  });

  it("should create an action to sort the list", () => {
    const payload = {
      SortKey: actions.SortKey.done,
      isAscending: true,
    };
    const expected = {
      type: "todo/sort",
      payload,
    };

    expect(actions.sort(payload)).toEqual(expected);
  });
});

describe("reducer", () => {
  it("should return the initial state", () => {
    expect(todo(undefined, { type: "@@INIT" })).toEqual({
      isAscending: true,
      sortKey: "PRIORITY",
      tasks: [
        {
          done: false,
          priority: 1,
          title: "Create Some More Tasks",
          uuid: "aaaa-bbbb-cccc-dddd",
        },
      ],
    });
  });

  it("should return the new state on todo added", () => {
    expect(
      todo(
        {
          tasks: [],
          isAscending: false,
          sortKey: actions.SortKey.priority,
        },
        {
          type: "todo/add",
          payload: {
            done: false,
            priority: 5,
            title: "New Task",
            uuid: "aaaa-bbbb-cccc-dddd",
          },
        }
      )
    ).toEqual({
      isAscending: false,
      sortKey: "PRIORITY",
      tasks: [
        {
          done: false,
          priority: 5,
          title: "New Task",
          uuid: "aaaa-bbbb-cccc-dddd",
        },
      ],
    });
  });

  it("should return the new state on todo edited", () => {
    expect(
      todo(
        {
          tasks: [
            {
              done: false,
              priority: 5,
              title: "New Task",
              uuid: "aaaa-bbbb-cccc-dddd",
            },
          ],
          isAscending: false,
          sortKey: actions.SortKey.priority,
        },
        {
          type: "todo/edit",
          payload: {
            done: true,
            priority: 3,
            title: "New Task",
            uuid: "aaaa-bbbb-cccc-dddd",
          },
        }
      )
    ).toEqual({
      isAscending: false,
      sortKey: "PRIORITY",
      tasks: [
        {
          done: true,
          priority: 3,
          title: "New Task",
          uuid: "aaaa-bbbb-cccc-dddd",
        },
      ],
    });
  });

  it("should return the new state on todo removed", () => {
    expect(
      todo(
        {
          tasks: [
            {
              done: false,
              priority: 5,
              title: "New Task",
              uuid: "aaaa-bbbb-cccc-dddd",
            },
          ],
          isAscending: false,
          sortKey: actions.SortKey.priority,
        },
        {
          type: "todo/remove",
          payload: "aaaa-bbbb-cccc-dddd",
        }
      )
    ).toEqual({ isAscending: false, sortKey: "PRIORITY", tasks: [] });
  });

  it("should return the new state on list sorted", () => {
    expect(
      todo(
        {
          tasks: [
            {
              done: false,
              priority: 5,
              title: "New Task",
              uuid: "aaaa-bbbb-cccc-dddd",
            },
          ],
          isAscending: false,
          sortKey: actions.SortKey.priority,
        },
        {
          type: "todo/sort",
          payload: {
            SortKey: actions.SortKey.done,
            isAscending: true,
          },
        }
      )
    ).toEqual({
      isAscending: true,
      sortKey: "DONE",
      tasks: [
        {
          done: false,
          priority: 5,
          title: "New Task",
          uuid: "aaaa-bbbb-cccc-dddd",
        },
      ],
    });
  });
});
