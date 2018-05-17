//整个项目的路由文件

const index = () => import('@/pages/index/index');  //首页


export default{
    routes: [
        {
        	path: '/',
        	name: 'index',
        	component: index
        }
    ]
}