const {createApp} = Vue;

createApp({
    data() {
        return {
            name:'',
            java:'',
            react:'',
            vue:'',
            count:0,
            student : [], 
            num: 0,
            final:0
        }
    },
    methods: {
        onClick(){
            this.count++;
            this.num = this.java + this.react + this.vue;
            this.student.push({name:this.name, java:this.java, react:this.react, vue:this.vue, num:this.num})
            this.final = this.num + this.final;
            this.name = '';
            this.java = '';
            this.react = '';
            this.vue = '';
        }
    },
}).mount('#app');