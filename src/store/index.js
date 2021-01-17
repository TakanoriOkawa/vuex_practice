import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

//
export default new Vuex.Store({
  state: { //dataと同じようなもの
    message: 'Hello Vuex!',
    counter: 0,
    cartItems: ['肉','魚','りんご','ブドウ']
  },
  mutations: { //methodsと同じようなもの
    increment(state , payload){
      state.counter += payload;
    }
  },
  actions: { // methodsの実行を非同期に行う場所。
    INCREMENT(context,payload){
      setTimeout(() => {
        context.commit('increment' , payload)
      },3000);
    }
  },

  getters:{
    //コンポーネントでstateの値を取得する方法。
    cartItemCount(state){
      return state.cartItems.length;
    }
  },
  modules: {}
});
