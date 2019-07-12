<template>
  <div class="container">
    <h2>じゃんけん...</h2>
    <div class="choose">
      <p>手を選んでクリック！</p>
      <ul>
        <li><font-awesome-icon :icon="['far', 'hand-rock']" @click="fight('goo')" /></li>
        <li><font-awesome-icon :icon="['far', 'hand-peace']" @click="fight('choki')" /></li>
        <li><font-awesome-icon :icon="['far', 'hand-paper']" @click="fight('paa')" /></li>
      </ul>
    </div>
    <div class="result">
      <div class="hand">
        <font-awesome-icon :icon="['far', 'hand-rock']" v-if="myHand === 'goo'" />
        <font-awesome-icon :icon="['far', 'hand-peace']" v-if="myHand === 'choki'" />
        <font-awesome-icon :icon="['far', 'hand-paper']" v-if="myHand === 'paa'" />
        <p>{{ myHandLabel }}</p>
      </div>
      <h2>{{ result }}</h2>
      <div class="hand">
        <font-awesome-icon :icon="['far', 'hand-rock']" v-if="enemyHand === 'goo'" />
        <font-awesome-icon :icon="['far', 'hand-peace']" v-if="enemyHand === 'choki'" />
        <font-awesome-icon :icon="['far', 'hand-paper']" v-if="enemyHand === 'paa'" />
        <p>{{ enemyHandLabel }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      hand: ['goo', 'choki', 'paa'],
      myHandLabel: '',
      enemyHandLabel: '',
      myHand: '',
      enemyHand: '',
      enemyHandIcon: '',
      result: ''
    }
  },
  methods: {
    fight: function(myHand) {
      this.myHandLabel = 'あなたの手'
      this.enemyHandLabel = 'あいての手'
      this.myHand = myHand
      var index = Math.floor(Math.random() * Math.floor(3))
      this.enemyHand = this.hand[index]
      if(this.enemyHand === 'goo') {
        this.enemyHandIcon = `<font-awesome-icon :icon="['far', 'hand-paper']" />`
      } else if (this.enemyHand === 'choki') {
        this.enemyHandIcon = `<font-awesome-icon :icon="['far', 'hand-paper']" />`
      } else if (this.enemyHand === 'paa') {
        this.enemyHandIcon = `<font-awesome-icon :icon="['far', 'hand-paper']" />`
      }
      if(myHand === this.enemyHand){
        this.result = '引き分け'
      }
      if(this.enemyHand === 'goo' && myHand === 'paa') {
        this.result = '勝ち！'
      }
      if(this.enemyHand === 'choki' && myHand === 'goo') {
        this.result = '勝ち！'
      }
      if(this.enemyHand === 'paa' && myHand === 'choki') {
        this.result = '勝ち！'
      }
      if(this.enemyHand === 'goo' && myHand === 'choki') {
        this.result = '負け...'
      }
      if(this.enemyHand === 'choki' && myHand === 'paa') {
        this.result = '負け...'
      }
      if(this.enemyHand === 'paa' && myHand === 'goo') {
        this.result = '負け...'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
p {
  font-size: 12px;
}

ul {
  display: flex;
  justify-content: center;
  font-size: 0.5em;
  padding: 0;
}

li {
  margin: 0 10px;
  font-size: 5em;
  cursor: pointer;
  &:hover {
    opacity: 0.5;
  }
}

.result {
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  h2 {
    margin: 0 20px;
  }
}

.hand {
  font-size: 5em;
}
</style>