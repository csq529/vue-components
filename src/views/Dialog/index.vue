<template>
  <div>
    <button @click="showDialog">ShowDialog</button>
    <Dialog v-show="isShow" @hide="hideDailog" @sure="confirm"></Dialog>
  </div>
</template>
<script>
import Dialog from '../../components/Dialog/Dialog.vue'

export default {
  components: { Dialog },
  data () {
    return {
      isShow: false
    }
  },
  methods: {
    showDialog () {
      this.isShow = true
      console.log('isShow:', this.isShow)
    },
    hideDailog () {
      this.isShow = false
    },
    confirm () {
      this.isShow = false
    }
  }
}

</script>
<style>
</style>
