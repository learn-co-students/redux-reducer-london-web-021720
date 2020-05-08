
let state = {friends: []}
let action = {
    type: "ADD_FRIEND",
    friend: {
      name: "Chrome Boi",
      homewtown: "NYC",
      id: 1
    },
    type: "REMOVE_FRIEND",
    id: 1
  }
  



export function manageFriends(state, action){
    switch (action.type){
        case 'ADD_FRIEND':
            return {friends: [...state.friends, action.friend]
            }
        case 'REMOVE_FRIEND': 
            // return {friends: [...state.friends, state.friends.filter(friend => friend.id === action.id )]}
            const removalIndex = state.friends.findIndex(friend => friend.id === action.id);
            return (
              {...state,
                  friends: [
                    ...state.friends.slice(0, removalIndex),
                    ...state.friends.slice(removalIndex + 1)
                  ]
              }
            )
      
            default:
            return state 

    }
}
