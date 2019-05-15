<template>
  <div class="home" :style="{height: clientHeight+'px'}">
    <el-container class="container">
      <el-header style="text-align: right; font-size: 12px">
        <el-dropdown @command="handleCommand">
          <i class="el-icon-setting" style="margin-right: 15px"></i>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="check">查看</el-dropdown-item>
            <el-dropdown-item command="create">新增</el-dropdown-item>
            <el-dropdown-item command="logOut">退出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <span>王小虎</span>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <el-menu :default-active="$route.path" router>
            <el-submenu v-for="(item, index) in routes" :index="index+''" :key="index" v-if="!item.hidden">
              <template slot="title"><i :class="item.iconCls"></i>{{item.name}}</template>
              <el-menu-item v-for="child in item.children" :index="child.path" :key="child.path">{{child.name}}</el-menu-item>
            </el-submenu>
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
export default {
  name: 'home',
  data() {
    return {
      clientHeight: document.documentElement.clientHeight,
    }
  },
  computed: {
    routes(){
      return this.$router.options.routes;
    }
  },
  methods: {
    handleCommand(command) {
      if (command === 'logOut') this.$router.push({ path:'/login' });
    }
  }
}
</script>
<style lang="scss">
.home{
  .container{
    border: 1px solid #eee;
  }
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }


  .el-container{
    height: 100%;
  }
  .el-aside{
    height: 100%;
    color: #333;
    .el-menu{
      height: 100%;
    }
  }
}
</style>

