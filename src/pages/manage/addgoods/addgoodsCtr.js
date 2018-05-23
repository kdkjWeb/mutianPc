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
				markePrice:'',//市场价
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
				goodsClass: '', //分类的名称
				inventory:'',// 库存
				unit:''  //单位
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
							type: 'err'
						});
				}
			})

		},
		//		=====获取商品分类==========
		
//		============新增====
		addGoods(){
			console.log(this.goods)
			let goods = this.goods;
			
			var formData = new FormData();
			
			formData.append("type",goods.goodsClass);	
			
			
			this.$post('goods/addGoods',{
				
				
				
				
//				type : goods.goodsClass, ///商品分类
//				name : goods.goodsName,  //商品名称
//				markePrice : goods.markePrice, //市场价
//				price : goods.price,   //零售价
//				disPrice : goods.disPrice,     //会员价
//				priceSpike : goods.priceSpike,  //秒杀价
//				description : goods.description, //商品描述
//				status : goods.status,   //上架,下架
//				recommend : goods.recommend,   //是否推荐  n是不推荐，y是推荐
//				ifSpike : goods.ifSpike,    //  是否秒杀 
//				spikeNum: goods.spikeNum,  // //秒杀数量
//				rebeginTime : goods.rebeginTime,  //推荐开始时间
//				reendTime : goods.reendTime,  //推荐结束时间
//				startTime : goods.startTime,  //秒杀开始时间
//				endTime : goods.endTime,  //秒杀结束时间
//				inventory : goods.inventory,// 库存
//				unit : goods.unit, //单位
				
				
			}).then(res => {
				console.log(res)
			})
			
		}
	},
	created() {
		this.getClass();
	}

}