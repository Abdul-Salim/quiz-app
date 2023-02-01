<template>
    <div>
        <Navbar />
        <Register />
    </div>

</template>
<script>
import Navbar from '../components/Navbar.vue';
import Register from '../components/Register.vue';

export default {
    name: "signup",
    components: { Register, Navbar }
}
</script>