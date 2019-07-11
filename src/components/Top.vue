<template>
  <div class="container">
    <h2>Vue.jsに慣れるために作ってみました。</h2>
    <div class="project">
      <router-link to="/year-converter">西暦→和暦システム</router-link></li>
      <p>西暦を入力すると和暦に変換されます</p>
    </div>
    <div class="project">
      <router-link to="/janken">じゃんけんゲーム</router-link></li>
      <p>手を選ぶと勝ち負けが表示されます</p>
    </div>
    <div class="project">
      <router-link to="/bitcoin">Bitcoin価格一覧</router-link></li>
      <p>APIを使ってBitcoinの値段を取得しています</p>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.project {
  padding: 10px;
  margin: 10px;
  a {
    text-decoration: none;
    border: 1px #4fc08d solid;
    border-radius: 30px;
    padding: 10px;
    color: #4fc08d;
  }
}
</style>
