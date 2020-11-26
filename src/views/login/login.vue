<template>
<div class="login-container">
  <div class="login-form-wrap">
    <div class="login-head">
      <div class="login-logo"></div>
    </div>
  <el-form
    class="login-form"
    ref="login-form"
    :model="user"
    :rules="formRules"
  >
    <el-form-item prop="mobile">
      <el-input
        v-model="user.mobile"
        placeholder="请输入手机号"
      ></el-input>
    </el-form-item>
    <el-form-item prop="code">
      <el-input
        v-model="user.code"
        placeholder="请输入验证码"
      ></el-input>
    </el-form-item>
    <el-form-item prop="argee">
      <el-checkbox v-model="user.argee">我已阅读并同意用户协议及隐私政策</el-checkbox>
    </el-form-item>
        <el-button
          class="login-btn"
          :loading="loginLoading"
          type="primary"
          @click="onlogin">登录</el-button>
  </el-form>
  </div>
</div>

</template>

<script>
// import request from '@/utils/request'
export default {
  data () {
    return {
      user: {
        mobile: '', // 手机号
        code: '', // 验证码
        argee: false // 是否同意协议，默认不选中
      },
      loginLoading: false, // 登录的状态提醒
      formRules: { // 表单验证配对规则
        // 要验证的数据名称：规则列表[]
        mobile: [
          { required: true, message: '手机号不能为空', trigger: 'blur' },
          { pattern: /^1[3|5|7|8|9]\d{9}$/, message: '请输入正确的手机号', trigger: 'blur' }
        ],
        code: [
          { required: true, message: '验证码不能为空', trigger: 'blur' },
          { pattern: /^\d{6}$/, message: '请输入正确的验证码' }
        ],
        argee: [
          {
            validator: (rule, value, callback) => {
              if (value) {
                callback()
              } else {
                callback(new Error('请勾选'))
              }
            },
            trigger: 'blur'
          }
        ]
      }
    }
  },
  methods: {
    onLogin () {
      // 获取表单数据（根据接口要求绑定数据）
      // 表单验证
      // validate方法是异步的
      this.$refs['login-form'].validate(valid => {
        // 如果表单验证失败，停止请求提交
        if (!valid) {
          return
        }
        // 验证通过，请求登录
        this.login()
      })
    },
    login () {
      // 登录函数，开启登录，开启登录中的loading函数
      this.loginLoading = true
      // login(this.user).then(res => {
      // 登录成功
      this.$message({
        message: '登录成功',
        type: 'success'
      })
      // 登录成功，路由跳转，跳到首页去
      // this.$router.push({
      //  name: 'home'
      // })
      // 关闭 loading
      this.loginLoading = false
      // })
    }
  }
}
</script>
<style scoped lang="less">
  .login-container {
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: url(login_bg.jpg) no-repeat;
    background-size: cover;
    .login-form-wrap{
       background-color: #fff;
       min-width:300px;
       padding: 30px 50px 10px;
       .login-head{
         display: flex;
         justify-content: center;
         .login-logo{
           width: 200px;
           height: 75px;
           background: url(02.png) no-repeat;
           background-size:contain;
         }
        }
       .login-form{
        .login-btn{
          width: 100%;
          }
      }
    }
  }
</style>
