<template>
  <v-app>
    <Sidebar/>
    <Header class="gradation"/>
    <v-content class="gradation">
      <v-container 
        fluid 
        fill-height>
        <v-layout
          justify-center
          align-center
        >
          <v-flex text-xs-center>
            <h1>AAAAA</h1>
            <router-view/>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
    <Footer/>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import routes from '../../routes'
import store from '../../store'

import Header from '../organisms/header.vue'
import Sidebar from '../organisms/sidebar.vue'
import Footer from '../organisms/footer.vue'

let router = new VueRouter({
  routes: routes
})

export default Vue.extend({
  components: {
    Header,
    Sidebar,
    Footer
  },
  data: () => ({}),
  created() {
    store.$on('selectListItem', (path: string) => {
      router.push(path)
    })
  },
  router: router
})
</script>

<style>
</style>
