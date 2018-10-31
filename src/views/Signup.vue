<template lang="pug">
v-content
  v-container(fluid fill-height)
    v-layout(align-center justify-center)
      v-flex(xs12 sm8 md4 )
        v-card.elevation-12
          v-toolbar(dark , color='primary')
            v-toolbar-title Регистрация
          v-card-text
            span {{ isError }}
            v-form
              v-text-field(prepend-icon='person', name='login', label='E-mail', type='email' required v-model='email')
              v-text-field#password(prepend-icon='lock', name='password', label='Password', type='password' required v-model='password')
          v-card-actions
            v-spacer
            v-btn(color='primary' @click.stop="Login()") Отправить
</template>

<script>
export default {
  data(){
    return {
      email: null,
      password: null
    }
  },
  methods:{
    async Login(){
      let dat = {
        email: this.email,
        password: this.password
      }
      this.$store.dispatch('registerUser', dat)
    },
  },
  computed:{
    isLogin(){
      return this.$store.getters.isLogin
    },
    isError(){
      return this.$store.getters.getError
    }
  },
  watch:{
    isLogin( value ) {
      if (value) {
        this.$router.push('/')
      }
    }

  },
  created(){
    if (this.isLogin){
      this.$router.push('/')
    }
  }
}
</script>

<style>
</style>