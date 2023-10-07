<script setup lang="ts">
import { useRouter } from "vue-router"
import type { FormInstance, FormRules } from "element-plus"
import { Ilogoin } from "@/type"
const router = useRouter()
const ruleFormRef = ref<FormInstance>()
const rules = reactive<FormRules<typeof form>>({
  username: [{ required: true, message: "账号不能为空", trigger: "blur" }],
  password: [{ required: true, message: "密码不能为空", trigger: "blur" }]
})
const form = reactive<Ilogoin>({
  username: "",
  password: ""
})
const getRoutes = () => { }
const { VITE_APP_TITLE,VITE_APP_VERSION } = import.meta.env
const onSubmit = (formEl: FormInstance | undefined) => {
  if (!formEl) return false
  formEl.validate(valid => {
    if (!valid) return false
    getRoutes()
    router.replace("/")
  })
}
</script>

<template>
  <div class="login-container flex justify-center items-center bg-cover bg-center">
    <el-card class="box-card">
      <template #header>
        <div class=" text-center">{{VITE_APP_TITLE}}</div>
      </template>
      <el-form :model="form" ref="ruleFormRef" :rules="rules" size="large" label-width="50px">
        <el-form-item label="账号" prop="username">
          <el-input v-model="form.username" placeholder="请输入账号" clearable />
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="form.password" placeholder="请输入密码" type="password" clearable />
        </el-form-item>
        <el-form-item class="login-btn-box justify-center">
              <el-button type="primary" size="large" @click="onSubmit(ruleFormRef)" class="login-btn">登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
  <p class="version text-center text-white bg-black pt-2 pb-2">version：{{VITE_APP_VERSION}}</p>
</template>

<style scoped  lang="scss">
.login-container {
  background-image: url("@/assets/images/login-bg.webp");
  height: calc(100vh - 37px);
}
.box-card {
  width: 400px;
}
.login-btn-box {
  .login-btn {
    width: 100%;
  }
}
</style>
