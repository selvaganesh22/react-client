import ContentActionTypes from './content.types';
const INITIAL_STATE = {
  content: [{
    userId:1,
    title:"title"
  }],
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
      return {
        ...state,
        isFetching: false,
        content: action.payload
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