<template>
    <div class="consultation">
        <div class="title">
            咨询分类 :
            <input type="text" v-model="myInput">
            <span @click="addClass">增加</span>
            <span @click="changeClass">修改</span>
            <span @click="delClass">删除</span>
        </div>
        <ul class="assortList">
            <li v-for="(item,index) in assortList" :key="index" @click="change(item)">
                {{item.name}}
            </li>
        </ul>
        
        <div class="Copyright">Copyright ©2018-2019     成都恺缔科技有限公司</div>
    </div>
</template>


<script>
export {default} from './consultationCtr'
</script>



<style scoped>
.consultation{
    height: 100%;
    background-color: #fff;
}
.title{
    text-align: center;
    padding-top: 30px;
}
.title input{
    height: 35px;
    width: 200px;
    border: 1px solid #ddd;
    border-radius: 20px;
    vertical-align: middle;
    padding-left: 15px;
}
.title span{
    display: inline-block;
    width: 100px;
    height: 35px;
    line-height: 35px;
    text-align: center;
    margin-left: 20px;
    color: #fff;
    background-color: #0366e8;
    border-radius: 20px;
    cursor: pointer;
    user-select: none;
}
.assortList{
    width: 40%;
    max-height: 300px;
    min-height: 200px;
    margin: 30px auto;
    border: 1px solid #ddd;
    overflow: auto;
}
.assortList li{
    height: 35px;
    line-height: 35px;
    padding: 0 20px;
    border-bottom: 1px solid #ddd;
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

