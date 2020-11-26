<template>
  <!--<div class="layout-container">
    <div>顶部导航栏</div>-->
    <!--子路由出口-->
    <!--<router-view />
    <div>侧边导航栏</div>
  </div>-->
  <el-container class="layout-container">
    <el-aside
        class="aside"
        width="auto"><app-aside class="aside-menu" :isCollapse="isCollapse" /></el-aside>
      <el-container>
        <el-header class="header">
            <div>
              <i
                :class="{
                'el-icon-s-fold': isCollapse,
                'el-icon-s-unfold': !isCollapse
                }"
                @click="isCollapse = !isCollapse"></i>
              <span class="wenzi">东莞市赛鹊贸易有限公司</span>
            </div>
          <el-dropdown>
            <div class="avatar-wrap">
              <img class="avatar" src="../../assets/touxiang2.jpg" alt="">
              <span>用户昵称</span>
              <i class="el-icon-arrow-down el-icon--right"></i>
            </div>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>用户设置</el-dropdown-item>
              <el-dropdown-item>退出</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-header>
          <el-main class="main"><router-view /></el-main>
        </el-container>
  </el-container>
</template>

<script>
import AppAside from './components/aside'
export default {
  name: 'layoutIndex',
  components: {
    AppAside
  },
  props: {},
  data () {
    return {
      isCollapse: false // 侧边菜单栏的展开状态
    }
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {},
  methods: {}
}
</script>

<style scoped lang="less">
  .layout-container{
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
  }
  .aside{
    background-color: #d3dce6;
    .aside-menu {
      height: 100%;
    }
  }
  .header{
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #ccc;
    .wenzi{
      margin-left: 5px;
    }
  }
  .main{
    background: #fff;
  }
  .avatar-wrap{
    display: flex;
    align-items: center;
    .avatar{
       width: 50px;
       height: 25px;
       border-radius: 50%;
       margin: 10px;
    }
  }
</style>
