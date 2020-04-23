import React from 'react'


export default function FriendItem(props) {

  return (
    <div className='item-details'>
      <div className='item-details-col'>
        <div className='item-details-row'>
          <div>{props.friend.name}</div>
        </div>
        <div className='item-details-row'>
          <div>{props.friend.age}</div>
          <div>{props.friend.email}</div>
        </div>
      </div>
      <div className='item-details-col'>
        <button onClick={props.delete}>Delete</button>
      </div>
    </div>
  )
}