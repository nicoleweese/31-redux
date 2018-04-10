'use strict';

import React from 'react';

class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      cost: null,
      categoryId: this.props.category.id,
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    let {name, value} = e.target;
    this.setState(state => {
      return {...state, [name] : value}
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log('::::handleSubmit state', this.state);
    console.log(':::this.props.category', this.props.category);
    this.props.onComplete(this.state);
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
        <input 
          type='number'
          name='cost'
          placeholder='cost'
          value={this.state.value}
          onChange={this.handleChange}
        />
        <button type='submit'>{this.props.buttonText}</button>
      </form>
    )
  }
}

export default ExpenseForm;