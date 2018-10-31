<template lang="pug">
  .text-xs-center
    h1 Главная страница
    p это текст главной станицы
    p Продожение текста главной страницы
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
