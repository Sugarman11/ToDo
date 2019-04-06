import React from 'react';
import './app-header.css';

const AppHeader=({toDo, done}) => {
  return (
    <div className="app-header-place d-flex">
      <h1>Список дел</h1>
      <h2>{done} Выполнено, {toDo} Осталось Выполнить</h2>
    </div>
  );
};

export default AppHeader;