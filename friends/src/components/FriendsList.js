import React, { useState, useEffect } from 'react'
import FriendItem from './FriendItem'
import { useDispatch, useSelector } from 'react-redux';
import * as act from '../store/actions';
import axiosWithAuth from '../utils/axiosWithAuth';

export default function FriendsList() {
  // const [friends, setFriends] = useState([]);
  const friends = useSelector(state => state.friends);
  const isFetching = useSelector(state => state.friends_isFetching);
  const dispatch = useDispatch();

  useEffect(() => {
    getFriends();
  }, [])

  function getFriends() {
    // axios to get friends list
    // set state with friends result
    dispatch({ type: act.friends_list_fetching })
    axiosWithAuth().get('/api/friends')
      .then(res => {
        console.log('response: ', res);
        dispatch({ type: act.friends_list_fetched, payload: res.data })
      })
      .catch(err => {
        dispatch({ type: act.friends_list_failed, payload: [err.message, err.response.data] })
        console.log({err});
      })
  }

  function deleteFriend(id) {
    // axios
    dispatch({ type: act.friends_list_fetching });
    axiosWithAuth().delete(`/api/friends/${id}`)
      .then(res => {
        dispatch({ type: act.friends_list_fetched, payload: res.data })
      })
      .catch(err => {
        dispatch({ type: act.friends_list_fetched, payload: friends })
        console.log(err);
      })
  }

  function deleteFriendHandler(e, id) {
    e.preventDefault();
    deleteFriend(id);
  }

  
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
        <button onClick={getFriends}>{isFetching ? 'Loading...' : 'Refresh Friends'}</button>
        {friends.map(item => <FriendItem key={item.id} friend={item} 
            delete={(e) => deleteFriendHandler(e, item.id)} /> )}
      </div>
    </div>
  )
}