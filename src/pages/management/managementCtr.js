export default {
	data() {
		return {
			registerNum: 0, //注册用户数
			seachInput: '', //搜索框 的值
			currentPage3: 5, //分页的页数
			h: 350,
			tableData3: [],
			multipleSelection: [],  //选中的数据
			pageNum: 1, //当前是第几页
			pageSizeNum: [10, 20, 50], //每页多少条
			pageSize: 10, //当前默认每页多少条
			total: 0, //数据总条数
			form: {
				name: '',
				region: '',
				date1: '',
				date2: '',
				delivery: false,
				type: [],
				resource: '',
				desc: ''
			},
			formLabelWidth: '120px',
			GradeVisible:false,  //用户等级弹框
			PsdVisible:false,  //用户密码弹框
			changeUser:{},  //修改用户资料的用户
			UserlevelList:[],  //用户等级种类
			oldPwd:'',   //旧密码
			newPwd:''  //修改的新密码
		}
	},
	methods: {
		toggleSelection(rows) {
			if(rows) {
				rows.forEach(row => {
					this.$refs.multipleTable.toggleRowSelection(row);
				});
			} else {
				this.$refs.multipleTable.clearSelection();
			}
		},
		handleSelectionChange(val) {   //表单 多选矿选中事件
			this.multipleSelection = val;
		},
		handleSizeChange(val) { //分页符。每页多少条
			this.pageSize = val;
			this.getuserlist();
		},
		handleCurrentChange(val) { //分页符，当前多少页
			this.pageNum = val;
			this.getuserlist();
		},
		//    ==获取页面列表==
		getuserlist() {
			let _this = this;
			this.$post('user/getUserList', { //上传数据
				pageNum: _this.pageNum, //页数
				pageSize: _this.pageSize, //每页多少条
				username: _this.seachInput
			}).then(res => { ///获取用户列表
				_this.total = res.data.total;
				let arr = res.data.list;
				_this.tableData3 = arr;
			})
		},
		forData(row, column, cellValue, ) { //遍历 把数据里为空的数据替换为暂无数据
			if(cellValue == null) {
				return '暂无数据';
			} else {
				return cellValue;
			}
		},
		dialog(){   //点击修改用户等级按钮事件
			if(this.multipleSelection.length == 1){
				this.GradeVisible = true;  //弹框
				this.changeUser = this.multipleSelection[0];  //获取当前选中订单 用户
				console.log(this.changeUser);
			}else{
				 this.$message({
		          showClose: true,
		          message: '一次只能选中一个用户修改等级',
		          type: 'error'
		        });
			}
		},
		changeLevel(item){   //获取修改用户等级的下拉选中默认值
			this.changeUser.level = item;  //
		},
		saveLevel(){   //修改用户等级
			let _this = this;
			this.$post('user/updateUser', { //修改用户等级
				id:_this.changeUser.id,
				level:_this.changeUser.level
			}).then(res => {
				this.$message({
		          showClose: true,
		          message: '修改成功',
		          type: 'success'
		        });
				this.GradeVisible = false;
				
			})
		},
		savePwd (){  //修改管理密码ajax
			this.$post('user/updatePwd', { 
				pwd:this.oldPwd,
				newpwd:this.newPwd
			}).then(res => {
				this.$message({
		          showClose: true,
		          message: '修改成功',
		          type: 'success'
		        });
				this.PsdVisible = false;
			})
			
		},
		closed(){  //封号
			var arr =[];
			this.multipleSelection.forEach(function(value,index,array){
		　　　　arr.push(array[index].id);
		　　});
			var text = arr.join(',');   //选中的数组

			this.$get('user/onOffUser', {    //封号ajax
				ids:text
			}).then(res => {
				let code = res.code;
				switch (code){
					case 0:
					this.$message({
			         	showClose: true,
			          message: '封号成功',
			          type: 'success'
			       })
					break;
					default:
					this.$message({
			         	showClose: true,
			          message: '封号失败',
			          type: 'error'
			      });
				}
			})
		},
		delUser(){     //删除用户
			var arr =[];
			this.multipleSelection.forEach(function(value,index,array){
		　　　　arr.push(array[index].id);
		　　});
			var text = arr.join(',');   //选中的数组
			
			this.$get('user/deletUser', {    //删除ajax
				ids:text
			}).then(res => {
				let code = res.code;
				switch (code){
					case 0:
					this.$message({
			         	showClose: true,
			          message: '删除成功',
			          type: 'success'
			       })
					break;
					default:
					this.$message({
			         	showClose: true,
			          message: '删除失败',
			          type: 'error'
			      });
				}
			})
		},

		
	},
	created() {
		let s = document.body.clientHeight;
		this.h = s - 300;
		this.getuserlist();

		let _this = this;
		this.$get('user/getTotalCount', { //获取注册用户数
		}).then(res => {
			_this.registerNum = res.data;
		})
		
		this.$post('userlevel/getUserlevelList', { //获取用户等级种类
		}).then(res => {
			_this.UserlevelList = res.data;
			console.log(_this.UserlevelList)
		})
		
		

	},
	mounted() {
		let _this = this
		window.onresize = () => {
			return(() => {
				window.screenHeight = document.body.clientHeight
				_this.h = window.screenHeight - 300;
			})()
		}
	}
}