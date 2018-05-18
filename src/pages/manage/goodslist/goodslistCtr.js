  export default {
    data() {
      return {
      	input:'',//搜索框 的值
      	currentPage3: 5,   //分页的页数
      	h:350,
        tableData3: [{
        	goodsName:'辣子鸡',
        	classification:'冷吃类',
        	goodsNum:5,
        	upOrdown:'上架',
        	price:50,
        	company:'袋',
        	recommend:'是',
        	rStarTime:'15:50',
        	rEndTime:'16:00',
        	kill:'是',
        	kStarTime:'15:00',
        	kEndTime:'15:00',
        	img:'有'
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
        console.log(`当前页: ${val}`);tp
      }

    },
    
    created(){
    	let s = document.body.clientHeight;
    	this.h = s - 390;
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