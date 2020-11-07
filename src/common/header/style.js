import styled from 'styled-components'
import logoPic from '../../statics/logo.png'
const HeaderWrapper = styled.div `
  position: relative;
  height: 58px;
  border-bottom: 1px solid #f0f0f0;
`
const Logo = styled.a.attrs({
  href:''
}) `
  position: absolute;
  top:5px;
  left:0;
  display: block;
  width:80px;
  height: 46px;
  background: url(${logoPic});
  background-size: cover;
`

const Nav = styled.div `
  width: 960px;
  padding-right: 70px;
  margin: auto;
  height: 100%;
  box-sizing: border-box;
`
const NavItem = styled.div `
  line-height: 56px;
  padding: 0 15px;
  color: #333;
  font-size: 17px;
  &.left {
    float: left;
  }
  &.right {
    float: right;
    color: #969696;
  }
  &.active{
    color: #ea6f5a;
  }
`

const SearchWrapper = styled.div`
  position: relative;
  float: left;
  .iconfont{
    position: absolute;
    right: 5px;
    bottom: 5px;
    width: 30px;
    border-radius: 15px;
    line-height: 30px;
    font-size:16px;
    color:#969696;
    text-align: center;
    &.focused {
      background: #e7e7e7;
      color: #f9f9f9;
    }
  }
`

const NavSearch = styled.input.attrs({
  placeholder: '搜索'
}) `
  width: 160px;
  height: 38px;
  margin-top: 9px;
  border: none;
  outline: none;
  padding: 0 20px;
  margin-left: 20px;
  color: inherit;
  font-size: 14px;
  border-radius: 19px;
  background-color: #f2f2f2;
  &::placeholder {
    color: #999;
  }
  &.focused {
    width: 240px;
  }
  &.slide-enter{
    transition: all .2s ease-out;
  }
  &.slide-enter-active{
    width: 240px;
  }
  &.slide-exit{
    transition: all .2s ease-out;
  }
  &.slide-exit-active{
    width: 160px;
  }
`

const Addition = styled.div`
  position: absolute;
  right:0;
  top:0;
  height:56px;
`

const Button = styled.div`
  float: right;
  margin-top: 9px;
  line-height: 38px;
  border-radius: 19px;
  margin-right: 20px;
  padding: 0 20px;
  border: 1px solid #ec6149;
  &.reg{
    color: #ec7259;
  }
  &.writting{
    color: #fff;
    background-color:#ec7259;
  }
`

const SearchInfo = styled.div`
  position: absolute;
  left: 0;
  top: 58px;
  min-height: 56px;
  width: 240px;
  padding: 0 20px;
  box-shadow: 0 0 8px rgba(0, 0, 0, .2);
`

const SearchInfoTitle = styled.div`
  margin-top: 20px;
  margin-bottom: 15px;
  line-height: 20px;
  font-size: 14px;
  color: #969696;
`

const SearchInfoSwitch = styled.span`
  float: right;
  float-size: 14px;
  cursor: pointer;
`

const SearchInfoItem = styled.a`
  display: block;
  float: left;
  padding:0 5px;
  line-height: 20px;
  border: 1px solid #ddd;
  float-size: 12px;
  color: #787878;
  margin-right:10px;
  border-radius: 3px;
  margin-bottom:15px;
`

export {  HeaderWrapper, 
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
        }