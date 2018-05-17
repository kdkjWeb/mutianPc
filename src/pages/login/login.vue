<template>
    <div class="login">
        <div class="login_wrap">
            <h1 class="title">牧天优选</h1>
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
    width: 585px;
    height: 470px;
    background: rgba(0, 0, 0, .3);
    border-radius: 10px;
    text-align: center;
}
.login_wrap .title{
    color: #fff;
}
</style>

