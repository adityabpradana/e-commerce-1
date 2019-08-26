<template>
  <b-modal :id="'modal-edit-' + detail._id" title="Edit Product Data">
      <b-form @submit.prevent="updateProduct()" class="px-4">
          <b-input-group class="mt-3">
              <b-input-group-prepend>
                  <b-button variant="outline-secondary" style="width: 8rem;">Name</b-button>
              </b-input-group-prepend>
            <b-form-input v-model="product.name" type="text" placeholder="name"></b-form-input>
          </b-input-group>
          <b-input-group class="mt-3">
              <b-input-group-prepend>
                  <b-button variant="outline-secondary" style="width: 8rem;">File</b-button>
              </b-input-group-prepend>
            <b-form-file
            v-model="product.file"
            placeholder="Choose a file..."
            drop-placeholder="Drop file here..."
            ></b-form-file>
          </b-input-group>
          <b-input-group class="mt-3">
              <b-input-group-prepend>
                  <b-button variant="outline-secondary" style="width: 8rem;">Price</b-button>
              </b-input-group-prepend>
            <b-form-input v-model="product.price" type="number" placeholder="price" class="text-right" ></b-form-input>
          </b-input-group>
          <b-input-group class="mt-3">
              <b-input-group-prepend>
                  <b-button variant="outline-secondary" style="width: 8rem;">Stock</b-button>
              </b-input-group-prepend>
            <b-form-input v-model="product.stock" type="number" placeholder="stock" class="text-right" ></b-form-input>
          </b-input-group>
      </b-form>

      <div slot="modal-footer" class="w-100">
        <b-button @click.prevent="updateProduct()" class="mt-3 btn-block btn-primary">Edit Product</b-button>
      </div>
  </b-modal>
</template>

<script>
export default {
    data() {
        return {
            product: '',
        }
    },
    props: ['detail'],
    mounted() {
        this.product = this.detail 
    },
    methods: {
        updateProduct(){
        this.product._id = this.detail._id
        this.$store.dispatch('updateProduct', this.product)
        .then(() => {
          this.$bvModal.hide('modal-edit-' + this.detail._id)
        })
      },
    }
}
</script>

<style>

</style>