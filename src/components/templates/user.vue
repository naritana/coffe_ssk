<template>
  <div>
    <h1>{{ name }}</h1>
    <v-btn @click="setUserName()">ユーザーを変更</v-btn>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {
      name: 'Your Name'
    }
  },
  created() {
    // let myButton = document.querySelector('v-btn');
    let storedName = localStorage.getItem('name')
    if (storedName) {
      this.name = storedName
    } else this.setUserName()
  },
  methods: {
    setUserName() {
      let myName = prompt('あなたの名前を入力してください')
      if (myName) {
        localStorage.setItem('name', myName)
        this.name = myName
      } else {
        this.setUserName()
      }
    }
  }
})
</script>
