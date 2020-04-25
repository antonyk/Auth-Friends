import React from 'react'


export default function FriendDetails({name, age, email}) {

  return (
    <div className='item-details'>
      <div>{name}</div>
      <div>{age}</div>
      <div>{email}</div>
    </div>
  )
}