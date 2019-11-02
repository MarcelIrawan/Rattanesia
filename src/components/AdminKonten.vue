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
                    <v-row>
                        <h1>KONTENNYA NANTI MUNCUL DISINI YA</h1>
                    </v-row>
                </v-card-text>
                </v-card>
            </v-col>
            </v-row>
        </v-container>
        </v-content>
    </div>
</template>

<script>
export default {
    name: "AdminKonten",
    data:()=>({
    drawers: ['Default (no property)', 'Permanent', 'Temporary'],
    primaryDrawer: {
        model: null,
        type: 'default (no property)',
        clipped: false,
        floating: false,
        mini: false,
    },
    footer: {
        inset: false,
    },
})
}
</script>

<style lang="scss">

</style>