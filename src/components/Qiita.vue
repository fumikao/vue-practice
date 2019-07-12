<template>
  <div class="container">
    <h2>Qiita記事検索</h2>
    <p>
      <input type="text" v-model="keyword">
    </p>
    <p>
      {{ message }}
    </p>
    <ul>
      <li v-for="item in items">
        <!-- {{ item.title }} -->
        <a :href="item.url" target="_blank">{{ item.title }}</a> likes:{{ item.likes_count }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      items: null,
      keyword: '',
      message: ''
    }
  },
  watch: {
    keyword: function(newKeyword, oldKeyword){
      this.message = 'Waiting for you to stop typing...'
      this.debouncedGetAnswer()
    }
  },
  // created: function(){
  //   this.debouncedGetAnswer = debounce(this.getAnswer, 1000)
  // },
  methods: {
    getAnswer: function(){
      if(this.keyword === ''){
        this.items = null
        this.message = ''
        return
      }
      this.message = 'Loading...'
      var vm = this
      var params = { page: 1, per_page: 20, query: this.keyword }
      axios.get('https://qiita.com/api/v2/items', { params })
      .then(function(response){
        console.log(response)
        vm.items = response.data
      })
      .catch(function(error){
        vm.message = 'Error!' + error
      })
      .finally(function(){
        vm.message = ''
      })
    }
  }
}
</script>

<style lang="scss" scoped>

</style>