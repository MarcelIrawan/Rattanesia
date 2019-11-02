<template>
  <v-carousel>
    <v-carousel-item
      v-for="(slides,i) in slides"
      :key="i"
      :src="slides"
      reverse-transition="fade-transition"
      transition="fade-transition"
    ></v-carousel-item>
  </v-carousel>
</template>

<script>
  export default {
    data () {
      return {
        slides: [
          {
            src: 'https://i.ibb.co/w6BkyKX/sld2.jpg'
          },
          {
            src: 'https://i.ibb.co/mCQFVbW/sld3.jpg'
          },
          {
            src: 'https://i.ibb.co/XktHxsC/sld1.jpg'
          }
        ],
      }
    },
  }
</script>