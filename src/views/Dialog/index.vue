<template>
  <div>
    <button @click="showDialog">ShowDialog</button>
    <Dialog
      :show.sync="isShow"
      @hide="hideDailog"
      @sure="confirm">
    </Dialog>
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
    },
    hideDailog (data) {
      console.log('data:', data)
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
