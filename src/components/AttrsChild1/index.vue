<template>
  <div v-bind="$attrs">
    AttrsChild1
  </div>
</template>

<script>
export default {
  created() {
    // eslint-disable-next-line no-console
    console.log("$attrs:", this.$attrs);
  }
};
</script>

<style></style>
