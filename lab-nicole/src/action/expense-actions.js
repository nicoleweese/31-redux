'use strict';

import uuid from 'uuid';

export const expenseCreate = (expense) => ({
  type: 'EXPENSE_CREATE',
  payload: {...expense, id: uuid(), timestamp: new Date()}
})