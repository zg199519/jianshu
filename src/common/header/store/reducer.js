import * as actionTypes from './actionTypes'
import { fromJS } from 'immutable'
const defaultState = fromJS({
  focused: false,
  mouseIn: false,
  list: [],
  page: 1,
  totalPage: 1
})

export default ( state = defaultState, action  ) => {

  if (action.type === actionTypes.search_focus) {
    // immutable set 方法会结合之前immuttable 的值 和设置的值返回一个全新的对象
    return state.set('focused', true)
  }

  if (action.type === actionTypes.search_blur) {
    return state.set('focused', false)
  }

  if (action.type === actionTypes.set_list) {
    return state.set('list', action.data).set('totalPage', action.totalPage)
  }

  if (action.type === actionTypes.mouse_enter) {
    return state.set('mouseIn', true)
  }

  if (action.type === actionTypes.mouse_leave) {
    return state.set('mouseIn', false)
  }

  if (action.type === actionTypes.change_page) {
    return state.set('page', action.page)
  }
  
  
  return state
}