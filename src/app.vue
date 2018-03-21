<template>
  <Baseline/>
</template>

<script lang="ts">
import Vue from 'vue'
import Baseline from './components/templates/baseline.vue'
export default Vue.extend({
  components: {
    Baseline
  }
})
</script>

<style>
.gradation,
footer {
  background-image: linear-gradient(
    60deg,
    #3d3393 0%,
    #2b76b9 37%,
    #2cacd1 65%,
    #35eb93 100%
  ) !important;
  color: #f7f7f7 !important;
  font-family: 'Lato', sans-serif;
  font-weight: 300;
}
</style>
