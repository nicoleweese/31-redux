'use strict';

import React from 'react';
import {connect} from 'react-redux';
import CategoryForm from '../categoryform'

import {categoryDelete, categoryUpdate} from '../../action/category-actions.js';

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
      <li key={id}>
        <h3>Category: {title}</h3>
        <p>Budget: ${budget}</p>
        <button onClick={() => this.props.categoryDelete(this.props.item)}>delete category</button>
        {this.state.editing ?
          <CategoryForm buttonText='update' category={this.props.item} toggle={this.toggleEdit} wantToToggle={true} onComplete={this.props.categoryUpdate}/>
          : <button onClick={() => this.toggleEdit()}>{updateButtonText}</button>
        }

      </li>
    )
  }
}

let mapDispatchToProps = dispatch => ({
  categoryDelete: (category) => dispatch(categoryDelete(category)),
  categoryUpdate: (category) => dispatch(categoryUpdate(category)),
});

export default connect(null, mapDispatchToProps)(CategoryItem);