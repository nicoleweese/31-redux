'use strict';

const validateExpense = store => next => action => {
  const isExpense = action.type && action.type.startsWith('EXPENSE');

  if (isExpense) {
    try {
      const expense = action.payload;
      const notValid = !expense.id || !expense.content || !expense.categoryId;

      if(notValid) {
        throw new Error('VALIDATION ERROR: expense must include id, content, and category ID');
      } else {
        return next(action);
      }
    } catch (err) {
      return next(action);
    } 
  } else {
    return next(action);
  }
}

export default validateExpense;