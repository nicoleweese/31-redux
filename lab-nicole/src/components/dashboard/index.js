'use strict';

import React from 'react';
import {connect} from 'react-redux';

import {
  categoryCreate,
  categoryUpdate,
  categoryDelete
} from '../../action/category-actions.js';

import CategoryForm from '../categoryform';
import CategoryItem from '../categoryitem';

class DashboardContainer extends React.Component {
  render() {
    return(
      <main className='dashboard-container'>
        <h2>Restaurant Budget Tracker</h2>
        <CategoryForm
          buttonText='create a category'
          onComplete={this.props.categoryCreate}
          />
          <ul>
          {this.props.categories.map(item => 
            <CategoryItem key={item.id} item={item}  />
          )}
          </ul>
      </main>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    categories: state
  }
}

const mapDispatchToProps = (dispatch, getState) => {
  return {
    categoryCreate: (category) => dispatch(categoryCreate(category)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer);