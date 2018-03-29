'use strict';

import React from 'react';

export default class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = props.expense ? {...props.expense} : {name: '', price: null, categoryId: props.categoryId},

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ content: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onComplete(this.state);
    if (!this.props.card) {
      this.setState({ content: '' })
    }
  }

  render() {
    return(
      <form className='expense-form' onSubmit={this.handleSubmit}>
        <input 
          type='text'
          name='name'
          placeholder='name'
          value={this.state.name}
          onChange={this.handleChange}
        />
      </form>
    )
  }
}