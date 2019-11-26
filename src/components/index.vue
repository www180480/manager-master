<template>
  <div class="box">
    <el-container>
      <headtem>Header</headtem>
      <el-container>
        <asidetem>Aside</asidetem>
        <maintem>Main</maintem>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import headtem from "./head";
import asidetem from "./aside";
import maintem from "./main";
export default {
  components: {
    headtem,
    asidetem,
    maintem
  }
};
</script>
<style lang="stylus">
@import '../assets/css/index.styl';
</style>