import React, { Component } from 'react'
import { connect } from 'react-redux'
import { CSSTransition } from 'react-transition-group'
import  { actionCreators } from './store'
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  Addition,
  Button,
  SearchWrapper,
  SearchInfo,
  SearchInfoTitle,
  SearchInfoSwitch,
  SearchInfoItem
} from './style'

class Header extends Component {

  getListArea () {
    const { focused, list, page, totalPage, mouseIn, handleMouseEnter, handleMouseLeave, handleChangePage } = this.props
    const jsList = list.toJS();
    const pageList = []
    for (let i = (page-1) * 10; i < page * 10; i++) {
      if(jsList[i]){
        pageList.push(
          <SearchInfoItem key={jsList[i]+i}>{jsList[i]}</SearchInfoItem>
        )
      }
    }


    if(focused || mouseIn) {
      return (
        <SearchInfo 
          onMouseEnter={ ()=>{ handleMouseEnter() }}
          onMouseLeave={ ()=>{ handleMouseLeave() }}
        >
          <SearchInfoTitle>
            热门搜索  
            <SearchInfoSwitch onClick={ () => { handleChangePage(page, totalPage)}  }>换一批</SearchInfoSwitch>
          </SearchInfoTitle>
          <div>
            { pageList }
          </div>
        </SearchInfo>
      )
    } else{
      return null
    }
  }

  render() {
    const { focused, list, handleInputFocus, handleInputBlur } = this.props
    return(
      <HeaderWrapper>
        <Logo/>
        <Nav>
          <NavItem className="left active">首页</NavItem>
          <NavItem className="left">下载App</NavItem>
          <NavItem className="right">登录</NavItem>
          <NavItem className="right"><span className="iconfont">&#xe636;</span></NavItem>
          <SearchWrapper>
            <CSSTransition timeout={200} in={focused} classNames="slide">
              <NavSearch 
                className={focused ? 'focused' :'' } 
                onFocus={ () => { handleInputFocus(list) } } 
                onBlur={ () => { handleInputBlur() } }
              />
            </CSSTransition>
            <span className={focused ? 'focused iconfont' :'iconfont' }>&#xe633;</span>
            { this.getListArea() }
          </SearchWrapper>
        </Nav>
        <Addition>
          <Button className="writting"><span className="iconfont">&#xe601;</span> 写文章</Button>
          <Button className="reg">注册</Button>
        </Addition>
      </HeaderWrapper>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    focused: state.getIn(['header', 'focused']), // .get('header').get('focused')
    list: state.getIn(['header', 'list']),
    page: state.getIn(['header', 'page']),
    mouseIn: state.getIn(['header', 'mouseIn']),
    totalPage: state.getIn(['header', 'totalPage'])
  }
}

const mapDispathToProps = (dispatch) => {
  return {
    handleInputFocus(list) {
      dispatch(actionCreators.searchFocus())
      if(list.size === 0){
        dispatch(actionCreators.getList())
      }
    },
    handleInputBlur() {
      const action = actionCreators.searchBlur()
      dispatch(action)
    },
    handleMouseEnter() {
      dispatch(actionCreators.mouseEnter())
    },
    handleMouseLeave() {
      dispatch(actionCreators.mouseLeave())
    },
    handleChangePage(page, totalPage) {
      if(page < totalPage){
        dispatch(actionCreators.changePage(++page))
      }else{
        dispatch(actionCreators.changePage(1))
      }
      
    }


  }
}

export default connect(mapStateToProps, mapDispathToProps)(Header)