import React, { useState } from 'react'
import MenusList from './menus-list'
import { FaPlus, FaMinus } from 'react-icons/fa';

function MenusItem({item}) {
    const [displayCurrentChildren, setDisplayCurrentChildren] = useState({});

    function handleToggleChildren(getCurrentLabel) {
        setDisplayCurrentChildren({
            ...displayCurrentChildren,
            [getCurrentLabel]: !displayCurrentChildren[getCurrentLabel]
        })
    }

    console.log(displayCurrentChildren);
  return (
    <li>
        <div className='menu-item-container'>
        <p>{item.label}</p>
        {
            item && item.children && item.children.length ? (
                <span onClick={() => handleToggleChildren(item.label)}>{displayCurrentChildren[item.label] ? <FaMinus color='#fff' size={25}/> : <FaPlus color='#fff' size={25}/>}</span>
            ) : null
        }
        </div>
        {
            item && item.children && item.children.length > 0 && displayCurrentChildren[item.label] ? 
            <MenusList list={item.children} />
            : null
        }
    </li>
  )
}

export default MenusItem
