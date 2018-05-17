//整个项目的路由文件
const login = ()=>import('@/pages/login/login')  //登录



export default{
    routes: [
        {
            path: '/',
            name: 'login',
            component: login
        }
    ]
}