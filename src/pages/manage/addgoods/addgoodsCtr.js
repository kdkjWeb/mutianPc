export default {
	data() {
		return {
			options: [{
				value: '选项1',
				label: '黄金糕'
			}, {
				value: '选项2',
				label: '双皮奶'
			}, {
				value: '选项3',
				label: '蚵仔煎'
			}, {
				value: '选项4',
				label: '龙须面'
			}, {
				value: '选项5',
				label: '北京烤鸭'
			}],
			value: '',
			radio: '1',
			dialogImageUrl: '',
			dialogVisible: false,
			isCommend: false, ///推荐商品选中
			isKill: false,   //是否秒杀
			isChoose : null    //是否上架
		}

	},
	methods: {
		handleRemove(file, fileList) {
			console.log(file, fileList);
		},
		handlePictureCardPreview(file) {
			this.dialogImageUrl = file.url;
			this.dialogVisible = true;
		},
		
		changeCommend(){   //切换是否推荐
			this.isCommend = !this.isCommend ;
		},
		changeKill(){   //是否秒杀
			this.isKill = !this.isKill ;
		},
		changeChoose(){
			this.isChoose = !this.isChoose ;
		}
		
	}
}