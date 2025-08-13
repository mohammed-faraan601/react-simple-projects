import React from 'react'
import MenusItem from './menus-item';

function MenusList({list = []}) {
  return (
    <ul className='menu-list-container'>
      {
        list && list.length ? 
        list.map((item) => (
          <MenusItem key={item.label} item={item} />
        ))
        : null
      }
      
    </ul>
  )
}

export default MenusList;
