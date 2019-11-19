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
                <h3 class="login">Sign up</h3>
                <div class="login">
                    <vs-button type="line" to="/login">Login</vs-button>
                    <vs-button type="line" to="/signup">Sign Up</vs-button>
                </div>
            </div>
            <div class="input">
                <vs-input type="name" label="Name" placeholder="Enter your name" v-model="name"/>
                <vs-input type="email" label="Email" placeholder="Enter your email" v-model="email"/>
                <vs-input type="email" label="Username" placeholder="Enter your username" v-model="username"/>
                <vs-input type="password" @keyup.enter="signUp" label="Password" placeholder="******" v-model="password"/>
                <!-- <vs-input type="password" label="Verify your password" placeholder="******" v-model="password"/> -->
            </div>
            <div slot="footer">
                <vs-row vs-justify="flex-end">
                <vs-button type="gradient" @click="signUp" color="success">Sign Up</vs-button>
                <vs-button type="gradient" to="/" color="danger">Back</vs-button>
                </vs-row>
            </div>
            </vs-card>
        </vs-col>
    </vs-row>
    </v-app>
</template>

<script>
import {fb,db} from '../firebase.js';
export default {
    name: 'Login',
    components: {
    
    },
    data() {
        return{
            name: '',
            email: '',
            username: '',
            password: ''
        }
    },
    methods:{
        signUp: function() {
            fb.auth().createUserWithEmailAndPassword(this.email, this.password)
                    .then( (user) => {
                        db.collection("profiles").doc(user.user.uid).set({
                        name: this.name,
                        username: this.username,
                    })
                    .then(() => {
                        console.log("Document successfully written!");
                    })
                    .catch((error) => {
                        console.error("Error writing document: ", error);
                    });
                        alert('Your account has been created');
                        console.log(user.user.uid);
                    this.$router.replace('admin')
                    });
        }
    }
}
</script>

<style>
@font-face {
    font-family: fontR;
    src: url('../assets/Font/WanderlustLetters-Regular.otf') format('opentype'),
    url('../assets/Font/wanderlustletters-regular-webfont.woff') format('woff');
}   ``
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
    
}
.input{
    /* box-align: center; */
}
</style>