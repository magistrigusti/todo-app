import React, { useState } from 'react';
import List from '../List';
import Badge from '../Badge/Badge';
import '../List/list.scss';
import closeSvg from '../../assets/img/close.svg';

const AddList = ({colors, onAdd}) => {
  const [visiblePopup, setVisiblePopup] = useState(false);
  const [selectedColor, selectColor] = useState(colors[0].id);
  const [inputVale, setInputValue] = useState('');
}

export default AddList;