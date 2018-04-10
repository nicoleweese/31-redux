'use strict';

import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './../expenseform/index.js';
import { expenseUpdate, expenseDelete } from '../../action/expense-actions.js';

class ExpenseItem extends React.Component {
  render() {
    let { expense, category } = this.props;
    return(
      <ul>
        {expense.map(_expense => 
          <li key={_expense.id}>{_expense.name}
          <p>Cost: {_expense.cost}</p>
          <ExpenseForm onComplete={this.props.expenseUpdate} expense={this.props.expense} category={this.props.category} buttonText='Update' />
          <button onClick={() => this.props.expenseDelete(_expense)}>delete expense</button>
          </li>
        )}
      </ul>
    )
  }
}

let mapDispatchToProps = dispatch => ({
  expenseUpdate: (expense) => dispatch(expenseUpdate(expense)),
  expenseDelete: (expense) => dispatch(expenseDelete(expense)),
})

export default connect(null, mapDispatchToProps)(ExpenseItem);