import React, { useState } from 'react';
import List from '../List';
import Badge from '../Badge/Badge';
import '../List/list.scss';
import closeSvg from '../../assets/img/close.svg';

const AddList = ({ colors }) => {
  const [visiblePopup, setVisiblePopup] = useState(false);
  const [selectedColor, selectColor] = useState(colors[0].id);

  return (
    <div className="add-list">
      <List onClick={() => setVisiblePopup(true)}
        items={[
          {
            className: 'list__add-button',
            name: 'Add List',
            icon: (
              <svg
                width="12" height="12" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 1V15" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M1 8H15" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>

            ),
          }
        ]}
      />

      {visiblePopup && (
        <div className="add-list__popup">
          <img className="add-list__popup-close-btn"
            src={closeSvg} alt="Close button"
            onClick={() => setVisiblePopup(false)}
          />

          <input type='text'
            className='field'
            placeholder="Add New List"
          />

          <div className="add-list__popup-colors">
            {
              colors.map(color =>
                <Badge key={color.id}
                  color={color.name}
                  onClick={() => selectColor(color.id)}
                  className={selectedColor === color.id && 'active'}
                />)
            }
          </div>
          <button className="button">Add</button>
        </div>)}
    </div>
  );
};

export default AddList;