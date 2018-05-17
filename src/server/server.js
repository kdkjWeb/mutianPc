import Axios from './index'
import Vue from 'vue'
import { Message, Loading } from 'element-ui';
/***
 * 公用的server方法
 */

 export default{
      //get请求
      get:(url,data,load)=>{
        let loading;
        if(load || load == undefined) {
            loading = Loading.service({
              lock: true,
              text: 'Loading',
              spinner: 'el-icon-loading',
              background: 'rgba(0, 0, 0, 0.5)'
            });
          }
        return new Promise((resolve,reject)=>{
            Axios.get(url,{
                params: data
            }).then((res)=>{
                   //如果动画为true，返回之后需要关闭动画
                if(load || load == undefined) {
                    loading.close();
                }

                if(res.data.code == 0){
                    resolve(res.data)
                }else if(res.data.code == 500){
                    Message({
                        message: res.data.msg,
                        type: 'warning'
                      });
                }
            },err=>{
                   //如果动画为true，返回之后需要关闭动画
                if(load || load == undefined) {
                    loading.close();
                }
                  
                if(res.data.msg){
                    Message({
                        message: res.data.msg,
                        type: 'warning'
                      });
                }else{
                    Message({
                        message: '网络好像出错了',
                        type: 'warning'
                      });
                }
                
            }).catch((err)=>{
                   //如果动画为true，返回之后需要关闭动画
                if(load || load == undefined) {
                    loading.close();
                }
                Message({
                message: '网络好像出错了',
                type: 'warning'
                });
                reject(err)
            })
        })
    },


    //post请求	
    post: (url,data,load)=>{
        let loading;
        if(load || load == undefined) {
            loading = Loading.service({
              lock: true,
              text: 'Loading',
              spinner: 'el-icon-loading',
              background: 'rgba(0, 0, 0, 0.5)'
            });
          }
        return new Promise((resolve,reject)=>{
            Axios.post(url,data)
            .then((res)=>{
                  //如果动画为true，返回之后需要关闭动画
                if(load || load == undefined) {
                    loading.close();
                }

                if(res.data.code == 0){
                    resolve(res.data)
                }else if(res.data.code == 500){
                    Message({
                        message: res.data.msg,
                        type: 'warning'
                      });
                }
                
            },err=>{
                  //如果动画为true，返回之后需要关闭动画
                if(load || load == undefined) {
                    loading.close();
                }

                if(res.data.msg){
                    Message({
                        message: res.data.msg,
                        type: 'warning'
                      });
                }else{
                    Message({
                        message: '网络好像出错了',
                        type: 'warning'
                      });
                }

            }).catch((err)=>{
                   //如果动画为true，返回之后需要关闭动画
                if(load || load == undefined) {
                    loading.close();
                }
                Message({
                message: '网络好像出错了',
                type: 'warning'
                });
                reject(err)
            })
        })
    }
 }