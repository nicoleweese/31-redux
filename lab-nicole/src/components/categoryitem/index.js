'use strict';

import React from 'react';
import {connect} from 'react-redux';
import CategoryForm from '../categoryform';
import ExpenseForm from '../expenseform';
import ExpenseItem from '../expenseitem';
import {categoryDelete, categoryUpdate} from '../../action/category-actions.js';
import {expenseCreate} from '../../action/expense-actions.js';

class CategoryItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      editing: false
    }

    this.toggleEdit = this.toggleEdit.bind(this);
  }

  toggleEdit() {
    this.setState( state => {
      return {editing: !state.editing};
    })
  }

  render() {
    let {id, title, budget} = this.props.item;
    let updateButtonText;
    this.state.editing ? 
      updateButtonText = 'hide' :
      updateButtonText = 'update'
    return(
      <li>
        <h3>Category: {title}</h3>
        <button onClick={() => this.props.categoryDelete(this.props.item)}>delete category</button>
        <p>Budget: ${budget}</p>
        {this.state.editing ?
          <CategoryForm buttonText='update' category={this.props.item} toggle={this.toggleEdit} wantToToggle={true} onComplete={this.props.categoryUpdate}/>
          : <button onClick={() => this.toggleEdit()}>{updateButtonText}</button>
        }
        <ExpenseForm onComplete={this.props.expenseCreate} category={this.props.item} buttonText='Add'/>
        <ExpenseItem key={id} expense={this.props.expenses[this.props.item.id]} category={this.props.item}/>
      </li>
    )
  }
}

let mapDispatchToProps = dispatch => ({
  categoryDelete: (category) => dispatch(categoryDelete(category)),
  categoryUpdate: (category) => dispatch(categoryUpdate(category)),
  expenseCreate: (expense) => dispatch(expenseCreate(expense)),
});

export default connect(null, mapDispatchToProps)(CategoryItem);