<script lang="ts" setup>
interface Columns {
  prop?: string
  label: string
  width?: number | "auto"
  slot?: string
}

const props = withDefaults(
  defineProps<{
    tableData: {}[]
    columns: Columns[]
    border?: boolean
    stripe?: boolean
    size?: "large" | "default" | "small"
    isExportExcel?: boolean
    fielName?: string
  }>(),
  {
    border: true,
    stripe: true,
    size: "default",
    isExportExcel: true
  }
)
// 导出
import * as XLSX from "xlsx"
import Export from "@/utils/exportToExcel"
const table = ref()
const onExportExcel1 = () => {
  const tableDom = table.value?.$el
  const sheet = XLSX.utils.table_to_sheet(tableDom)
  const workbook = XLSX.utils.book_new()
  XLSX.utils.book_append_sheet(workbook, sheet, "Sheet11")
  XLSX.writeFile(workbook, `${props.fielName}.xlsx`)
}
const onExportExcel = () => {
  let fields = {}
  props.columns.forEach(cur => {
    if (cur.prop && !cur.slot) {
      fields[cur.prop] = cur.label
    }
  })
  Export(props.tableData, fields, props.fielName)
}
</script>
<template>
  <el-button type="primary" plain v-if="isExportExcel" class="float-right mb-1" @click="onExportExcel">导出</el-button>
  <el-table :data="props.tableData" :border="props.border" :stripe="props.stripe" :size="props.size" ref="table">
    <template v-for="(col, index) in props.columns" :key="index">
      <slot :name="col.slot" v-if="col.slot"></slot>
      <el-table-column :prop="col.prop" :label="col.label" v-else />
    </template>
  </el-table>
</template>
