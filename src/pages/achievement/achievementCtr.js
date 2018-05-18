  export default {
    data() {
      return {
      	input:'',//搜索框 的值
      	currentPage3: 5,   //分页的页数
      	h:350,
        tableData3: [{
			name:'张天师',
        	nickname:'昵称昵称',
        	buySome:'张打仗',
        	money:500,
        	time:'5000',
        	product:'三级'
			},{
			name:'张天师',
        	nickname:'昵称昵称',
        	buySome:'张打仗',
        	money:500,
        	time:'5000',
        	product:'三级'
			},{
			name:'张天师',
        	nickname:'昵称昵称',
        	buySome:'张打仗',
        	money:500,
        	time:'5000',
        	product:'三级'
			},{
			name:'张天师',
        	nickname:'昵称昵称',
        	buySome:'张打仗',
        	money:500,
        	time:'5000',
        	product:'三级'
			}],
        ultipleSelection: []
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