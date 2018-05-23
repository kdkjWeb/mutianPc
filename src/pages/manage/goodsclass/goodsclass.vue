<template>
	<div class="goodsclass">
		<!--商品分类-->
		<div class="goodscontent">
			<div class="goodshead">
				<span>
					分类名称:
					<input type="text" class="infor" v-model="addinput"/>
				</span>

				<input type="button" value="增加" @click="addClass" />
				<input type="button" value="修改" @click="changeClass" />
				<input type="button" value="删除" @click="delClass" />
			</div>

			<!--======弹框========-->
			<el-dialog title="修改分类" :visible.sync="classLayer">
				<el-input v-model="newClass" :placeholder="newplace" type='text' maxlength='16' clearable style="width: 80%;"></el-input>
				<div slot="footer" class="dialog-footer">
					<el-button @click="classLayer = false">取 消</el-button>
					<el-button type="primary" @click="saveClass">确 定</el-button>
				</div>
			</el-dialog>
			<!--======弹框========-->

			<div class="table">
				<el-table ref="multipleTable" :height="h" :data="tableData3" tooltip-effect="dark" border style="width: 100%" @selection-change="handleSelectionChange">
					<el-table-column type="selection" width="95"></el-table-column>

					<el-table-column prop="typeId" label="分类序号" label-class-name="mytableTit"></el-table-column>

					<el-table-column prop="typeName" label="分类名称" label-class-name="mytableTit"></el-table-column>

					<!--<el-table-column prop="" label="" width="260"></el-table-column>-->

				</el-table>

				<div class="foot">
					<el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page.sync="currentPage3" :current-page='1' :page-sizes="pageSizeNum" layout="sizes,prev, pager, next, jumper" :total="total"></el-pagination>
				</div>

			</div>

			<div class="Copyright">Copyright ©2018-2019 成都恺缔科技有限公司</div>

		</div>
	</div>
</template>

<script>
	export {
		default
	}
	from './goodsclassCtr'
</script>

<style scoped>
	.goodsclass {
		width: 100%;
		height: 100%;
		background-color: #FFFFFF;
	}
	
	input {
		height: 35px;
	}
	
	.infor {
		border: 1px solid #C2C2C2;
		border-radius: 35px;
		text-indent: 15px;
		vertical-align: middle;
	}
	
	input[type="button"] {
		background-color: #0085e2;
		color: #FFFFFF;
		width: 100px;
		border-radius: 35px;
		vertical-align: middle;
	}
	
	.goodscontent {
		width: 70%;
		height: 100%;
		/*border: 1px solid red;*/
		margin: 0 auto;
	}
	/*===表格头部样式*/
	
	.mytableTit {
		color: #4768f3;
	}
	/*=====头部==========*/
	
	.goodshead {
		line-height: 70px;
	}
	
	.goodshead span {
		color: #525252;
		font-size: 20px;
	}
	
	.infor {
		border: 1px solid #C2C2C2;
		border-radius: 35px;
		text-indent: 15px;
		vertical-align: middle;
	}
	
	input[type="button"] {
		background-color: #0085e2;
		color: #FFFFFF;
		width: 100px;
		border-radius: 35px;
		vertical-align: middle;
		margin-left: 5%;
	}
	
	.table {
		border: 1px solid #c2c2c2;
		border-radius: 15px;
		overflow: hidden;
	}
	
	.foot {
		text-align: center;
		margin-top: 20px;
		margin-bottom: 15px;
	}
	
	.Copyright {
		color: #a1a1a1;
		font-size: 14px;
		text-align: center;
		line-height: 30px;
	}
</style>