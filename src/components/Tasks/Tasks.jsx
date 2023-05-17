import React from 'react';
import editSvg from '../../assets/img/edit.svg';
import './Tasks.scss'; 

const Tasks = (props) => {
  return (
    <div className="tasks">
      <h2 className="tasks__title">
        Frontend
        <img src={editSvg} alt="Edit icon" />
      </h2>

      <div className="tasks__items">
        <div className="checkbox">
          <input id="check" type="checkbox" />
          <label htmlFor="check"></label>
        </div>
      </div>
    </div>
  )
}

export default Tasks;