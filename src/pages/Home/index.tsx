import React from "react";
import { Wrapper } from "./styles";
import AddTask from "features/Todos/AddTask";
import TaskList from "features/Todos/TaskList";

const Home = () => (
  <Wrapper>
    <AddTask />
    <TaskList />
  </Wrapper>
);

export default Home;
