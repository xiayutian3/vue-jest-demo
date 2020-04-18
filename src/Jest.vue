<template>
  <div>
    <span>{{ message }}</span>
    <button class="btn" @click="changeMsg">点击</button>
  </div>
</template>

<script>
export default {
  name: '',
  props: {},
  data () {
    return {
      message: 'vue-text',
      count: 1
    }
  },
  created () {
    this.message = 'jest吧'
  },
  methods: {
    changeMsg () {
      if (this.count > 1) {
        this.message = 'count 点击'
      } else {
        this.message = '按钮点击'
      }
    }
  },
  components: {},
  watch: {}
}
</script>
<style lang="scss" scoped>
</style>
