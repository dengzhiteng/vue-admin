import Mock from "mockjs"

// 商品分类
const goodsCategory = Mock.mock({
  "list|4": [{}]
})

// 商品
const goods = Mock.mock({
  "list|4": [
    {
      goodsName: "",
      id: "",
      costPrice: 2,
      salePrice: 10,
      producter: ""
    }
  ]
})

const apiData = [
  {
    url: "/goods/category",
    response: () => {
      return {
        code: "000000",
        msg: "success",
        result: goodsCategory.list
      }
    }
  },
  {
    url: "/api/goodsList",
    response: () => {
      return {
        code: "000000",
        msg: "success",
        result: goods.list
      }
    }
  }
]

export default apiData
