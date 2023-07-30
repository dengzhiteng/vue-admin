<script  setup>
import { ref, reactive } from "vue";
import { useRouter } from 'vue-router'
const router = useRouter()

const ruleFormRef = ref(null)
const rules = reactive({
  username: [
    { required: 'true', message: '账户不能为空', trigger: 'blur' }
  ],
  password: [
    { required: 'true', message: '密码不能为空', trigger: 'blur' }
  ]
});
const form = reactive({
  username: "",
  password: "",
});

const onSubmit = async () => {
  if (!ruleFormRef) return;
  ruleFormRef.value.validate((valid) => {
    if (valid) {
      if (form.username == 'admin') {
        router.addRoute({
          path: '/demo1',
          name: 'demo1',
          component: () => import("../RouterDemo/demo1.vue")
        })
      } else {
        router.removeRoute('demo1')
      }
      console.log(router.getRoutes())
      router.replace('/')
    } else {
      return false;
    }
  });
};
</script>


<template>
  <div class="login-container">
    <el-card class="box-card">
      <template #header>
        <div class="card-header">小兔鲜商城系统</div>
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
  background-image: url('@/assets/images/login-bg.webp');
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
