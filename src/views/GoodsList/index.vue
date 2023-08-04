<script setup>
import * as XLSX from "xlsx"
console.log(import.meta.env)
const tableHeader = {
  name: "姓名",
  sex: "性别",
  age: "年龄"
}
const tableData = [
  {
    name: "张三",
    sex: "男",
    age: 1
  },
  {
    name: "张三",
    sex: "男",
    age: 3
  },
  {
    name: "嘉靖",
    sex: "男",
    age: 3
  }
]
function exportExcle() {
  let workbook = XLSX.utils.book_new()
  var worksheet = XLSX.utils.json_to_sheet([tableHeader, ...tableData])
  XLSX.utils.book_append_sheet(workbook, worksheet, "sheet")
  XLSX.writeFile(workbook, "./表格.xlsx")
}
</script>

<template>
  <el-row class="goodList">
    <el-button type="primary" @click="exportExcle">导出</el-button>
    <el-table :data="tableData" stripe>
      <el-table-column prop="name" label="姓名" />
      <el-table-column prop="sex" label="性别" />
      <el-table-column prop="age" label="年龄" />
    </el-table>
  </el-row>
</template>

<style scoped lang="scss"></style>
