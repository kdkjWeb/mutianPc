import Vue from 'vue'
import Axios from 'axios'

let axiosConfig = Axios.create({
    baseURL: 'http://192.168.20.3:8080/',  //后台公共借口地址
    timeout: '10000',   //请求过期时间
    withCredentials: true  //是否允许跨域
})

export default axiosConfig;