import { ActionTypes } from '../constants/action-types'

export const productReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case ActionTypes.SET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      }
    default:
      return state
  }
}
export const selectProductReducer = (state = {}, action) => {
  switch (action.type) {
    case ActionTypes.SELECT_PRODUCT:
      return {
        ...state,
        ...action.payload,
      }
    case ActionTypes.REMOVE_SELECTED_PRODUCT:
      return {}
    default:
      return state
  }
}
