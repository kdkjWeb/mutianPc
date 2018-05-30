<template>
	<div class="addgoods">
		<!--添加商品-->
		<div class="goodscontent">
			
		<el-form  ref="form" :rules="rules" label-width="140px" :model="goods">
			<el-row :gutter="20">
				
				<el-col :xs="24" :sm="24" :md="12" :lg="8" :xl="8">
					<el-form-item label="分类名称:" class="mylable" prop="goodsClass">
						<el-select v-model="goods.goodsClass" placeholder="请选择" class="myInput" >
							<el-option v-for="item in options" :key="item.typeId" 
								:label="item.typeName" :value="item.typeId">
							</el-option>
						</el-select>
					</el-form-item>
				</el-col>

				<el-col :xs="24" :sm="24" :md="12" :lg="8" :xl="8">
					<el-form-item label="商品名称:" class="mylable" prop="goodsName">
					   <el-input v-model="goods.goodsName" class="myInput" placeholder="请输入商品名称"></el-input>
					</el-form-item>
				</el-col>

				<el-col :xs="24" :sm="24" :md="12" :lg="8" :xl="8">
					<el-form-item label="市场价:" class="mylable" prop="marketPrice">
					   <el-input v-model.number="goods.marketPrice" class="myInput" placeholder="请输入市场价"></el-input>
					</el-form-item>
				</el-col>
			</el-row>
			
			<el-row :gutter="20">
				<el-col :xs="24" :sm="24" :md="12" :lg="8" :xl="8">
					<el-form-item label="零售价:" class="mylable" prop="price">
					   <el-input v-model.number="goods.price" class="myInput" placeholder="请输入零售价"></el-input>
					</el-form-item>
				</el-col>

				<el-col :xs="24" :sm="24" :md="12" :lg="8" :xl="8">
					<el-form-item label="会员价:" class="mylable" prop="disPrice">
					   <el-input v-model.number="goods.disPrice" class="myInput" placeholder="请输入会员价"></el-input>
					</el-form-item>
				</el-col>

				<el-col :xs="24" :sm="24" :md="12" :lg="8" :xl="8">
					<el-form-item label="秒杀价:" class="mylable" prop="priceSpike">
					   <el-input v-model.number="goods.priceSpike" class="myInput" placeholder="请输入秒杀价"></el-input>
					</el-form-item>
				</el-col>
			</el-row>
			
			<el-row :gutter="20">
				<el-col :xs="24" :sm="24" :md="12" :lg="8" :xl="8">
					<el-form-item label="库存数量:" class="mylable" prop="inventory">
					   <el-input v-model.number="goods.inventory" class="myInput" placeholder="请输入库存数量"></el-input>
					</el-form-item>
				</el-col>

				<el-col :xs="24" :sm="24" :md="12" :lg="8" :xl="8">
					<el-form-item label="单位:" class="mylable">
					   <el-input v-model="goods.unit" class="myInput" placeholder="请输入单位名称"></el-input>
					</el-form-item>
				</el-col>

				<el-col :xs="24" :sm="24" :md="12" :lg="8" :xl="8">
					<div class="grid-content bg-purple">
						<p class="upDown">
							<i class="iconfont" :class="isChoose?'icon-roundcheckfill':'icon-roundcheck'" @click="changeChoose()"></i>
							<span>上架</span>
						</p>
						<p class="upDown">
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
					<el-form-item label="推荐开始时间:" class="mylable">
					    <el-date-picker
						  	   value-format="yyyy-MM-dd HH:mm:ss"
						      v-model="goods.rebeginTime"
						      type="datetime"
						      placeholder="选择日期时间"
						      default-time="12:00:00">
						    </el-date-picker>
					</el-form-item>
				</el-col>

				<el-col :xs="24" :sm="24" :md="12" :lg="8" :xl="8">
					<el-form-item label="推荐结束时间:" class="mylable">
					    <el-date-picker
						  	   value-format="yyyy-MM-dd HH:mm:ss"
						      v-model="goods.reendTime"
						      type="datetime"
						      placeholder="选择日期时间"
						      default-time="12:00:00">
						    </el-date-picker>
					</el-form-item>
				</el-col>
			</el-row>
			
			<el-row :gutter="20">
				<el-col :xs="24" :sm="24" :md="12" :lg="8" :xl="8">
					<span class="kill_span">
						<i class="iconfont" :class="isKill?'icon-roundcheckfill':'icon-roundcheck'" @click="changeKill()"></i>
						<span>秒杀:</span>
					</span>
					<el-form-item prop="spikeNum">
						<el-input v-model.number="goods.spikeNum" class="myInput" placeholder="请输入秒杀数量"></el-input>
					</el-form-item>
				</el-col>
				
				
				<el-col :xs="24" :sm="24" :md="12" :lg="8" :xl="8">
					<el-form-item label="秒杀开始时间:" class="mylable">
					    <el-date-picker
						  	   value-format="yyyy-MM-dd HH:mm:ss"
						      v-model="goods.startTime"
						      type="datetime"
						      placeholder="选择日期时间"
						      default-time="12:00:00">
						    </el-date-picker>
					</el-form-item>
				</el-col>

				<el-col :xs="24" :sm="24" :md="12" :lg="8" :xl="8">					
					<el-form-item label="秒杀结束时间:" class="mylable">
					      <el-date-picker
						  	  value-format="yyyy-MM-dd HH:mm:ss" 
						      v-model="goods.endTime"
						      type="datetime"
						      placeholder="选择日期时间"
						      default-time="12:00:00">
						    </el-date-picker>
					</el-form-item>
				</el-col>
				
			</el-row>
			
			<div class="upImg">
				<span>商品图片上传：</span>
					<!--<el-upload
					  action="https://jsonplaceholder.typicode.com/posts/"
					  list-type="picture-card"
					  :on-preview="handlePictureCardPreview"
					  :on-remove="handleRemove">
					  <i class="el-icon-plus"></i>
					</el-upload>
					<el-dialog :visible.sync="dialogVisible">
					  <img width="100%" :src="dialogImageUrl" alt="">
					</el-dialog>-->
					
					<!--<input type="file" ref="myImg"/>-->
					
					<div>
						<input type="file" ref="myImg"/>
					</div>
			</div>
			
			<div class="doIn">
				<el-form-item label="商品描述:" class="mylable">
					<el-input type="textarea" v-model="goods.description" class="mytextarea" rows="5"></el-input>
				</el-form-item>
			</div>
			
			<div class="foot">
				<input type="button" value="新增" class="addIpt" @click="addGoods"/>
				<input type="button" value="保存" class="saveIpt" @click="saveGoods"/>
			</div>
		</el-form>
		
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
	/*===上传图片样式覆盖========*/
	.el-upload--picture-card{
		width: 100px !important;
		height: 100px !important;
		line-height: 100px !important;
	}
	/*===============?*/
	.el-input__inner{
		border-radius: 35px;
		border: 1px solid #C2C2C2;
	}
</style>

<style scoped>
	.kill_span{
		float: left;
		line-height: 40px;
		margin-left: 25px;
	}
	.myInput{
		width: 60%;
		margin-left: 20px;
	}
	.addgoods {
		width: calc(100% - 60px);
		height: calc(100% - 40px);
		background-color: #FFFFFF;
		padding: 10px 30px;
		overflow-y: auto;
	}
	
	input {
		height: 35px;
	}
	span{
		font-size: 14px;
    color: #606266;
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
		margin-left: 25px;
		width: 100%;
	}
	.upDown{
		width:20% !important;
		margin: 0;
	}
	.el-col p input{
		width: 50% !important;
		margin-left: 20px;
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
		resize:none;
		text-indent: 15px;
		font-size: 16px;
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