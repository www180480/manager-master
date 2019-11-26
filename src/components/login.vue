<template>
  <div class="loginBox">
    <!-- box-start -->
    <div class="box">
      <h3>后台管理系统</h3>
      <!-- user -->
      <el-input v-model="user.name" placeholder="请输入用户名" class="inp"></el-input>
      <el-input placeholder="请输入密码" v-model="user.pass" show-password class="inp"></el-input>
      <div class="typesel">
        <el-radio v-model="user.type" label="0" class="radios">超级管理员</el-radio>
        <el-radio v-model="user.type" label="1" class="radios">普通管理员</el-radio>
        <el-radio v-model="user.type" label="2" class="radios">用户</el-radio>
      </div>
      <div class="login">
        <el-button type="primary" style="width:100px;background: #4A708B;" @click="loginIn()">登录</el-button>
      </div>
    </div>
    <!-- box-end -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      user: {
        name: "admin",
        pass: "123",
        type:"0"
      },
      // radio: '2',
    };
  },
  methods: {
    loginIn(){
      this.$http({
        url:'/api/login',
        method:'post',
        data:this.user
      })
      .then(res=>{
          if (res.data.code == 0) {
            this.$message({
              message: res.data.info,
              type: "success"
            });
            this.$router.push('/index')
          } else {
            this.$message({
              message: res.data.info,
              type: "error"
            });
          }
      })
    }
  },
};
</script>
<style lang="stylus">
@import '../assets/css/index.styl';
</style>