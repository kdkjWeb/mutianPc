<template>
	<div class="management">
		<!--用户管理-->

		<div class="header">
			<input type="text" v-model="seachInput" placeholder="可按电话号码，昵称 查找" />

			<div class="search" @click="getuserlist">
				<i class="el-icon-search"></i>
				<span>查询</span>
			</div>

			<input type="button" value="修改用户等级" class="changeNum"  @click="dialog"/>
			<input type="button" value="修改密码" @click="PsdVisible = true" />
			<input type="button" value="封号" @click="closed"/>
			<input type="button" value="解封" />
			<input type="button" value="删除" @click="delUser"/>

		</div>
		
	
		<div>  
			<!--==修改用户等级弹框====-->
			<el-dialog title="修改用户等级" :visible.sync="GradeVisible">
				<div class="levelDiv">
					<span>用户名：{{changeUser.username}}</span>
					<span>当前等级： {{changeUser.level}}级</span>
				</div>
			  <el-form :model="form">
			    <el-form-item label="用户等级" :label-width="formLabelWidth">
			      <el-select v-model="form.region" placeholder="请设置该用户等级" @change="changeLevel">
			      	
			        <el-option v-for="(item,index) in UserlevelList"  :key="item.id" :label="item.level" :value="item.level" ></el-option>
			        
			      </el-select>
			    </el-form-item>
			  </el-form>
			  <div slot="footer" class="dialog-footer">
			    <el-button @click="GradeVisible = false">取 消</el-button>
			    <el-button type="primary" @click="saveLevel">确 定</el-button>
			  </div>
			</el-dialog>
			<!--==修改用户等级弹框====-->
			
			<!--==修改用户密码弹框====-->
			<el-dialog title="修改管理密码" :visible.sync="PsdVisible">
			  <el-form :model="form">
			  	<el-form-item label="请输入旧密码" :label-width="formLabelWidth">
			    	<el-input v-model="oldPwd" placeholder="请输入旧密码" type='password' maxlength='16' clearable style="width: 80%;"></el-input>
			    </el-form-item>
			    <el-form-item label="请输入新密码" :label-width="formLabelWidth">
			    	<el-input v-model="newPwd" placeholder="请输入新密码" type='password' maxlength='16' clearable style="width: 80%;"></el-input>
			    </el-form-item>
			  </el-form>
			  <div slot="footer" class="dialog-footer">
			    <el-button @click="PsdVisible = false">取 消</el-button>
			    <el-button type="primary" @click="savePwd">确 定</el-button>
			  </div>
			</el-dialog>
			<!--==修改用户密码弹框====-->
			
		</div>
		
		
		<div class="content">

			<!--==表格====-->
			<div class="Table">

				<el-table ref="multipleTable" :height="h" :data="tableData3" 
					tooltip-effect="dark" border style="width: 100%" 
					@selection-change="handleSelectionChange"
					:highlight-current-row="true"
					>
					<el-table-column type="selection" width="55"></el-table-column>

					<el-table-column label-class-name="mytableTit" prop="username" label="手机号码" width="120">
						<!--<template scope="scope">
		                    <span v-if="scope.row.status=== 0">显示</span>
		                    <span v-else-if="scope.row.status=== 1">隐藏</span>
		                    <span v-else style="color: red">删除</span>
		                </template>-->
						
					</el-table-column>

					<el-table-column label-class-name="mytableTit" prop="realName" label="真实姓名" width="100" :formatter="forData"></el-table-column>

					<el-table-column label-class-name="mytableTit" prop="nickname" label="昵称" width="120" :formatter="forData"></el-table-column>

					<el-table-column label-class-name="mytableTit" prop="pid" label="上级会员ID" width="100" :formatter="forData"></el-table-column>

					<el-table-column label-class-name="mytableTit" prop="pname" label="上级会员姓名" width="110" :formatter="forData"></el-table-column>

					<el-table-column label-class-name="mytableTit" prop="" label="所属层级" width="100" :formatter="forData"></el-table-column>

					<el-table-column label-class-name="mytableTit" prop="level" label="用户等级" width="100" :formatter="forData"></el-table-column>

					<el-table-column label-class-name="mytableTit" prop="card" label="银行卡号" width="200" :formatter="forData"></el-table-column>

					<el-table-column label-class-name="mytableTit" prop="bankCard" label="开户银行" width="120" :formatter="forData"></el-table-column>

					<el-table-column label-class-name="mytableTit" prop="type" label="是否会员" width="80" :formatter="forData"></el-table-column>

					<el-table-column label-class-name="mytableTit" prop="selfFei" label="累计消费金额" width="130" :formatter="forData"></el-table-column>

				<!--	<el-table-column label-class-name="mytableTit" prop="addr" label="地址" show-overflow-tooltip :formatter="forData"></el-table-column>-->

				</el-table>

				<div class="foot">
					<div class="footLeft">
						注册用户数：<span>{{registerNum}}</span>
					</div>
					<div class="footNum">
						<el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" 
							:current-page='1' :current-page.sync="currentPage3" 
							:page-sizes="pageSizeNum" layout="sizes,prev, pager, next, jumper" 
							:total="total">
						</el-pagination>
					</div>
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
	from './managementCtr'
</script>

<style scoped>
	.management {
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
	.levelDiv{
		margin-left: 50px;
		margin-bottom: 22px;
	}
	.levelDiv span:first-of-type{
		margin-right: 50px;
	}
	/*============表格样式覆盖===========*/
	
	.content {
		padding: 10px;
		background-color: #FFFFFF;
		height: calc(100% - 100px);
		overflow: hidden;
	}
	
	.Table {
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
	
	.mytableTit {
		color: #4768f3;
	}
	/*=====底部======*/
	
	.foot {
		padding-bottom: 30px;
		text-align: center;
		position: absolute;
		bottom: 0;
		width: 100%;
	}
	
	.foot div {
		display: inline-block;
		color: #7e7e7e;
	}
	
	.footNum {
		margin: 0 auto;
	}
	
	.footLeft {
		float: left;
		margin-left: 5%;
		line-height: 32px;
	}
	
	.Copyright {
		color: #a1a1a1;
		font-size: 14px;
		text-align: center;
		line-height: 30px;
	}
	/*==弹框样式===========*/
	/*.el-select .el-input {
	    width: 130px;
	  }*/
	.el-input .el-input__inner{
		width: 80% !important;
	}
	
	
	/*====*/
	.el-table .warning-row {
    background: oldlace;
  }

  .el-table__body tr.current-row>td {
	  background: rgba(185, 221, 249, .75)!important;
	}
</style>