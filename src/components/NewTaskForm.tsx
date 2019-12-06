import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { Task } from './../models/task';

const InputData = styled.input`
  padding:20px;
  border: 1px solid lightcoral;
  border-bottom-left-radius: 10px;
  border-top-left-radius: 10px;
`;

const ButtonSubmit = styled.button`
  padding:20px;
  border: 1px solid lightcoral;
  border-bottom-right-radius: 10px;
  border-top-right-radius: 10px;
  background-color: lightcoral;
  color: white;
`;

const ButtonReset = styled.button`
  padding:20px;
  border: 1px solid lightcoral;
  border-radius: 10px;
  background-color: lightcoral;
  color: white;
  margin-left: 20px;
`;

interface Props {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onAdd: (event: React.FormEvent<HTMLFormElement>) => void;
  onReset: (event: any) => void;
  task: Task;
}

export const NewTaskForm: FunctionComponent<Props> = ({
  onChange,
  onAdd,
  onReset,
  task
}) => (
    <form onSubmit={onAdd}>
      <InputData onChange={onChange} value={task.name} />
      <ButtonSubmit type='submit'>Add a task</ButtonSubmit>
      <ButtonReset onClick={onReset}>Reset</ButtonReset>
    </form>
  );
