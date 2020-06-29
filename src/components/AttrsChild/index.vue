<template>
  <div v-bind="$attrs" v-on="$listeners">
    <attrs-child1 v-bind="$attrs" c="2"></attrs-child1>
    <div @click="$listeners.open">openDemo</div>
  </div>
</template>

<script>
import AttrsChild1 from "../AttrsChild1";
export default {
  components: {
    AttrsChild1
  },
  created() {
    // eslint-disable-next-line no-console
    console.log("$attrs1:", this.$attrs);
    // eslint-disable-next-line no-console
    console.log("$listeners:", this.$listeners);
  }
};
</script>

<style></style>
