'use strict';

import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './../expenseform/index.js';

class ExpenseItem extends React.Component {
  render() {
    let { expense, category } = this.props;
    return(
      <ul>
        {expense.map(expense => console.log(expense))}
        {expense.map(_expense => 
          <li key={_expense.id}>{_expense.name}
          <p>{_expense.cost}</p>
          </li>
        )}
      </ul>

    )
  }
}

export default ExpenseItem;