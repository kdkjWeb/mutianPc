export default{
    data() {
        return {
            user: {
                username: '',
                userpas: ''
            }
        }
    },
    methods: {
        //点击登录按钮
        login(){
            if(!this.user.username || !this.user.userpas){
                this.$message({
                    message: '请填写完整信息',
                    type: 'warning'
                  });
                return;
            }
            this.$post('login',{
                username: this.user.username,
                password: this.user.userpas
            }).then(res=>{
              
                console.log(res)

                //登录成功之后跳转到首页
                setTimeout(()=>{
                    this.$router.push({
                        name: 'index'
                    })
                },1500)
            })
        }
    }
}