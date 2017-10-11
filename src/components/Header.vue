<template>
  <div>
    <nav class="navbar navbar-default">
        <div class="container-fluid">
          <!-- Brand and toggle get grouped for better mobile display -->
          <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            <!--<a class="navbar-brand" href="#">Stock Trader</a>-->
            <router-link class="navbar-brand" to="/">Stock Trader</router-link>
          </div>

          <!-- Collect the nav links, forms, and other content for toggling -->
          <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul class="nav navbar-nav">
              <router-link to="/portfolio" tag="li" active-class="active"><a>Portfolio</a></router-link>
              <!--<li class="active"><a href="#">Portfolio <span class="sr-only">(current)</span></a></li>-->
              <router-link to="/stocks" tag="li" active-class="active"><a>Stocks</a></router-link>
              <!--<li><a href="#">Stocks</a></li>-->
            </ul>
            <ul class="nav navbar-nav navbar-right">
              <li><a href="#" @click="endDay">End Day</a></li>
              <li class="dropdown">
                <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Save & Load <span class="caret"></span></a>
                <ul class="dropdown-menu">
                  <li><a href="#">Save Data</a></li>
                  <li><a href="#">Load Data</a></li>
                </ul>
              </li>
              <li><a href="#"><strong>Funds: ${{ totalFunds | currency }}</strong></a></li>
            </ul>
          </div><!-- /.navbar-collapse -->
        </div><!-- /.container-fluid -->
      </nav>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { mapMutations } from 'vuex';

export default {
  methods: {
    ...mapMutations([
        'endDay'
      ])
  },
  computed: {
    ...mapGetters([
        'totalFunds'
    ]),
  }
}
</script>
