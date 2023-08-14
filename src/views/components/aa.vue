<script lang="ts" setup>
const isShow = ref(false)
const message: string = "a,b,c,d"

type Cls = {
  other: boolean
  h: boolean
}
const flag: Cls = {
  other: true,
  h: true
}
const flagClass = ref(true)
const userName = ref("v-model")
console.log("flagClass", flagClass)
console.log("isRef", isRef(flagClass))

// shallowRef 只能响应浅层
const userName1 = shallowRef("shallowRef")
const changeUserName1 = () => {
  userName1.value = "YYY"
}

const userName2 = shallowRef({
  name: "shallowRef"
})
const changeUserName2 = () => {
  userName2.value.name = "YYY"
}

const parent = () => {
  console.log("parent")
}
const child = () => {
  console.log("child")
}
const submit = () => {
  console.log("submit")
}

const userInfo = reactive({
  name: "张三",
  age: 19,
  sex: 2
})
userInfo.name = "张三??"
const userList = reactive(["张三", "李四"])
setTimeout(() => {
  userList.push("王五")
}, 100)
// reactive 只能接受 {} 或者 []
// const userName3 = reactive("张三")

let person = reactive<number[]>([])
setTimeout(() => {
  const arr = [1, 2, 3]
  // person = arr  直接赋值会脱离响应式
  person.push(...arr)
}, 2000)

const copyPerson = readonly(person)
// copyPerson.push(1) //只读 ,所以报错
</script>
<template>
  <!-- v-if v-show -->
  <el-row>
    <el-button @click="isShow = !isShow">切换显示</el-button>
    <p class="desc" v-if="isShow">isShow=true</p>
    <p v-else>isShow=false</p>
  </el-row>
  <!-- message  -->
  <el-row>
    <p>{{ message.split(",") }}</p>
  </el-row>

  <!-- 修饰符 -->
  <div @click="parent">
    <div @click.stop="child">child</div>
  </div>

  <!-- 阻止表单提交案例 -->
  <form action="/">
    <button @click.prevent="submit" type="submit">submit</button>
  </form>

  <!-- 动态class 案例 1-->
  <div :class="[flagClass ? 'active' : 'other', 'h', 'aaaa']" class="aa">动态class</div>

  <!-- 动态class 案例 2-->
  <div :class="flag">{{ flag }}</div>

  <!-- v-model -->
  <p>{{ userName }}</p>

  <el-button @click="changeUserName1"> shallowRef</el-button>
  <p>{{ userName1 }}</p>
  <el-button @click="changeUserName2"> shallowRef</el-button>
  <p>{{ userName2.name }}</p>

  <p>reactive</p>
  <p>{{ userInfo.name }}--{{ userInfo.age }}--{{ userInfo.sex }}</p>
  <p>{{ userList }}</p>

  <p>person: {{ person }}</p>
  <p>copyPerson: {{ copyPerson }}</p>
</template>
<style scoped lang="scss">
.active {
  color: red;
}
</style>
