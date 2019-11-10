<template>
    <div class="adminkonten">
        <v-content>
        <v-container fluid>
            <v-row
            align="center"
            justify="center"
            >
            <v-col cols="10">
                <v-card>
                <v-card-text>
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

                    <h2>Account</h2>
                    <v-row>
                    <vs-input disabled class="fname" label="User Name" v-model="value2"/>
                    <vs-input disabled class="nHP" label="Email Address" v-model="value2"/>
                    </v-row>
                    <!-- <v-row>
                    <vs-input disabled class="nHP" label="New Password" v-model="value2"/>
                    <vs-input disabled class="nHP" label="Confirm Password" v-model="value2"/>
                    </!-->
                    <vs-button color="primary" @click="popupActivo=true">Edit Account</vs-button>
                    

                    <vs-popup class="holamundo"  title="Edit Account" :active.sync="popupActivo">
                        <v-row>
                        <vs-input disabled class="fname" label="User Name" v-model="value2"/>
                        <vs-input disabled class="nHP" label="Email Address" v-model="value2"/>
                        </v-row>
                        <v-row>
                        <vs-input disabled class="nHP" label="New Password" v-model="value2"/>
                        <vs-input disabled class="nHP" label="Confirm Password" v-model="value2"/>
                        </v-row>
                        <vs-button @click="popupActivo=false">Save Changes</vs-button>
                    </vs-popup>
                </v-card-text>
                </v-card>
            </v-col>
            </v-row>
        </v-container>
        </v-content>
    </div>
</template>

<script>
import profileset from "./ProfileSet"
export default {
    name: "AdminKonten",
    components: {
        profileset,
    },
    data(){
    return{
        popupActivo: false,
        name:null
    }
}
}
</script>

<style lang="scss">

</style>