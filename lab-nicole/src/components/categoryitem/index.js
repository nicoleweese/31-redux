'use strict';

import React from 'react';
import {connect} from 'react-redux';
import CategoryForm from '../categoryform'

import {categoryDelete, categoryUpdate, categoryToggleEdit} from '../../action/category-actions.js';

class CategoryItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      editing: this.props.item.editing
    }

    this.toggleEdit = this.toggleEdit.bind(this);
  }
  

  toggleEdit() {
    this.state.editing ? this.state.editing = false : this.state.editing = true;
  }

  render() {
    let {id, title, budget} = this.props.item;
    let updateButtonText;
    this.state.editing ? 
      updateButtonText = 'hide' :
      updateButtonText = 'update'
    return(
      <li key={id}>
        <h3>Category: {title}</h3>
        <p>Budget: ${budget}</p>
        <button onClick={() => this.props.categoryDelete(this.props.item)}>delete category</button>
        {this.state.editing ?
          <CategoryForm buttonText='update' category={this.props.item} toggle={this.toggleEdit} onComplete={this.props.categoryUpdate}/>
          : null
        }

        <button onClick={() => {
          this.toggleEdit();
          return this.props.categoryToggleEdit(this.props.item)}}>{updateButtonText}</button>
      </li>
    )
  }
}


let mapDispatchToProps = dispatch => ({
  categoryDelete: (category) => dispatch(categoryDelete(category)),
  categoryUpdate: (category) => dispatch(categoryUpdate(category)),
  categoryToggleEdit: (category) => dispatch(categoryToggleEdit(category)),
});

export default connect(null, mapDispatchToProps)(CategoryItem);