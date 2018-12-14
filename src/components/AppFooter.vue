<template lang="pug">
  v-footer.text-xs-center(:fixed="false" app )
    v-layout(justify-center row wrap )
      div(@click="setFooter()") &copy
</template>

<script>
export default {
  data() {
    return {
      footer: true
    }
  },
  methods: {
    setFooter() {
      console.log(this.footer)
      this.footer = !this.footer
    }
  }
}
</script>

<style>
</style>
