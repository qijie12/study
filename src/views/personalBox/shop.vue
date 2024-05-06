<template>
 <ul>商品列表
    <li v-for="(item,index) in items" :key="index">
       商品名称:{{item.name}}-商品数量:{{item.num}}<br>
       <button @click="addToCart(item)"> 添加到购物车 </button>
    </li>
    <!-- <li>
        商品名称-商品数量<br>
        <button>添加到购物车</button>
    </li>
    <li>
        商品名称-商品数量<br>
        <button>添加到购物车</button>
    </li>
    <li>
        商品名称-商品数量<br>
        <button>添加到购物车</button>
    </li> -->
 </ul>
</template>

<script setup>
import {ref} from 'vue';
import {storeToRefs} from 'pinia';
import {useShopStore} from '../../store/module/shop';

const shopStore= useShopStore();

const addToCart=(item)=>{
   shopStore.addToCart(item)
   shopStore.num++
}

const items=ref([
    {name:'商品1',num:10},
    {name:'商品2',num:15},
    {name:'商品3',num:20},
]);

</script>

<style lang="scss"></style>