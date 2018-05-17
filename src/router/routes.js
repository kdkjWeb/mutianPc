//整个项目的路由文件

const index = () => import('@/pages/index/index'), //首页
		login = ()=>import('@/pages/login/login')  //登录




export default{
    routes: [
        {
            path: '/',
            name: 'login',
            component: login

        },{
        	path: '/index',
        	name: 'index',
        	component: index
        }
    ]
}