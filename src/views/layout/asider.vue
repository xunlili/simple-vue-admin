<template>
      <!-- <el-menu :default-active="$route.path" class="el-menu-vertical-demo menu" :collapse="isCollapse" router> -->
        <div :collapse="isCollapse">
          <template v-for="(item, index) in routes" v-if="!item.hidden">

            <el-submenu v-if="hasChildren(item)" :key="index" :index="index+''">
              <template slot="title"><i :class="item.iconCls"></i><span class="aside-name">{{!isCollapse?item.name[$i18n.locale]:''}}</span></template>
              <asider :routes="item.children"/>
            </el-submenu>

            <el-menu-item v-else :key="index" :index="item.leaf?item.children[0].path:item.path">
              <i :class="item.iconCls" />
              <span v-if="item.leaf" class="aside-name">{{!isCollapse?item.children[0].name[$i18n.locale]:''}}</span>
              <span v-else class="aside-name">{{!isCollapse?item.name[$i18n.locale]:''}}</span>
            </el-menu-item >
          </template>
        </div>
      <!-- </el-menu> -->
</template>
<script>
export default {
  name:'asider',
  props: {
    routes: {
      type: Array,
      required: true,
    },
    isCollapse: {
      type: Boolean,
      required: false,
    }
  },
  data() {
    return {
    }
  },
  methods: {
    hasChildren(obj) { // 是否有子路由；并且leaf不是true（拥有可以展开二级路由的所有选项）
      if (obj.children&&obj.children.length>0) { 
        if (obj.leaf) return false;
        return true;
      } else {
        return false;
      }
    }
  },
}
</script>
<style lang="scss">
.menu{
  padding-left: 30px;
}
  .aside-name{
      display: inline-block;
      width: 100px;
    }
    .el-aside{
      overflow: hidden;
    }
</style>

