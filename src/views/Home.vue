<template>
  <div class="home" :style="{height: clientHeight+'px'}">
    <el-container class="container">
      <el-header style="text-align: right; font-size: 12px">
        <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
          <el-radio-button :label="false">展开</el-radio-button>
          <el-radio-button :label="true">收起</el-radio-button>
        </el-radio-group>
        <el-select v-model="$i18n.locale " class="sel-lang" popper-class="eloption">
          <el-option value="cn" label="简体中文">简体中文</el-option>
          <el-option value="hk" label="繁體中文">繁體中文</el-option>
        </el-select>
        <span @click="logOut" class="log-out">{{$t('header.logout')}}</span>
        <span>王小虎{{isCollapse}}</span>
      </el-header>
      <el-container>
        <el-aside class="asider" width='auto'>
          <el-menu :default-active="$route.path" class="el-menu-vertical-demo" :collapse="isCollapse" router>
          <asider class="first-level-asider" :routes="routes" :isCollapse="isCollapse"/>
          </el-menu>
        </el-aside>
        <transition name="fade" mode="out-in">
          <router-view></router-view>
        </transition>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import asider from './layout/asider.vue'
export default {
  name: 'home',
  components: {
    asider
  },
  data() {
    return {
      clientHeight: document.documentElement.clientHeight,
      isCollapse: false,
    }
  },
  computed: {
    routes(){
      return this.$router.options.routes;
    }
  },
  methods: {
    logOut() {
      this.$router.push({ path:'/login' });
    }
  }
}
</script>
<style lang="scss">
.asider{
    // padding-left: 40px;
  }
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 98%;
  }
.sel-lang{
  width: 150px;
  margin-right: 20px;
}
.eloption{
  min-width: 150px !important;
}
.home{
  .container{
    border: 1px solid #eee;
    .first-level-asider{
      padding-left: 0 !important;
    }
    .log-out{
      margin-right: 20px;
      cursor:pointer;
    }
  }
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
    .el-radio-group{
      float: left;
      line-height: 60px;
    }
  }


  .el-container{
    height: 100%;
  }
  .el-aside{
    height: 100%;
    color: #333;
    .el-menu{
      height: 100%;
      background: #616b77;
    }
  }
}
</style>

