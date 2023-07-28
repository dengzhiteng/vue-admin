import httpInstance from '@/utils/http'

// 获取banner
export function getBannerAPI (params = {}) {
  const { distributionSite = '1' } = params
  return httpInstance.get('/home/banner', {
    params: {
      distributionSite
    }
  })
}
