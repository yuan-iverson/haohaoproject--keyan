<template>
  <div class="settings-container">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <el-breadcrumb separator="/">
        <el-breadcrumb-item to="/">首页</el-breadcrumb-item>
        <el-breadcrumb-item><a href="/article">个人设置</a></el-breadcrumb-item>
        </el-breadcrumb>
        <!--<el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>-->
      </div>
      <el-row :gutter="30">
        <el-col :span="16">
          <el-form ref="user" :model="user" label-width="80px">
            <el-form-item label="昵称">
              <el-input v-model="user.name"></el-input>
            </el-form-item>
            <el-form-item label="手机号码">
              <el-input v-model="user.number"></el-input>
            </el-form-item>
            <el-form-item label="邮箱">
              <el-input v-model="user.address"></el-input>
            </el-form-item>
            <el-form-item label="个性签名">
              <el-input type="textarea" v-model="user.desc"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="onSubmit">保存</el-button>
            </el-form-item>
          </el-form>
        </el-col>
        <el-col :offset="2" :span="6">
          <el-avatar
            shape="circle"
            :size="150"
            fit="cover"
            src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
            ></el-avatar>
            <p>修改头像请点击</p>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'SettingsIndex',
  components: {},
  props: {},
  data () {
    return {
      user: {
        name: '浩浩',
        number: '133',
        address: '100',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: 'be all i can be'
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
