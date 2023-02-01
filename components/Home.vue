
import Register from './Register.vue';


import Login from './Login.vue';
import Navbar from './Navbar.vue';

<template>
    <div class="container-fluid p-0">
        <Navbar />
        <div class="container">
            <div class="row">
                <div class="col text-center mt-5">
                    <h2>Create online quizzez as per your requiremnent</h2>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <Register />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import { isEmpty } from "lodash";

export default {
    computed: mapState([
        'user'
    ]),
    data() {
        return {
            isUserLoggedIn: false
        }
    },
    watch: {
        '$store.state.user': {
            handler() {
                console.log("sec", this.$store.state.user)
                if (isEmpty(this.$store.state.user)) {
                    this.isUserLoggedIn = false
                    console.log("first", this.isUserLoggedIn)
                } else {
                    this.isUserLoggedIn = true
                    console.log("sec", this.isUserLoggedIn)
                }
            },
            immediate: true
        }
    },
}
</script>