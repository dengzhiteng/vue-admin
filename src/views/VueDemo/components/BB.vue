<script setup lang="ts">
defineProps({
  title: String
})
const emit = defineEmits(["changeStateFormBB"])
const fatherData = inject("fatherData")
const obj = reactive({
  state: 0
})
const state = toRef(obj, "state")
const change = () => {
  state.value++
  // 给父组件传值
  emit("changeStateFormBB", state.value)
}
const rmb = ref(0)
const my = computed<string>(() => {
  return (rmb.value * 6.75).toFixed(3) + "美元"
})

let price = ref<number | string>(1)
let mul = computed({
  get: () => {
    return price.value
  },
  set: value => {
    price.value = "set" + value
  }
})

watch(mul, (newVal, oldVal) => {
  console.log(newVal, oldVal)
})

watch([mul, rmb], (newVal, oldVal) => {
  console.log("新的值----", newVal)
  console.log("旧的值----", oldVal)
})
</script>
<template>
  <h1>{{ title }}</h1>
  <p>来自父组件提供给后代组件的值 {{ fatherData }}</p>
  <p><button @click="change">change state</button> reactive结构成state的值: {{ state }}</p>
  <!-- 计算属性 -->
  <p><input type="text" v-model="rmb" /> 元 = {{ my }}</p>
  <p><button @click="mul = 100">computed get set</button>{{ mul }}</p>
</template>
<style scoped lang="scss">
p {
  margin-top: 10px;
}
</style>
