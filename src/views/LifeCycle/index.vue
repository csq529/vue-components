<template>
  <div></div>
</template>

<script>
export default {
  pageVisible() {
    // eslint-disable-next-line no-console
    console.log(new Date().getTime(), "页面显示出来了");
  },
  pageHidden() {
    // eslint-disable-next-line no-console
    console.log(new Date().getTime(), "页面隐藏了");
  }
};
</script>

<style></style>
