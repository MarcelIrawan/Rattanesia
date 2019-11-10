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
                <vs-button class="login" type="line" to="/login">Login</vs-button>
                <vs-button class="login" type="line" to="/signup">Sign Up</vs-button>
            </div>
            <div class="input">
                <vs-input type="email" label="User" placeholder="Enter username" v-model="value1"/>
                <vs-input type="password" label="Password" placeholder="******" v-model="value2"/>
            </div>
            <div slot="footer">
                <vs-row vs-justify="flex-end">
                <vs-button v-if="value2 === 'admin'" type="gradient" to="/admin" color="success">Login</vs-button>
                <vs-button type="gradient" to="/" color="danger">Back</vs-button>
                </vs-row>
            </div>
            </vs-card>
        </vs-col>
    </vs-row>
    </v-app>
</template>

<script>

export default {
    name: 'Login',
    components: {
    
    },
    data() {
        return{
            value1:'',
            value2:''
        }
    },
    methods:{
        
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