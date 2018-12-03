
export const addLinkAction = link => ({
  type: 'ADD_LINK',
  link
});

export const deleteLinkAction = id => ({
  type: 'DELETE_LINK',
  id
});

export const upVoteLinkAction = id => ({
  type: 'UP_VOTE_LINK',
  id
});

export const downVoteLinkAction = id => ({
  type: 'DOWN_VOTE_LINK',
  id
});

export const changeSortingAction = value => ({
  type: 'CHANGE_SORTING',
  value
});

export const changePageAction = value => ({
  type: 'CHANGE_PAGE',
  value
});


