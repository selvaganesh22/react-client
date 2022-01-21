import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import contentReducer from './content/content.reducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['content']
};

const rootReducer = combineReducers({
  content: contentReducer
});

export default persistReducer(persistConfig, rootReducer);