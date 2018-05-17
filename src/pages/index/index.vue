<template>
	<div class="index">

		<header>
			<span>牧天优选</span>
		</header>

		<div id="content">
			
			<!--左边导航-->
			<nav>
				<ul>
					<li>
						<div class="fImg"></div>
						<span>用户管理</span>
					</li>
					<li>
						<div class="fImg"></div>
						<span>会员业绩表</span>
					</li>
					<li>
						<div class="fImg"></div>
						<span>商品管理</span>
					</li>
					<li>
						<div class="fImg"></div>
						<span>商品评论</span>
					</li>
					<li>
						<div class="fImg"></div>
						<span>商城资讯</span>
					</li>
					<li>
						<div class="fImg"></div>
						<span>系统设置</span>
					</li>
				</ul>

			</nav>

			<!--右边主题-->
			<div class="main">
				
				<router-view/>
				
			</div>
			
			
		</div>

		

	</div>
</template>



<script>
	export {default} from './indexCtr'
</script>


<style scoped>
	.index {
		height: 100%;
	}
	/*头部*/
	
	header {
		background-color: #4768f3;
		height: 60px;
		width: 100%;
		line-height: 60px;
	}
	
	header span {
		color: #FFFFFF;
		font-size: 26px;
		margin-left: 50px;
	}
	
	#content{
		height: calc(100% - 60px);
	}
	
	/*=====左边导航=======*/
	
	nav {
		float: left;
		width: 150px;
		height:100%;
		background-color: #022e55;
		text-align: center;
		color: #FFFFFF;
	}
	
	nav ul {
		height: 100%;
	}
	
	nav li {
		width: 100%;
		height: 16.6%;
		font-size: 18px;
		float: left;
		cursor: pointer;
	}
	
	nav li span {
		display: block;
		margin-top: 10px;
	}
	
	.fImg {
		width: 50px;
		height: 50px;
		margin: 0 auto;
		border: 1px solid #FFFFFF;
		margin-top: 15px;
	}
	
	nav li:hover {
		background-color: #1275ca;
	}
	
	/*======右边主题=======*/
	.main{
		float: right;
		width: calc(100% - 170px);
		height: calc(100% - 20px);
		padding: 10px;
		background-color: #eaeef2;
	}
</style>