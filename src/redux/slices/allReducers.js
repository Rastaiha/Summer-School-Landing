import { combineReducers } from 'redux';

import { articlesReducer } from './articles';
import { notificationReducer } from './notifications';
import { translatorReducer } from './translator';

const allReducers = combineReducers({
  articles: articlesReducer,
  notifications: notificationReducer,
  Intl: translatorReducer,
});

export default allReducers;
