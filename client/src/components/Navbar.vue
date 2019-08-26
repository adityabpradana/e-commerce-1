<template>
  <div>
    <b-navbar fixed="top" variant="dark" type="dark" class="d-flex justify-content-between">
        <b-navbar-brand href="#">
          <router-link to="/">
            <img src="https://storage.googleapis.com/hacktiv8-assets-adityabp/Logo-Sleepless.png" alt="sleepless" height="32px" class="mr-3">
          </router-link>
        </b-navbar-brand>
        <b-navbar-nav v-if="isAdmin">
          <router-link to="/admin" class="btn btn-light px-4">
          Admin
          </router-link>
        </b-navbar-nav>
        <b-navbar-nav align-item="center">
            <router-link v-if="isLogin" class="mr-4 text-white" to="/transactions">
            <b>Transactions</b>
            </router-link>
            <router-link v-if="isLogin" to="/carts">
              <font-awesome-icon icon="shopping-cart" class="text-white"></font-awesome-icon>
              <b-badge class="ml-2 mr-4" variant="danger">{{ $store.state.cart.cart.products.length || 0 }}</b-badge>
            </router-link>
            <router-link v-if="!isLogin" to="/auth/login" class="text-white">Login</router-link>
            <a v-else @click.prevent="$store.commit('LOGOUT')" class="text-white" href="#">Logout</a>
        </b-navbar-nav>
    </b-navbar>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Navbar',
  computed: {...mapState({
      isAdmin: state => state.user.isAdmin,
      isLogin: state => state.user.isLogin,
    }),
  },
};
</script>s

<style>

</style>
