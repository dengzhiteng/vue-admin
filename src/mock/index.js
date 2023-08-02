import mockJS from 'mockjs'
const userList = mockJS.mock({
  "data|100": [{
    name: '@cname',
    'id|+1': 1
  }]
})

const data = [
  {
    url: 'api/user',
    response: () => {
      return {
        code: 200,
        msg: 'success',
        data: userList
      }
    }
  }
]

export default data