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
                    name: 'mallinformation'
                })
            }else if(val == 1){
                this.$router.push({
                    name: 'sendnews'
                })
            }
        }
    }
}