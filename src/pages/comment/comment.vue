<template>
	<div class="comment">
		<!--商品评论-->

		<div class="header">
			<input type="text" name="" id="" value="" placeholder="可按电话号码，昵称 查找" />

			<div class="search">
				<i class="el-icon-search"></i>
				<span>查询</span>
			</div>

			<input type="button" value="新评论" />
			<input type="button" value="历史评论" />
			
			<input type="button" value="通过审核" class="pass"/>
			<input type="button" value="删除" />

		</div>

	
		<div class="content">
			
			<!--==表格====-->
			<div class="Table">
				
				<el-table ref="multipleTable"  :height="h" :data="tableData3" tooltip-effect="dark" border style="width: 100%" @selection-change="handleSelectionChange">
					<el-table-column type="selection" width="80"></el-table-column>
					<el-table-column prop="usercomment" label="评论" width="505"></el-table-column>
					<el-table-column prop="goods" label="相关商品" width="250"></el-table-column>
					<el-table-column prop="time" label="评论时间" width="250"></el-table-column>
					<el-table-column prop="people" label="评论人" width="150"></el-table-column>
					<el-table-column prop="state" label="审核状态" width="170"></el-table-column>
	
				</el-table>
	
				<div class="foot">
				<div class="footLeft">
					注册用户数：5555
				</div>
				<div class="footNum">
					<el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page.sync="currentPage3" :page-size="100" layout="sizes,prev, pager, next, jumper" :total="1000"></el-pagination>
				</div>
			</div>

			</div>
			
			<div class="Copyright">Copyright ©2018-2019     成都恺缔科技有限公司</div>
			
		</div>

	</div>
</template>

<script>
	export {
		default
	}
	from './commentCtr'
</script>

<style scoped>
	.comment {
		width: 100%;
		height: 100%;
	}
	
	.header {
		height: 80px;
		line-height: 80px;
		background-color: #FFFFFF;
	}
	
	.header input[type="text"] {
		/*/搜索输入框*/
		width: 270px;
		height: 35px;
		border-radius: 20px;
		text-indent: 15px;
		border: 1px solid #b9b9b9;
		margin-left: 30px;
	}
	
	.search {
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
		margin-left: 10px;
	}
	
	.search i {
		margin-right: 10px;
	}
	
	.header input[type="button"] {
		height: 35px;
		border-radius: 20px;
		background-color: #0085e2;
		outline: none;
		text-align: center;
		color: #FFFFFF;
		/*padding: 0 20px;*/
		cursor: pointer;
		margin-left: 30px;
		width: 100px;
	}
	
	.pass {
		margin-left: 30%!important;
	}
	/*============表格样式覆盖===========*/
	
	.content {
		padding: 10px;
		background-color: #FFFFFF;
		height: calc(100% - 100px);
		overflow: hidden;
	}
	.Table{
		height: calc(100% - 30px);
		border: 1px solid #c2c2c2;
		border-radius: 15px;
		overflow: hidden;
		position: relative;
	}
	.el-table--fit {
		height: calc(100% - 70px);
	}
	.cell{
		color: #4768f3 !important;
		font-size: 18px;
	}
	/*=====底部======*/
	.foot{
		padding: 30px 0;
		text-align: center;
		position: absolute;
		bottom: 0;
		width: 100%;
	}
	.foot div{
		display: inline-block;
		color: #7e7e7e;
	}
	.footNum{
		margin: 0 auto;
	}
	.footLeft{
		float: left;
		margin-left: 5%;
		line-height: 32px;
	}
	.Copyright{
		color: #a1a1a1;
		font-size: 14px;
		text-align: center;
		line-height: 30px;
	}

</style>