export default {
	data() {
		return {
			options: [], //分类数组
			dialogImageUrl: '',
			dialogVisible: false,
			isCommend: false, ///推荐商品选中
			isKill: false, //是否秒杀
			isChoose: true, //是否上架
			goods:{
				goodsName:'', //商品名称
				marketPrice:'',//市场价
				price:'',//零售价
				disPrice:'',  //会原价
				priceSpike:'',//秒杀价
				description:'', //商品描述
				status:1,   //1是上架，0是下架
				recommend:'',  //是否推荐  n是不推荐，y是推荐
				ifSpike:'',   //  是否秒杀 
				spikeNum:'',   //秒杀数量
				rebeginTime:'',//推荐开始时间
				reendTime:'',//推荐结束时间
				startTime:'',//秒杀开始时间
				endTime:'',//秒杀结束时间
				goodsClass: '', //分类
				inventory:'',// 库存
				unit:''  //单位
			},
			rules: {
				goodsClass: [
		           { required: true, message: '请选择分类', trigger: 'change' }
		        ],
				goodsName: [
		           { required: true, message: '请输入商品名称', trigger: 'blur' },
		           { min: 2, max: 8, message: '长度在 2 到 8 个字符', trigger: 'blur' }
		        ],
				marketPrice: [
					{ required: true, message: '市场价不能为空', trigger: 'blur'},
     				{ type: 'number', message: '市场价必须为数字值', trigger: 'blur'}
				],
				price: [
					{ required: true, message: '零售价不能为空', trigger: 'blur'},
     				{ type: 'number', message: '零售价必须为数字值', trigger: 'blur'}
				],
				disPrice: [
					{ required: true, message: '会员价不能为空', trigger: 'blur'},
     				{ type: 'number', message: '会员价必须为数字值', trigger: 'blur'}
				],
				priceSpike: [
					{ required: true, message: '秒杀价不能为空', trigger: 'blur'},
     				{ type: 'number', message: '秒杀价必须为数字值', trigger: 'blur'}
				],
				inventory: [
     				{ type: 'number', message: '库存数量必须为数字值', trigger: 'blur'}
				],
				spikeNum: [
     				{ type: 'number', message: '秒杀数量必须为数字值', trigger: 'blur'}
				]
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
//      ===切换是否推荐
		changeCommend() { 
			this.isCommend = !this.isCommend;
			let isCommend = this.isCommend;
			//返回 true 是推荐 ，返回false 是不推荐
			switch(isCommend){
				case true:
				this.goods.recommend = 'y'
				break;
				case false:
				this.goods.recommend = 'n'
				default:
				this.goods.recommend = 'n'
			}
			console.log(this.goods)
			
		},//切换是否推荐
		
 //     =======是否秒杀		
		changeKill() { //是否秒杀
			this.isKill = !this.isKill;
			let kill = this.isKill;
			//返回true 是秒杀 false 不秒杀
			switch(kill){
				case true:
				this.goods.ifSpike = 'y'
				break;
				case false:
				this.goods.ifSpike = 'n'
				default:
				this.goods.ifSpike = 'n'
			}
			
		}, //=======是否秒杀	
		
//		=========上架下架========
		changeChoose() {  //上架，下架
			this.isChoose = !this.isChoose;
			let choose = this.isChoose;
			//返回true 为上架  ，默认为上架
			switch(choose){
				case true:
				this.goods.status = 1;  //上架
				break;
				case false:
				this.goods.status = 0;   //下架
				break;
				default:
				this.goods.status = 0;
			}
			
		},//		=========上架下架========


//		=====获取商品分类==========
		getClass() {
			let _this = this;
			_this.$post('goodsType/getGoodsTypes', { //获取商品分类列表
				pageNum: _this.pageNum,
				pageSize: _this.pageSize
			}).then(res => {
				let code = res.code;
				switch(code) {
					case 0:
						_this.options = res.data.list;
						break;
					default:
						_this.$message({
							showClose: true,
							message: res.msg,
							type: 'error'
						});
				}
			})

		},
		//		=====获取商品分类==========
		
//		============新增====
		addGoods(){
			var dom = this.$refs.myImg;
			var files = Array.prototype.slice.call(dom.files);
			var file = files[0];

			let goods = this.goods;
			
			var fData = new FormData();
			
			fData.append("type",goods.goodsClass);	 ///商品分类
			fData.append("name",goods.goodsName);	//商品名称
			fData.append("marketPrice",goods.marketPrice);	  //市场价
			fData.append("price",goods.price);	  //零售价
			fData.append("disPrice",goods.disPrice);	 //会员价
			fData.append("priceSpike",goods.priceSpike);	  //秒杀价
			fData.append("description",goods.description);	 //商品描述
			fData.append("status",goods.status);	//上架,下架
			fData.append("recommend",goods.recommend);	 //是否推荐  n是不推荐，y是推荐
			fData.append("ifSpike",goods.ifSpike);	 //  是否秒杀 
			fData.append("spikeNum",goods.spikeNum);	// //秒杀数量
			fData.append("rebeginTime",goods.rebeginTime);	//推荐开始时间
			fData.append("reendTime",goods.reendTime);	//推荐结束时间
			fData.append("startTime",goods.startTime);	//秒杀开始时间
			fData.append("endTime",goods.endTime);	//秒杀结束时间
			fData.append("inventory",goods.inventory);	// 库存
			fData.append("unit",goods.unit);	//单位
			fData.append('file',file);
			
			this.$post('goods/addGoods',
				fData	
			).then(res => {
				console.log(res);
				if(res.code == 0){
					this.$message({
						showClose: true,
						message: res.msg,
						type: 'success'
					});
				}else{
					this.$message({
						showClose: true,
						message:'网络出错',
						type: 'error'
					});
				}
				
			})
		},
		
//		=========更新商品=============
		saveGoods(){
			var dom = this.$refs.myImg;
			var files = Array.prototype.slice.call(dom.files);
			var file = files[0];

			let goods = this.goods;
			
			var fData = new FormData();
			
			fData.append("type",goods.goodsClass);	 ///商品分类
			fData.append("name",goods.goodsName);	//商品名称
			fData.append("marketPrice",goods.marketPrice);	  //市场价
			fData.append("price",goods.price);	  //零售价
			fData.append("disPrice",goods.disPrice);	 //会员价
			fData.append("priceSpike",goods.priceSpike);	  //秒杀价
			fData.append("description",goods.description);	 //商品描述
			fData.append("status",goods.status);	//上架,下架
			fData.append("recommend",goods.recommend);	 //是否推荐  n是不推荐，y是推荐
			fData.append("ifSpike",goods.ifSpike);	 //  是否秒杀 
			fData.append("spikeNum",goods.spikeNum);	// //秒杀数量
			fData.append("rebeginTime",goods.rebeginTime);	//推荐开始时间
			fData.append("reendTime",goods.reendTime);	//推荐结束时间
			fData.append("startTime",goods.startTime);	//秒杀开始时间
			fData.append("endTime",goods.endTime);	//秒杀结束时间
			fData.append("inventory",goods.inventory);	// 库存
			fData.append("unit",goods.unit);	//单位
			fData.append('file',file);
			
			this.$post('goods/addGoods',
				fData	
			).then(res => {
				console.log(res);
				if(res.code == 0){
					this.$message({
						showClose: true,
						message: res.msg,
						type: 'success'
					});
				}else{
					this.$message({
						showClose: true,
						message:'网络出错',
						type: 'error'
					});
				}
				
			})
		}
		
	},
	created() {
		this.getClass();
	},
	mounted(){
		let goodsId = this.$route.query.id;
		let _this = this; 
		let goods = _this.goods;
		
		if(goodsId){
			console.log('ajax')
			_this.$get('goods/getGoodsById', { //获取商品分类列表
				id:goodsId
			}).then(res => {
				let data = res.data;
				goods.goodsName = data.name;  //商品名称
				goods.marketPrice = data.marketPrice;   //市场价
				goods.price = data.price;  //零售价
				goods.disPrice = data.disPrice;   //会员价
				goods.priceSpike = data.priceSpike;   //秒杀价
				goods.unit = data.unit;   //单位
				goods.inventory = data.inventory;   //库存
				goods.spikeNum = data.spikeNum;   //秒杀数
				
				goods.description = data.description;   //描述
				goods.rebeginTime = data.rebeginTime //推荐开始时间
				goods.reendTime = data.reendTime //推荐结束时间
				goods.startTime = data.startTime //秒杀开始时间
				goods.endTime = data.endTime //秒杀结束时间
				goods.goodsClass = data.type;
				
				if(data.status == 1){   //是否是上架
					this.isChoose = true;
					goods.status = data.status;
				}else{
					this.isChoose = false;
					goods.status = data.status;
				}
				
				if(data.recommend == 'y'){  //是否推荐
					this.isCommend = true;
					goods.recommend = data.recommend;
				}else{
					this.isCommend = false;
					goods.recommend = data.recommend;
				}
				
				if(data.ifSpike == 'y'){  //是否秒杀
					this.isKill = true;
					goods.ifSpike = data.ifSpike;
				}else{
					this.isKill = false;
					goods.ifSpike = data.ifSpike;
				}	
				
			})
		};
		
		
	}

}
