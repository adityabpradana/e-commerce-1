<template>
  <b-row class="border-top border-bottom py-4">
                    <b-col cols="5" class="text-left">
                    <h5 class="text-primary"><b>{{ item.name }}</b></h5>
                    <h6>Rp{{ item.price }}</h6>
                    </b-col>
                    <b-col cols="1">
                        <h3><a href="#" @click.prevent="removeFromCart()"><font-awesome-icon icon="trash"></font-awesome-icon></a></h3>
                    </b-col>
                    <b-col cols="3">
                        <h3>Quantity: {{ item.quantity}}</h3>
                        <!-- <b-input-group>
                        <b-form-input :value="item.quantity" type="number" class="w-50" min="0"></b-form-input>
                        <b-input-group-append>
                            <b-button variant="outline-secondary" class="btn-sm">Update</b-button>
                        </b-input-group-append>
                        </b-input-group> -->
                    </b-col>
                    <b-col cols="3" class="text-right">
                    <h4>Rp{{ item.price*item.quantity }}</h4>
                    </b-col>
                </b-row>
</template>

<script>
export default {
    data() {
        return {
            count: ''
        }
    },
    props: ['item'],
    methods: {
        removeFromCart(){
            let payload = {}

            payload._id = this.item._id
            payload.cartId = this.$store.state.cart.cart._id

            this.$store.dispatch('removeFromCart', payload)
        }
    }
}
</script>

<style>

</style>