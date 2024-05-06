import {defineStore} from 'pinia';

//-----定义并导出容器
export const useExerciseStore= defineStore('exercise',{
    //用来存储全局状态
    //必须是箭头函数
    state:()=>{
        return{
            count:10,
            str:'啦啦啦----',
            arr:[1,2,3],
        }
    },
    //用来封装计算属性 有缓存功能
    getters:{
        cite(state){
            console.log('cite**************')
            return state.count+10
          //return this.count+10
        }
        // 若使用了this 则必须手动指定返回值的类型 否则推导不出来
        // cite():number{
        //     console.log('cite**************')
        //     return this.count+10
        // }

    },
    //修改业务逻辑 修改state
    actions:{
        // changeState(自定义参数)
        //不能使用箭头函数定义action
        
        changeState(number){
            this.count+=number,
            this.str='快捷方便',
            this.arr.push(6,9)
            //--------------------------------------------
            //this.$patch({
            //   count:exerciseStore.count+1,
            //   str:'***',
            //   arr:[...exerciseStore.arr,5,6] 
            // })
            //---------------------------------------------
            //this.$patch(state=>{state.count++,state.str='***'})
        }

    },
})
