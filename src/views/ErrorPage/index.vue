<script setup>
import NotFound from "@/views/ErrorPage/components/NotFound1.vue"
import NotAuth from "@/views/ErrorPage/components/NotAuth.vue"
import { useRoute } from "vue-router"
const route = useRoute()
const list = {
  404: NotFound,
  403: NotAuth
}
</script>
<template>
  <component :is="list[route.params.type] || NotFound"></component>
</template>
