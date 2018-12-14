<template lang="pug">
  .text-xs-center
    h1 Главная страница
    p это текст главной станицы c233
    my-test(:mydata='mydata' @input='test1($event)')
</template>

<script>
import myTest from '@/components/test1.vue'
export default {
  name: 'home',
  components: {
    myTest
  },
  data() {
    return {
      menu: false,
      fav: true,
      message: 'Сообщение',
      hints: true,
      mydata: false
    }
  },
  methods: {
    test1(p) {
      this.mydata = p
    }
  }
}
</script>
