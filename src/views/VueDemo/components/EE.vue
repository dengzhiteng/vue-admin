<script setup>
const keyWords = ref("")
const useInputKeyWords = () => {
  console.log("keyWords")
}
const useSeach = () => {
  console.log("useSeach")
}
</script>

<template>
  <el-row class="search">
    <el-input
      style="width: 200px"
      type="text"
      placeholder="请输入"
      v-model="keyWords"
      v-focus
      @input="useInputKeyWords"
    />
    <el-button type="primary" style="margin-left: 10px" v-debounce="{fn: () => useSeach()}">查询(v-debounce)</el-button>
    <el-button type="primary" style="margin-left: 10px" v-throttle @click="useSeach">查询(v-throttle)</el-button>
  </el-row>
</template>
<style lang="scss" scoped>
.search {
  width: 800px;
}
</style>
