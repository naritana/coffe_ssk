<template>
    <v-navigation-drawer
    v-model="drawer"
    app
    >
        <v-list dense>
            <v-list-tile @click="clickedItem('/home')">
                <v-list-tile-action>
                    <v-icon>home</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                    <v-list-tile-title>Home</v-list-tile-title>
                </v-list-tile-content>
            </v-list-tile>
            <v-list-tile @click="clickedItem('/management')">
                <v-list-tile-action>
                    <v-icon>folder_open</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                    <v-list-tile-title>Management</v-list-tile-title>
                </v-list-tile-content>
            </v-list-tile>
        </v-list>
    </v-navigation-drawer>
</template>

<script lang="ts">
import Vue from 'vue';
import store from '../../store';

import listTitle from '../molecules/listTitle.vue';

export default Vue.extend({
    data: () => ({
        drawer: false
    }),
    created() {
        store.$on('toolbarIcon', (drawer: boolean) => {
            this.drawer = drawer;
        });
    },
    methods: {
        clickedItem(path: string) {
            store.$emit('clickedSideItem', path);
        }
    },
    components: {
    }
});
</script>

