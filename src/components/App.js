import "./App.css";
import { Component } from "react";
import AddTask from "./AddTask";
import TaskList from "./TaskList";

class App extends Component {
  counter = 2;
  state = {
    tasks: [
      {
        id: 0,
        text: "zagrać wreszcie w Wiedźmina 3",
        date: "2021-06-20",
        important: true,
        active: true,
        finishDate: null,
      },
      {
        id: 1,
        text: "Skończyć kurs React - Udemy",
        date: "2021-06-28",
        important: false,
        active: true,
        finishDate: null,
      },
    ],
  };

  deleteTask = (id) => {
    console.log("delete " + id);
    const tasks = [...this.state.tasks];
    const index = tasks.findIndex((task) => task.id === id);
    tasks.splice(index, 1);

    this.setState({
      tasks,
    });
  };

  changeTaskStatus = (id) => {
    console.log("done " + id);
    const tasks = [...this.state.tasks];
    tasks.forEach((task) => {
      if (task.id === id) {
        task.active = false;
        task.finishDate = new Date().getTime();
      }
    });
    this.setState({
      tasks,
    });
  };

  addTask = (text, date, important) => {
    const task = {
      id: this.counter,
      text: text, // teskt z inputa
      date: date,
      important: important,
      active: true,
      finishDate: null,
    };
    this.counter++;
    console.log(task, this.counter);
    this.setState((prevState) => ({
      tasks: [...prevState.tasks, task],
    }));
    return true;
  };

  render() {
    return (
      <div>
        <AddTask add={this.addTask} />
        <TaskList
          tasks={this.state.tasks}
          delete={this.deleteTask}
          change={this.changeTaskStatus}
        />
      </div>
    );
  }
}

export default App;
