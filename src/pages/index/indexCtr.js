export default {
	  data() {
        return {
            activeIndex: 0,
        }
    },
    methods: {
        linkTo(val){
            this.activeIndex = val
            if(val == 0){   //用户管理
                this.$router.push({
                    name: 'management'
                })
            }else if(val == 1){   //会员业绩表
                this.$router.push({
                    name: 'achievement'
                })
            }else if(val == 2){   //商品管理
                this.$router.push({
                    name: 'manage'
                })
            }else if(val == 3){   //商品评论
                this.$router.push({
                    name: 'goodscomment'
                })
            }else if(val == 4){   //商城咨询
                this.$router.push({
                    name: 'mallinformation'
                })
            }else if(val == 5){    //系统设置
                this.$router.push({
                    name: 'systemsetting'
                })
            }
        } 
    },
    created:function(){
    	
//  	=获取地址栏的路径=======
    	let path = this.$route.path;
    	switch(path)
				{
					case '/management':   //用户管理
					this.activeIndex = 0;
					break;
					case '/achievement':  //会员业绩表
					this.activeIndex = 1;
					break;
					case '/goodsclass':   //商品管理  商品分类
					this.activeIndex = 2;
					break;
					case '/addgoods':   //商品管理  添加商品
					this.activeIndex = 2;
					break;
					case '/goodslist':   //商品管理  商品列表
					this.activeIndex = 2;
					break;
					case '/comment':   //商品评论
					this.activeIndex = 3;
					break;
					case '/consultation':   //商城咨询
					this.activeIndex = 4;
					break;
					case '/basicparameters':   //系统设置
					this.activeIndex = 5;
					break;
				}
    }
	
}