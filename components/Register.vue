<template>
    <div class="container d-flex justify-content-center mt-5">
        <div class="col-12 col-md-6 px-5">
            <form class="d-flex flex-column" @submit.prevent="signup">
                <input class="form-control mb-3" type="email" v-model="email" placeholder="Email" />
                <input class="form-control mb-3" type="password" v-model="password" placeholder="Password" />
                <button class="btn btn-primary" type="submit">Sign Up</button>
                <p class="mt-3">Already a user? <nuxt-link to="/login">login here</nuxt-link> </p>
            </form>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: mapState([
    'user'
  ]),
    data() {
        return { email: '', password: '' }
    },
    methods: {
        signup() {
            this.$store.commit("signup", {email:this.email, password:this.password})
        }
    }
}  
</script>