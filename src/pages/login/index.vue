<script setup>
import config from "@/config/config.title.js";
import LangSwitch from "@/components/lang-switch/index.vue";
import asyncRoutes from "@/router/async-routes";
import { useRouter } from "vue-router";
/**
 * api
 **/
import { $api_login, $api_getAuthCode } from "@/api/login/index";
const Router = useRouter();
const loginInfo = ref({});
const loginInfoRules = ref({
  username: [
    {
      required: true,
      message: "请输入用户名",
    },
  ],
  password: [
    {
      required: true,
      message: "请输入密码",
    },
  ],
});
const loginRefForm = ref(null);

const handleLogin = () => {
  // asyncRoutes.forEach((it) => {
  //   if (it.meta.authorityCode.includes(code)) {
  //     tempList.push(it);
  //   }
  // });
  // tempList.forEach((it) => {
  //   Router.addRoute("main-page", it);
  // });
  // loginRefForm.value.validate((valid, fields) => {
  //   if (valid) {
  //     // 校验通过调用登录接口
  //     $api_login(loginInfo.value).then((res) => {
  //       // 1.将用户信息存入本地缓存
  //       Storage.setItem("userInfo", res);
  //       // 2.通过用户信息去拿权限码
  //       $api_getAuthCode().then((res) => {
  //         // 通过权限码过滤
  //       });
  //     });
  //   }
  // });
};
</script>

<template>
  <div class="login-plane">
    <div class="login-card">
      <el-card>
        <template #header>
          <div class="card-header">
            <span>{{ config.systemTitle }}</span>
            <LangSwitch />
          </div>
        </template>
        <el-form
          :model="loginInfo"
          status-icon
          ref="loginRefForm"
          :rules="loginInfoRules"
          label-width="auto"
        >
          <el-form-item label="用户名" prop="username">
            <el-input
              v-model="loginInfo.username"
              autocomplete="off"
              clearable
              placeholder="请输入用户名"
            >
              <template #prefix>
                <icon-ep:user-filled />
              </template>
            </el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input
              v-model="loginInfo.password"
              type="password"
              show-password
              clearable
              autocomplete="off"
              placeholder="请输入用密码"
            >
              <template #prefix>
                <icon-ep:lock style="color: #a8abb2" />
              </template>
            </el-input>
          </el-form-item>

          <el-form-item>
            <el-button type="primary" @click="handleLogin">{{
              $t("message.login")
            }}</el-button>
          </el-form-item>
        </el-form>
      </el-card>
    </div>
  </div>
</template>

<style scoped lang="scss">
.login-plane {
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background-color: #eef5ff;
}

.el-button {
  width: 100%;
}

.login-card {
  width: 400px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

.card-header {
  text-align: center;
}
</style>
