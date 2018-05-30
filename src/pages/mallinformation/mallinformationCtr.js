export default {
    data() {
        return {
            activeIndex: 0,
        }
    },
    methods: {
        linkTo(val){
            this.activeIndex = val
            if(val == 0){
                this.$router.push({
                    name: 'consultation'
                })
            }else if(val == 1){
                this.$router.push({
                    name: 'sendnews'
                })
            }
        }
    },
    created(){
    	let path = this.$route.path;
    	switch (path){
	    	case '/consultation':
	    	this.activeIndex = 0;
	    	break;
	    	case '/sendnews':
	    	this.activeIndex = 1;
	    	break;
    	}
    }
}