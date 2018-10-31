<template lang="pug">
  div(md10 offset-md1)
    v-layout
      v-flex(xs12 sm10 offset-sm1 wrap)
        v-layout(justify-center mt-5 v-if="isLoading")
          v-progress-circular(
          justify-center
          :size="70"
          :width="7"
          color="primary"
          indeterminate
          )
        div(v-else)
          v-card(v-for="(item, i) in getArticles" :key="i")
            v-card-title
            span {{item.title}}
            span {{item.text}}
</template>

<script>
export default {
  data(){
    return {
    }
  },
  computed:{
    getArticles(){
      let a = this.$store.getters.getArticles
      return a
    },
    isLoading(){
      return this.$store.getters.getLoading
    }
  }
  ,
  created(){
    this.$store.dispatch('loadArticles')
  }
}
</script>

<style>
</style>