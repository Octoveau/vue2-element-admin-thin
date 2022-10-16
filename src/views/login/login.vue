<template>
  <div class="login-container">
    <div class="section">
      <div class="div-image">
        <el-image class="image" :src="logo"></el-image>
      </div>
      <div class="div-form">
        <el-form
          ref="loginForm"
          :model="loginForm"
          :rules="loginRules"
          class="login-form"
          autocomplete="on"
          label-position="left"
        >
          <div class="title-container">
            <h3 class="title">Vue2 Template Portal 登录界面</h3>
          </div>

          <el-form-item prop="username">
            <span class="svg-container">
              <svg-icon icon-class="user" />
            </span>
            <el-input
              ref="username"
              v-model.trim="loginForm.username"
              placeholder="Username"
              name="username"
              type="text"
              tabindex="1"
              autocomplete="on"
            />
          </el-form-item>

          <el-form-item prop="password">
            <span class="svg-container">
              <svg-icon icon-class="password" />
            </span>
            <el-input
              :key="passwordType"
              ref="password"
              v-model.trim="loginForm.password"
              :type="passwordType"
              placeholder="Password"
              name="password"
              tabindex="2"
              autocomplete="on"
              @keyup.enter.native="handleLogin"
            />
            <span class="show-pwd" @click="showPwd">
              <svg-icon
                :icon-class="passwordType === 'password' ? 'eye' : 'eye-open'"
              />
            </span>
          </el-form-item>

          <el-button
            :loading="loading"
            type="primary"
            style="width: 100%; margin-bottom: 0.2rem"
            @click.native.prevent="handleLogin"
            >登录</el-button
          >

          <div style="position: relative">
            <div class="tips">
              <span style="margin-right: 0.2rem">Username : admin</span>
              <span>Password : admin</span>
            </div>
          </div>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import logo from "@/assets/images/pic1.png";
import authStorage from "@/utils/auth";
export default {
  name: "Login",
  data() {
    return {
      redirectPath: "",
      timer: null,
      logo,
      loginForm: {
        username: "admin",
        password: "admin",
      },
      loginRules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
        ],
        password: [
          { required: true, message: "请输入用户密码", trigger: "blur" },
        ],
      },
      passwordType: "password",
      loading: false,
    };
  },
  created() {
    this.redirectPath = this.$route.query?.redirect || "";
  },
  beforeDestroy() {
    clearTimeout(this.timer);
  },
  methods: {
    showPwd() {
      if (this.passwordType === "password") {
        this.passwordType = "";
      } else {
        this.passwordType = "password";
      }
      this.$nextTick(() => {
        this.$refs.password.focus();
      });
    },
    handleLogin() {
      this.loading = true;
      this.$refs.loginForm.validate((valid) => {
        if (valid) {
          //模拟延迟请求
          this.timer = setTimeout(() => {
            if (
              this.loginForm.username === "admin" &&
              this.loginForm.password === "admin"
            ) {
              authStorage.setUserInfo(this.loginForm);
              //进行跳转
              if (this.redirectPath) {
                this.$message.success("登录成功");
                this.$router.push(this.redirectPath);
              } else {
                this.$router.push({
                  name: "DashBoard",
                });
              }
            } else {
              this.$message.warning("请输入正确的账号或者密码");
            }
            this.loading = false;
          }, 2000);
        }
      });
    },
  },
};
</script>

<style lang="less">
/* reset element-ui css */
.login-container {
  .el-input {
    display: inline-block;
    height: 0.5rem;
    width: 2.5rem;

    input {
      background: transparent;
      border: 0px;
      -webkit-appearance: none;
      border-radius: 0px;
      padding: 0.15rem 0.0625rem 0.15rem 0.1875rem;
      color: #fff;
      height: 0.5rem;
      caret-color: #fff;

      &:-webkit-autofill {
        box-shadow: 0 0 0px 12.5rem #fff inset !important;
        -webkit-text-fill-color: #fff !important;
      }
    }
  }

  .el-form-item {
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    color: #454545;
  }
}
</style>

<style lang="less" scoped>
.login-container {
  position: relative;
  min-height: 100%;
  width: 100%;
  background-image: url("../../assets/images/back.jpg");
  background-repeat: no-repeat;
  background-position: top;
  background-size: 100% 100%;
  overflow: hidden;
  .section {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    .div-image {
      -webkit-clip-path: polygon(0 0, 100% 0, 80% 100%, 0 100%);
      background-color: rgba(255, 255, 255, 0.9);
      padding: 0.4rem;
      padding-right: 1rem;
      .image {
        width: 6rem;
      }
    }
    .div-form {
      margin-left: -2.125rem;
      padding-left: 2.125rem;
      background-color: rgba(34, 34, 34, 0.9);
      .login-form {
        padding: 1rem 0.375rem;
        position: relative;
        width: 5rem;
        max-width: 100%;
        margin: 0 auto;
        overflow: hidden;
      }

      .tips {
        font-size: 0.175rem;
        color: #fff;
        margin-bottom: 0.1rem;

        span {
          &:first-of-type {
            margin-right: 0.2rem;
          }
        }
      }
      .svg-container {
        padding: 6px 5px 6px 15px;
        color: rgb(83, 81, 81);
        vertical-align: middle;
        width: 0.2rem;
        display: inline-block;
      }

      .title-container {
        position: relative;

        .title {
          font-size: 0.325rem;
          color: #fff;
          margin: 0px auto 0.5rem auto;
          text-align: center;
          font-weight: bold;
        }
      }

      .show-pwd {
        position: absolute;
        right: 0.125rem;
        top: 0.0875rem;
        font-size: 0.2rem;
        color: #fff;
        cursor: pointer;
        user-select: none;
      }
    }
  }
}
</style>
