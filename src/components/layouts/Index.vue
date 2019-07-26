<template>
  <div class="is-fullhd clear-space">
    <Navbar />
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
export default {
  components: {
    Navbar,
    Footer
  }
};
</script>

<style lang="less" scoped>
.notification {
  margin-bottom: 0;
}
</style>
