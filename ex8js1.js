/*
IIFE는 아래 형식 안에 다 집어넣으면 됨
(function(){

})();
*/

(function(){
    const {createApp} = Vue;

    createApp({
    data(){
        return{
            key1:'값1',
            key2:'값2',
            msg:'안녕',
            htmlString:'<p style="color:skyblue;">맑게 갠 파란 하늘</p>',
            su1:'0',
            su2:'0',
            txtMsg:'',
            daumlogo:'https://t1.daumcdn.net/daumtop_deco/images/pctop/2023/logo_daum.png'
        }
    },
    methods:{
        myFunc(){
            console.log(this.msg);
        },
        myChange1(){
            this.msg = "Hi"
        },
        myChange2(){
            this.msg = "Hello"
        }
    }
}).mount('#app1');
})();