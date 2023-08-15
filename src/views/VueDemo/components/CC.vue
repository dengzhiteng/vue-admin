<script lang="ts" setup>
defineProps({
  title: String
})
const goodsList = reactive([
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
])
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
const exportGoods = () => {}
</script>
<template>
  <section class="animate__animated animate__bounceInLeft">
    <h1>{{ title }}</h1>
    <section class="headerBrn">
      <el-button type="primary" size="small" @click="addGoods">新增</el-button>
      <el-button type="primary" plain size="small" class="exportGoods" @click="addGoods">导出</el-button>
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
  </section>
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
