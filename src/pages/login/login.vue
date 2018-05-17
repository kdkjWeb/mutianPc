<template>
    <div class="login">
        <div class="login_wrap">
            <h1 class="title">牧天优选</h1>
            <div class="row">
                <input type="text" v-model="user.username" placeholder="请输入用户名">
                <span class="iconfont icon-weibiaoti-_huabanfuben"></span>
            </div>
            <div class="row">
                <input type="password" v-model="user.userpas" placeholder="请输入密码">
                <span class="iconfont icon-ai-password"></span>
            </div>
            <div class="row login_btn" @click="login">登录</div>
        </div>
    </div>
</template>


<script>
export {default} from './loginCtr'
</script>


<style scoped>
.login{
    position: relative;
    width: 100%;
    height: 100%;
    background-image: url(../../assets/images/loginBg.jpg);
    background-size: cover;
    background-repeat: no-repeat;
}
.login_wrap{
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    margin: auto;
    width: 500px;
    height: 370px;
    background: rgba(0, 0, 0, .3);
    border-radius: 10px;
    text-align: center;
    
}
.login_wrap .title{
    padding: 50px 0 30px;
    color: #fff;
}

.row{
    position: relative;
    width: 360px;
    height: 40px;
    margin: 0 auto 30px;
}
.row input{
    width: calc(100% - 40px);
    height: 100%;
    border-radius: 20px;
    padding-left: 40px;
}
.row span.iconfont{
    position: absolute;
    left: 15px;
    top: 8px;
    font-size: 20px;
    color: #bbb;
}


.login_btn{
    background-color: #4768f3;
    text-align: center;
    border-radius: 20px;
    line-height: 40px;
    color: #fff;
    cursor: pointer;
    user-select: none;
}
</style>

