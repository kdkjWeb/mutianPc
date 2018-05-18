<template>
    <!-- 基本参数设置 -->
     <div class="basicparameters">
         <div class="container">
             <div class="flex">
                 升级会员需购买<input type="number">元
             </div>
             <div class="flex">
                 <span class="iconfont icon-gou"></span>
                 用户满足消费额度后自动升级为会员
             </div>
         </div>
         <div class="save">保存</div>
     </div>
</template>


<script>
export {default} from './basicparametersCtr'
</script>

<style scoped>
.basicparameters{
    background-color: #fff;
    height: 100%;
}
.container{
    display: flex;
    display: -webkit-flex;
    width: 100%;
    padding: 20px 0 0;
}
.container div.flex{
    flex: 1;
    text-align: center;
}
.container div input{
    width: 90px;
    height: 35px;
    border: 1px solid #ddd;
    border-radius: 20px;
    margin: 0 10px;
    padding-left: 10px;
}
.container div span.iconfont{
    vertical-align: middle;
    font-size: 30px;
    color: #ff7303;
}
.save{
    width: 200px;
    height: 35px;
    text-align: center;
    line-height: 35px;
    user-select: none;
    cursor: pointer;
    border-radius: 50px;
    background-color: #ff5959;
    color: #fff;
    margin: 50px auto;
}
</style>

