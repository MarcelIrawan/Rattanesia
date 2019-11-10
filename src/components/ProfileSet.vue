<template>
    <div class="profileset">
        <v-row>
            <vs-button type="line">Profile</vs-button>
            <vs-button type="line">Account</vs-button>
        </v-row>
                    <h2>Profile</h2>
                    <v-row>
                    <vs-input disabled class="fname" label="Nama" v-model="value2"/>
                    
                    <vs-input disabled class="nHP" label="Nomor HP" v-model="value2"/>
                    </v-row>
                    <v-row>
                    <vs-input disabled class="nHP" label="Alamat" v-model="value2"/>
                    <vs-input disabled class="nHP" label="Nomor HP" v-model="value2"/>
                    </v-row>
                    <vs-button color="primary" @click="popupActivo= true">Edit Profile</vs-button>
                    

                    <vs-popup class="holamundo"  title="Edit Profile" :active.sync="popupActivo">
                        <v-row>
                        <vs-input  class="fname" label="Nama" v-model="value2"/>
                        
                        <vs-input  class="nHP" label="Nomor HP" v-model="value2"/>
                        </v-row>
                        <v-row>
                        <vs-input  class="nHP" label="Alamat" v-model="value2"/>
                        <vs-input  class="nHP" label="Nomor HP" v-model="value2"/>
                        </v-row>
                        <vs-button @click="popupActivo=false">Save Changes</vs-button>
                    </vs-popup>
    </div>
</template>

<script>
export default {
    name: "AdminKonten",
    data(){
        return{
            popupActivo:false,
        }
    
}
}
</script>

<style lang="scss">

</style>