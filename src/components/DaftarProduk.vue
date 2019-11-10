<template>
<div vs-justify="center" class="produk">
    <div>
        <h3>Produk</h3>
        <!-- <vs-input type="string" label="Nama Produk" placeholder="Masukan nama produk" v-model="produk.nama"/>
        <vs-input type="string" label="Harga Produk" placeholder="Masukan harga produk" v-model="produk.harga"/>
            <vs-button @click="saveData" type="line">Tambah</vs-button> -->
            <hr>
        <vs-button @click="popupActivo=true; reset();" color="primary" type="filled">Tambah Produk</vs-button>
        <!-- <vs-button @click="created" color="primary" type="border">Update</vs-button> -->
        
        <vs-popup class="holamundo"  title="Tambah Produk" :active.sync="popupActivo">
            <vs-input type="string" label="" label-placeholder="Nama produk" v-model="produk.nama"/>
            <br>
            <vue-editor v-model="produk.desc" label-placeholder="Deskripsi produk"></vue-editor>
            <br>
            <div>
                <h3>Detil Produk</h3>
                <hr>
                <div>
                <vs-input type="string" label="" label-placeholder="Harga produk" v-model="produk.harga"/>
                </div>
                <br>

                <div>
                <vs-input @keyup.188="addTag" type="string" label="" label-placeholder="Tag produk" v-model="tag"/>
                <div class="d-flex">
                    <p v-for="tag in produk.tags">
                    <span class="p-1">{{tag}}</span>
                    </p>
                </div>
                </div>
                <br>
                <div class="produkImage">
                    <label>Gambar Produk</label>
                    <br>
                    <input type="file" @change="uploadImage">
                </div>
                <div class="d-flex">
                    <div width="80px" v-for="(image, index) in produk.images">
                        <div class="img-wrapp">
                            <img :src="image" alt="" width="80px">
                            <span class="delete-img" @click="deleteImage(image, index)">X</span>
                        </div>
                    </div>
                </div>
            </div>
            <div>
            <vs-button @click="addProduk(produk); popupActivo=false;" type="filled">Tambah</vs-button>
            </div>
        </vs-popup>
        <vs-popup class="holamundo"  title="Edit Produk" :active.sync="popupActivo2">
            <vs-input type="string" label="" label-placeholder="Nama produk" v-model="produk.nama"/>
            <br>
            <vue-editor v-model="produk.desc"></vue-editor>
            <br>

            <div>
                <h3>Detil Produk</h3>
                <hr>
                <div>
                <vs-input type="string" label="" label-placeholder="Harga produk" v-model="produk.harga"/>
                </div>
                <br>

                <div>
                <vs-input @keyup.188="addTag" type="string" label="" label-placeholder="Tag produk" v-model="tag"/>
                <div class="d-flex">
                    <p v-for="tag in produk.tags">
                    <span class="p-1">{{tag}}</span>
                    </p>
                </div>
                </div>
                <br>
                <div class="produkImage">
                    <label>Gambar Produk</label>
                    <br>
                    <input type="file" @change="uploadImage">
                </div>
                <div width="80px" v-for="(image, index) in produk.images">
                    <div class="img-wrapp">
                        <img :src="image" alt="" width="80px">
                        <span class="delete-img" @click="deleteImage(image, index)">X</span>
                    </div>
                    </div>
            </div>

            <br>
            <div>
            <vs-button @click="updateProduk(produk); popupActivo=false;" type="filled">Edit</vs-button>
            </div>
        </vs-popup>
    </div>
    <hr>
    <div class="produkTampil">
        <h3>Daftar Produk</h3>

        <table>
            <thead>
                <tr>
                    <th>Nama</th>
                    <th>Harga</th>
                    <th>Edit</th>
                </tr>
            </thead>

            <tbody>
                <tr v-for="produk in produks">
                    <td>{{produk.nama}}</td>
                    <td>{{produk.harga}}</td>
                    <td>
                        <vs-button color="primary" @click="editProduk(produk); popupActivo2=true">Edit</vs-button>
                        <vs-button color="danger" @click="deleteProduk(produk)">Delete</vs-button>
                    </td>
                </tr>   
            </tbody>
        </table>
    </div>
    <!-- <vs-collapse>
        
    </vs-collapse> -->
</div>
</template>

<script>
import aplot from "./Upload.vue";
import {fb,db} from "../firebase";
import { VueEditor } from "vue2-editor";

export default {
    components:{
        aplot,
        VueEditor
    },
    data(){
    return {
        popupActivo:false,
        popupActivo2:false,
        produks: [],
        produk:{
            nama: '',
            harga: '',
            tags: [],
            desc: '',
            images: []
        },
        tag: null,
        }
    },
    firestore(){
        return {
        produks: db.collection('Produk')
        }
    },
    methods:{
        deleteImage(img, index){
            let image = fb.storage().refFromURL(img);
            this.produk.images.splice(index,1);
            image.delete().then(function(){
                console.log('image deleted');
            }).catch(function(error) {
                console.log('eror lho');
            })
        },
        uploadImage(e){
            if(e.target.files[0]){
                let file =e.target.files[0];
                var storageRef = fb.storage().ref('produks/' +file.name);
                let uploadTask = storageRef.put(file);
                uploadTask.on('state_changed', (snapshot) => {
                    }, (error) => {
                    // Handle unsuccessful uploads
                    }, () => {
                    // Handle successful uploads on complete
                    // For instance, get the download URL: https://firebasestorage.googleapis.com/...
                    uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
                        this.produk.images.push(downloadURL);
                        console.log('File available at', downloadURL);
                    });
                    });
            }
            
        },
        addTag(){
            this.produk.tags.push(this.tag);
            this.tag = '';
        },
        editProduk(produk){
            this.produk = produk;
        },
        updateProduk(){
            this.$firestore.produks.doc(this.produk.id).update(this.produk)
            alert('Produk berhasil diperbarui!')
        },
        deleteProduk(doc){
            Swal.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
                }).then((result) => {
                if (result.value) {
                    this.$firestore.produks.doc(doc.id).delete()
                    this.produk.images.forEach((image,index) => {
                        this.deleteImage(image, index)
                    });
                    // console.log(doc);
                    Toast.fire({
                        icon: 'success',
                        title: 'Produk berhasil dihapus!'
                    })
                }
                });
        },
        readData(){
        },
        addProduk(){
            this.$firestore.produks.add(this.produk);
            alert('Produk berhasil ditambahkan')
            
        },
        reset(){
            this.produk = {
                nama: '',
                harga: '',
                tags: [],
                desc: '',
                images: []
            }
        },
        created(){
            
        }
    }
}
</script>

<style scoped>

.img-wrapp{
    position: relative;
}
.img-wrapp span.delete-img{
    position: absolte;
    top: 14px;
    left: -2px
}
.img-wrapp span.delete-img:hover{
    cursor: pointer;
}

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
.prohed{
    font-family: 'font5';
}
.pronem{
    font-family: 'font3';
}
.prodesc{
    font-family: 'font2';
}
</style>