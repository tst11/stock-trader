<template>
  <div id="app">
    
    <div class="container">
      <app-header></app-header>
      
      <router-view></router-view>
      
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Portfolio from './components/Portfolio.vue';
import Stocks from './components/Stocks.vue';
import Home from './components/Home.vue';

export default {
  data () {
    return {
      
    }
  },
  components: {
    appHeader: Header,
    appPortfolio: Portfolio,
    appStocks: Stocks,
    appHome: Home
  }
}
</script>

<style>

  .container {
    margin-top: 35px;
  }

  .bordered{
    border: 1px solid #eee;
    padding: 20px 25px;
  }

</style>
