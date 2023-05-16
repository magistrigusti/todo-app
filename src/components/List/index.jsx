import React from 'react';
import classNames from 'classnames';
import Badge from '../Badge/Badge';
import removeSvg from '../../assets/img/remove.svg';
import './list.scss';
import '../AddList/AddList.scss';

const List = ({items, isRemovable, onClick, onRemove}) => {
  const removeList = (item) => {
    if (window.confirm('Do you really want to delete this list?')) {
      onRemove(item);
    }
  }
  return (
    <ul className="list" onClick={onClick}>
      {
        items.map((item, index) => 
          <li key={index}
            className={classNames(item.className, {active: item.ative})}
          >
            <i>
              {
                item.icon ? item.icon : <Badge color={item.color} />
              }
            </i>
            <span>{item.name}</span>
            {isRemovable && 
              <img className="list__remove-icon" onClick={() => removeList(item)}
                src={removeSvg} alt="Remove icon" />}
          </li>)
      }
    </ul>
  ) 
}

export default List;