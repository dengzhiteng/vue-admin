import Mock from 'mockjs'
// 用户信息
const userInfo = Mock.mock({
  name: '@cname',
  'id|+1': 1,
  "age|0-120": 1,
  "brithday": '@date',
  "avatarUrl": '@image',
  "address": '@county(true)'
})

// 首页轮播
const banner = Mock.mock({
  "list|4": [{
    "imgUrl": "@image",
    'id|+1': 1,
  }]
})

// 商品分类
const goodsCategory = Mock.mock({
  "list|4": [{
  }]
})

// 商品
const goods = Mock.mock({
  "list|4": [{
    goodsName: '',
    id: '',
    costPrice: 2,
    salePrice: 10,
    producter: ''
  }]
})

const apiData = [
  {
    url: '/api/userInfo',
    response: () => {
      return {
        code: '000000',
        msg: 'success',
        data: userInfo
      }
    }
  },
  {
    url: '/home/banner',
    response: () => {
      return {
        code: '000000',
        msg: 'success',
        result: banner.list
      }
    }
  },
  {
    url: '/goods/category',
    response: () => {
      return {
        code: '000000',
        msg: 'success',
        result: goodsCategory.list
      }
    }
  },
  {
    url: '/api/goodsList',
    response: () => {
      return {
        code: '000000',
        msg: 'success',
        result: goods.list
      }
    }
  }
]


export default apiData