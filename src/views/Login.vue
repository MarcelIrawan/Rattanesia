<template>
    <v-app>
    <vs-row vs-justify="center">
        <vs-col type="flex" vs-justify="center" vs-align="center" vs-w="6">
            <vs-card actionable>
            <div slot="header">
                <h2 class="judul">
                Rattanesia
                </h2>
                <br>
                <div class="login">
                    <vs-button type="line" to="/login">Login</vs-button>
                    <vs-button type="line" to="/signup">Sign Up</vs-button>
                </div>
            </div>
            <div class="input">
                <vs-input type="email" label="User" placeholder="Enter your email" v-model="email"/>
                <vs-input @keyup.enter="login" type="password" label="Password" placeholder="******" v-model="password"/>
            </div>
            <div slot="footer">
                <vs-row vs-justify="flex-end">
                <vs-button @click="login" type="gradient" color="success">Login</vs-button>
                <vs-button type="gradient" to="/" color="danger">Back</vs-button>
                </vs-row>
            </div>
            </vs-card>
        </vs-col>
    </vs-row>
    </v-app>
</template>

<script>
import { fb } from '../firebase'
import router from "../router.js"

export default {
    name: 'Login',
    components: {
    
    },
    data() {
        return{
            email:'',
            password:''
        }
    },
    methods:{
        login: function() {
            fb.auth().signInWithEmailAndPassword(this.email, this.password)
            .then((user) =>
            {
                this.$router.replace('admin');
            })
            .catch(function(error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                if (errorCode === 'auth/wrong-password') {
                    alert('Wrong password.');
                } else {
                    alert(errorMessage);
                }
                console.log(error);
                })
        }
    }
}
</script>

<style>
@font-face {
    font-family: fontR;
    src: url('../assets/Font/WanderlustLetters-Regular.otf') format('opentype'),
    url('../assets/Font/wanderlustletters-regular-webfont.woff') format('woff');
}
@font-face {
    font-family: font1;
    src: url('../assets/Font/tt0140m_.ttf') format('truetype'),
    url('../assets/Font/tt0140m_-webfont.woff') format('woff');
}
@font-face {
    font-family: font2;
    src: url('../assets/Font/tt0141m_.ttf') format('truetype'),
    url('../assets/Font/tt0141m_-webfont.woff') format('woff');
}
@font-face {
    font-family: font3;
    src: url('../assets/Font/tt0142m_.ttf') format('truetype'),
    url('../assets/Font/tt0142m_-webfont.woff') format('woff');
}
@font-face {
    font-family: font4;
    src: url('../assets/Font/tt0143m_.ttf') format('truetype'),
    url('../assets/Font/tt0143m_-webfont.woff') format('woff');
}
@font-face {
    font-family: font5;
    src: url('../assets/Font/tt0144m_.ttf') format('truetype'),
    url('../assets/Font/tt0144m_-webfont.woff') format('woff');
}
@font-face {
    font-family: font6;
    src: url('../assets/Font/tt0145m_.ttf') format('truetype'),
    url('../assets/Font/tt0145m_-webfont.woff') format('woff');
}
.judul{
    font-family: 'fontR';
    font-size: 70px;
    text-align: center;
}
.login{
    font-family: "font1";
    text-align: center;
}
.input{
    /* box-align: center; */
}
</style>