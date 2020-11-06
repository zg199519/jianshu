import React, { Component } from 'react'
import { CSSTransition } from 'react-transition-group'
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  Addition,
  Button,
  SearchWrapper
} from './style'
class Header extends Component{
  constructor(props){
    super(props)
    this.state = {
      focused: false
    }

    this.handleInputFocus = this.handleInputFocus.bind(this)
  }

  handleInputFocus(code) {
    this.setState(() => {
      return {
        focused: code
      }
    })
  }

  render() {
    return(
      <HeaderWrapper>
        <Logo/>
        <Nav>
          <NavItem className="left active">首页</NavItem>
          <NavItem className="left">下载App</NavItem>
          <NavItem className="right">登录</NavItem>
          <NavItem className="right"><span className="iconfont">&#xe636;</span></NavItem>
          <SearchWrapper>
            <CSSTransition timeout={200} in={this.state.focused} classNames="slide">
            <NavSearch 
              className={this.state.focused ? 'focused' :'' } 
              onFocus={ () => { this.handleInputFocus(true) } } 
              onBlur={ () => { this.handleInputFocus(false) } }
            />
            </CSSTransition>
            <span className={this.state.focused ? 'focused iconfont' :'iconfont' }>&#xe633;</span>
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
export default Header