import Vue from 'vue';
import Router from 'vue-router';


Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import(/* webpackChunkName: "home" */ './views/Home.vue'),
    },
    {
      path: '/auth',
      name: 'auth',
      component: () => import(/* webpackChunkName: "auth" */ './views/Auth.vue'),
      children: [
        {
          path: 'login',
          component: () => import(/* webpackChunkName: "login" */ './components/Login.vue'),
        },
        {
          path: 'register',
          component: () => import(/* webpackChunkName: "register" */ './components/Register.vue'),
        },
      ],
    },
    {
      path: '/shop',
      name: 'Shop',
      component: () => import(/* webpackChunkName: "shop" */ './views/Shop.vue'),
    },
    {
      path: '/carts',
      name: 'Cart',
      component: () => import(/* webpackChunkName: "cart" */ './views/Cart.vue'),
    },{
      path: '/admin',
      name: 'Admin',
      component: () => import(/* webpackChunkName: "admin" */ './views/Admin.vue'),
    },
    {
      path: '/transactions',
      name: 'Transactions',
      component: () => import(/* webpackChunkName: "trans" */ './views/Transactions.vue'),
    }
  ],
});
