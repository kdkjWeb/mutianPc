  export default {
    data() {
      return {
      	seachInput:'',//搜索框 的值
      	currentPage3: 5,   //分页的页数
      	pageNum: 1, //当前是第几页
				pageSizeNum: [10, 20, 50], //每页多少条
				pageSize: 10, //当前默认每页多少条
				total: 0, //数据总条数
      	h:350,
        tableData3: [],
        multipleSelection: [],    //选中的数组
        
      }
    },

    methods: {
      toggleSelection(rows) {
        if (rows) {
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
      handleSizeChange(val) {  //分页符。每页多少条
//      console.log(`每页 ${val} 条`);
        this.pageSize = val;
				this.getgoodsList();
      },
      handleCurrentChange(val) {     //分页符，当前多少页
//      console.log(`当前页: ${val}`);
        this.pageNum = val;
			  this.getgoodsList();
      },
//    ====获取=========
      getgoodsList(){   
      	let _this = this;
      	this.$post('goods/getRandomList',{
      		pageNum: _this.pageNum, //页数
					pageSize: _this.pageSize, //每页多少条
					name: _this.seachInput
	    	}).then(res=>{
	    		console.log(res);
	    		if(res.code==0){
	    			 _this.total = res.data.total;
	    			 let arr = res.data.list;
						_this.tableData3 = arr;
	    		}
	    		
	    	})
      },
//==========搜索=========
			search(){
				this.getgoodsList();
			},
			
//			========替换表格中数据用中文显示===========
			isRecom(row, column, cellValue){
				 if (cellValue === "y"){
                return '推荐';
            }else{
                return '不推荐';
            }
			},
			isKill(row, column, cellValue){
				 if (cellValue === "y"){
                return '秒杀';
            }else{
                return '不秒杀';
            }
			},
			isImg(row, column, cellValue){ 
				if (cellValue == ''  || cellValue == null){
          return '无图';
        }else{
        	return '有图';
        }
			},
	 //=============删除商品		
			delGoods(){  
				this.getAjax('goods/delGoods');   //传请求的接口
			},
			
//			========修改============
			changeGoods(){
				if(this.multipleSelection.length>1){
					 this.$message({
					      showClose: true,
					      message: '一次只能修改一个商品',
					      type: 'error'
					      });
				}else{
					let  goodsId =  this.multipleSelection[0].id;
//					this.$router.push(`/addgoods?id=${goodsId}`)
						
						this.$router.push({
							name: 'addgoods',
							query: {
								id: goodsId
							}
						})
				}
			},
			
//			========下架商品==============
			downGoods(){
				 this.getAjax('goods/changeStatus');   //传请求的接口
			},
			
//			==========秒杀商品==================
			KillGoods(){
				this.getAjax('goods/getSpikeGoods');   //传请求的接口
			},
			
//			==========推荐商品===============
			recommGoods(){
				 this.getAjax('goods/getRecommendGoods');   //传请求的接口
			},
//=====================
			getAjax(myurl){
			var arr =[];
			this.multipleSelection.forEach(function(value,index,array){
				　　　arr.push(array[index].id);
				});
			var text = arr.join(',');   //选中的数组	
			
			var ajaxUrl = myurl; 
			
			this.$get(ajaxUrl,{
					ids:text
					}).then(res=>{
						console.log(res)
						let code = res.code;
						switch (code){
							case 0:
							this.$message({
					        showClose: true,
					        message: '操作成功',
					        type: 'success'
					       })
							this.getgoodsList();
							break;
							default:
							this.$message({
					      showClose: true,
					      message: '操作失败',
					      type: 'error'
					      });
						}
				});	
			}
			
			
    },
    created(){
    	let s = document.body.clientHeight;
    	this.h = s - 390;
    	this.getgoodsList(); //进入页面请求数据
    },
    mounted(){
    	let _this = this
        window.onresize = () => {
            return (() => {
                window.screenHeight = document.body.clientHeight
                _this.h = window.screenHeight - 390;
            })()
        }
    },
    watch:{
        screenHeight (val) {
              this.h = val
          }
     }
  }