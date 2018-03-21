<template>
  <v-toolbar 
    fixed 
    app 
    dark>
    <v-toolbar-side-icon @click.stop="clickedListIcon()"/>
    <v-toolbar-title>Application</v-toolbar-title>
  </v-toolbar>
</template>

<script lang="ts">
import Vue from 'vue'
import store from '../../store'

export default Vue.extend({
  data() {
    return {}
  },
  methods: {
    clickedListIcon() {
      store.$emit('notifyListStateTransition')
    }
  }
})
</script>
