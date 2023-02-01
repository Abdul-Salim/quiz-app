
<template>
    <div>
        <Navbar />
        <Login />
    </div>
</template>
<script>
import Login from '../components/Login.vue';
import Navbar from '../components/Navbar.vue';
    export default {
    name: "login",
    components: { Login, Navbar }
}
</script>