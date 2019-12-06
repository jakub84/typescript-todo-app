import React, { Component } from 'react';
import { Task } from './../models/task';
import { NewTaskForm } from './NewTaskForm';
import { TaskList } from './TaskList';
import Wrapper from './wrappers/Wrapper';

interface State {
  newTask: Task;
  tasks: Task[];
}

class App extends Component<{}, State> {
  state = {
    newTask: {
      id: 1,
      name: ''
    },
    tasks: []
  };

  addTask = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    this.setState(previousState => ({
      newTask: {
        id: previousState.newTask.id + 1,
        name: ''
      },
      tasks: this.state.newTask.name ? [...previousState.tasks, previousState.newTask] : [...previousState.tasks]
    }));
  }

  handleResetTasks = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    this.setState({
      newTask: {
        id: 1,
        name: ''
      },
      tasks: []
    });
  }

  handleDelete = (id: number) => {
    // tslint:disable-next-line:no-console
    console.log(id);
  }

  handleTaskChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      newTask: {
        ...this.state.newTask,
        name: event.target.value
      }
    });
  }

  render() {
    const { tasks, newTask } = this.state;
    return (
      <Wrapper>
        <h2>TypeScript</h2>
        <NewTaskForm
          task={newTask}
          onAdd={this.addTask}
          onChange={this.handleTaskChange}
          onReset={this.handleResetTasks}
        />
        {tasks.length !== 0 ?
        <TaskList tasks={tasks}
        onDelete={this.handleDelete(selectedTask)}
        />
        :
        <p>no data yet</p>}
      </Wrapper>
    );
  }
}
export default App;
