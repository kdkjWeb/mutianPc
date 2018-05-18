//整个项目的路由文件

const index = () => import('@/pages/index/index'), //首页
	  login = () => import('@/pages/login/login'),  //登录
	  management = () => import('@/pages/management/management'),  //用户管理
	  systemsetting = () =>import('@/pages/systemsetting/systemsetting'),   //系统设置
	  basicparameters = () => import('@/pages/systemsetting/basicparameters/basicparameters'),   //系统设置的基本参数设置
	  userlevel = () =>import('@/pages/systemsetting/userlevel/userlevel')    //用户等级

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
				},{
					path: '/systemsetting',
					name: 'systemsetting',
					component: systemsetting,
					redirect: '/basicparameters',
					children: [
						{
							path: '/basicparameters',
							name: 'basicparameters',
							component: basicparameters
						},{
							path: '/userlevel',
							name: 'userlevel',
							component: userlevel
						}
					]
				}
        	]
        }
    ]
}

