<template>
  <div>
    <b-row class="content">
        <b-col cols="8">
            <h1 class="text-center">Transactions</h1>
            <b-table :items="carts" :fields="fields" striped responsive="sm" class="pl-4">
            <template slot="[status]" slot-scope="row">
                <b-badge v-if="row.item.status == 'paid'" class="p-2 btn-block" variant="success">
                    {{row.item.status}}
                </b-badge>
                <b-badge v-if="row.item.status == 'delivered'" class="p-2 btn-block" variant="primary">
                    {{row.item.status}}
                </b-badge>
            </template>

            <template slot="[show_details]">
                <b-button size="sm" class="mr-2">
                Show Details
                </b-button>
            </template>
            </b-table>
        </b-col>
        <b-col cols="4">
            <h1 class="text-center">Create Product</h1>
            <b-form @submit.prevent="createProduct()" class="px-4">
                <b-form-input v-model="product.name" type="text" placeholder="name" class="mt-3"></b-form-input>
               <b-form-file
               v-model="product.file"
               class="mt-3"
                placeholder="Choose a file or drop it here..."
                drop-placeholder="Drop file here..."
                ></b-form-file>
                <b-form-input v-model="product.price" type="number" placeholder="price" class="mt-3"></b-form-input>
                <b-form-input v-model="product.stock" type="number" placeholder="stock" class="mt-3"></b-form-input>
                <b-button type="submit" class="mt-3 btn-block btn-primary">Create Product</b-button>
            </b-form>
        </b-col>
    </b-row>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        product: {
          name: '',
          file: '',
          price: '',
          stock: ''
        },
        fields: ['invoice', { key: 'customer.username', label: 'Username', }, 'status', 'show_details'],
      }
    },
    computed: {
      carts() {
        return this.$store.state.cart.carts.filter(el => el.status !== 'unpaid')
      },
    },
    methods: {
      createProduct(){
        this.$store.dispatch('createProduct', this.product)
        .then(() => {
          this.product = {}
        })
      },
    },
    created() {
      this.$store.dispatch('findAllCarts')
    }
  }
</script>

<style>

</style>