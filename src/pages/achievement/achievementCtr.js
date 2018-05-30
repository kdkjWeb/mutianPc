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
        tableData3: [],   //列表数据
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
      handleSizeChange(val) {
//      console.log(`每页 ${val} 条`);
				this.pageSize = val;
				this.getgoodsList();
      },
      handleCurrentChange(val) {
//      console.log(`当前页: ${val}`);
				this.pageNum = val;
			  this.getgoodsList();
      },

//    ====获取=========
      getgoodsList(){   
      	let _this = this;
      	this.$post('order/getMyOrderList',{
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
			
//			=====查询========
				searchList(){
					
				}




    },
    
    created(){
    	let s = document.body.clientHeight;
    	this.h = s - 300;
    	this.getgoodsList();
    },
    mounted(){
    	let _this = this
        window.onresize = () => {
            return (() => {
                window.screenHeight = document.body.clientHeight
                _this.h = window.screenHeight - 300;
            })()
        }
    },
    watch:{
        screenHeight (val) {
              this.h = val
          }
      }
    
    
  }