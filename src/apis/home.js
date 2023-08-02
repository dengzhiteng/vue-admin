import axios from '@/utils/axios'

// 获取banner
export function getBannerAPI (params = {}) {
  const { distributionSite = '1' } = params
  return axios.get('/home/banner', {
    params: {
      distributionSite
    }
  })
}

export function getUsers () {
  return axios.get('/api/user')
}
