<template>
  <div>
    <attrs-child :a="a" :b="b" @open="open"></attrs-child>
  </div>
</template>

<script>
import AttrsChild from "../../components/AttrsChild";
export default {
  components: {
    AttrsChild
  },
  data() {
    return {
      a: 1,
      b: 2
    }
  },
  methods: {
    open() {
      // eslint-disable-next-line no-console
      console.log(1);
    }
  }
};
</script>

<style></style>
