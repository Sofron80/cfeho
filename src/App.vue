<template lang="pug">
  v-app
    app-header
    v-content
      router-view
    app-footer
</template>

<style>

</style>

<script>
import AppHeader from '@/components/AppHeader'
import AppFooter from '@/components/AppFooter'
export default {
  components:{
    AppHeader, AppFooter
  },
  created(){
    
  }
}
</script>
