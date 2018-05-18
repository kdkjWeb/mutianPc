<template>
     <!-- 系统设置 -->
    <div class="setting">
        <nav class="nav">
            <div class="topBar">
                <div @click="linkTo(0)" :class="{ 'active' : activeIndex == 0}">基本参数设置</div>
                <div @click="linkTo(1)" :class="{ 'active' : activeIndex == 1}">用户等级设置</div>
            </div>
        </nav>
        <!-- 内容区域 -->
        <div class="container">
            <router-view/>
        </div>
    </div>
</template>


<script>
export {default} from './systemsettingCtr'
</script>


<style scoped>
.setting{
    height: 100%;
}
.nav{
    width: 100%;
    height: 80px;
    background-color:#fff;
    padding-top: 1px; 
}
.topBar{
    display: flex;
    display: -webkit-flex;
    width: 500px;
    height: 35px;
    margin: 22px auto;
    border: 1px solid #ddd;
    border-radius: 20px;
    color: #0366e8;
    overflow: hidden;
}
.topBar div{
    flex: 1;
    text-align: center;
    line-height: 35px;
    cursor: pointer;
    user-select: none;
}
.topBar div:first-child{
    border-right: 1px solid #ddd;
    box-sizing: border-box;
}
.active{
    background-color: #0366e8;
    color: #fff;
}

.container{
    width: 100%;
    height: calc(100% - 90px);
    margin-top: 10px;
}
</style>

