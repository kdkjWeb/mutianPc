<template>
      <!-- 基本参数设置 -->
    <div class="basicparameters">
        <nav class="nav">
            <div class="topBar">
                <div>基本参数设置</div>
                <div>用户等级设置</div>
            </div>
        </nav>
    </div>
</template>


<script>
export {default} from './basicparametersCtr'
</script>

<style scoped>
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
}
.active{
    background-color: #0366e8;
    color: #fff;
}
</style>

