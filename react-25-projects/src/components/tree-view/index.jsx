import React from 'react'
import MenusList from './menus-list';
import './styles.css';

function TreeView({menus = []}) {
  return (
    <div className='tree-view-container'>
      <MenusList list={menus} />
    </div>
  )
}

export default TreeView;
