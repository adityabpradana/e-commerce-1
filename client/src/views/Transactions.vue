<template>
<div class="content">
    <h1 class="standout text-center">Transactions</h1>
        <b-table :items="carts" :fields="fields" striped responsive="sm" class="pl-4">
        <template slot="[status]" slot-scope="row">
            <b-row>
                <b-col cols="6">
                    <b-badge v-if="row.item.status == 'unpaid'" class="p-2 btn-block" variant="danger">
                        {{row.item.status}}
                    </b-badge>
                    <b-badge v-if="row.item.status == 'paid'" class="p-2 btn-block" variant="success">
                        {{row.item.status}}
                    </b-badge>
                    <b-badge v-if="row.item.status == 'delivered'" class="p-2 btn-block" variant="primary">
                        {{row.item.status}}
                    </b-badge>
                </b-col>
                <b-col v-if="row.item.status == 'paid'">
                    <b-button class="btn-sm" @click="$store.dispatch('updateStatusCart', {
                        _id: row.item._id,
                        status: 'delivered',
                    })">
                        Confirm Delivery
                    </b-button>
                </b-col>
            </b-row>
        </template>

        <template slot="[show_details]">
            <b-button size="sm" class="mr-2">
            Show Details
            </b-button>
        </template>
    </b-table>
</div>
</template>

<script>
  export default {
    data() {
      return {
        fields: ['invoice', 'status', 'show_details'],
      }
    },
    computed: {
      carts() {
        return this.$store.state.cart.carts.filter(el => el.status !== 'unpaid')
      },
    },
    created() {
      this.$store.dispatch('findAllCarts')
    }
  }
</script>

<style>

</style>