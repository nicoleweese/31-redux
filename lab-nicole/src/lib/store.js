'use strict';

import { createStore, applyMiddleware } from 'redux';
import reducer from '../reducer';
import reporter from './redux-reporter';
import validateCategory from './validate-category';
import validateExpense from './validate-expense';

export default () => createStore(reducer, applyMiddleware(reporter, validateCategory, validateExpense));