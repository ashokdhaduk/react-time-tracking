import * as types from '../constants/ActionTypes'

const timeEntryInput = (state = {}, action) => {
  switch (action.type) {
    case types.TIME_ENTRY_INPUT__START: 
      if (action.status && action.status === 'success') {
        return { 
          text: action.payload.text,
          startTime: action.payload.startTime,
          isFetching: action.isFetching
        }
      } else {
        return Object.assign({}, state, {isFetching: action.isFetching})
      }
      
    default :
      return state
  }
}

export default timeEntryInput