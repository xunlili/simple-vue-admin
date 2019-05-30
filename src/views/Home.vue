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
          <el-menu :default-active="$route.path" @select="select" class="el-menu-vertical-demo" :collapse="isCollapse" router>
          <asider class="first-level-asider" :routes="routes" :isCollapse="isCollapse"/>
          </el-menu>
        </el-aside>
        <div style="width: 100%">
          <el-breadcrumb separator="/">
            <el-breadcrumb-item v-for="(item, index) in breadcrumbDatas" :key="index" :to="{path: item.nextPath||item.path}">{{item.name[$i18n.locale]}}</el-breadcrumb-item>
          </el-breadcrumb>
          <div class="content">
            <transition name="fade" mode="out-in">
              <router-view></router-view>
            </transition>
          </div>
        </div>
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
      breadcrumbDatas: [],
    }
  },
  computed: {
    routes(){
      return this.$router.options.routes;
    }
  },
  mounted() {
    this.breadcrumbDatas = this.breadcrumb(this.routes, this.$route.path);
  },
  methods: {
    logOut() {
      this.$router.push({ path:'/login' });
    },
    select(index,indexPath) {
      this.breadcrumbDatas = this.breadcrumb(this.routes, index);
    },
    breadcrumb(array, label) {
      let stack = [];
      let check = true;
      let lastTruePath = '';
      let fun = (array, label) => {
        array.forEach(item => {
            if (!check) return;
            stack.push(item);
            if (item['path'] === label) {
                check = false;
                lastTruePath = array[0].path
            } else if (item['children']&&item['children'].length>1) {
                stack[stack.length-1].nextPath = item['children'][0].path;
                fun(item['children'], label);
            } else if (item['children']&&item['children'].length === 1) {
                check = false;
                stack.push(item['children'][0]);
                stack.shift();
            } else {
                stack.pop();
            }
        });
        if (check) stack.pop();
      }
      fun(array, label)

      stack.forEach(ele => {
        if (ele.nextPath) ele.nextPath = lastTruePath;
      })
      return stack;
    },
  }
}
</script>
<style lang="scss">
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
.asider{
    // padding-left: 40px;
  }
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 100%;
  border: 0px;
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
    .el-breadcrumb{
      width: 100%;
      height: 50px;
      line-height: 50px;
      border-bottom: 1px solid #ccc;
      background: #fff;
    }
  }
  .el-aside{
    height: 100%;
    color: #333;
    .el-menu{
      height: 100%;
      background: #616b77;
    }
  }
  .content{
    padding-left: 20px;
    padding-top: 20px;
    padding-right: 20px;
  }
}
</style>

