<template lang="pug">
  div
    h1 Проверка
    p(@click='change') {{mydata}}
</template>

<script>
export default {
  props: ['mydata'],
  data() {
    return {}
  },
  methods: {
    change() {
      this.$emit('input', !this.mydata)
    }
  }
}
</script>

<style>
</style>
