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
    }
//  created:fun
	
}