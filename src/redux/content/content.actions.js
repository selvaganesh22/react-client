import ContentActionTypes from './content.types';
import axios from 'axios';

export const fetchContentStart = () => ({
  type: ContentActionTypes.FETCH_CONTENT_START
});

export const fetchContentSuccess = content => ({
  type: ContentActionTypes.FETCH_CONTENT_SUCCESS,
  payload: content
});

export const fetchContentFailure = errorMessage => ({
  type: ContentActionTypes.FETCH_CONTENT_FAILURE,
  payload: errorMessage
});


/*
export const fetchContentStartAsync = () => {
  return dispatch => {
    dispatch(fetchContentStart());
    try {
      axios.get('/data.json').then((response) => {
        const data = {
          list: []
        };
        data.list = response.data;
        dispatch(fetchContentSuccess(data));
      });
    } catch (err) {
      console.error(err);
      dispatch(fetchContentFailure(err.message))
    }
  }
};*/