<template>
  <div>
    <div class="mcbox">
      <h1>添加/修改管理员</h1>
    </div>
    <div>
      <!-- 1 -->
      <el-row>
        <el-col :span="2" class="elcol">账号</el-col>
        <el-col :span="10">
          <el-input v-model="username" placeholder="请输入账号"></el-input>
        </el-col>
      </el-row>
      <!-- 2 -->
      <el-row>
        <el-col :span="2" class="elcol">密码</el-col>
        <el-col :span="10">
          <el-input v-model="password" placeholder="请输入密码"></el-input>
        </el-col>
      </el-row>
      <!-- 3 -->
      <el-row>
        <el-col :span="2" class="elcol">确认密码</el-col>
        <el-col :span="10">
          <el-input v-model="password" placeholder="请再次输入密码"></el-input>
        </el-col>
      </el-row>
      <!-- 4 -->
      <el-row>
        <el-col :span="2" class="elcol">属性</el-col>
        <el-col :span="10">
          <el-input v-model="prop" placeholder="请输入属性"></el-input>
        </el-col>
      </el-row>
      <!-- 5 -->
      <el-row>
        <el-col :span="2" class="elcol">注册时间</el-col>
        <el-col :span="10">
          <!-- <el-input v-model="times" placeholder="请输入日期"></el-input> -->
          <el-date-picker type="dates" v-model="times" placeholder="选择日期时间" value-format="yyyyMMdd" class="redate"></el-date-picker>
        </el-col>
      </el-row>
      <!-- 6 -->
      <el-row>
        <el-col :span="14">
          <el-button type="primary" @click="create()">新建</el-button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <el-button @click="back()">返回</el-button>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
import qs from "qs";
export default {
  data() {
    return {
      username: "",
      password: "",
      prop: "",
      times: ""
    };
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
    create() {
      this.$http
        .get("/api/addManage", {
          params: {
            name: this.username,
            pass: this.password,
            prop: this.prop,
            time: parseInt(this.times)
          }
        })
        .then(res => {
          if (res.data.code == 2) {
            this.$message({
              message: res.data.info,
              type: "warning"
            });
          } else if (res.data.code == 0) {
            this.$message({
              message: res.data.info,
              type: "success"
            });
            this.$router.go(-1)
          } else {
            this.$message.error("添加失败");
          }
        });
    }
  }
};
</script>
<style lang="stylus" scoped>
.mcbox {
  font-size: 20px;
}

h1 {
  font-size: 30px;
  height: 60px;
  line-height: 50px;
  text-align: left;
  color: #fff;
}

.elcol {
  font-size: 15px;
  line-height: 30px;
  color: #fff;
  margin: 20px;
}
.redate{
  width 100%
}
</style>