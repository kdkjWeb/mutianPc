<template>
	<div class="goodslist">
		<!--商品管理-->

		<div class="header">
			<input type="text" v-model="seachInput" id="" value="" placeholder="可按商品名称查找" />

			<div class="search" @click="search">
				<i class="el-icon-search"></i>
				<span>查询</span>
			</div>

			<input type="button" value="推荐商品" class="changeNum" @click="recommGoods"/>
			<input type="button" value="秒杀商品" @click="KillGoods"/>
			<input type="button" value="下架商品" @click="downGoods"/>
			<input type="button" value="修改" @click="changeGoods"/>
			<input type="button" value="删除" @click="delGoods"/>

		</div>

	
		<div class="content">
			
			<!--==表格====-->
			<div class="Table">
				
				<el-table ref="multipleTable"  :height="h" :data="tableData3" tooltip-effect="dark" border style="width: 100%" @selection-change="handleSelectionChange">
					<el-table-column type="selection" width="55"></el-table-column>
					
					<el-table-column label-class-name="mytableTit" prop="name" label="商品名称" width="125" ></el-table-column>
					<el-table-column label-class-name="mytableTit" prop="typename" label="分类" width="100" ></el-table-column>
					<el-table-column label-class-name="mytableTit" prop="inventory" label="库存数量" width="80" ></el-table-column>
					<el-table-column label-class-name="mytableTit" prop="status" label="上/下架" width="80" ></el-table-column>
					<el-table-column label-class-name="mytableTit" prop="price" label="单价" width="90" ></el-table-column>
					<el-table-column label-class-name="mytableTit" prop="unit" label="单位" width="50" ></el-table-column>
					<el-table-column label-class-name="mytableTit" prop="recommend" label="是否推荐" width="80"  :formatter="isRecom"></el-table-column>
					<el-table-column label-class-name="mytableTit" prop="rebeginTime" label="推荐开始时间" width="140" ></el-table-column>
					<el-table-column label-class-name="mytableTit" prop="reendTime" label="推荐结束时间" width="140" ></el-table-column>
					<el-table-column label-class-name="mytableTit" prop="ifSpike" label="是否秒杀" width="80" :formatter="isKill"></el-table-column>
					<el-table-column label-class-name="mytableTit" prop="startTime" label="秒杀开始时间" width="140" ></el-table-column>
					<el-table-column label-class-name="mytableTit" prop="endTime" label="秒杀结束时间" width="140" ></el-table-column>
					<el-table-column label-class-name="mytableTit" prop="picture" label="有无图片" width="80" :formatter="isImg"></el-table-column>
				</el-table>
	
				<div class="foot">
				<!--<div class="footLeft">
					注册用户数：5555
				</div>-->
				<div class="footNum">
						<el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" 
							:current-page='1' :current-page.sync="currentPage3" 
							:page-sizes="pageSizeNum" layout="sizes,prev, pager, next, jumper" 
							:total="total">
						</el-pagination>
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
	from './goodslistCtr'
</script>

<style scoped>
	.goodslist {
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
		padding: 0 20px;
		cursor: pointer;
		margin-left: 30px;
	}
	
	.changeNum {
		margin-left: 10%!important;
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
	
	/*===表格头部样式*/
	.mytableTit{
		color: #4768f3;
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