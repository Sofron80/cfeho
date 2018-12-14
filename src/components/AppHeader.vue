<template lang="pug">
  div
    v-navigation-drawer.hidden-md-and-up(absolute temporary v-model="drawer")
      v-list
        v-list-tile(  v-for="(item, i) in menuItems" :key="`menuitemdrawer${i}`" flat :to="item.route")
          v-list-tile-action
            v-icon(v-html="item.icon")
          v-list-tile-content
            v-list-tile-title(v-text="item.title")
    v-toolbar.primary(app dark height="50%")
      v-toolbar-side-icon.hidden-md-and-up(@click.stop="drawer=!drawer")
      router-link( to="/" tag="span")
        v-toolbar-title(v-text="'ЦФЭХО'" style="cursor:pointer")
      v-spacer
      v-toolbar-items.hidden-sm-and-down
        v-btn( v-for="(item, i) in menuItems" :key="`menuitem${i}`" flat :to="item.route")
          v-icon(left v-html="item.icon")
          span {{item.title}}
</template>

<script>
export default {
  data() {
    return {
      drawer: false
    }
  },
  computed: {
    menuItems() {
      let menuItem = [
        { title: 'Статьи', route: '/articles', icon: 'visibility' },
        { title: 'Документы', route: '/docs', icon: 'subject' },
        { title: 'Войти', route: '/login', icon: 'input' },
        { title: 'Регистрация', route: '/signup', icon: 'lock_open' }
      ]
      if (this.$store.getters.isLogin) {
        menuItem = [
          { title: 'Статьи', route: '/articles', icon: 'visibility' },
          { title: 'Документы', route: '/docs', icon: 'subject' },
          { title: 'Аккаунт', route: '/profile', icon: 'account_circle' },
          { title: 'Выйти', route: '/logout', icon: 'exit_to_app' }
        ]
      }
      return menuItem
    }
  }
}
</script>

<style>
</style>
