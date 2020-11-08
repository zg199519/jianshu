import { fromJS } from 'immutable'
const defaultState = fromJS({
  topicList: [
    {
      id: 1,
      title: '社会热点',
      imgUrl: 'https://pic3.zhimg.com/50/v2-2e0bcb1578a3375efbedb4672707ab8c_400x224.jpg'
    },
    {
      id: 2,
      title: '社会热点',
      imgUrl: 'https://pic3.zhimg.com/50/v2-2e0bcb1578a3375efbedb4672707ab8c_400x224.jpg'
    },
    {
      id: 3,
      title: '社会热点',
      imgUrl: 'https://pic3.zhimg.com/50/v2-2e0bcb1578a3375efbedb4672707ab8c_400x224.jpg'
    },
    {
      id: 4,
      title: '社会热点',
      imgUrl: 'https://pic3.zhimg.com/50/v2-2e0bcb1578a3375efbedb4672707ab8c_400x224.jpg'
    }
  ]
})

export default ( state = defaultState, action  ) => {
  return state
}