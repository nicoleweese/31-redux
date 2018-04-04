'use strict';

import React from 'react';
import {store} from '../app/index.js';

class CategoryForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: props.category ? props.category.id : undefined,
      title: props.category ? props.category.title : '',
      budget: props.category ? props.category.budget : ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    let {name, value} = e.target;
    this.setState({ [name]: value })
  }

  handleSubmit(e) {
    e.preventDefault();    
    this.props.onComplete({...this.state});
    if (this.props.wantToToggle) {
      this.props.toggle({...this.state})
    };
  }

  render() {
    return(
      <form className='category-form' onSubmit={this.handleSubmit}>
        <input name='title'
          type='text'
          placeholder='title'
          value={this.state.title}
          onChange={this.handleChange} />
        <input name='budget'
          type='number'
          placeholder='amount'
          value={this.state.budget}
          onChange={this.handleChange} />

        <button type='submit'>{this.props.buttonText}</button>
      </form>
    )
  }
}

export default CategoryForm;