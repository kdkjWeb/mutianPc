//整个项目的路由文件

const index = () => import('@/pages/index/index'), //首页
	  login = () => import('@/pages/login/login'),  //登录
	  management = () => import('@/pages/management/management')  //用户管理



export default{
    routes: [
        {
            path: '/',
            name: 'login',
            component: login

        },{
        	path: '/index',
        	name: 'index',
        	component: index,
        	redirect: 'management',
        	children: [
        		{
				    path: '/management',
				  	name: 'management',
				    component: management
				}
        	]
        }
    ]
}

