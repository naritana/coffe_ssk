<template>
    <v-toolbar dark fixed app>
      <v-toolbar-side-icon @click.stop="clicked()"></v-toolbar-side-icon>
      <v-toolbar-title>Application</v-toolbar-title>
    </v-toolbar>
</template>

<script lang="ts">
import Vue from 'vue';
import Store from '../../store';

export default Vue.extend({
    data: () => ({
        drawer: false
    }),
    methods: {
        clicked() {
            this.drawer = !this.drawer;
            Store.$emit('toolbarIcon', this.drawer );
        }
    }
});
</script>
