const initialFriendsState = {
  // friend is an object
  friends: [],
  editingFriend: {},
  selectedFriends: [],

}

export function friendsReducer(state = initialFriendsState, action) {

  switch (action.type) {
    case '':
      return state;

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