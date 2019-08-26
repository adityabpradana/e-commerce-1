<template>
    <div class="col-4">
        <h1 class="standout text-center">Log In</h1>
        <form @submit.prevent="signIn">
            <input v-model="user.email" class="form-control mt-4 shadow-sm" type="email" placeholder="Email">
            <input v-model="user.password" class="form-control mt-3 shadow-sm" type="password" placeholder="Password">
            <input v-if="!isLoading" class="form-control mt-3 btn-primary" type="submit" value="Log In">
            <b-button v-else class="form-control btn-primary mt-3" disabled>
                <b-spinner small></b-spinner>
                Loading...
            </b-button>
        </form>
        <p class="text-secondary my-2 text-center">or</p>
        <button v-google-signin-button="clientId" class="btn btn-outline-primary btn-block">
            <font-awesome-icon :icon="['fab','google']" class="mr-2"></font-awesome-icon>
            Signin with Google</button>
        <p class="mt-2 text-center text-secondary">Don't have an account?<router-link to="register"> Register</router-link></p>   
    </div>
</template>

<script>
import GoogleSignInButton from 'vue-google-signin-button-directive';
import { mapState } from 'vuex';

export default {
    directives: {
        GoogleSignInButton
    },
    data() {
        return {
        user: {
            email: '',
            password: '',
            },
        clientId: process.env.VUE_APP_GOOGLE_CLIENT_ID,
        };
    },
    computed: {
        ...mapState({
            isLogin: state => state.user.isLogin,
            isLoading: state => state.user.isLoading,
        }),
    },
    methods: {
        OnGoogleAuthSuccess (idToken) {
            this.$store.dispatch('googleSignIn', idToken)
        },
        OnGoogleAuthFail (error) {
            console.log(error)
        },
        signIn() {
            this.$store.dispatch('login', this.user)
            .then(() => {
                this.user = {};
            });
        }
    }
}
</script>

<style>

</style>