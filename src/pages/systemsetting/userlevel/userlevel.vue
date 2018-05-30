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
                <li v-for="(item,index) in levelList" :key="index" @click="liActive(item)">
                    <span>{{item.title}}</span>
                    <span>{{item.allnum?item.allnum:'0'}}</span>
                    <span>{{item.lowernum?item.lowernum:'0'}}</span>
                </li>
            </ul>
        </div>
        <div class="userlevel_right">
            <p class="title"> 
                <i class="iconfont" :class="isVip?'icon-roundcheckfill':'icon-roundcheck'" @click="changeVip()"></i>
                 用户满足消费额度后自动升级为会员
            </p>
            <div class="row">
                <span>用户等级：</span>
                <input type="text" v-model="Level.title">
            </div>
            <div class="row">
                <span>团队销量：</span>
                <input type="text" v-model="Level.allnum">
            </div>
            <div class="row">
                <span>个人销量：</span>
                <input type="text" v-model="Level.lowernum">
            </div>

            <div class="row row_btn">
                <span @click="addLevel">增加</span>
                <span @click="changeLevel">修改</span>
                <span @click="delList">删除</span>
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
    overflow: auto;
    max-height: calc(100% - 100px);
}
.container li{
    display: flex;
    display: -webkit-flex;
    height: 60px;
    line-height: 60px;
    border-bottom: 1px solid #ddd;
    cursor: pointer;
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

/*==============*/
.icon-roundcheck{
		font-size: 22px;
		color: #c3c3c3;
		vertical-align: middle;
		cursor: pointer;
	}
	.icon-roundcheckfill{
		font-size: 22px;
		color: #ff7200;
		vertical-align: middle;
		cursor: pointer;
	}
</style>
