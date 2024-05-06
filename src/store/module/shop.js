import {defineStore} from 'pinia';

export const useShopStore=defineStore('shop',{
    state:()=>{
        return{
          cart:[] ,//初始化购物车为空数组
          
        }
    },
    getters:{},
    actions:{
        //添加购物车方法
        addToCart(item){
            this.cart.push(item);//将商品添加到购物车
        }
    }
})

