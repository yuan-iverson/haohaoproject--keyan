<template>
  <div class="comment-container">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <el-breadcrumb separator="/">
        <el-breadcrumb-item to="/">首页</el-breadcrumb-item>
        <el-breadcrumb-item><a href="/article">评论管理</a></el-breadcrumb-item>
        </el-breadcrumb>
        <!--<el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>-->
      </div>
      <!--评论管理栏-->
      <el-table
        :data="tableData"
        stripe
        class="table-list"
        style="width: 100%">
        <el-table-column
          prop="date"
          label="日期"
          >
        </el-table-column>
        <el-table-column
          prop="name"
          label="标题"
          >
        </el-table-column>
        <el-table-column
          prop="allnumber"
          label="总评论数"
          >
        </el-table-column>
        <el-table-column
          prop="fansnumber"
          label="粉丝评论数"
          >
        </el-table-column>
        <el-table-column
          prop="state"
          label="状态"
          >
        </el-table-column>
        <el-table-column
          prop="operation"
          label="操作"
          >
          <template>
            <el-switch
              v-model="value"
              active-color="#13ce66"
              inactive-color="#ff4949">
            </el-switch>
          </template>
        </el-table-column>
      </el-table>
      <!--/评论管理栏-->
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage4"
        :page-sizes="[100, 200, 300, 400]"
        :page-size="100"
        layout="total, sizes, prev, pager, next, jumper"
        :total="400">
    </el-pagination>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'CommentIndex',
  components: {},
  props: {},
  data () {
    return {
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        state: '上海市普陀区金沙江路 1518 弄',
        allnumber: '30',
        fansnumber: '5'
      },
      {
        date: '2016-05-04',
        name: '王小虎',
        state: '上海市普陀区金沙江路 1517 弄',
        allnumber: '30',
        fansnumber: '5'
      },
      {
        date: '2016-05-01',
        name: '王小虎',
        state: '上海市普陀区金沙江路 1519 弄',
        allnumber: '30',
        fansnumber: '5'
      },
      {
        date: '2016-05-03',
        name: '王小虎',
        state: '上海市普陀区金沙江路 1516 弄',
        allnumber: '30',
        fansnumber: '5'
      }],
      value: true
    }
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {},
  methods: {
    handleSizeChange () {
    },
    handleCurrentChange () {
    }
  }
}
</script>

<style scoped lang="less">
  .table-list{
    margin-bottom: 30px;
  }
</style>
