<template>

  <div class="row">

    <app-one-stock 
      v-for="stock in stocks" 
      :stock="stock"
      :key="stock.name"></app-one-stock>

  </div>

</template>

<script>
import Stock from './OneStock.vue';
import { mapGetters } from 'vuex';

export default {
  data() {
    return {
      
      }
  },
  computed: {
    ...mapGetters([
        'stocks'
    ]),
  },
  components: {
    appOneStock: Stock
  }
}
</script>
