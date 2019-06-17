<template>
  <div id="app">
    <div class="one">
      <p>
        <router-link to="/foo">下一层</router-link>
      </p>
      <h1>第一层</h1>
    </div>
    <transition>
      <router-view></router-view>
    </transition>
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
<style scoped>
* { padding: 0; margin: 0; }
html, body, #app { width: 100%; height: 100%; }
.one { height: 100%; background-color: yellow; }
</style>
