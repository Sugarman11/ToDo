import React, { Component } from 'react';
import './app.css';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';
import ItemAddForm from '../item-add-form';

export default class App extends Component {

  maxId = 100;

  state = {
    todoData: [
      this.createTodoItem('Drink Coffee'),
      this.createTodoItem('Make Awesom App asdasdasd asdasd asda sda sdas dasdasd'),
      this.createTodoItem('Have a lunch'),
    ],
    term: ''
  };

  createTodoItem(label) {
    return {
      label,
      important: false,
      done: false,
      id: this.maxId++
    };
  };

  deleteItem = (id) => {
    this.setState(({ todoData }) => {
      const indx = todoData.findIndex( (el) => el.id === id );

      const newArray = [ 
        ...todoData.slice(0, indx),
        ...todoData.slice(indx + 1) 
      ];

      return {
        todoData: newArray
      };

    });
  };

  addItem = (text) => {
    const newItem = this.createTodoItem(text);
    this.setState(({ todoData }) => {

      if (!text.length) {
        return {
          todoData: todoData
        };
      };

      const newArr = [
         ...todoData,
         newItem
      ];

      return {
        todoData: newArr
      };

    });
  };

  toggleProperty = (arr, id, propName) => {
      const indx = arr.findIndex( (el) => el.id === id );

      const oldItem = arr[indx];
      const newItem = { ...oldItem, [propName]: !oldItem[propName] };

      return [
        ...arr.slice(0, indx),
        newItem,
        ...arr.slice(indx + 1) 
      ];
  };

  onToggleImportant = (id) => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.toggleProperty(todoData, id, 'important')
      };
    });
  };

  onToggleDone = (id) => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.toggleProperty(todoData, id, 'done')
      };
    });
  };

  onSearchChange = (term) => {
    this.setState({ term });
  };

  search (items, term) {
    return items.filter((item) => {

      if(term.length === 0) {
        return items;
      };

      return item.label
             .toLowerCase()
             .indexOf(term.toLowerCase()) > -1;

    });
  };

  render() {
    const { todoData, term } = this.state;

    const visibleItems = this.search(todoData, term);
    const doneCount = todoData.filter((el) => el.done).length;
    const toDoCount = todoData.length - doneCount;

    return (
      <div className="main-app-container">

        <AppHeader toDo={toDoCount} done={doneCount}/>

          <div className="top-panel d-flex">
            <SearchPanel 
              onSearchChange={this.onSearchChange} />
            <ItemStatusFilter />
          </div>

        <TodoList
          onToggleImportant={ this.onToggleImportant }
          onToggleDone={ this.onToggleDone }
          onDeleted={ this.deleteItem }
          todos={ visibleItems }
        />

        <ItemAddForm 
          onAddedItem={ this.addItem }
        />

      </div>
    );
  };
};