// ACTIONS DEFINE STATE TRANSITIONS
const friendShape = {
  name: '',
  age: '',
  email: '',
}

const initialFriendsState = {
  // friend is an object
  friends: [],
  friends_isFetching: false,
  friends_workingItems: [],
  editingFriend: {},
  selectedFriends: [],
}


export const friends_list_update = 'friends-list-update'
export const friends_list_fetching = 'friends-list-fetching'
export const friends_list_fetched = 'friends-list-fetched'
export const friends_list_failed = 'friends-list-failed'
export const friends_item_update = 'friends-item-update'


// ACTION CREATORS: 

// function 
