import * as act from './actions';

const friendShape = {
  id: 0,
  name: '',
  age: '',
  email: '',
}

// PRIMARY SOURCE
const initialFriendsState = {
  // friend is an object
  friends: [],
  friends_isFetching: false,
  friends_workingItems: [],
  editingFriend: {},
  selectedFriends: [],
  errors: [],
}


export function friendsReducer(state = initialFriendsState, action) {

  switch (action.type) {
    case act.friends_list_update:
      return {
        ...state,
        friends: action.payload
      }
    case act.friends_list_fetching:
      return {
        ...state,
        friends_isFetching: true,
      }
    case act.friends_list_fetched:
      return {
        ...state,
        friends_isFetching: false,
        friends: action.payload,
      }
    case act.friends_list_failed:
      return {
        ...state,
        friends_isFetching: false,
        errors: action.payload,
      }
    
    default:
      return state;
  }
}

const initialRootState = {

}

// reducers take a state and apply an action
export function rootReducer(state = initialRootState, action) {


  switch (action.type) {

    case '':

      return state;
    default:

      return state;
  }

}