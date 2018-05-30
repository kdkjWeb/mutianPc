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
            optionList: [],
        }
    },
    methods:{
        onEditorBlur(){//失去焦点事件
        },
        onEditorFocus(){//获得焦点事件
        },
        onEditorChange(){//内容改变事件
        },
        
//      =========获取分类==========
		getClassList(){
			this.$post('newsType/getNewsTypeList', {}).then(res => {
				console.log(res)
				this.optionList = res.data;
			})
		},
		
		save(){
			
		}

        
    },
    created(){
    	this.getClassList();
    }
}