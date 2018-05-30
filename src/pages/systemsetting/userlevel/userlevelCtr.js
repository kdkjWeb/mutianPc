export default {
    data() {
        return {
        	isVip:false,  //是否自动升级会员按钮状态
        	vipId:'',   //修改时上传的id
            levelList: [],
            Level:{
            	title:'',
            	allnum:'',  //团队
            	lowernum:'' //个人
            }
            
        }
    },
    methods: {
//  	======获取等级列表===============
    	getLevleList(){
    		this.$post('userlevel/getUserlevelList',{
    			
    		}).then(res=>{
    			console.log(res);
    			if(res.code==0){
    				this.levelList =res.data;
    			}
    		})
    	},
//==============点击li查询用户等级=========
		liActive(item){
			if(item.autoUpdate == 'y'){
				this.isVip = true;
			}else{
				this.isVip = false;
			};
			
			this.vipId = item.id;
			this.Level.title = item.title;
			this.Level.allnum = item.allnum;
			this.Level.lowernum = item.lowernum;
			
		},
  
  
//============用户满足消费额度后自动升级为会员=============
		changeVip(){
			this.isVip = !this.isVip;
			let isVip = this.isVip;
		},
			
//		===========添加===========
		addLevel(){
			if(this.Level.title == ''){
				this.$message({
			        showClose: true,
			        message:'请填写用户等级',
			        type: 'error'
			    });
			    return false;
			}
			
			let auto = this.isVip;
			let autoUpdate = '';
			if(auto){
				autoUpdate = 'y'
			}else{
				autoUpdate = 'n'
			}
			this.$post('userlevel/addUserlevel',{
				title:this.Level.title,
				allnum:this.Level.allnum,
				lowernum:this.Level.lowernum,
				autoUpdate:autoUpdate
			}).then(res=>{
				if(res.code == 0){
					this.$message({
			        	showClose: true,
			        	message: '添加成功',
			        	type: 'success'
			        })
					this.getLevleList();  //重新刷新列表
					this.clear();   //清空数据
				}else{
					this.$message({
			        	showClose: true,
			        	message:'添加失败',
			        	type: 'error'
			        });
				}
			})
			
		},
		
//		========修改======
		changeLevel(){
			let autoUpdate = '';
			if(this.isVip){
				autoUpdate = 'y'
			}else{
				autoUpdate = 'n'
			}
			
			this.$post('userlevel/updateUserlevel',{
				id:this.vipId,
				title:this.Level.title,
				allnum:this.Level.allnum,
				lowernum:this.Level.lowernum,
				autoUpdate:autoUpdate
			}).then(res=>{
				if(res.code == 0){
					this.$message({
			        	showClose: true,
			        	message: '修改成功',
			        	type: 'success'
			        })
					this.getLevleList();  //重新刷新列表
					this.clear();   //清空数据
				}else{
					this.$message({
			        	showClose: true,
			        	message:'修改失败',
			        	type: 'error'
			        });
				}
			})
		},
		
//		=======清空===========
		clear(){
			this.vipId = '';
			this.Level.title = '';
			this.Level.allnum = '';
			this.Level.lowernum = '';
			this.isVip = false;
		},
		
//=============删除=================		
		delList(){
			this.$get('userlevel/delUserlevel',{
				id:this.vipId
			}).then(res=>{
				if(res.code == 0){
					this.$message({
			        	showClose: true,
			        	message: '删除成功',
			        	type: 'success'
			        })
					this.getLevleList();  //重新刷新列表
					this.clear();   //清空数据
				}else{
					this.$message({
			        	showClose: true,
			        	message:'删除失败',
			        	type: 'error'
			        });
				}
			})
		}
		
		
		
		
    },
    created() {
    	this.getLevleList();
    }
}