<template>
  <div class="row">
    <div class="col-md-12 bordered">
      <h1>Trade or View your Portfolio</h1>
      <p>You may Save & Load your Data</p>
      <p>Click on 'End Day' to begin a new Day!</p>
      <hr>
      <h4><strong>Your Funds: ${{ totalFunds | currency }}</strong></h4>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters([
        'totalFunds'
    ]),
  }
}
</script>
