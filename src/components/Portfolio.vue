<template>
  <div class="row">
    <app-one-stock v-if="stock.own" 
      v-for="stock in stocks"
      :stock="stock" :key="stock.name"></app-one-stock>

    <!--{{ portfolioStocks }}-->
  </div> 
</template>

<script>
import Stock from './MyStock.vue';
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters([
        'portfolioStocks',
        'stocks'
    ]),
  },
  components: {
    appOneStock: Stock
  }
}
</script>
