<!-- layout -->
<template>
  <nuxt/>
</template>

<!-- style -->
<style lang="scss" scoped>
  @import '~/static/style/grid.scss';
</style>

<!-- logic -->
<script>
  export default {
    mounted() {
      if(('ontouchstart' in window) || (navigator.MaxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0)) {
      } else {
        const app = document.querySelector('body')
        if (navigator.userAgent.indexOf("Firefox") > 0) {} else {
         // skew
         let pageYOffset = window.pageYOffset
         const render = () => {
           const newPageOffset = window.pageYOffset
           const diff = newPageOffset - pageYOffset
           gsap.to(app, .3, {
             skewY: diff * 0.03,
             ease: Power4.inOut,
           })
           pageYOffset = newPageOffset
           requestAnimationFrame(render)
         }
         render()
        }
      }
    }
  }
</script>
