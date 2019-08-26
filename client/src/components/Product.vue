<template>
<div>
  <b-card no-body class="border-0">
    <b-card no-body :img-src="detail.image" img-alt="new" img-top>
    </b-card>
    <b-card-text no-body class="text-left">
      <hr>
      <h4><a><b class="text-dark pl-3">{{ detail.name }}</b></a></h4>
      <h6><b class="text-primary pl-3">{{ detail.price }}</b></h6>
      <div v-if="$store.state.user.isLogin">
      <b-form-input v-model="quantity" type="number" min="1"></b-form-input>
      <b-button @click="addToCart" class="btn-block btn-sm btn-success mt-2">
        Add To Cart
      </b-button>
      </div>
      <div v-if="$store.state.user.isAdmin" class="btn-group mt-2 btn-block" role="group" aria-label="Basic example">
        <button @click="$bvModal.show(modal)" type="button" class="btn btn-sm btn-warning">Edit</button>
        <button @click="$store.dispatch('deleteProduct', detail._id)" type="button" class="btn btn-sm btn-danger">Delete</button>
      </div>
    </b-card-text>
  </b-card>

  <ModalEdit :detail="detail"></ModalEdit>
</div>
</template>

<script>
import ModalEdit from '@/components/ModalEdit.vue';

export default {
    components: {
      ModalEdit,
    },
    name: 'Product',
    data() {
      return {
        quantity: 1,
      }
    },
    computed: {
      cart() {
        return this.$store.state.cart.cart
      },
      modal() {
        return 'modal-edit-' + this.detail._id
      },
    },
    props: ['detail'],
    methods: {
      addToCart() {
        let payload = {}
        
        payload._id = this.detail._id
        payload.name = this.detail.name
        payload.price = this.detail.price
        payload.quantity = this.quantity
        payload.cartId = this.cart._id

        this.$store.dispatch('addToCart', payload)
      },
    }
};
</script>

<style>

</style>
