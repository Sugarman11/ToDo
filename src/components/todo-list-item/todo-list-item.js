import React, {Component} from 'react';
import './todo-list-item.css'

export default class TodoListItem extends Component {

  render() {
    const { label, onDeleted, onToggleImportant, onToggleDone, done, important } = this.props;
    
    let classNames = 'todo-list-item-group d-flex';
    if (done) {
      classNames += ' done';
    };

    if (important) {
      classNames += ' important';
    };

    return (
      <div className={ classNames }>
  
        <span
          className="todo-list-item-label"
          onClick={ onToggleDone }>
          { label }
        </span>
  
        <div className="todo-list-item-group-btn">

          <button type="button"
                  className="btn btn-outline-secondary todo-list-item-btn"
                  onClick={ onToggleDone }>
            <i className="fa fa-ban"/>
          </button>
    
          <button type="button"
                  className="btn btn-outline-success todo-list-item-btn"
                  onClick={ onToggleImportant }>
            <i className="fa fa-exclamation"/>
          </button>
    
          <button type="button"
                  className="btn btn-outline-danger todo-list-item-btn"
                  onClick={ onDeleted }>
            <i className="fa fa-trash-o"/>
          </button>
      
        </div>
      </div>
    );
  };
};