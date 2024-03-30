<template>
 
   <div class="person">
     <h1>
        姓名:{{person.name}}
     </h1>

     <h1 >
        年龄:{{person.age}}岁
     </h1>
     <button @click="changeName">修改姓名</button>
     <button @click="changeAge">修改年龄</button>


 
 </div>
</template>

<script setup naem="Person">
  import{ref} from "vue";
const person =ref(
    {
    name:'dudu',
    age:18,
}
)

function changeName (){
   person.name += 'lala'
}
function changeAge (){
   person.age += 1
}

</script>

<style lang="scss">

</style>