import ContentActionTypes from './content.types';
import axios from 'axios';

export const fetchContentStart = () => ({
  type: ContentActionTypes.FETCH_CONTENT_START
});

export const fetchContentSuccess = data => ({
  type: ContentActionTypes.FETCH_CONTENT_SUCCESS,
  payload: data
});

export const fetchContentFailure = errorMessage => ({
  type: ContentActionTypes.FETCH_CONTENT_FAILURE,
  payload: errorMessage
});


/*

export const fetchContentStartAsync = () => async dispatch => {
  try {
    dispatch(fetchContentStart());
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    dispatch(fetchContentSuccess(response.data));
  }catch(e){
    dispatch(fetchContentFailure(e.message));
  }
  
};
*/