<template>
  <div class="container">
    <p>Vue.jsに慣れるために作ってみました。</p>
    <div class="project">
      <router-link to="/year-converter">西暦→和暦　変換システム</router-link></li>
      <p>西暦を入力すると和暦に変換されます</p>
    </div>
    <div class="project">
      <router-link to="/Janken">じゃんけんゲーム</router-link></li>
      <p>手を選ぶと勝ち負けが表示されます</p>
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
  border: dashed 1px gray;
  padding: 10px;
  margin: 10px;
  a {
    // color: #78FF94;
    font-weight: bold;
    &:hover {
      opacity: 0.5;
    }
  }
}
</style>
