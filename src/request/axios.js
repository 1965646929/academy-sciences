import axios from 'axios'
const service = axios.create(
  {
    baseURL:process.env.VUE_APP_BASE_API,
    timeout:5000
  }
)

//请求拦截器
service.interceptors.request.use(
  config=>{
    const token = localStorage.getItem('token')
    if(token) config.headers['Authorization'] = token
    return config
  },
  error=>{
    return Promise.reject(error)
  }
)

//响应拦截器
service.interceptors.response.use(
  response=>{
    return response.data
  },
  error=>{
    if(error.response){
      switch(error.response.status){
        case 401:
          //未授权去登录页面
          router.push('/login')
          break
        case 404:
          console.log('请求资源不存在')
          break
        default:
          console.log('请求失败',error.response.data)
      }
    }else if(error.request){
      //请求已发出但没收到响应
      console.log('请求超时或网络错误',error.request)
    }else{
      //其他错误
      console.log('请求配置错误',error.message)
    }
    return Promise.reject(error)
  }
)

export default service