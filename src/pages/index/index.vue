<template>
	<div class="index">
		
		<header>
			
		</header>
		
		<nav>
			<ul>
				<li>用户管理</li>
				<li>会员业绩表</li>
				<li>商品管理</li>
				<li>商品评论</li>
				<li>商城资讯</li>
				<li>系统设置</li>
			</ul>
			
		</nav>
	</div>
</template>

<script>
	export {default} from './indexCtr'
</script>

<style scoped>
	.index{
		height: 100%;
	}
	header{
		position: fixed;
		top: 0;
		background-color: #4768f3;
		height: 70px;
		width: 100%;
	}
	nav{
		width: 160px;
		height: 100%;
		background-color: #022e55;
	}

</style>