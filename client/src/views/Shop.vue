<template>
<b-container fluid>
  <b-row class="content justify-content-center" fixed="left">
      <!-- <b-col cols="2">
        <b-card class="sidebar">

        </b-card>
      </b-col> -->
      <b-col cols="10">
        <b-row>
          <b-col cols="3" class="shop px-2 mb-4 pb-4" v-for="e in products" :key="e._id">
              <Product :detail="e"></Product>
          </b-col>
        </b-row>
      </b-col>
  </b-row>
</b-container>
</template>

<script>
import Product from '@/components/Product.vue';
import { mapState } from 'vuex';

export default {
  name: 'Store',
  components: {
    Product,
  },
  computed: {
    ...mapState({
      products: state => state.product.products
    })
  },
  created(){
    this.$store.dispatch('findAllProducts')
  },
};
</script>

<style>
  .shop {
    margin-bottom: 20px;
  }

  .sidebar {
    position: fixed;
    height: 85vh;
    width: 15%;
  }
</style>
