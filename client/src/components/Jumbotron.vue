<template>
  <div class="pt-2 jumbotron overlay">
      <div style="margin-top: 35vh;">
        <h1 class="standout text-center">Sleepless Store</h1>
        <h2 class="text-center">Best Store for Your Sleepless Night</h2>
        <b-row class="justify-content-center">
          <b-button variant="outline-primary">
            <router-link to="/shop">
              Go To Store
            </router-link>
          </b-button>
          <b-button v-if="!$store.state.user.isLogin" variant="primary" class="ml-2">
            <router-link to="auth/register" class="text-white">Getting Started</router-link>
          </b-button>
        </b-row>
      </div>
    </div>
</template>

<script>
export default {

};
</script>

<style>
.jumbotron {
  height: 100vh; /* Fallback for browsers that do not support Custom Properties */
  height: calc(var(--vh, 1vh) * 100);
  font-family: 'Raleway', sans-serif;
  background: linear-gradient(to right, rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.6)), url('https://storage.googleapis.com/hacktiv8-assets-adityabp/hero2x1.jpg');
  background-repeat: no-repeat;
  background-size: cover;
}

.standout {
    font-size: 4rem;
    font-weight: 700;
    line-height: 1.15;
}
</style>
