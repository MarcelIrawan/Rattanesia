    <template lang="html">
    <div class="centerx con-exemple-prompt">
        <!-- <vs-button @click="openPrompt" color="primary" type="border">Run prompt</vs-button> -->
        <div class="modelx">
        {{val==null?'null':val}}
        </div>
        <div class="modelx">
        </div>
        <vs-button @click="activePrompt2 = true" color="primary" type="border">Tambah Produk</vs-button>

        <vs-prompt
        color="primary"
        @cancel="valMultipe.value1='',valMultipe.value2=''"
        @accept="acceptAlert"
        @close="close"
        :is-valid="validName"
        :active.sync="activePrompt2">
        <div class="con-exemple-prompt">
        Upload gambar dan deskripsi produk:
        <div class="centerx">
            <vs-upload automatic action="https://jsonplaceholder.typicode.com/posts/" @on-success="successUpload" />
        </div>
            <vs-input placeholder="Nama Produk" v-model="valMultipe.nama"/>
            <vs-input placeholder="Deskripsi Produk" v-model="valMultipe.harga"/>

            <vs-alert :active="!validName" color="danger" icon="new_releases" >
            Data harus diisi!
            </vs-alert>
        </div>
        </vs-prompt>
    </div>
    </template>

    <script>
    import Vue from 'vue'

    export default {
    data(){
        return {
        select1:2,
        
        activePrompt:false,
        activePrompt2:false,
        val:'',
        valMultipe:{
            nama:'',
            harga:''
        },
        }
    },
    computed:{
        validName(){
        return (this.valMultipe.value1.length > 0 && this.valMultipe.value2.length > 0)
        }
    },
    methods:{
        acceptAlert(color){
        this.$vs.notify({
            color:'success',
            title:'Berhasil',
            text:'Berhasil menambahkan produk!'
        })
        },
        close(){
        this.$vs.notify({
            color:'danger',
            title:'Batal',
            text:'Batal menambahkan produk!'
        })
        },
        successUpload(){
            this.$vs.notify({color:'success',title:'Upload Success',text:'Data produk ditambahkan'})
        },
    }
    }
    </script>

    <style lang="scss">
    .con-exemple-prompt{
    padding: 10px;
    padding-bottom: 0px;}
    .vs-input{
        width: 100%;
        margin-top: 10px;}
    </style>