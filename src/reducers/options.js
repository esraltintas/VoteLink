const options = (
  state = {
    sortBy: 'newest',
    page: 1,
    itemPerPage: 5
  },
  action
) => {
  switch (action.type) {
    case 'CHANGE_SORTING':
      return {
        ...state,
        sortBy: action.value
      }

    case 'CHANGE_PAGE':
      return {
        ...state,
        page: action.value
      }

    case 'DELETE_LINK':
      return {
        ...state,
        page: 1
      }

    default:
      return state;

  }
}

export default options