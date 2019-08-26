import ax from '../apis/e-commerce';
import Swal from 'sweetalert2';

export default {
    state: {
        isLogin: false,
        isLoading: false,
        cart: '',
        carts: [],
        status: '',
    },
    mutations: {
        CREATECART(state, payload){
            state.cart = payload;
        },
        FINDALLCARTS(state, payload){
            state.carts = payload;
        },
        FINDONECART(state, payload){
            state.cart = payload;
        },
        FINDACTIVECART(state, payload){
            state.cart = payload;
        },
        UPDATESTATUSCART(state, payload){
            Swal.fire({
                title: 'Status Cart Updated!',
                type: 'success'
            })
            state.cart = payload
        },
        DELETECART(state, payload){
            state.cart = payload
        },
        ADDTOCART(state, payload){
            Swal.fire({
                title: 'Added to Cart!',
                type: 'success'
            })
            state.cart = payload
        },
        REMOVEFROMCART(state, payload){
            Swal.fire({
                title: 'Removed from Cart!',
                type: 'success'
            })
            state.cart = payload
        },
    },
    actions: {
        createCart({ commit }){
            ax({
                method: 'post',
                url: '/carts',
                headers: {
                    token: localStorage.getItem('token')
                },
            })
            .then(({ data }) => {
                commit('CREATECART')
            })
            .catch(err=> {
                console.log(err.response.data)
            })
        },
        findAllCarts({ commit }, payload){
            ax({
                method: 'get',
                url: '/carts',
                headers: {
                    token: localStorage.getItem('token')
                },
            })
            .then(({ data }) => {
                commit('FINDALLCARTS', data)
            })
            .catch(err=> {
                console.log(err.response.data)
            })
        },
        findOneCart({ commit }, payload){
            ax({
                method: 'get',
                url: '/carts/' + payload,
                headers: {
                    token: localStorage.getItem('token')
                },
            })
            .then(({ data }) => {
                commit('FINDONECART', data)
            })
            .catch(err=> {
                console.log(err.response.data)
            })
        },
        findActiveCart({ commit }){
            ax({
                method: 'get',
                url: '/carts/user',
                headers: {
                    token: localStorage.getItem('token')
                },
            })
            .then(({ data }) => {
                commit('FINDACTIVECART', data)
            })
            .catch(err=> {
                console.log(err.response.data)
            })
        },
        updateStatusCart({ commit, dispatch }, payload){
            ax({
                method: 'patch',
                url: '/carts/' + payload._id,
                headers: {
                    token: localStorage.getItem('token')
                },
                data: { status: payload.status },
            })
            .then(({ data }) => {
                commit('UPDATESTATUSCART', data)
                dispatch('findActiveCart')
                dispatch('findAllCarts')
            })
            .catch(err=> {
                console.log(err.response.data)
            })
            
        },
        deleteCart({ commit }, payload){
            ax({
                method: 'post',
                url: '/carts/' + payload,
                headers: {
                    token: localStorage.getItem('token')
                },
            })
            .then(({ data }) => {
                commit('DELETECART', data)
            })
            .catch(err=> {
                console.log(err.response.data)
            })
        },
        addToCart({ commit, dispatch }, payload){
            ax({
                method: 'put',
                url: '/carts/' + payload.cartId + '/add',
                headers: {
                    token: localStorage.getItem('token')
                },
                data: payload,
            })
            .then(({ data }) => {
                commit('ADDTOCART', data)
            })
            .catch(err=> {
                console.log(err.response.data)
            })    
        },
        removeFromCart({ commit }, payload){
            ax({
                method: 'put',
                url: '/carts/' + payload.cartId + '/remove',
                headers: {
                    token: localStorage.getItem('token')
                },
                data: { _id: payload._id },
            })
            .then(({ data }) => {
                commit('REMOVEFROMCART', data)
            })
            .catch(err=> {
                console.log(err.response.data)
            })
        },
    },
};