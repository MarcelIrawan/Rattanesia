<template>
<v-footer class="footer"
    dark
    padless
>
    <v-card
    flat
    tile
    class="indigo lighten-1 white--text text-center"
    min-width="1350px"
    >
    <v-card-text class="fontR">
        
    </v-card-text>

    <v-card-text class="white--text pt-0">
        {{ new Date().getFullYear() }} — <strong class="fontR">Rattanesia</strong>
    </v-card-text>

    <v-divider></v-divider>

    <v-card-text class="white--text">
        
    </v-card-text>
    </v-card>
</v-footer>
</template>

<script>
  export default {
    data: () => ({
      
    }),
  }
</script>

<style scoped>
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
.fontR{
  font-family: 'font1';
  /* font-size: '200%' */
}
</style>