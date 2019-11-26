<template>
  <el-main>
    <el-tabs
      v-model="$store.state.tabIndex"
      type="card"
      @tab-click="tabclick($store.state.editableTabsValue)"
    >
      <el-tab-pane
        v-for="item in $store.state.editableTabs"
        :key="item.name"
        :label="item.title"
        :name="item.name"
      ></el-tab-pane>
      <router-view></router-view>
    </el-tabs>
  </el-main>
</template>
<script>
export default {
  methods: {
    tabclick(tab) {
      this.$store.dispatch("tabclick", tab);
    },
  },
  watch: {
    '$store.state.tabIndex':function(a, b) {
      if (a == '1') {
        this.$router.push("managerM");
      } else if (a == '2') {
        this.$router.push("userM");
      } else if (a == '0') {
        this.$router.push("wel");
      } else if (a == '3') {
        this.$router.push("noticeM");
      }else if (a == '4') {
        this.$router.push("deviceM");
      }
      else {
        this.$router.push("wel");
      }
    }
  }
};
</script>

<style lang="stylus"></style>