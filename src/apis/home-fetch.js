import httpInstance from '@/utils/fetch'
const baseURL = 'http://pcapi-xiaotuxian-front-devtest.itheima.net'

// 获取banner
export function getBannerAPI (params = {}) {
  // 默认为1 商品为2
  const { distributionSite = '1' } = params
  return httpInstance.get(baseURL + '/home/banner', { distributionSite })
}

