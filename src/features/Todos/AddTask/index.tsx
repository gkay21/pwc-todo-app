import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { add } from "features/Todos/slice";
import { Wrapper, H1, Form, InputGroup, Title, Input, Submit } from "./styles";

const AddTask = () => {
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState(0);

  const dispatch = useDispatch();

  const disabled = !(title && priority);

  const clearForm = () => {
    setTitle("");
    setPriority(0);
  };

  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    dispatch(add({ title, priority, done: false }));
    clearForm();
  };

  return (
    <Wrapper>
      <H1>Add Task</H1>
      <Form onSubmit={onSubmit}>
        <InputGroup area="title">
          <Title>Todo</Title>
          <Input
            value={title}
            onChange={(e) => setTitle(e.currentTarget.value)}
          />
        </InputGroup>
        <InputGroup area="priority">
          <Title>Priority</Title>
          <Input
            type="number"
            value={priority}
            onChange={(e) => setPriority(e.currentTarget.valueAsNumber)}
          />
        </InputGroup>
        <Submit type="submit" disabled={disabled}>
          Submit
        </Submit>
      </Form>
    </Wrapper>
  );
};

export default AddTask;
