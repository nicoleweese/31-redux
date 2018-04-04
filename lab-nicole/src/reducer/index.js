'use strict';

import {combineReducers} from 'redux';
import expenses from './expense.js';
import categories from './category.js';

export default combineReducers({
  expenses,
  categories
})