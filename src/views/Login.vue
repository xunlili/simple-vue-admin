<template>
  <div class="login" :style="{height: clientHeight+'px'}">
    <div class="inner-box">
      <img src="@/assets/logo.png"/>
      <el-input v-model="account" placeholder="请输入账号"></el-input>
      <el-input v-model="password" placeholder="请输入密码"></el-input>
      <el-button class="forget" type="text">忘记密码</el-button>
      <el-button class="login-in" type="primary" @click="login">登录</el-button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'login',
  data() {
    return {
      clientHeight: document.documentElement.clientHeight,
      account: '',
      password: '',
    }
  },
  mounted() {
  },
  methods: {
    login() {
      this.$router.push({ path:'/one-1' });
    }
  }
}
</script>
<style lang="scss">
  .login{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items:Center;
    .inner-box{
      width: 520px;
      height: 430px;
      // border: 1px solid #ccc;
      margin: 0 auto;
      &>img:nth-child(1){
        display: block;
        width: 70px;
        height: 37px;
        margin: 0 auto;
        margin-top: 40px;
      }
      .el-input{
        display: block;
        width: 400px;
        height: 60px;
        margin: 0 auto;
        margin-top: 30px;
        input{
          height: 100%;
        }
      }
      .forget{
        float: right;
        margin-right: 60px;
      }
      .login-in{
        display: block;
        height: 60px;
        width: 400px;
        font-size: 20px;
        margin: 0 auto;
        margin-top: 50px;
      }
    }
  }
</style>
