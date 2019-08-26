<template>
  <div>
    <h3>New Arrivals</h3>
    <br>
    <b-container class="mt-5">
      <b-row class="justify-center">
        <b-col cols="2" v-for="(e,i) in [1,2,3,4,5,6]" :key="i">
            <Product></Product>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Product from '@/components/Product.vue';

export default {
  components: {
    Product,
  },
};
</script>

<style>

</style>
