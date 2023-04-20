import React, { useState } from 'react';
import List from '../List';
import Badge from '../Badge/Badge';
import '../List/list.scss';

const AddList = ({ colors }) => {
  const [visiblePopup, setVisiblePopup] = useState(true);
  const [selectedColor, selectColor] = useState(null);

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
        <input className='field' type='text' placeholder="Add New List" />
        <div className="add-list__popup-colors">
          {
            colors.map(color => 
              <Badge onClick={() => alert(color.id)}
                key={color.id}
                color={color.name} />)
          }
        </div>
        <button className="button">Add</button>
      </div>)}
    </div>
  );
};

export default AddList;