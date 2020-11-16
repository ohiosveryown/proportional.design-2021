<template>
  <main class="width">
    <!-- <Header/> -->
    <h1 class="pt-3 link fs-lgg font-sec">
      <nuxt-link to='/'>Return Home</nuxt-link>
    </h1>
    <Form class="pt-4"/>
  </main>
</template>

<style lang="scss" scoped>
  a, h1 { margin: 0; width: max-content; }
</style>

<script>
  import Header from '~/components/Header'
  import Form from '~/components/Form'
  export default {
    components: { Header, Form },
  }
</script>
