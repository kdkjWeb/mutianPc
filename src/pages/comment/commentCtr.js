  export default {
    data() {
      return {
      	searchInput:'',//搜索框 的值
      	currentPage3: 5,   //分页的页数
      	pageNum: 1, //当前是第几页
				pageSizeNum: [10, 20, 50], //每页多少条
				pageSize: 10, //当前默认每页多少条
				total: 0, //数据总条数
      	h:350,
        tableData3: [],
        multipleSelection: [], //选中列表
        History:'',   //新评论或者历史评论   、、0是未审核新评论， 1是通过历史评论
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
        this.getCommon();
      },
      handleCurrentChange(val) {
//      console.log(`当前页: ${val}`);
        this.pageSize = val;
        this.getCommon();
        
      },
// =========获取列表===   
      getCommon(){
      	this.$get('comment/getComments',{
      		comment:this.searchInput,
      		status:this.History,  //历史评论，新评论
					pageSize: this.pageSize, //每页多少条
					name: this.seachInput
				}).then(res => {
					console.log(res);
					if(res.code == 0){
						this.total = res.data.total;
						let list = res.data.list;
						this.tableData3 = list;
					}else{
						this.$message({
							showClose: true,
							message:'网络出错',
							type: 'error'
						});
					}
					
				})
     },
     
//   =============通过审核============
     orpass(){
      	let arr =[];
				this.multipleSelection.forEach(function(value,index,array){
					　　arr.push(array[index].id);
				});
				let commentId = arr.join(',');   //选中的数组	
				
      	this.$get('/comment/orpass',{
      			ids:commentId,
      			status:1
      	}).then(res =>{
      			let code = res.code;
      			if(code == 0){
      				this.$message({
					        showClose: true,
					        message: '操作成功',
					        type: 'success'
					      });
					      this.getCommon()//通过成功，重新获取数据
      			}else{
      				this.$message({
					      showClose: true,
					      message: '操作失败',
					      type: 'error'
					      });
      			}
    	  })
      	
      	 this.getCommon();
      	
      },
//============查询=========
			searchList(){
				this.getCommon();
			},
			
//=======审核通过没====================			
			isStatus(row, column, cellValue){ 
				if (cellValue == '1'){
          return '通过';
        }else if(cellValue == '0'){
        	return '未审核';
        }else{
        	return '未通过';
        }
			},

//================删除=========
			delcomm(){
				var arr =[];
				this.multipleSelection.forEach(function(value,index,array){
					　　　arr.push(array[index].id);
					});
				var text = arr.join(',');   //选中的数组	
				
				this.$get('comment/delete',{
					ids:text
				}).then(res=>{
					
				})
			},

//==========新评论=============
		newComment(){
		  this.History = 0;
		  this.getCommon();
		},

//=========历史评论=========
		historyCommen(){
			this.History = 1;
		  this.getCommon();
		}



    },
    created(){
    	let s = document.body.clientHeight;
    	this.h = s - 300;
    	
    	this.getCommon();
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