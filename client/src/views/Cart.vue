<template>
  <div>
      <b-container>
        <b-row class="content">
            <b-col cols="8">
                <h1><b>Your Cart</b></h1>
                <CartItem v-for="item in $store.state.cart.cart.products" :key="item._id" :item="item"></CartItem>
            </b-col>
            <b-col cols="4" class="pl-5">
                <b-card>
                    <h1><b>Total Price</b></h1>
                    <h2 class="text-secondary">Rp{{ total }}</h2>
                    <b-button @click="checkoutCart()" variant="primary" class="btn btn-block">Checkout</b-button>                    
                </b-card>
            </b-col>
        </b-row>
      </b-container>
  </div>
</template>

<script>
import CartItem from '@/components/CartItem.vue';

export default {
    components: {
        CartItem,
    },
    computed: {
        total() {
            let sum = 0
            this.$store.state.cart.cart.products.forEach(product => {
                sum += Number(product.price*product.quantity)
            });
            return sum
        }
    },
    methods: {
        checkoutCart(){
            let payload = {}
            payload._id = this.$store.state.cart.cart._id
            payload.status = 'paid'
            this.$store.dispatch('updateStatusCart', payload)
        }
    }
};
</script>

<style>

</style>
