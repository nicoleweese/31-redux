'use strict';

import uuid from 'uuid';

export const expenseCreate = (card) => ({
  type: 'EXPENSE_CREATE',
  payload: {...card, id: uuid(), timestamp: new Date()}
})