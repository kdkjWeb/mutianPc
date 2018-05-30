<template>
    <!-- 基本参数设置 -->
     <div class="basicparameters">
         <div class="container">
             <div class="flex">
                 升级会员需购买<input type="number" v-model="myInput">元
             </div>
             <div class="flex">
               <i class="iconfont" :class="isVip?'icon-roundcheckfill':'icon-roundcheck'" @click="changeVip()"></i>
                 	用户满足消费额度后自动升级为会员
             </div>
         </div>
         <div class="save" @click="saveLevel">保存</div>
         
          <div class="Copyright">Copyright ©2018-2019     成都恺缔科技有限公司</div>
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
.Copyright{
	position: absolute;
	bottom: 20px;
	left: 0;
	right: 0;
	color: #a1a1a1;
	font-size: 14px;
	text-align: center;
	line-height: 30px;
}
</style>

