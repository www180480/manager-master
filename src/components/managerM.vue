<template>
  <div class="mbox">
    <div>
      <h1>管理员列表页</h1>
    </div>
    <div class="newc">
      <router-link to="managerM/managerMC">
        <el-button type="primary">新建</el-button>
      </router-link>
    </div>
    <div class="table">
      <el-row>
        <el-col :span="24">
          <el-table :data="tableData" style="width: 100%r">
            <!-- 序号 -->
            <el-table-column label="序号" width="300">
              <template slot-scope="scope">
                <span style="margin-left: 10px">{{ scope.row.id}}</span>
              </template>
            </el-table-column>
            <!-- end  -->
            <!-- 账号 -->
            <el-table-column label="账号" width="200">
              <template slot-scope="scope">
                <span style="margin-left: 10px">{{ scope.row.name }}</span>
              </template>
            </el-table-column>
            <!-- end  -->
            <!-- 属性 -->
            <el-table-column label="属性" width="200">
              <template slot-scope="scope">
                <span style="margin-left: 10px">{{ scope.row.prop }}</span>
              </template>
            </el-table-column>
            <!-- end  -->
            <!-- 时间 -->
            <el-table-column label="时间" width="300">
              <template slot-scope="scope">
                <span style="margin-left: 10px">{{ scope.row.time }}</span>
              </template>
            </el-table-column>
            <!-- end  -->
            <el-table-column label="操作" width="200">
              <template slot-scope="scope">
                <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                <el-button
                  size="mini"
                  type="danger"
                  @click="handleDelete(scope.$index, scope.row)"
                >删除</el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-col>
      </el-row>
    </div>
    <div class="edit" v-if="tag">
      <div
        style="padding:20px;text-align:right;font-weight:600;cursor:default"
        @click="tag = false"
      >X</div>
      <div class="updat">
        <!-- 1 -->
        <el-row>
          <el-col :span="3" class="elcol">账号</el-col>
          <el-col :span="10">
            <el-input v-model="username" placeholder="请输入账号" readonly></el-input>
          </el-col>
        </el-row>
        <!-- 2 -->
        <el-row>
          <el-col :span="3" class="elcol">密码</el-col>
          <el-col :span="10">
            <el-input v-model="password" placeholder="请输入密码" readonly></el-input>
          </el-col>
        </el-row>
        <!-- 4 -->
        <el-row>
          <el-col :span="3" class="elcol">属性</el-col>
          <el-col :span="10">
            <el-input v-model="prop" placeholder="请输入属性"></el-input>
          </el-col>
        </el-row>
        <!-- 5 -->
        <el-row>
          <el-col :span="3" class="elcol">注册时间</el-col>
          <el-col :span="10">
            <!-- <el-input v-model="times" placeholder="请输入日期"></el-input> -->
            <el-date-picker
              type="dates"
              v-model="times"
              placeholder="选择日期时间"
              value-format="yyyyMMdd"
              class="redate"
            ></el-date-picker>
          </el-col>
        </el-row>
        <!-- 6 -->
        <el-row>
          <el-col :span="14">
            <el-button type="primary" @click="updat()">确认</el-button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <el-button @click="tag = false">取消</el-button>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tableData: [],
      tag: false,
      username: "",
      password: "",
      prop: "",
      times: "",
      cid:''
    };
  },
  methods: {
    updat() {
      this.$http("/api/updateManage?id="+this.cid+'&time='+this.times+'&prop='+this.prop
          )
          .then(res => {
        if (res.data.code == 0) {
          this.$message({
            message: res.data.info,
            type: "success"
          });
        } else {
          this.$message.error("更新失败");
        }
      });
      this.tag = false
    },
    handleEdit(index, row) {
      console.log(index, row.id);
      this.tag = true;
      this.$http("/api/findManage?id=" + row.id).then(res => {
        // console.log(res.data.data[0].name)
        this.username = res.data.data[0].name;
        this.password = res.data.data[0].pass;
        this.prop = res.data.data[0].prop;
        this.times = res.data.data[0].time;
        this.cid = res.data.data[0].id;
      });
    },
    handleDelete(a, b) {
      this.$http({
        url: "/api/delManage",
        pramas: {
          id: b.id
        }
      }).then(res => {
        if (res.data.code == 0) {
          this.$message({
            message: res.data.info,
            type: "success"
          });
        } else {
          this.$message.error("删除失败");
        }
      });
    }
  },
  mounted() {
    this.$http({
      url: "/api/findManage"
    }).then(res => {
      this.tableData = res.data.data;
    });
  },
  watch: {
    tableData(a, b) {
      this.$http({
        url: "/api/findManage"
      }).then(res => {
        this.tableData = res.data.data;
      });
    }
  }
};
</script>
<style lang="stylus" scoped>
h1 {
  font-size: 30px;
  height: 60px;
  line-height: 50px;
  text-align: left;
  color: #fff;
}

.newc {
  text-align: left;
  height: 60px;
}

.table {
  text-align: center;
}

.edit {
  position: fixed;
  z-index: 99;
  top: 100px;
  left: 50%;
  margin-left: -400px;
  width: 600px;
  height: 500px;
  background: #fff;
  border: 1px solid #ccc;
}

.updat {
  padding-top: 30px;
  padding-left: 120px;
}

.elcol {
  font-size: 15px;
  line-height: 15px;
  color: #000;
  margin: 20px;
}

.redate {
  width: 100%;
}
</style>
</style>