<template>
    <div class="sendnews">
        <!-- <p class="title">
            分类：
            <select>
                <option value="" v-for="(item,index) in optionList" :key="index">{{item.title}}</option>
            </select>
        </p> -->
        <el-form class="form" ref="form" :model="form" label-width="80px">
            <el-form-item label="分类：">
                <el-select v-model="form.region" placeholder="请选择新闻分类">
               	 	<el-option v-for="(item,index) in optionList" :key="index" :label="item.name" :value="item.name"></el-option>
                </el-select>
            </el-form-item>
        </el-form>

        <div class="editor">
            <quill-editor 
            v-model="content" 
            ref="myQuillEditor" 
            :options="editorOption" 
            @blur="onEditorBlur($event)" @focus="onEditorFocus($event)"
            @change="onEditorChange($event)">
            </quill-editor>
        </div>

        <div class="send" @click="save">发布</div>
    </div>
</template>


<script>
export {default} from './sendnewsCtr' 
</script>


<style>
.sendnews{
    height: 100%;
    background-color: #fff;
}
/*.title{
    text-align: center;
    padding-top: 30px;
}
.title select{
    width: 200px;
    height: 35px;
    line-height: 35px;
    outline: none;
    border: 1px solid #ddd;
    border-radius: 20px;
    -webkit-border-radius: 20px;
    -moz-border-radius: 20px;
}*/

.form{
    padding: 30px 0 0 40%;
}
.el-input--suffix .el-input__inner {
    border-radius: 20px;
}
.editor{
    width: 90%;
    margin: 0 auto;
    height: calc(100% - 150px);
}
.quill-editor{
    height: calc(100% - 80px);
}
.send{
    width: 150px;
    height: 35px;
    border-radius: 20px;
    background-color: #ff5959;
    text-align: center;
    line-height: 35px;
    color: #fff;
    margin: 0 auto;
    cursor: pointer;
    user-select: none;
}
</style>

