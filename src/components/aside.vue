<template>
  <el-aside width="200px">
    <el-row class="tac tact">
      <el-col :span="24">
        <el-menu
          class="el-menu-vertical-demo aside-menu"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
        >
          <el-menu-item index="1" style="background:#01648d" @click="getM()">
            <i class="el-icon-user"></i>
            <span slot="title">管理员管理</span>
          </el-menu-item>

          <el-menu-item index="2" style="background:#01648d" @click="getU()">
            <i class="el-icon-s-custom"></i>
            <span slot="title">用户管理</span>
          </el-menu-item>
          <el-menu-item index="3" style="background:#01648d" @click="getN()">
            <i class="el-icon-document"></i>
            <span slot="title">通知管理</span>
          </el-menu-item>
          <el-menu-item index="4" style="background:#01648d" @click="getD()">
            <i class="el-icon-setting"></i>
            <span slot="title">设备管理</span>
          </el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
  </el-aside>
</template>
<script>
let arr = [];
let newarr = [];
export default {
  methods: {
    getM() {
      arr = this.$store.state.editableTabs;
      arr.forEach(element => {
        if (newarr.indexOf("1") == -1) {
          newarr.push("1");
          this.$router.push({ path: "managerM" });
          this.$store.commit("adddata", { title: "管理员管理", name: "1" });
        } else {
          return;
        }
      });
    },
    getU() {
      arr = this.$store.state.editableTabs;
      arr.forEach(element => {
        if (newarr.indexOf("2") == -1) {
          newarr.push("2");
          this.$router.push({ path: "userM" });
          this.$store.commit("adddata", { title: "用户管理", name: "2" });
        } else {
          return;
        }
      });
    },
    getN() {
      arr = this.$store.state.editableTabs;
      arr.forEach(element => {
        if (newarr.indexOf("3") == -1) {
          newarr.push("3");
          this.$router.push({ path: "noticeM" });
          this.$store.commit("adddata", { title: "通知管理", name: "3" });
        } else {
          return;
        }
      });
    },
    getD() {
      arr = this.$store.state.editableTabs;
      arr.forEach(element => {
        if (newarr.indexOf("4") == -1) {
          newarr.push("4");
          this.$router.push({ path: "deviceM" });
          this.$store.commit("adddata", { title: "设备管理", name: "4" });
        } else {
          return;
        }
      });
    }
  }
};
</script>