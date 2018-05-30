export default {
	data() {
		return {
			activeIndex: 0,
		}
	},
	methods: {
		linkTo(val) {
			this.activeIndex = val
			if(val == 0) {
				this.$router.push({
					name: 'basicparameters'
				})
			} else if(val == 1) {
				this.$router.push({
					name: 'userlevel'
				})
			}
		}
	},
	created: function() {
		let path = this.$route.path;
		switch(path) {
			case '/basicparameters': //基本参数设置
				this.activeIndex = 0;
				break;
			case '/userlevel': //用户等级设置
				this.activeIndex = 1;
				break;
		}
	}
}