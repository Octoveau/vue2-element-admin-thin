<template>
  <div class="login-container">
    <div class="section">
      <div class="div-image">
        <el-image class="image" :src="logo"></el-image>
      </div>
      <div class="div-form">
        <el-form ref="loginForm" :model="loginForm" :rules="loginRules" class="login-form" autocomplete="on" label-position="left">
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
              <svg-icon :icon-class="passwordType === 'password' ? 'eye' : 'eye-open'" />
            </span>
          </el-form-item>
          <el-button :loading="loading" type="primary" style="margin-bottom: 0.2rem; width: 100%" @click.native.prevent="handleLogin">登录</el-button>

          <div style="position: relative">
            <div class="tips">
              <span style="margin-right: 0.2rem">Username : admin</span>
              <span>Password : admin</span>
            </div>
            <div class="sso-btn">
              <a href="#" class="a-btn" @click="onGotoSsoLogin"
                >点击进行单点登录<span> <i class="el-icon-s-unfold"></i></span
              ></a>
            </div>
          </div>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import logo from '@/assets/images/pic3.png';
import authStorage from '@/utils/auth';

export default {
  name: 'Login',
  data() {
    return {
      redirectPath: '',
      timer: null,
      logo,
      loginForm: {
        username: 'admin',
        password: 'admin',
      },
      loginRules: {
        username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
        password: [{ required: true, message: '请输入用户密码', trigger: 'blur' }],
      },
      passwordType: 'password',
      loading: false,
    };
  },
  created() {
    this.redirectPath = this.$route.query?.redirecturl || '';
  },
  beforeDestroy() {
    clearTimeout(this.timer);
  },
  methods: {
    onGotoSsoLogin() {
      this.$confirm('如果还没在sso平台进行注册,请先进行用户注册?', '提示', {
        confirmButtonText: '登录',
        cancelButtonText: '前往注册',
        type: 'warning',
      })
        .then(() => {
          // 切换登录方式

          this.$router.push({
            name: 'SsoLogin',
          });
        })
        .catch(() => {
          window.open('http://www.octoveau.cn/sso-login/', '_blank');
        });
    },
    showPwd() {
      if (this.passwordType === 'password') {
        this.passwordType = '';
      } else {
        this.passwordType = 'password';
      }
      this.$nextTick(() => {
        this.$refs.password.focus();
      });
    },
    handleLogin() {
      this.loading = true;
      this.$refs.loginForm.validate((valid) => {
        if (valid) {
          // 模拟延迟请求
          this.timer = setTimeout(() => {
            if (this.loginForm.username === 'admin' && this.loginForm.password === 'admin') {
              authStorage.setUserInfo(this.loginForm);
              // 进行跳转
              if (this.redirectPath) {
                this.$message.success('登录成功');
                this.$router.push(this.redirectPath);
              } else {
                this.$router.push({
                  name: 'DashBoard',
                });
              }
            } else {
              this.$message.warning('请输入正确的账号或者密码');
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
    width: 2.5rem;
    height: 0.5rem;

    input {
      padding: 0.15rem 0.0625rem 0.15rem 0.1875rem;
      height: 0.5rem;
      color: #fff;
      background: transparent;
      border: 0;
      border-radius: 0;
      appearance: none;
      caret-color: #fff;

      &:-webkit-autofill {
        box-shadow: 0 0 0 12.5rem #fff inset !important;
        -webkit-text-fill-color: #fff !important;
      }
    }
  }

  .el-form-item {
    color: #454545;
    background: rgba(0, 0, 0, 10%);
    border: 1px solid rgba(255, 255, 255, 10%);
    border-radius: 5px;
  }
}
</style>
<style lang="less" scoped>
.login-container {
  position: relative;
  overflow: hidden;
  width: 100%;
  min-height: 100%;
  background-position: top;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-image: url('../../assets/images/back.jpg');

  .section {
    position: absolute;
    top: 50%;
    left: 50%;
    display: flex;
    box-shadow: 5px 5px 10px #100f0f;
    transform: translate(-50%, -50%);

    .div-image {
      padding: 0.2rem;
      padding-right: 1rem;
      background-color: rgba(255, 255, 255);
      clip-path: polygon(0 0, 100% 0, 80% 100%, 0 100%);

      .image {
        width: 6rem;
      }
    }

    .div-form {
      padding-left: 2.125rem;
      margin-left: -2.125rem;
      background-color: rgba(34, 34, 34, 80%);

      .login-form {
        position: relative;
        overflow: hidden;
        padding: 1rem 0.375rem;
        margin: 0 auto;
        width: 5rem;
        max-width: 100%;
      }

      .tips {
        margin-bottom: 0.1rem;
        font-size: 0.175rem;
        color: #fff;

        span {
          &:first-of-type {
            margin-right: 0.2rem;
          }
        }
      }

      .sso-btn {
        ::v-deep .el-icon-s-unfold {
          font-size: 0.3rem;
          color: #fff;
        }

        .a-btn {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          overflow: hidden;
          width: 5rem;
          height: 60px;
          text-decoration: none;
          color: #fff;
          background: rgba(255, 255, 255, 10%);
          border-radius: 60px;
          transition: 0.5s;
          letter-spacing: 2px;
          border-top: 0.5px solid rgba(255, 255, 255, 35%);
          border-left: 0.5px solid rgba(255, 255, 255, 35%);
        }

        .a-btn:hover {
          color: #409eff;
          font-weight: 700;
        }

        .a-btn span {
          position: absolute;
          left: 5px;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 50px;
          height: 50px;
          font-size: 1.5em;
          color: #1a191d;
          background: #409eff;
          border-radius: 50%;
          transition: 0.5s ease-in-out;
        }

        .a-btn:hover span {
          left: calc(100% - 55px);
        }

        .a-btn::after {
          position: absolute;
          z-index: 1;
          width: 80px;
          height: 100%;
          background: rgba(255, 255, 255, 25%);
          transition: 0.75s ease-in-out;
          content: '';
          transform: translateX(-170px) skew(30deg);
        }

        .a-btn:hover::after {
          transform: translateX(170px) skew(30deg);
        }
      }

      .svg-container {
        display: inline-block;
        padding: 6px 5px 6px 15px;
        width: 0.2rem;
        color: rgb(83, 81, 81);
        vertical-align: middle;
      }

      .title-container {
        position: relative;

        .title {
          margin: 0 auto 0.5rem;
          font-size: 0.325rem;
          text-align: center;
          color: #fff;
          font-weight: bold;
        }
      }

      .show-pwd {
        position: absolute;
        top: 0.0875rem;
        right: 0.125rem;
        font-size: 0.2rem;
        color: #fff;
        cursor: pointer;
        user-select: none;
      }
    }
  }
}
</style>
