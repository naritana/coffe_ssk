<template>
  <div>
    <Loading v-if="loading"/>
    <v-btn @click="setItems()">reload</v-btn>
    <v-btn @click="clearItems()">clear</v-btn>
    <v-data-table
      :headers="headers"
      :items="items"
      hide-actions
      class="elevation-1"
      dark
    >
      <template 
        slot="items" 
        slot-scope="props">
        <td>{{ props.item.id }}</td>
        <td class="text-xs-left">{{ props.item.name }}</td>
        <td class="text-xs-right">{{ props.item.today }}</td>
        <td class="text-xs-right">{{ props.item.thisMonth }}</td>
        <td class="text-xs-right">{{ props.item.thisMonth*price }}</td>
        <td class="text-xs-right">{{ props.item.lastMonth }}</td>
        <td class="text-xs-right">{{ props.item.lastMonth*price }}</td>
        <v-btn 
          class="primary" 
          @click="increment(props.item.id)">+</v-btn>
        <v-btn 
          class="error" 
          @click="decrement(props.item.id)">-</v-btn>
      </template>
    </v-data-table>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Loading from '../molecules/loading.vue'

interface Item {
  id: string
  name: string
  today: number
  thisMonth: number
  lastMonth: number
}
let items: Item[] = []
const URL =
  'https://81shqczhp7.execute-api.ap-northeast-1.amazonaws.com/api/user/'

export default Vue.extend({
  components: {
    Loading
  },
  data() {
    return {
      loading: true,
      headers: [
        {
          text: 'ID',
          align: 'left',
          value: 'id'
        },
        { text: 'Name', value: 'name' },
        { text: 'Today', value: 'today' },
        { text: 'This Month', value: 'thisMonth' },
        { text: 'Total Price(this Month)', value: 'totalPriceThisMonth' },
        { text: 'Last Month', value: 'lastMonth' },
        { text: 'Total Price(last Month)', value: 'totalPriceLastMonth' }
      ],
      items: items,
      price: 30 // the price of a cup of coffee
    }
  },
  created() {
    let items = sessionStorage.getItem('items')
    if (items) this.items = JSON.parse(items)
    else this.setItems()
    this.loading = false
  },
  methods: {
    setItems() {
      let self = this
      fetch(URL + 'all')
        .then(response => {
          return response.json()
        })
        .then((items: Item[]) => {
          self.items = items
          sessionStorage.setItem('items', JSON.stringify(items))
        })
    },
    clearItems() {
      this.items = []
      sessionStorage.removeItem('items')
    },
    increment(itemId: string) {
      // console.log(URL + itemId);
      fetch(URL + itemId, {
        method: 'PUT'
      })
        .then(response => response.json())
        .then((response: Item) => {
          let index = this.items.findIndex(({ id }) => {
            return id === itemId
          })
          if (!(index === null)) {
            this.items[index].today = response.today
            this.items[index].thisMonth = response.thisMonth
            sessionStorage.removeItem('items')
            sessionStorage.setItem('items', JSON.stringify(this.items))
          } else {
            // this.items.push({
            //     id: itemId,
            //     name: 'unknown',
            //     today: response.today,
            //     thisMonth: response.thisMonth,
            //     lastMonth: 0
            // });
          }
        })
    },
    decrement(id: string) {
      return id
    }
  }
})
</script>
