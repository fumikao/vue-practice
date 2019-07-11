<template>
  <div class="container">
    <h2>Bitcoin Price</h2>
    <section v-if="hasError">
      Error
    </section>
    <section v-else>
      <div v-if="loading">
        Loading...
      </div>
      <div v-else>
        <table v-cloak>
          <tr v-for="(rate, currency) in bpi">
            <th>{{ currency }}</th>
            <td>{{ rate.rate_float | currencyDecimal }}</td>  
          </tr>
        </table>
      </div>
    </section>
  </div>
</template>

<script>
const axios = require('axios');
export default {
  data () {
    return {
      bpi: null,
      hasError: false,
      loading: true
    }
  },
  mounted: function(){
    axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
    .then(function(response){
      this.bpi = response.data.bpi
    }.bind(this))
    .catch(function(error){
      this.hasError = true
    }.bind(this))
    .finally(function(){
      this.loading = false
    }.bind(this))
  },
  filters: {
    currencyDecimal(value){
      return value.toFixed(2)
    }
  }
}
</script>

<style lang="scss" scoped>
[v-cloak] {
  display: none;
}

table {
  width: 50%;
  margin: 0 auto;
}
</style>