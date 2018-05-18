  export default {
    data() {
      return {
      	input:'',//搜索框 的值
      	currentPage3: 5,   //分页的页数
      	h:350,
        tableData3: [{
       		usercomment:'成都市武侯区达到路口第二家扬州炒饭',
       		goods:'商品名称',
       		time:'1895.12.15 12:55',
       		people:'张天尊',
       		state:'用户'
        },{
       		usercomment:'成都市武侯区达到路口第二家扬州炒饭',
       		goods:'商品名称',
       		time:'1895.12.15 12:55',
       		people:'张天尊',
       		state:'用户'
        },{
       		usercomment:'成都市武侯区达到路口第二家扬州炒饭',
       		goods:'商品名称',
       		time:'1895.12.15 12:55',
       		people:'张天尊',
       		state:'用户'
        },{
       		usercomment:'成都市武侯区达到路口第二家扬州炒饭',
       		goods:'商品名称',
       		time:'1895.12.15 12:55',
       		people:'张天尊',
       		state:'用户'
        }],
        multipleSelection: []
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
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      }

    },
    
    created(){
    	let s = document.body.clientHeight;
    	this.h = s - 300;
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