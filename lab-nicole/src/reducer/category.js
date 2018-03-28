'use strict';

let initialState = [];

export default (state = initialState, action) => {
  let { type, payload } = action;

  switch (type) {
    case 'CATEGORY_CREATE':
      payload.editing = false;
      return [...state, payload]
    case 'CATEGORY_UPDATE':
      console.log('update category');
      return state.map(category =>
        category.id === payload.id ? payload : category)
    case 'CATEGORY_TOGGLE':
      return state.map(category => 
        category.id === payload.id ? 
          payload.editing === true ?
            {...payload, editing: false} :
            {...payload, editing: true}
          : category)
    case 'CATEGORY_DELETE':
      return state.filter(category => category.id !== payload.id)
    case 'CATEGORY_RESET':
      return initialState
    default: 
      return state  
  }
}