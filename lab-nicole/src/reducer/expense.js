'use strict';

let initialState = {};

export default (state=initialState, action) => {
  let {type, payload} = action;

  switch(type) {
    case 'CATEGORY_CREATE':
      return {...state, [payload.id] : []}
    case 'CATEGORY_DELETE':
      return {...state, [payload.id] : undefined} 
    case 'EXPENSE_CREATE':
      var {categoryId} = payload;
      var categoryExpenses = state[categoryId];
      return {...state, [categoryId]: [...categoryExpenses, payload]}
    case 'EXPENSE_UPDATE':
      var {categoryId} = payload;
      var categoryExpenses = state[categoryId];
      return {
        ...state,
        [categoryId]: categoryExpenses.map(expense => expense.categoryId === payload.categoryId ? payload : expense),
      }
    case 'EXPENSE_DELETE':
      var {categoryId, id} = payload;
      var categoryExpenses = state[categoryId];
      return {
        ...state,
        [categoryId]: categoryExpenses.filter(expense => expense.id !== id),
      }
    default:
      return state;
  }
}