import Mock from "mockjs"

// 首页轮播
const banner = Mock.mock({
  "list|5": [
    {
      imgUrl: "@image",
      "id|+1": 1
    }
  ]
})
const apiData = [
  {
    url: "/home/banner",
    response: () => {
      return {
        code: "000000",
        msg: "success",
        data: banner.list
      }
    }
  }
]

export default apiData
