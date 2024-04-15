<template>
  <div id="share-practice-box">
     <!-- <h2>{{exercise}}</h2>
     <h3>{{9>6 ?'true' :'false'}}</h3>
     <h3>{{6+6}}</h3>
     <h3>{{'演练'}}</h3>
     <h3>{{message()}}</h3> 
     <h3>study:{{exercise}}</h3>
     <hr>
     <h3>{{num}}</h3>
     <hr>
     <h3>{{ user}}</h3>
     <hr>
     <h3>{{array}}</h3> -->
     <h2>{{people}}</h2>
     <hr>
     <h2>{{user}}</h2>
     <h2>{{gender}}</h2>
     <h2 v-text="num"></h2>
     <h2>{{num}}</h2>
  </div>
</template>

<script setup>
// import {ref} from 'vue';
//   const exercise='练习插值表达式';
//   const message =()=>('箭头函数');

// //   const num =ref(0);
// //   setInterval(()=>{
// //      num.value++;
// //      console.log(num,'11111111111')
// //   },1000);
// const num =ref(0 <= 10 ? 0 : 10)
// const user=ref({
//     name:'haha',
//     gender:'',
// });
// setInterval(()=>{ 
//     user.value.gender=(num.value>5&&num.value<10)?'man':'woman'

//     // if(num.value>5&&num.value<=10){
//     //    user.value.gender='man';
//     // }
//     // else if(num.value>0&&num.value<=5){
//     //     user.value.gender='woman'
//     // };
// },2000);

// const array=ref([1,2,3,4]);
// // setInterval(()=>{
// //     array.value.push(Math.random()),60000
// // })
import {reactive,toRef,toRefs,ref,computed} from 'vue';
// //toRef (响应式对象，'属性名称')
// const people=reactive({
//    text:'演练', 
//    name:'Tom',
//    message:'cat',
// });
// const nameRef=toRef(people,'name')
// people.name="Jan";
// const message=toRef(people,'message')
// people.message="mouse"

// const user=reactive({
//     gender:'man',
//     num:5,
// })
// const{gender,num}=toRefs(user)
const num =ref(9);
const people=computed(()=>
     num.value * 2
);


</script>

 <style lang="scss">
  #share-practice-box{
    width:100%;
    height:100vh;
    background-color:#ffffff;
    h2{
        color:black;
        padding:0;
        margin:0;
    }
  }
</style>