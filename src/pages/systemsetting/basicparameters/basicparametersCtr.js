export default {
    data() {
        return {
            myInput:'',
            isVip:true,
        }
    },
    methods:{
    	changeVip(){
			this.isVip = !this.isVip;
			let isVip = this.isVip;
		},
//		=======修改======
		saveLevel(){
			let autoUpdate = '';
			if(this.isVip){
				autoUpdate = 'y'
			}else{
				autoUpdate = 'n'
			}
			
			this.$post('userlevel/updateUserlevel',{
				id:'1',
				needfei:this.myInput,
				autoUpdate:autoUpdate
			}).then(res=>{
				if(res.code == 0){
					this.$message({
			        	showClose: true,
			        	message: '修改成功',
			        	type: 'success'
			       })
				}else{
					this.$message({
			        	showClose: true,
			        	message:'修改失败',
			        	type: 'error'
			        });
				}
			})
		},
		
    }
}