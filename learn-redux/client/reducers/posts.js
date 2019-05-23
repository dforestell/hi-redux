// a reducer takes in 2 things
// 1. the action
// 2. copy of current state

function posts(state = [], action){
  switch(action.type){
    case 'INCREMENT_LIKES':
      console.log("INCREMENTING LIKES YASSS")
      const i = action.index;
    //return updated state
      return [
        ...state.slice(0, i), //before the one we are updating
        {...state[i], likes: state[i].likes + 1},
        ...state.slice(i + 1), //after the one we are updating
      ]
    default:1
      return state;
  }
  return state;
}

export default posts;
