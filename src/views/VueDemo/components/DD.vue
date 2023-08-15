<script lang="ts" setup>
import {fa} from "element-plus/es/locale"

defineProps({
  title: String
})
let goodsList: any = reactive([])
const addGoods = () => {
  const data = {
    id: "111",
    goodsName: "西瓜",
    num: 2,
    price: 2
  }
  goodsList.push(data)
}
const delGoodsList = (id: string, index: number) => {
  const res = goodsList.splice(index, 1)
}
const loading = ref(true)
setTimeout(() => {
  loading.value = false
  const arr = [
    {
      id: "123123",
      goodsName: "黄瓜",
      num: 1,
      price: 1.8
    },
    {
      id: "123123123123",
      goodsName: "西瓜",
      num: 2,
      price: 2
    },
    {
      id: "3454345",
      goodsName: "西瓜",
      num: 2,
      price: 2
    }
  ]
  goodsList.push(...arr)
}, 3000)
</script>
<template>
  <el-skeleton style="width: 240px" :loading="loading" animated :throttle="500">
    <template #template>
      <el-skeleton-item variant="circle" style="width: 50px; height: 50px" />
      <el-skeleton-item variant="h3" />
      <el-skeleton-item variant="text" style="margin-right: 16px" />
      <el-skeleton-item variant="text" />
    </template>
    <template #default>
      <h1>{{ title }}</h1>
      <section class="headerBrn">
        <el-button type="primary" size="small" @click="addGoods">新增</el-button>
      </section>
      <table class="table" cellspacing="0" cellpadding="0" border="1">
        <thead>
          <tr>
            <th>名称</th>
            <th>数量</th>
            <th>价格</th>
            <th>总价</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in goodsList" :key="item.id">
            <td align="center">{{ item.goodsName }}</td>
            <td align="center">{{ item.num }} 个</td>
            <td align="center">{{ item.price }} 元</td>
            <td align="center">{{ item.num * item.price }} 元</td>
            <td><el-button type="danger" size="small" @click="delGoodsList(item.id, index)">删除</el-button></td>
          </tr>
        </tbody>
      </table>
    </template>
  </el-skeleton>
</template>
<style scoped lang="scss">
.headerBrn {
  margin-bottom: 10px;
}
h1 {
  margin-bottom: 10px;
}
.table {
  width: 300px;
  tr {
    th {
      padding: 5px;
      white-space: nowrap;
      border: 1px solid #dcdcdc;
    }
    td {
      padding: 5px 10px;
      width: 100px;
      white-space: nowrap;
      border: 1px solid #dcdcdc;
    }
  }
}
</style>
