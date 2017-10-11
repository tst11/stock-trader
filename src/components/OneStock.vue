<template>
  <div class="col-md-6">
    <div class="panel panel-success">
      <div class="panel-heading">
        <h3 class="panel-title" style="display: inline-block;">{{ showStock.name }}</h3>
        <small>(Price: {{ showStock.price }} $)</small>
      </div>
      <div class="panel-body">
        <div class="col-xs-4">
          <input 
            type="text" 
            class="form-control" 
            placeholder="Quantity"
            v-model.number="quantity">
        </div>

        <button class="btn btn-success pull-right"
        @click="buyStock">Buy</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  props: ['stock'],
  data() {
    return {
      showStock: this.stock,
      quantity: null
    }
  },
  methods: {
      ...mapMutations([
        'addMyStock'
      ]),
      buyStock() {
        this.addMyStock({name: this.showStock.name ,num: this.quantity});
        this.quantity = null;
      }
  }
}
</script>
