

<template>
    <div class="container d-flex justify-content-center mt-5">
        <div class="col-12 col-md-6 px-5">
            <form class="d-flex flex-column" @submit.prevent="login">
                <input class="form-control mb-3" type="email" v-model="email" placeholder="Email" />
                <input class="form-control mb-3" type="password" v-model="password" placeholder="Password" />
                <button class="btn btn-primary" type="submit">Login</button>
            </form>
        </div>
    </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
    fetch ({ store }) {
    // store.commit('increment')
  },
  computed: mapState([
    'user'
  ]),
    data() {
        return { email: '', password: '' }
    },

    methods: {
        login() {
            this.$store.commit("login", {email:this.email, password:this.password})
        }
    }
}
</script>