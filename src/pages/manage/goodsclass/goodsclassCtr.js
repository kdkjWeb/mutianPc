export default {
	data() {
		return {
			addinput: '', //添加分类输入框的值
			currentPage3: 5, //分页的页数
			h: 350,
			tableData3: [], //列表数据
			multipleSelection: [], //选中的数据
			pageNum: 1, //当前是第几页
			pageSizeNum: [5, 15, 20], //每页多少条
			pageSize: 5, //当前默认每页多少条
			total: 0, //数据总条数
			classLayer: false,
			newClass: '', //修改分类输入框
			newplace: '' //修改分类输入框默认值
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
		handleSelectionChange(val) {
			this.multipleSelection = val;
		},
		handleSizeChange(val) { //每页多少条
			this.pageSize = val;
			this.getlist();
		},
		handleCurrentChange(val) { //当前多少页
			this.pageNum = val;
			this.getlist();
		},
		addClass() { //添加分类
			let _this = this;
			if(_this.addinput.length >= 1) {
				_this.$post('goodsType/addGoodsType', { //添加商品分类列表
					typeName: _this.addinput
				}).then(res => {
					let code = res.code;
					switch(code) {
						case 0:
							_this.addinput = ''; //清空输入框
							_this.$message({ //成功弹框
								showClose: true,
								message: res.msg,
								type: 'success'
							});
							this.getlist();
							break;
						default:
							_this.$message({
								showClose: true,
								message: res.msg,
								type: 'err'
							});
					}
				})
			} else {
				_this.$message({ //成功弹框
					showClose: true,
					message: '请输入分类',
					type: 'error'
				});
			}

		},
		getlist() { //获取列表
			let _this = this;
			_this.$post('goodsType/getGoodsTypes', { //获取商品分类列表
				pageNum: _this.pageNum,
				pageSize: _this.pageSize
			}).then(res => {
				console.log(res);
				let code = res.code;
				switch(code) {
					case 0:
						_this.tableData3 = res.data.list;
						_this.total = res.data.total;
						break;
					default:
						_this.$message({
							showClose: true,
							message: res.msg,
							type: 'err'
						});
				}
			})
		},
		delClass() { //删除分类
			let list = this.multipleSelection;
			if(list.length != 1) { //如果选中多个
				this.$message({
					type: 'error',
					message: '一次只能删除一个分类'
				});
			} else { //选中一个
				this.$confirm('是否继续删除分类?', '提示', {
					confirmButtonText: '确定',
					cancelButtonText: '取消',
					type: 'warning'
				}).then(() => {
					//					====删除分类ajax=======
					this.$get('goodsType/delete', {
						id: list[0].typeId
					}).then(res => {
						let code = res.code;
						switch(code) {
							case 0:
								this.$message({
									showClose: true,
									message: '删除成功',
									type: 'success'
								})
								this.getlist();
								break;
							default:
								this.$message({
									showClose: true,
									message: '删除失败',
									type: 'error'
								});
						}
					})
					//					====删除分类ajax=======
				}).catch(() => {});
			}

		},

		//		=====修改分类弹框=====
		changeClass() {
			let _this = this
			if(_this.multipleSelection.length != 1) {
				this.$message({
					showClose: true,
					message: '一次只能修改一个分类',
					type: 'error'
				});
			} else {
				_this.classLayer = true;
				_this.newplace = _this.multipleSelection[0].typeName;
			}
		},

		//		====保存修改的分类=========
		saveClass() {
			if(this.newClass.length > 0) {
				this.$post('goodsType/update', {
					typeId: this.multipleSelection[0].typeId,
					typeName: this.newClass
				}).then(res => {
					console.log(res);
					let code = res.code
					switch(code) {
						case 0:
							this.classLayer = false;
							this.$message({
								showClose: true,
								message: '修改成功',
								type: 'success'
							});
							this.newClass = '';
							this.getlist(); 
							break;
						default:
							this.$message({
								showClose: true,
								message: '修改失败',
								type: 'error'
							});
					}

				})
			} else {
				this.$message({
					showClose: true,
					message: '请输入你要新的分类名称',
					type: 'error'
				});
			}
		}

	},
	created() {
		let s = document.body.clientHeight;
		this.h = s - 350;
		this.getlist();
	},
	mounted() {
		let _this = this
		window.onresize = () => {
			return(() => {
				window.screenHeight = document.body.clientHeight
				_this.h = window.screenHeight - 350;
			})()
		}
	}
}