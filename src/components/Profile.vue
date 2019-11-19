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
                    <vs-input disabled  class="fname" label="Nama" v-model="profile.name"/>
                    <vs-input disabled class="nHP" label="Nomor HP" v-model="profile.nomorHP"/>
                    </v-row>
                    <v-row>
                    <vs-input disabled class="nHP" label="Alamat" v-model="profile.alamat"/>
                    <vs-input disabled class="nHP" label="Kode Pos" v-model="profile.kodepos"/>
                    </v-row>
                    <vs-button color="primary" @click="popupActivo= true">Edit Profile</vs-button>
                    

                    <vs-popup class="holamundo"  title="Edit Profile" :active.sync="popupActivo">
                        <v-row>
                        <vs-input  class="fname" label="Nama" v-model="profile.name"/>
                        <vs-input  class="nHP" label="Nomor HP" v-model="profile.nomorHP"/>
                        </v-row>
                        <v-row>
                        <vs-input  class="nHP" label="Alamat" v-model="profile.alamat"/>
                        <vs-input  class="nHP" label="Kode Pos" v-model="profile.kodepos"/>
                        </v-row>
                        <vs-button @click="updateProfile">Save Changes</vs-button>
                    </vs-popup>

                    <h2>Account</h2>
                    <v-row>
                    <vs-input disabled class="fname" label="User Name" v-model="account.username"/>
                    <vs-input disabled class="nHP" label="Email Address" v-model="account.email"/>
                    </v-row>
                    <!-- <v-row>
                    <vs-input disabled class="nHP" label="New Password" v-model="value2"/>
                    <vs-input disabled class="nHP" label="Confirm Password" v-model="value2"/>
                    </!-->
                    <vs-button color="primary" @click="popupActivo=true">Edit Account</vs-button>
                    
                    <vs-popup class="holamundo"  title="Edit Account" :active.sync="popupActivo2">
                        <v-row>
                        <vs-input disabled class="fname" label="User Name" v-model="account.username"/>
                        <vs-input disabled class="nHP" label="Email Address" v-model="account.email"/>
                        </v-row>
                        <v-row>
                        <vs-input disabled class="nHP" label="New Password" v-model="account.password"/>
                        <vs-input disabled class="nHP" label="Confirm Password" v-model="account.confirmPassword"/>
                        </v-row>
                        <vs-button @click="popupActivo2=false">Save Changes</vs-button>
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
import {fb,db} from "../firebase"
export default {
    name: "profile",
    components: {
        
    },
    data(){
        return{
            popupActivo: false,
            popupActivo2: false,
            profile: {
                name:null,
                username: null,
                nomorHP: null,
                alamat: null,
                kodepos: null
            },
            account : {
                username: null,
                email: null,
                emailVerified: null,
                password: null,
                confirmPassword: null,
                uid: null,
            }
        }
    },
    firestore(){
        const user = fb.auth().currentUser;
        return {
            profile: db.collection('profiles').doc(user.uid)
        }
    },
    methods: {
        updateProfile(){
            this.$firestore.profile.update(this.profile);
            console.log('berhasil update');
            poupActivo = false;
        },
    }

}
</script>

<style lang="scss">

</style>