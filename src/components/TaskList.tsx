import React, { FunctionComponent } from 'react';
import { Task } from './../models/task';
import { SingleTask } from './SingleTask';

interface Props {
  tasks: Task[];
  onDelete: (selectedTask: number) => void;
  selectedTask: number;
}

export const TaskList: FunctionComponent<Props> = ({ tasks, onDelete }) => (

  <ul style={{padding: 0}}>
    {tasks.map(task => (
      <SingleTask key={task.id} task={task} onDelete={onDelete} />
    ))}
  </ul>

);
