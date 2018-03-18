<template>
  <v-app id="inspire">
    <Sidebar></Sidebar>
    <Header></Header>
    <v-content>
      <v-container fluid fill-height>
        <v-layout
          justify-center
          align-center
        >
          <v-flex text-xs-center>
              <router-view></router-view>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
    <Footer></Footer>
</v-app>
</template>

<script lang="ts">
    import Vue from 'vue';
    import VueRouter from 'vue-router';
    Vue.use(VueRouter);
    import routes from '../../routes';
    import store from '../../store';

    import Header from '../organisms/header.vue';
    import Sidebar from '../organisms/sidebar.vue';
    import Footer from '../organisms/footer.vue';

    let router = new VueRouter({
        routes: routes
    });

    export default Vue.extend({
      data: () => ({
        drawer: false
      }),
      created() {
            store.$on('clickedSideItem', (path: string) => {
                router.push(path);
            });
      },
      components: {
          Header,
          Sidebar,
          Footer
      },
      router: router
    });
</script>