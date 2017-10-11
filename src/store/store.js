import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    totalFunds: 10000,
    stocks: [
        {name: 'BMW', price: 110, own: false, num: 0},
        {name: 'Google', price: 114, own: false, num: 0},
        {name: 'Apple', price: 312, own: false, num: 0},
        {name: 'Twitter', price: 10, own: false, num: 0},
    ],
    myStocks: [
      
    ]
  },
  getters: {
    stocks: state => {
      return state.stocks;
    },
    totalFunds: state => {
      return state.totalFunds;
    },
    portfolioStocks: state => {
      return state.myStocks;
    }
  },
  mutations: {
    addMyStock: (state, payload) => {
      var price;
      var quantity;
      for(var i = 0; i < state.stocks.length; i++) {
        if(state.stocks[i].name === payload.name){
          state.stocks[i].own = true;
          state.stocks[i].num += payload.num;
          state.totalFunds -= state.stocks[i].price * payload.num;
        }
      }

    },
    sellStock: (state, payload) => {

      for(var i = 0; i < state.stocks.length; i++) {
        if(state.stocks[i].name === payload.name){     
          state.stocks[i].num -= payload.num;
          if(state.stocks[i].num === 0) {
            state.stocks[i].own = false;
            state.totalFunds += state.stocks[i].price * payload.num;
          }
        }
      }

    },
    endDay: state => {
      for(var i = 0; i < state.stocks.length; i++){
        var stockPrice = state.stocks[i].price;
        var changeNum = Math.floor(Math.random()*(5+5+1)-5) * 0.01;
        var change = stockPrice * changeNum;
        
        stockPrice += change;
        stockPrice = parseFloat(stockPrice.toFixed(2));
        state.stocks[i].price = stockPrice; 
      }
    }
  },
  actions: {

  }
});