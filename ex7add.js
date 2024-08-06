const {createApp} = Vue;

createApp({
    data(){
        return{
            menulist:['아이스커피', '오렌지주스', '밀크티', '바닐라라테'],
            objArr:[
                {site:'제주', food:'감귤'},
                {site:'부산', food:'국밥'},
                {site:'대구', food:'막창'}
            ],
            myArr:['일','이','삼','사','오'],
            numArr:[1,2,3,4,5]
        }
    },
    methods:{
        addList(){
            this.myArr.push('추가');
        },
        addListIndex(arg){
            this.myArr.splice(arg, 0, '삽입'); // 배열요소 제거하고 새 요소로 대체
        },
        changeList(arg){
            this.myArr.splice(arg, 1, '수정');
        },
        deleteList(arg){
            this.myArr.splice(arg, 1);
        }
    }
}).mount('#app');