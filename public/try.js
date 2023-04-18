import React, { useState } from 'react';
import List from '../List';
import '../List/list.scss';

const AddList = (props) => {
  const [visiblePopup, setVisiblePopup] = useState(false);

  return (
    <div className="add-list">
      <List onClick={() => setVisiblePopup(true)}
        items={[
          {
            className: 'list__add-button',
            name: 'Add List',
            icon: (),
          }
        ]}
      />

      {
        visiblePopup && (
          <div className="add-list__popup">
            <h1>123</h1>
          </div>
        )
      }
    </div>
  )
}

export default AddList;