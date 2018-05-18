<template>
	<div class="manage">
		<!--商品管理-->
		<nav class="nav">
			<div class="topBar">
				<div @click="linkTo(0)" :class="{ 'active' : activeIndex == 0}">商品分类</div>
				<div @click="linkTo(1)" :class="{ 'active' : activeIndex == 1}">添加商品</div>
				<div @click="linkTo(2)" :class="{ 'active' : activeIndex == 2}">商品列表</div>
			</div>
		</nav>
		<!-- 内容区域 -->
		<div class="container">
			<router-view/>
		</div>
	</div>
</template>

<script>
	export {
		default
	}
	from './manageCtr'
</script>

<style scoped>
	/*头部杨思*/
	
	.manage {
		height: 100%;
	}
	
	.nav {
		width: 100%;
		height: 80px;
		background-color: #fff;
		padding-top: 1px;
	}
	
	.topBar {
		display: flex;
		display: -webkit-flex;
		width: 500px;
		height: 35px;
		margin: 22px auto;
		border-radius: 20px;
		color: #0366e8;
		overflow: hidden;
		border: 1px solid #ddd;
	}
	
	.topBar div {
		flex: 1;
		text-align: center;
		line-height: 35px;
		cursor: pointer;
		user-select: none;
	}
	
	.topBar div:first-child {
		border-right: 1px solid #ddd;
		box-sizing: border-box;
	}
	.topBar div:last-child {
		border-left: 1px solid #ddd;
		box-sizing: border-box;
	}
	.active {
		background-color: #0366e8;
		color: #fff;
	}
	
	.container {
		width: 100%;
		height: calc(100% - 90px);
		margin-top: 10px;
	}
</style>