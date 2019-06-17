<template>
  <div>
    <div class="loading-empty">
      <div class="skeleton-list shadow">
        <div class="skeleton-row"></div>
        <div class="skeleton-row"></div>
        <div class="skeleton-row"></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {

    }
  }
}

</script>
<style lang="stylus" scoped>
.skeleton-list {
  padding: 20px;
  background-color: #fff;
  border-radius: 0 0 .2rem .2rem;
  overflow: hidden;
}
.shadow {
  box-shadow: 0 1px 2px 0 rgba(0,0,0,.05);
}
.skeleton-list .skeleton-row:first-of-type {
  width: 40%;
}

.skeleton-list .skeleton-row:nth-of-type(2), .skeleton-list .skeleton-row:nth-of-type(3) {
  width: 80%;
}

.skeleton-list .skeleton-row {
  margin-bottom: 16px;
  background: linear-gradient(90deg,#fff,#edeff1,#fff);
  background-size: 480px 480px;
  animation: skeleton-stripes .6s linear infinite;
}

.skeleton-row {
  height: .3rem;
}

@keyframes skeleton-stripes {
  0% {
    background-position: 0 0;
  }

  100% {
    background-position: 480px 0;
  }
}
</style>
