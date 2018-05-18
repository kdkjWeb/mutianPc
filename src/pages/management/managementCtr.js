  export default {
    data() {
      return {
      	input:'',//搜索框 的值
      	currentPage3: 5,   //分页的页数
      	h:350,
        tableData3: [{
        	Phone:'1842656566',
        	name: '王小虎',
        	nickname:'昵称昵称',
       		upId:'15',
       		upName:'加加',
       		level:'用户',
       		grade:'三级',
       		card:'5546513211323',
       		bank:'广大银行',
       		vip:'否',
       		money:'50005',
       		address:'成都市武侯区达到路口第二家扬州炒饭'
        },{
        	Phone:'1842656566',
        	name: '王小虎',
        	nickname:'昵称昵称',
       		upId:'15',
       		upName:'加加',
       		level:'用户',
       		grade:'三级',
       		card:'5546513211323',
       		bank:'广大银行',
       		vip:'否',
       		money:'50005',
       		address:'成都市武侯区达到路口第二家扬州炒饭'
        },{
        	Phone:'1842656566',
        	name: '王小虎',
        	nickname:'昵称昵称',
       		upId:'15',
       		upName:'加加',
       		level:'用户',
       		grade:'三级',
       		card:'5546513211323',
       		bank:'广大银行',
       		vip:'否',
       		money:'50005',
       		address:'成都市武侯区达到路口第二家扬州炒饭'
        },{
        	Phone:'1842656566',
        	name: '王小虎',
        	nickname:'昵称昵称',
       		upId:'15',
       		upName:'加加',
       		level:'用户',
       		grade:'三级',
       		card:'5546513211323',
       		bank:'广大银行',
       		vip:'否',
       		money:'50005',
       		address:'成都市武侯区达到路口第二家扬州炒饭'
        },{
        	Phone:'1842656566',
        	name: '王小虎',
        	nickname:'昵称昵称',
       		upId:'15',
       		upName:'加加',
       		level:'用户',
       		grade:'三级',
       		card:'5546513211323',
       		bank:'广大银行',
       		vip:'否',
       		money:'50005',
       		address:'成都市武侯区达到路口第二家扬州炒饭'
        },{
        	Phone:'1842656566',
        	name: '王小虎',
        	nickname:'昵称昵称',
       		upId:'15',
       		upName:'加加',
       		level:'用户',
       		grade:'三级',
       		card:'5546513211323',
       		bank:'广大银行',
       		vip:'否',
       		money:'50005',
       		address:'成都市武侯区达到路口第二家扬州炒饭'
        },{
        	Phone:'1842656566',
        	name: '王小虎',
        	nickname:'昵称昵称',
       		upId:'15',
       		upName:'加加',
       		level:'用户',
       		grade:'三级',
       		card:'5546513211323',
       		bank:'广大银行',
       		vip:'否',
       		money:'50005',
       		address:'成都市武侯区达到路口第二家扬州炒饭'
        },{
        	Phone:'1842656566',
        	name: '王小虎',
        	nickname:'昵称昵称',
       		upId:'15',
       		upName:'加加',
       		level:'用户',
       		grade:'三级',
       		card:'5546513211323',
       		bank:'广大银行',
       		vip:'否',
       		money:'50005',
       		address:'成都市武侯区达到路口第二家扬州炒饭'
        },{
        	Phone:'1842656566',
        	name: '王小虎',
        	nickname:'昵称昵称',
       		upId:'15',
       		upName:'加加',
       		level:'用户',
       		grade:'三级',
       		card:'5546513211323',
       		bank:'广大银行',
       		vip:'否',
       		money:'50005',
       		address:'成都市武侯区达到路口第二家扬州炒饭'
        },{
        	Phone:'1842656566',
        	name: '王小虎',
        	nickname:'昵称昵称',
       		upId:'15',
       		upName:'加加',
       		level:'用户',
       		grade:'三级',
       		card:'5546513211323',
       		bank:'广大银行',
       		vip:'否',
       		money:'50005',
       		address:'成都市武侯区达到路口第二家扬州炒饭'
        },{
        	Phone:'1842656566',
        	name: '王小虎',
        	nickname:'昵称昵称',
       		upId:'15',
       		upName:'加加',
       		level:'用户',
       		grade:'三级',
       		card:'5546513211323',
       		bank:'广大银行',
       		vip:'否',
       		money:'50005',
       		address:'成都市武侯区达到路口第二家扬州炒饭'
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