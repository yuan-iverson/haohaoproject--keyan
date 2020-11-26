<template>
  <div class="article-container">
    <el-card class="filter-card">
      <div slot="header" class="clearfix">
      <!--面包导航-->
      <el-breadcrumb separator="/">
      <el-breadcrumb-item to="/">首页</el-breadcrumb-item>
      <el-breadcrumb-item><a href="/article">内容管理</a></el-breadcrumb-item>
      </el-breadcrumb>
      <!--/面包导航-->
      </div>
      <!--数据筛选表单-->
      <el-form ref="form" :model="form" label-width="40px">
        <el-form-item label="状态">
          <el-radio-group v-model="form.resource">
          <el-radio label="全部"></el-radio>
          <el-radio label="草稿"></el-radio>
          <el-radio label="待审核"></el-radio>
          <el-radio label="审核通过"></el-radio>
          <el-radio label="审核失败"></el-radio>
          <el-radio label="已删除"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="类型">
          <el-select v-model="form.region" placeholder="请选择类型">
            <el-option label="C语言" value="shanghai"></el-option>
            <el-option label="人工智能" value="beijing"></el-option>
            <el-option label="数据库" value="beijing"></el-option>
            <el-option label="区块链" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="日期">
        <!--<div class="block">-->
        <el-date-picker
          v-model="date1"
          type="datetimerange"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
          :default-time="['12:00:00']">
        </el-date-picker>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">筛选</el-button>
        </el-form-item>
      </el-form>
      <!--/数据筛选表单-->
    </el-card>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>共筛选10000条结果：</span>
      </div>
      <!--数据表格展示-->
      <el-table
        :data="tableData"
        stripe
        style="width: 100%"
        class="list-table"
      >
      <el-table-column
        prop="date"
        label="日期"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址">
      </el-table-column>
      <el-table-column label="操作">
        <template>
          <el-button type="primary" icon="el-icon-edit" circle></el-button>
          <el-button type="danger" icon="el-icon-delete" circle></el-button>
        </template>
      </el-table-column>
    </el-table>
      <!--/数据表格展示-->
    <el-pagination
      background
      layout="prev, pager, next"
      :total="1000">
    </el-pagination>
  </el-card>
  </div>
</template>

<script>
export default {
  name: 'ArticleIndex',
  components: {},
  props: {},
  data () {
    return {
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      },
      {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      },
      {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      },
      {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }]
    }
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {},
  methods: {
    onSubmit () {
      console.log('submit!')
    }
  }
}
</script>

<style scoped lang="less">
  .filter-card{
    margin-bottom: 30px;
  }
  .list-table{
    margin-bottom: 20px;
  }
</style>
