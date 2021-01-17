<template>
  <div class="home">
    <!-- $storeではアクセスできる -->
   <p>
    {{ $store.state.message }}
  </p>
  <h1>
    {{ $store.state.counter }}
  </h1>

  <h2>カートの商品の数 {{ cartItemCount }}</h2>

  <!-- コンポーネント から直接stateをいじることはできない。 -->
  <button @click="increment">加算</button>
  <!-- storeの設定したmutationをコミットすることで実行できる。 -->
  </div>
</template>

<script>

// import { mapMutations } from 'vuex';

export default {
  name: "Home",


  methods:{
    increment(){ 
      //commitする payloadはcommitする際に与える引数
      this.$store.commit('increment' ,1000);

      //actionsの実行はdispath
      this.$store.dispatch('INCREMENT' ,500);
    }
  },

  computed:{
    cartItemCount(){
      return this.$store.getters.cartItemCount;
    }
  }
};
</script>
