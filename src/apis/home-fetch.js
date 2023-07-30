import httpInstance from '@/utils/fetch'
const baseURL = import.meta.env.VITE_APP_BASE_URL

// 获取banner
export function getBannerAPI (params = {}) {
  // 默认为1 商品为2
  const { distributionSite = '1' } = params
  return httpInstance.get(baseURL + '/home/banner', { distributionSite })
}

