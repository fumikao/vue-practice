<template>
  <div class="container">
    <h2>西暦→和暦システム</h2>
      <div class="table">
        <p><input type="number" v-model="year" name="year" id="year">年は...</p>
        <table>
          <tr>
            <th>明治</th>
            <td>{{ year - 1867 }} 年</td>  
          </tr>
          <tr>
            <th>大正</th>
            <td>{{ year - 1911 }} 年</td>  
          </tr>
          <tr>
            <th>昭和</th>
            <td>{{ year - 1925 }} 年</td>  
          </tr>
          <tr>
            <th>平成</th>
            <td>{{ year - 1988 }} 年</td>  
          </tr>
          <tr>
            <th>令和</th>
            <td>{{ year - 2018 }} 年</td>  
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      year: new Date().getFullYear()
    }
  }
}
</script>

<style lang="scss" scoped>
input {
  padding: 5px;
  border: solid 1px #ccc;
}
.table {
  width: 50%;
  margin: 0 auto;
  table {
    margin: 0 auto;
  }
}
</style>