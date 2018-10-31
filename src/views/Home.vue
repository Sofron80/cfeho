<template lang="pug">
  .text-xs-center
    h1 Главная страница
</template>

<script>
export default {
  name: 'home',
  data(){
    return {
      menu: false,
      fav: true,
      message:"Сообщение",
      hints: true
    }
  }

}
</script>
