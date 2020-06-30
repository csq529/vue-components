<template>
  <div>
    <hook-child @hook:created="changeName"></hook-child>
  </div>
</template>

<script>
import HookChild from "../../components/HookChild";
export default {
  components: {
    HookChild
  },
  methods: {
    watchResize() {
      // eslint-disable-next-line no-console
      console.log("change page size");
    },
    changeName() {
      // eslint-disable-next-line no-console
      console.log("改变了userName");
    }
  },
  mounted() {
    window.addEventListener("resize", this.watchResize);
    this.$on("hook:beforeDestroy", () => {
      window.removeEventListener("resize", this.watchResize);
    });
  }
  // beforeDestroy() {
  //   window.removeEventListener("resize", this.watchResize);
  // }
};
</script>

<style></style>
