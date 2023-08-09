<script setup lang="ts">
import { ref, reactive } from "vue"
import { useRouter } from "vue-router"
import type { FormInstance, FormRules } from "element-plus"
import { logoinRuleForm } from "@/type"

const router = useRouter()
const ruleFormRef = ref<FormInstance>()
const rules = reactive<FormRules<typeof form>>({
  username: [{ required: true, message: "账号不能为空", trigger: "blur" }],
  password: [{ required: true, message: "密码不能为空", trigger: "blur" }]
})
const form = reactive<logoinRuleForm>({
  username: "",
  password: ""
})

const onSubmit = (formEl: FormInstance | undefined) => {
  if (!formEl) return false
  formEl.validate(valid => {
    if (!valid) return false
    if (form.username == "admin") {
      router.addRoute({
        path: "/demo1",
        name: "demo1",
        component: () => import("../RouterDemo/demo1.vue")
      })
    } else {
      router.removeRoute("demo1")
    }
    router.replace("/")
  })
}
</script>

<template>
  <div class="login-container">
    <el-card class="box-card">
      <template #header>
        <div class="card-header">Vue3+Ts+Vite</div>
      </template>
      <el-form :model="form" ref="ruleFormRef" :rules="rules" size="large" label-width="50px">
        <el-form-item label="账号" prop="username">
          <el-input v-model="form.username" placeholder="请输入账号" clearable />
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="form.password" placeholder="请输入密码" type="password" clearable />
        </el-form-item>
        <el-form-item label="">
          <el-button type="primary" class="el-button-block" size="large" @click="onSubmit(ruleFormRef)">登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<style scoped lang="scss">
.login-container {
  background-image: url("@/assets/images/login-bg.webp");
  background-size: cover;
  background-position: center;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
.box-card {
  width: 400px;
}
.card-header {
  text-align: center;
}
.login-btn-box {
  justify-content: center;
  .login-btn {
    width: 100%;
  }
}
</style>
