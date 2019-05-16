<template>
  <div class="home" :style="{height: clientHeight+'px'}">
    <el-container class="container">
      <el-header style="text-align: right; font-size: 12px">
        <el-select v-model="$i18n.locale " class="sel-lang" popper-class="eloption">
          <el-option value="cn" label="简体中文">简体中文</el-option>
          <el-option value="hk" label="繁體中文">繁體中文</el-option>
        </el-select>
        <span @click="logOut" class="log-out">{{$t('header.logout')}}</span>
        <span>王小虎</span>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <el-menu :default-active="$route.path" router>
            <template v-for="(item, index) in routes" v-if="!item.hidden">
              <el-submenu :key="index" :index="index+''" v-if="!item.leaf">
                <template slot="title"><i :class="item.iconCls"></i>{{item.name[$i18n.locale]}}</template>
                <el-menu-item v-for="child in item.children" :index="child.path" :key="child.path">{{child.name[$i18n.locale]}}</el-menu-item>
              </el-submenu>
              <el-menu-item  v-if="item.leaf&&item.children.length>0" :key="index" :index="item.children[0].path">
                <i :class="item.iconCls"/>
                {{item.children[0].name[$i18n.locale]}}
              </el-menu-item >
            </template>
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
    logOut() {
      this.$router.push({ path:'/login' });
    }
  }
}
</script>
<style lang="scss">
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
    .log-out{
      margin-right: 20px;
      cursor:pointer;
    }
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

