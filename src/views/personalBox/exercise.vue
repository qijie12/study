//--------***** 练习pinia *****---------//
<template>
 
    <h2>{{exerciseStore.count}}</h2>
    <h2>{{exerciseStore.str}}</h2>
    <h2>{{exerciseStore.arr}}</h2>
    <hr>
    <h3>{{count}}</h3>
    <h3>{{str}}</h3>
    <h3>{{arr}}</h3>
    <hr>
    <h3>{{cite}}</h3> 
    <button @click="change">修改</button>
 
</template>

<script setup>
 import {useExerciseStore} from '../../store/module/exercise';
 import {storeToRefs} from 'pinia';
const exerciseStore =useExerciseStore();

//-------*** 解构访问pinia容器数据 ***--------  =>(h3标签所写是解构后)
const {count,str,arr,cite} =storeToRefs(exerciseStore);
//const {count,str}=exercisrStore -----这样写拿到的数据不是响应式的，需要引用storeToRefs

//-----*** 数据的修改 ***------
const change=()=>{
    //方法1：（改一个建议这个）
    // exerciseStore.count++
    // exerciseStore.str='hhh'
    //---------------------------------------------
    //方法2：修改多组数据 使用$patch 批量更新（改多个 简单的）
    // exerciseStore.$patch({
    //     count:exerciseStore.count+1,
    //     str:'ddd',
    //     arr:[...exerciseStore.arr,5,6]
    // })
    //---------------------------------------------
    //方法3：使用$patch一个函数 批量更新（改多个 复杂的）
    // exerciseStore.$patch(state=>{
    //     state.count++
    //     state.str='善善书'
    //     state.arr.push(5,6)
    // })
    //---------------------------------------------
    //方法4：逻辑较多时 封装到actions做处理
    exerciseStore.changeState(10)
}
console.log(exerciseStore.count);
console.log(str.value)
console.log(count.value)
</script>

<style lang="scss">
// #share-exercise-box{
//   background:red;
// }
</style>