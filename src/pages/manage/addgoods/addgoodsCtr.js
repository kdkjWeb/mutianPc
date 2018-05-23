export default {
	data() {
		return {
			options: [], //分类数组
			value: '', //上架下架的值
			radio: '1',
			dialogImageUrl: '',
			dialogVisible: false,
			isCommend: false, ///推荐商品选中
			isKill: false, //是否秒杀
			isChoose: true, //是否上架
			goods:{
				goodsName:'', //商品名称
				markePrice:'',//市场价
				price:'',//零售价
				disPrice:'',  //会原价
				priceSpike:'',//秒杀价
				description:'', //商品描述
				
			}
		}

	},
	methods: {
		handleRemove(file, fileList) {
			console.log(file, fileList);
		},
		handlePictureCardPreview(file) {
			this.dialogImageUrl = file.url;
			this.dialogVisible = true;
		},

		changeCommend() { //切换是否推荐
			this.isCommend = !this.isCommend;
		},
		changeKill() { //是否秒杀
			this.isKill = !this.isKill;
		},
		changeChoose() {
			this.isChoose = !this.isChoose;
		},

		//		=====获取商品分类==========
		getClass() {
			let _this = this;
			_this.$post('goodsType/getGoodsTypes', { //获取商品分类列表
				pageNum: _this.pageNum,
				pageSize: _this.pageSize
			}).then(res => {
				console.log(res);
				let code = res.code;
				switch(code) {
					case 0:
						console.log(res.data.list)
						_this.options = res.data.list;
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
		//		=====获取商品分类==========
		
		

	},
	created() {
		this.getClass();
	}

}