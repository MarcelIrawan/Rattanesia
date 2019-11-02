<template>
    <div>
        <vs-list>
            <vs-list-header icon="inbox" title="Pesanan Baru"></vs-list-header>
            <vs-list-item icon="loop" title="Snickerdoodle" subtitle="An excellent companion"></vs-list-item>
            <vs-list-item icon="loop" title="Sapporo Haru" subtitle="An excellent polish restaurant, quick delivery and hearty, filling meals"></vs-list-item>
            <vs-list-header icon="done_all" title="Pesanan Selesai" color="success"></vs-list-header>
            <vs-list-item icon="verified_user" title="Enid's" subtitle="At night a bar, during the day a delicious brunch spot."></vs-list-item>
            <vs-list-item icon="verified_user" title="Veronika Ossi" subtitle="Has not watched anything recently"></vs-list-item>
        </vs-list>
    </div>
</template>

<script>
export default {
    name: "DaftarPesanan",
    props: {
        msg: String
    }
}
</script>

<style lang="scss">

</style>