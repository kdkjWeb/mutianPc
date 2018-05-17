<template>
	<div class="management"><!--用户管理-->
		
		<div class="header">
			<input type="text" name="" id="" value="" placeholder="可按电话号码，昵称 查找"/>
			
			<div class="search">
				<i class="el-icon-search"></i>
				<span>查询</span>
			</div>
			
			<input type="button" value="修改用户等级"/>
			<input type="button" value="修改密码"/>
			<input type="button" value="封号"/>
			<input type="button" value="解封"/>
			<input type="button" value="删除"/>
			
		</div>
		
		
	</div>
</template>

<script>
	export {default} from './managementCtr'
</script>

<style scoped>
	.management{
		width: 100%;
		height: 100%;
	}
	.header{
		height: 80px;
		line-height: 80px;
		background-color: #FFFFFF;
	}
	.header input[type="text"]{
		width: 270px;
		height: 35px;
		border-radius: 20px;
		text-indent: 15px;
		border: 1px solid #b9b9b9;
	}
	.search{
		display: inline-block;
		height: 35px;
		line-height: 35px;
		width: 120px;
		border-radius: 20px;
		background-color: #0085e2;
		color: #FFFFFF;
		text-align: center;
		font-size: 18px;
		cursor: pointer;
	}
	.search i{
		margin-right: 10px;
	}
	.header input[type="button"]{
		height: 35px;
		border-radius: 20px;
		background-color: #0085e2;
		outline: none;
		text-align: center;
		color: #FFFFFF;
		padding: 0 20px;
		cursor: pointer;
	}
</style>