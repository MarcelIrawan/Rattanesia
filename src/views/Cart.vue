<template>
    <v-app>
        <kepala/>
    </v-app>
</template>

<script>
import HelloWorld from '../components/HelloWorld';
import kepala from '../components/Navbar';
import kepala2 from '../components/Header';
import kaki from '../components/Footer';

export default {
    name: 'cart',
    components: {
    HelloWorld,
    kepala2,
    kepala,
    kaki,
    },
    data() {
    return{
        // type: 'margin',
    }
    }
}
</script>

<style>

</style>