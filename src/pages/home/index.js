import React, { Component } from 'react'
import { HeaderWrapper, HomeLeft, HomeRight } from './style'
import Topic from './commponents/Topic'
import List from './commponents/List'
import Recommnd from './commponents/Recommnd'
import Writer from './commponents/Writer'

class Home extends Component {
  render () {
    return (
      <HeaderWrapper>
        <HomeLeft>
          <img className="banner-img" src="https://pic1.zhimg.com/v2-500533a35059de23f7daa4a2e8f0c107_1440w.jpg?source=172ae18b"/>
          <Topic/>
          <List/>
        </HomeLeft>
        <HomeRight>
          <Recommnd/>
          <Writer/>
        </HomeRight>
      </HeaderWrapper>
    )
  }
}

export default Home