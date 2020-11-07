import * as actionTypes from './actionTypes'
import { fromJS } from 'immutable'
import axios from 'axios'


const setList = (data) => {
  return {
    type: actionTypes.set_list,
    data: fromJS(data),
    totalPage: Math.ceil(data.length / 10)
  }
}

export const searchFocus = () => {
  return {
    type: actionTypes.search_focus
  }
}

export const searchBlur = () => {
  return {
    type: actionTypes.search_blur
  }
}

export const getList = () =>{
  return (dispatch) => {
    axios.get('/api/headerList.json').then(res=>{
      const data = res.data
      dispatch(setList(data.data))
    })
  }
}

export const mouseEnter = () => {
  return {
    type: actionTypes.mouse_enter
  }
}

export const mouseLeave = () => {
  return {
    type: actionTypes.mouse_leave
  }
}

export const changePage = (page) => {
  return {
    type: actionTypes.change_page,
    page
  }
}




