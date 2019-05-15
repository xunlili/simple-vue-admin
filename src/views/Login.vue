<template>
  <div class="login" :style="{height: clientHeight+'px'}">
    <div class="inner-box">
      <img src="@/assets/logo.png"/>
      <el-input v-model="account" :placeholder="$t('Login.placeholderAccount')"></el-input>
      <el-input v-model="password" :placeholder="$t('Login.placeholderPass')"></el-input>
      <el-select v-model="$i18n.locale ">
        <el-option value="cn" label="简体中文">简体中文</el-option>
        <el-option value="hk" label="繁體中文">繁體中文</el-option>
      </el-select>
      <el-button class="forget" type="text">{{$t('Login.forget')}}</el-button>
      <el-button class="login-in" type="primary" @click="login">{{$t('Login.longin')}}</el-button>
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
      .el-select{
        display: block;
        margin: 0 auto;
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
