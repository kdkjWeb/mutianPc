<template>
        <!-- 用户等级 -->
    <div class="userlevel">
        <div class="userlevel_left">
            <ul class="container">
                <li>
                    <span>用户等级</span>
                    <span>团队销量</span>
                    <span>个人销量</span>
                </li>
                <li v-for="(item,index) in levelList" :key="index">
                    <span>{{item.title}}</span>
                    <span>{{item.teamSales}}</span>
                    <span>{{item.personalSales}}</span>
                </li>
            </ul>
        </div>
        <div class="userlevel_right">
            <p class="title"> 
                <span class="iconfont icon-gou"></span>
                 用户满足消费额度后自动升级为会员
            </p>
            <div class="row">
                <span>用户等级：</span>
                <input type="text">
            </div>
            <div class="row">
                <span>团队销量：</span>
                <input type="text">
            </div>
            <div class="row">
                <span>个人销量：</span>
                <input type="text">
            </div>

            <div class="row row_btn">
                <span>增加</span>
                <span>修改</span>
                <span>删除</span>
            </div>
        </div>
    </div>
</template>



<script>
export {default} from './userlevelCtr'
</script>



<style scoped>
.userlevel{
    display: flex;
    display: -webkit-flex;
    width: 100%;
    height: 100%;
}
.userlevel_left{
    flex: 6;
    height: 100%;
    background-color: #fff;
    margin-right: 5px;
}
.container{
    width: 80%;
    margin: 50px auto 0; 
    /* border-top: 1px solid #ddd;
    border-left: 1px solid #ddd; */
    border: 1px solid #ddd;
    border-radius: 10px;
    overflow: hidden;
}
.container li{
    display: flex;
    display: -webkit-flex;
    height: 60px;
    line-height: 60px;
    border-bottom: 1px solid #ddd;
}
.container li:first-child{
    background-color: #d7e9f7;
    color: #0366e8;
}
.container li:last-child{
    border-bottom: none;
}
.container li span{
    flex: 1;
    text-align: center;
    border-right: 1px solid #ddd;
}
.container li span:last-child{
    border-right: none;
}


.userlevel_right{
    flex: 5;
    height: 100%;
    background-color: #fff;
    margin-left: 5px;
}
.userlevel_right .title{
    text-align: center;
    padding: 50px 0 30px;
}
.userlevel_right span.iconfont{
    vertical-align: middle;
    font-size: 30px;
    color: #ff7303;
}
.row{
    max-width: 60%;
    height: 35px;
    margin: 0 auto 20px;
    line-height: 35px;
}
.row span{
    display: inline-block;
    width: 80px;
}
.row input{
    height: 100%;
    width: calc(100% - 105px);
    border: 1px solid #ddd;
    border-radius: 20px;
    padding-left: 15px;
}
.row_btn{
    display: flex;
    display: -webkit-flex;
    justify-content: space-around;
    padding-top: 30px;
}
.row_btn span{
    display: inline-block;
    width: 30%;
    height: 35px;
    line-height: 35px;
    text-align: center;
    background-color: #0088e9;
    color: #fff;
    border-radius: 20px;
    cursor: pointer;
    user-select: none;
}
</style>
