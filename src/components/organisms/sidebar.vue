<template>
  <v-navigation-drawer
    v-model="drawer"
    app
    dark
    temporary
  >
    <v-list>
      <v-list-tile 
        v-for="item in items" 
        :key="item.name" 
        @click="clickedItem(item.path)">
        <v-list-tile-action>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>{{ item.name }}</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</template>

<script lang="ts">
import Vue from 'vue'
import routes from '../../routes'
import store from '../../store'

export default Vue.extend({
  data() {
    return {
      drawer: false,
      items: routes
    }
  },
  created() {
    store.$on('notifyListStateTransition', () => {
      this.drawer = !this.drawer
    })
  },
  methods: {
    clickedItem(path: string) {
      store.$emit('selectListItem', path)
    }
  }
})
</script>
