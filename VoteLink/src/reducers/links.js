const links = (
  state = [],
  action
) => {
  switch (action.type) {
    case 'ADD_LINK':
      return [
        ...state,
        action.link
      ]
    
    case 'DELETE_LINK':
      return state.filter(link => link.id !== action.id);
      
    case 'UP_VOTE_LINK':
      return updateVote(state, action.id, 'upvote');

    case 'DOWN_VOTE_LINK':
      return updateVote(state, action.id, 'downvote');

    default:
      return state;
  }
}

const updateVote = (links, id, type) => {
  var link = { ...links.find(link => link.id === id) }
  
  link[type] = link[type] + 1;
  link.votedAt = Date.now();

  return [ 
    ...links.filter(link => link.id !== id), 
    link 
  ]
} 

export default links