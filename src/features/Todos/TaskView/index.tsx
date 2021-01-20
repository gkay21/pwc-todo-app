import React from "react";
import { useDispatch } from "react-redux";
import { Task } from "features/Todos/slice";
import { Title, Priority, Done, Delete } from "./styles";
import { edit, remove } from "features/Todos/slice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

interface TaskProps {
  task: Task;
}

const TaskList = ({ task }: TaskProps) => {
  const { uuid, title, priority, done } = task;
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(remove(uuid!));
  const handleCompleted = () => dispatch(edit({ ...task, done: !task.done }));

  return (
    <>
      <Priority>{priority}</Priority>
      <Title>{title}</Title>
      <Done type="checkbox" checked={done} onChange={handleCompleted} />
      <Delete onClick={handleDelete}>
        <FontAwesomeIcon icon={faTimes} color="white" />
      </Delete>
    </>
  );
};

export default TaskList;
