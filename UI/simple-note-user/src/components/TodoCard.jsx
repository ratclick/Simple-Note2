import React from 'react'

export default function TodoCard(props) {
    let {children} = props
    return (
        <li className='todoItem'>
            {children}
            <div className='actionsContainer'>
                <i class="fa-solid fa-pen-to-square"></i>
                <i class="fa-solid fa-trash"></i>
            </div>
        </li>
    )
}
