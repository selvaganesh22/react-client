import ContentActionTypes from './content.types';
const INITIAL_STATE = {
  data: null,
  isFetching: false,
  errorMessage: undefined
};

const contentReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ContentActionTypes.FETCH_CONTENT_START:
      console.log('start reducer')
      return {
        ...state,
        isFetching: true
      };
    case ContentActionTypes.FETCH_CONTENT_SUCCESS:
      console.log('success reducer')
      return {
        ...state,
        isFetching: false,
        data: action.payload
      };
    case ContentActionTypes.FETCH_CONTENT_FAILURE:
      console.log('failure reducer')
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload
      };
    default:
      return state;
  }
};

export default contentReducer;