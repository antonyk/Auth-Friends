import React, { useState, useEffect } from 'react'
import Friend from './Friend'

export default function Friends() {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    // axios to get friends list
    // set state with friends result

  }, [])

  
  return (
    <div>
      <form>
        <div className='input-group'>
          <label>
            Name
            <input type='text' name='name' id='name'/>
          </label>
        </div>
        <div className='input-group'>
          <label>
            Age
            <input type='text' name='name' id='name'/>
          </label>
        </div>
        <div className='input-group'>
          <label>
            Email
            <input type='text' name='name' id='name'/>
          </label>
        </div>
        <button>Add Friend</button>
      </form>
      <div className='items-list'>
        {friends.map(item => <Friend friend={item} /> )}

      </div>
    </div>
  )
}