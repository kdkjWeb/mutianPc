import { quillEditor } from 'vue-quill-editor'

export default {
    data() {
        return {
            content:null,
            editorOption:{
                modules:{
                    toolbar:[
                      ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
                      ['blockquote', 'code-block'],
                      ['image'],
                      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
                      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
                      [{ 'indent': '-1'}, { 'indent': '+1' }],
                      [{ 'size': ['small', false, 'large', 'huge'] }], 
                      [{ 'color': [] }, { 'background': [] }], 
                      [{ 'font': [] }],
                      [{ 'align': [] }]
                    ]
                },
                placeholder:'请输入内容......'
            },
            form: {
                region: '',
              },
            optionList: [
                {
                    title: '品牌故事1'
                },{
                    title: '品牌故事2'
                },{
                    title: '品牌故事3'
                },{
                    title: '品牌故事4'
                },{
                    title: '品牌故事5'
                }, {
                    title: '品牌故事6'
                },{
                    title: '品牌故事7'
                },{
                    title: '品牌故事8'
                },{
                    title: '品牌故事9'
                },{
                    title: '品牌故事10'
                }
            ]
        }
    },methods:{
        onEditorBlur(){//失去焦点事件
        },
        onEditorFocus(){//获得焦点事件
        },
        onEditorChange(){//内容改变事件
        }
    }
}