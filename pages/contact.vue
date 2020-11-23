<template>
  <main class="width leave-target">
    <!-- <Header/> -->
    <article>
      <h1 class="anim--enter pt-3 link fs-md font-sec">
        <nuxt-link to='/'>Return Home</nuxt-link>
      </h1>
      <Contact class="anim--enter pt-4"/>
    </article>

    <figure>
      <svg class="anim--enter" width="400" height="498" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M55.333 402.681V258.95h26.105v-57.61H55.332V57.61h138.713v25.246h83V57.61h-27.667V28.903h-27.666V0H0v402.681h55.333zM249.38 201.34h22.095v-20.626h-77.428v20.626h-18.498v57.61h46.165v-28.706h27.666V201.34zm69.15 268.541V498H101.397V103.57h217.132v28.311h27.095V160h27.096v28.118H400v225.526h-27.28v28.119h-27.096v28.118h-27.095zM155.588 160v281.763h135.846v-28.119h27.095v-28.311h27.095V216.429h-27.095v-28.311h-27.095V160H155.588z" fill="#000"/></svg>
    </figure>

  </main>
</template>

<style lang="scss" scoped>
  @import '~/static/style/grid.scss';

  main { position: relative; }

  figure {
    position: absolute;
    top: 2.4rem; right: 2rem;
    transform: scale(.1);
    transform-origin: top right;

    @include breakpoint(mdl) {
      top: 20rem; right: 12vw;
      transform: scale(.5);
    }
  }
  a, h1 { margin: 0; width: max-content; }
</style>

<script>
  import Header from '~/components/Header'
  import Contact from '~/components/Contact'
  export default {
    head: () => ({
      title: 'prop—contact'
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
