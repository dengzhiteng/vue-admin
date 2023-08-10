<script setup lang="ts">
import { IgoodsList } from "@/type"
const tableData: IgoodsList[] = [
  {
    id: "123",
    goodsName: "ddd",
    price: 10,
    stock: 2,
    desc: "123"
  }
]
</script>

<template>
  <p>商品列表</p>
  <el-row class="goodList">
    <el-table :data="tableData" stripe>
      <el-table-column prop="goodsName" label="商品名称" />
      <el-table-column prop="price" label="价格" />
      <el-table-column prop="stock" label="库存" />
      <el-table-column prop="desc" label="描述" />
      <el-table-column prop="img" label="图片" />
    </el-table>
  </el-row>
</template>

<style scoped lang="scss">
:deep(.red) {
  color: red;
}
</style>
