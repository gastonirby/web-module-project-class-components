import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

const toDo = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];



class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state= {
      toDo: toDo
    }
  }

  handleToggle = () => {
    this.setState({
      ...this.state,
      toDo: this.state.toDo.filter(item => {
        return (!item.completed);
      })
    });
  }

  handleAddItem = (task) => {
    const newTask = {
      task: task,
      id: Date.now,
      completed: false
    };

    this.setState({
      ...this.state,
      toDo: [...this.state.toDo, newTask]
    });
  }

  handleToggleItem = (item) => {
    this.setState({
      ...this.state,
      toDo: this.state.toDo.map(to => {
        if(to.id === item.id) {
          return {...to, completed: !to.completed}
        } else {
          return to;
        }
      })
    })
  };


  render() {
    return (
      <div>
        <h2>ToDo List:</h2>
        <TodoForm handleAddItem={this.handleAddItem}/>
        <TodoList handleToggleItem={this.handleToggleItem} toDo={this.state.toDo} />
        <button onClick={this.handleToggle}>Done</button>
      </div>
    );
  }
}

export default App;
