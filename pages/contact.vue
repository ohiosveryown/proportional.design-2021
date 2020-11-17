<template>
  <main class="width leave-target">
    <!-- <Header/> -->
    <h1 class="anim--enter pt-3 link fs-lgg font-sec">
      <nuxt-link to='/'>Return Home</nuxt-link>
    </h1>
    <Contact class="anim--enter pt-4"/>
  </main>
</template>

<style lang="scss" scoped>
  a, h1 { margin: 0; width: max-content; }
</style>

<script>
  import Header from '~/components/Header'
  import Contact from '~/components/Contact'
  export default {
    head: () => ({
      title: 'contact'
    }),
    components: { Header, Contact },
    mounted() {
      gsap.from('.anim--enter', {
        opacity: 0,
        y: 200,
        skewY: 10,
        stagger: .05,
        duration: 1,
        ease: Power2.easeInOut
      })
    },
    beforeDestroy() {
      const leaveTarget = document.querySelector('.leave-target')
      leaveTarget.style.cssText = `
        transform: skewY(6deg) translateY(-200px);
        opacity: 0;
        transition: transform 600ms ease, opacity 400ms ease;
      `
    },
  }
</script>
