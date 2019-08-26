import ax from '../apis/e-commerce';
import Swal from 'sweetalert2';

export default {
    state: {
        isLogin: false,
        isLoading: false,
        products: [],
        product: {}
    },
    mutations: {
        CREATEPRODUCT(state, payload){
            Swal.fire({
                title: 'Product Created!',
                type: 'success'
            })
            state.product = payload
        },
        FINDALLPRODUCTS(state, payload){
            state.products = payload
        },
        FINDONEPRODUCT(state, payload){
            state.product = payload
        },
        UPDATEPRODUCT(state, payload){
            Swal.fire({
                title: 'Product Updated!',
                type: 'success'
            })
            state.product = payload
        },
        DELETEPRODUCT(state, payload){
            Swal.fire({
                title: 'Product Deleted!',
                type: 'success'
            })
            state.product = payload
        },
    },
    actions: {
        createProduct({ commit }, payload){
            let formData = new FormData();

            formData.append('name', payload.name);
            formData.append('file', payload.file);
            formData.append('price', payload.price);
            formData.append('stock', payload.stock);

            ax({
                url: '/products',
                method: 'post',
                headers: {
                    token: localStorage.getItem('token'),
                    'content-type': 'multipart/form-data',
                },
                data: formData,
            })
            .then(({ data }) => {
                commit('CREATEPRODUCT', data)
            })
            .catch(err=> {
                console.log(err.response.data)
            })
        },
        findAllProducts({ commit }, payload){
            ax.get('/products')
                .then(({ data }) => {
                    commit('FINDALLPRODUCTS', data)
                })
                .catch(console.log)
        },
        findOneProduct({commit}, payload){
            ax.get('/products/' + payload)
                .then(({ data }) => {
                    commit('FINDONEPRODUCT', data)
                })
                .catch(console.log)
        },
        updateProduct({}, payload){
            let formData = new FormData();

            formData.append('name', payload.name);
            formData.append('file', payload.file);
            formData.append('price', payload.price);
            formData.append('stock', payload.stock);

            ax({
                url: '/products/' + payload._id,
                method: 'patch',
                headers: {
                    token: localStorage.getItem('token'),
                    'content-type': 'multipart/form-data',
                },
                data: formData,
            })
            .then(({ data }) => {
                commit('UPDATEPRODUCT', data)
            })
            .catch(err=> {
                console.log(err.response.data)
            })
        },
        deleteProduct({ commit, dispatch }, payload){
            ax({
                url: '/products/' + payload,
                method: 'delete',
                headers: {
                    token: localStorage.getItem('token'),
                },
            })
            .then(({ data }) => {
                commit('DELETEPRODUCT', data)
                dispatch('findAllProducts')
            })
            .catch(err=> {
                console.log(err.response.data)
            })
        },
    },
};