import Portfolio from './components/Portfolio.vue';
import Stocks from './components/Stocks.vue';
import Home from './components/Home.vue';

export const routes = [
  { path: '/', component: Home },
  { path: '/portfolio', component: Portfolio },
  { path: '/stocks', component: Stocks }
]