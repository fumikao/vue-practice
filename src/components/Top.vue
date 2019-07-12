<template>
  <div class="container">
  <v-layout justify-center>
    <v-list>
      <div class="project">
        <v-list-tile>
          <v-list-tile-content>
            <v-list-tile-title><router-link to="/year-converter">西暦→和暦システム</router-link></v-list-tile-title>
            <v-list-tile-sub-title>西暦を入力すると和暦に変換されます</v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-tile>
      </div>
      <div class="project">
        <v-list-tile>
          <v-list-tile-content>
            <v-list-tile-title><router-link to="/janken">じゃんけんゲーム</router-link></v-list-tile-title>
            <v-list-tile-sub-title>手を選ぶとコンピュータとじゃんけんできます</v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-tile>
      </div>
      <div class="project">
        <v-list-tile>
          <v-list-tile-content>
            <v-list-tile-title><router-link to="/qiita">Qiita記事検索</router-link></v-list-tile-title>
            <v-list-tile-sub-title>Qiitaの記事を検索できます</v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-tile>
      </div>
      <div class="project">
        <v-list-tile>
          <v-list-tile-content>
            <v-list-tile-title><router-link to="/bitcoin">Bitcoin価格一覧</router-link></v-list-tile-title>
            <v-list-tile-sub-title>APIを使ってBitcoinの値段を取得しています</v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-tile>
      </div>
    </v-list>
  </v-layout>
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
  a {
    text-decoration: none;
    border: 1px #4fc08d solid;
    border-radius: 30px;
    padding: 10px;
    color: #4fc08d;
  }
  p {
    margin-top: 20px;
    text-align: center;
  }
}
</style>
