<script lang="ts" setup>
interface Columns {
  prop: string
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
  }>(),
  {
    border: true,
    stripe: true
  }
)
</script>
<template>
  <el-table :data="props.tableData" :border="props.border" :stripe="props.stripe">
    <template v-for="(col, index) in props.columns" :key="index">
      <slot :name="col.slot" v-if="col.slot" />
      <el-table-column :prop="col.prop" :label="col.label" v-else />
    </template>
  </el-table>
</template>
