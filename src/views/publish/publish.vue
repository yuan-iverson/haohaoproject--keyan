<template>
  <div class="publish-container">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
      <!--面包导航-->
      <el-breadcrumb separator="/">
      <el-breadcrumb-item to="/">首页</el-breadcrumb-item>
      <el-breadcrumb-item><a href="/article">发布文章</a></el-breadcrumb-item>
      </el-breadcrumb>
      <!--/面包导航-->
      </div>
      <!--表单操作-->
    <el-form ref="form" :model="form" label-width="40px">
      <el-form-item label="标题">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="内容">
        <el-input type="textarea" v-model="form.desc"></el-input>
      </el-form-item>
      <el-form-item label="封面">
        <el-radio-group v-model="form.resource">
          <el-radio label="单图"></el-radio>
          <el-radio label="三图"></el-radio>
          <el-radio label="无图"></el-radio>
          <el-radio label="自动"></el-radio>
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
      <el-form-item>
        <el-button type="primary" @click="onSubmit">发表</el-button>
        <el-button>存入草稿</el-button>
      </el-form-item>
    </el-form>
    <!--/表单操作-->
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'PublishIndex',
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
      }
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
</style>
