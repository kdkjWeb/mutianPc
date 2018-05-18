<template>
	<div class="addgoods">
		<!--添加商品-->
		<div class="goodscontent">
			<el-row :gutter="20">
				<el-col :xs="24" :sm="24" :md="12" :lg="8" :xl="8">
					<div class="grid-content bg-purple">
						<span class="span_left"><i>*</i>分类名称:</span>
						<!--====下拉种类选择========-->
						<el-select v-model="value" placeholder="请选择">
							<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
							</el-option>
						</el-select>
					</div>
				</el-col>

				<el-col :xs="24" :sm="24" :md="12" :lg="8" :xl="8">
					<div class="grid-content bg-purple">
						<span class="span_left"><i>*</i>商品名称:</span>
						<input type="text" class="infor" />
					</div>
				</el-col>

				<el-col :xs="24" :sm="24" :md="12" :lg="8" :xl="8">
					<div class="grid-content bg-purple">
						<span class="span_left"><i>*</i>单价:</span>
						<input type="text" class="infor" />
					</div>
				</el-col>
			</el-row>
			
			<el-row :gutter="20">
				<el-col :xs="24" :sm="24" :md="12" :lg="8" :xl="8">
					<div class="grid-content bg-purple">
						<span class="span_left">库存数量:</span>
						<input type="text" class="infor" />
					</div>
				</el-col>

				<el-col :xs="24" :sm="24" :md="12" :lg="8" :xl="8">
					<div class="grid-content bg-purple">
						<span class="span_left">单位:</span>
						<input type="text" class="infor" />
					</div>
				</el-col>

				<el-col :xs="24" :sm="24" :md="12" :lg="8" :xl="8">
					<div class="grid-content bg-purple">
						<p>
							<i class="iconfont" :class="isChoose?'icon-roundcheckfill':'icon-roundcheck'" @click="changeChoose()"></i>
							<span>上架</span>
						</p>
						<p>
							<i class="iconfont" :class="isChoose?'icon-roundcheck':'icon-roundcheckfill'" @click="changeChoose()"></i>
							<span>下架</span>
						</p>
					</div>
				</el-col>
			</el-row>
			
			<el-row :gutter="20">
				<el-col :xs="24" :sm="24" :md="12" :lg="8" :xl="8">
					<div class="grid-content bg-purple">
						<p>
							<i class="iconfont" :class="isCommend?'icon-roundcheckfill':'icon-roundcheck'" @click="changeCommend"></i>
							<span>推荐商品</span>
						</p>
					</div>
				</el-col>

				<el-col :xs="24" :sm="24" :md="12" :lg="8" :xl="8">
					<div class="grid-content bg-purple">
						<span class="span_left">推荐开始时间:</span>
						<input type="text" class="infor" />
					</div>
				</el-col>

				<el-col :xs="24" :sm="24" :md="12" :lg="8" :xl="8">
					<div class="grid-content bg-purple">
						<span class="span_left">推荐结束时间:</span>
						<input type="text" class="infor" />
					</div>
				</el-col>
			</el-row>
			
			<el-row :gutter="20">
				<el-col :xs="24" :sm="24" :md="12" :lg="8" :xl="8">
					<div class="grid-content bg-purple">
						<p>
							<i class="iconfont" :class="isKill?'icon-roundcheckfill':'icon-roundcheck'" @click="changeKill()"></i>
							<span>秒杀</span>
						</p>
					</div>
				</el-col>

				<el-col :xs="24" :sm="24" :md="12" :lg="8" :xl="8">
					<div class="grid-content bg-purple">
						<span class="span_left">秒杀开始时间:</span>
						<input type="text" class="infor" />
					</div>
				</el-col>

				<el-col :xs="24" :sm="24" :md="12" :lg="8" :xl="8">
					<div class="grid-content bg-purple">
						<span class="span_left">秒杀结束时间:</span>
						<input type="text" class="infor" />
					</div>
				</el-col>
			</el-row>
			
			<div class="upImg">
				<span>商品图片上传：</span>
					<el-upload
					  action="https://jsonplaceholder.typicode.com/posts/"
					  list-type="picture-card"
					  :on-preview="handlePictureCardPreview"
					  :on-remove="handleRemove">
					  <i class="el-icon-plus"></i>
					</el-upload>
					<el-dialog :visible.sync="dialogVisible">
					  <img width="100%" :src="dialogImageUrl" alt="">
					</el-dialog>
			</div>
			
			<div class="doIn">
				<span>商品描述：</span>
				<textarea name="" rows="" cols=""></textarea>
			</div>
			
			<div class="foot">
				<input type="button" value="新增" class="addIpt"/>
				<input type="button" value="保存" class="saveIpt"/>
			</div>
			
		</div>
	</div>
</template>

<script>
	export {
		default
	}
	from './addgoodsCtr'
</script>

<style>
	.addgoods {
		width: calc(100% - 60px);
		height: calc(100% - 40px);
		background-color: #FFFFFF;
		padding: 20px 30px;
	}
	
	input {
		height: 35px;
	}

	/*=======*/
	.infor {
		border: 1px solid #C2C2C2;
		border-radius: 35px;
		text-indent: 15px;
		vertical-align: middle;	
		width: 50%;
	}
	/*======*/
	.el-col{
		margin-bottom: 20px;
		height: 40px;
	}
	.el-col p{
		display: inline-block;
		margin-left: 50px;
	}
	/*===========*/
	
	.span_left{
		display: inline-block;
		width: 100px;
		text-align: right;
		margin-right: 20px;
	}
	.span_left i{
		display: inline-block;
		color: red;
		margin-right: 5px;
	}
	.upImg{
		overflow: hidden;
	}
	.upImg>div{
		display: inline-block;
	}
	
	/*===上传图片========*/
	.el-upload--picture-card{
		width: 100px !important;
		height: 100px;
		line-height:110px;
	}
	.el-upload-list--picture-card .el-upload-list__item{
		width: 100px;
		height: 100px;
		vertical-align: top;
	}
	
	/*==========*/
	.doIn{
		margin-top: 20px;
	}
	textarea{
		height: 100px;
		width: calc(100% - 300px);
		margin-left: 30px;
		vertical-align: top;
		border-radius: 10px;
		border: 1px solid #c2c2c2;
		outline: none;
		resize:none
	}
	
	/*foot*/
	.foot {
		text-align: center;
		line-height: 100px;
	}
	.foot input{
		width: 150px;
		border-radius: 35px;
		color: #FFFFFF;
	}
	.addIpt{
		background-color: #0085e2;
	}
	.saveIpt{
		background-color: #ff5959;
		margin-left: 300px;
	}
	
	.icon-roundcheck{
		font-size: 22px;
		color: #c3c3c3;
		vertical-align: middle;
		cursor: pointer;
	}
	.icon-roundcheckfill{
		font-size: 22px;
		color: #ff7200;
		vertical-align: middle;
		cursor: pointer;
	}
</style>