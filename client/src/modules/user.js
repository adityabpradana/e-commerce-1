import Swal from 'sweetalert2';
import ax from '../apis/e-commerce';
import router from '../router';

export default {
    state: {
        isLogin: false,
        isLoading: false,
        isAdmin: false,
    },
    mutations: {
        REGISTERSTART(state){
            state.isLoading = true;
        },
        REGISTEREND(state){
            state.isLoading = false;
        },
        LOGINSTART(state){
            state.isLoading = true;
        },
        LOGINEND(state){
            if(localStorage.getItem('role') == 'admin'){
                state.isAdmin = true;
            }
            state.isLogin = true;
            state.isLoading = false;
            if(state.isAdmin == true){
                router.push('/admin');
            } else {
                router.push('/shop');
            }
        },
        LOGOUT(state){
            localStorage.removeItem('token');
            localStorage.removeItem('role')
            state.isAdmin = false;
            state.isLogin = false;
            router.push('/');
        }
    },
    actions: {
        register({ commit }, payload){
            commit('REGISTERSTART');
            ax({
                method: 'post',
                url: '/users/register',
                data: payload,
            })
            .then(() => {
                commit('REGISTEREND')
                Swal.fire({
                    title: 'Register Success!',
                    type: 'success',
                })
                })
            .catch( err => {
                commit('REGISTEREND')
                Swal.fire({
                    type: 'error',
                    title: err.response.data,
                })
            })
        },
        login({ commit, dispatch }, payload){
            commit('LOGINSTART');
            ax({
                method: 'post',
                url: '/users/login',
                data: payload
            })
            .then(({data}) => {
                Swal.fire({
                    title: 'Login Success!',
                    type: 'success',
                })
                if(data.role == 'admin'){
                    localStorage.setItem('role', data.role);
                }
                localStorage.setItem('token', data.access_token);
                commit('LOGINEND');
                dispatch('findActiveCart');
            })
            .catch( err => {
                Swal.fire({
                    type: 'error',
                    title: err.response.data
                })
                commit('LOGINEND')
            })
        },
        googleSignIn({ commit, dispatch }, payload){
            commit('LOGINSTART')
            ax({
                url: '/users/login/google',
                method: 'post',
                data: {
                    id_token: payload
                }
            })
            .then(({ data })=> {
                Swal.fire({
                    title: 'Login Success!',
                    type: 'success'
                })
                if(data.role == 'admin'){
                    localStorage.setItem('role', data.role);
                }
                localStorage.setItem('token', data.access_token);
                commit('LOGINEND')
                dispatch('findActiveCart');
            })
            .catch( err => {
                Swal.fire({
                    type: 'error',
                    title: err.response.data,
                })
                commit('LOGINEND')
            })
        }
    },
};