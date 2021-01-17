<template>
    <div class="vuex-helper">
        <h1>veuxヘルパー</h1>
        <p>{{ cartItems }}</p>
        <p>カート内の商品は {{ cartItemCount }}</p>
        <p>{{ message }}</p>
        <p>{{ counter }}</p>

        <button @click="increment(10)">helper increment</button>
        <button @click="asyncIncrement(333)">action increment</button>
    </div>
</template>

<script>
// vuexからstateを取り出す
import { mapState , mapMutations ,mapGetters, mapActions } from 'vuex';

export default {
    computed:{
        ...mapState([
            'message',
            'counter',
            'cartItems'
        ]),

        ...mapGetters([
            'cartItemCount',
        ])
    },

    methods:{
        ...mapMutations([
            //index.jsに設定したincrementメソッドが使えるようになる
            'increment'
        ]),

        ...mapActions({
            asyncIncrement: 'INCREMENT',
        })
    }
}
</script>