import ContentActionTypes from './content.types';
const INITIAL_STATE = {
  data: null,
  isFetching: false,
  errorMessage: undefined
};

const contentReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ContentActionTypes.FETCH_CONTENT_START:
      return {
        ...state,
        isFetching: true
      };
    case ContentActionTypes.FETCH_CONTENT_SUCCESS:
      return {
        ...state,
        isFetching: false,
        data: action.payload
      };
    case ContentActionTypes.FETCH_CONTENT_FAILURE:
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