<template>
  <div>
    <v-progress-circular 
      :size="50" 
      indeterminate 
      color="primary"/>
  </div>
</template>

<style scoped>
div {
  position: relative;
  text-align: center;
}
.progress-circular {
  position: fixed;
  margin: 0 auto;
}
</style>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend()
</script>
