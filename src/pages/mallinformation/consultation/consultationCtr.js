export default {
	data() {
		return {
			myInput: '',
			clickId:'',  //修改的分类id
			assortList: [] //新闻分类
		}
	},
	methods: {
		change(item) {
			this.myInput = item.name;
			this.clickId = item.id;
		},

//=========获取分类列表=================
		getList() {
			this.$post('newsType/getNewsTypeList', {}).then(res => {
				console.log(res)
				this.assortList = res.data;
			})
		},

		//  	==添加新闻分类========
		addClass() {
			if(this.myInput) {
				this.$post('newsType/addNewsType', {
					name: this.myInput
				}).then(res => {
					console.log(res)
					if(res.code == 0) {
						this.$message({
							showClose: true,
							message: '添加成功',
							type: 'success'
						});
						this.getList();
						
					} else {
						this.$message({
							showClose: true,
							message: '添加失败',
							type: 'error'
						});
					}
				})
			}
		},
		
//		=======修改====================
		changeClass(){
			this.$post('newsType/updateNewsType', {
					name: this.myInput,
					id:this.clickId
				}).then(res => {
					console.log(res)
					if(res.code == 0) {
						this.$message({
							showClose: true,
							message: '修改成功',
							type: 'success'
						});
						this.getList();
						this.myInput = '';  //重置 输入框
						this.clickId = '';   //重置 id
					} else {
						this.$message({
							showClose: true,
							message: '修改失败',
							type: 'error'
						});
					}
				})
		},
		
//		=====删除===============
		delClass(){
			this.$get('newsType/delNewsType', {
					id:this.clickId
				}).then(res => {
					console.log(res)
					if(res.code == 0) {
						this.$message({
							showClose: true,
							message: '删除成功',
							type: 'success'
						});
						this.getList();
						this.myInput = '';  //重置 输入框
						this.clickId = '';   //重置 id
					} else {
						this.$message({
							showClose: true,
							message: '删除失败',
							type: 'error'
						});
					}
				})
		}

		
	},
	mounted() {
		this.getList();
	}
}