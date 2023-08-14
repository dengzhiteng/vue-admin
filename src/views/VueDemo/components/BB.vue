<script setup lang="ts">
const obj = {
  foo: 1,
  bar: 1
}
const state = toRef(obj, "bar")
const change = () => {}
</script>
<template>
  <p>to系列全家桶</p>
  <p><button @click="change">按钮</button>{{ state }}</p>
</template>
<style scoped lang="scss"></style>
