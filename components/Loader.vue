<template lang="html">
  <section>
    <figure>
      <svg class="pd" width="400" height="498" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M55.333 402.681V258.95h26.105v-57.61H55.332V57.61h138.713v25.246h83V57.61h-27.667V28.903h-27.666V0H0v402.681h55.333zM249.38 201.34h22.095v-20.626h-77.428v20.626h-18.498v57.61h46.165v-28.706h27.666V201.34zm69.15 268.541V498H101.397V103.57h217.132v28.311h27.095V160h27.096v28.118H400v225.526h-27.28v28.119h-27.096v28.118h-27.095zM155.588 160v281.763h135.846v-28.119h27.095v-28.311h27.095V216.429h-27.095v-28.311h-27.095V160H155.588z" fill="#000"/></svg>
    </figure>
    <div class="track"/>
  </section>
</template>


<style lang="scss" scoped>
  @import '~/static/style/grid.scss';

  section {
    // border: 4px solid red;
    display: grid;
    place-items: center;
    position: fixed;
    top: 0; left: 0; right: 0;
    z-index: var(--zmax);
    margin: 0 auto;
    width: 40vw; height: 100vh;
    overflow: hidden;
    pointer-events: none;
    @include breakpoint(mdl) { width: 24vw; }
  }

  .track {
    // width: 100%; height: .4rem;
    // background: var(--gravity);
    animation: loader 1s cubic-bezier(.8,0,.16,1) forwards;
    transform-origin: left;
  }

  figure {
    transform: scale(.25) translateX(-24%);
    // animation: pd 1s ease forwards;
  }

  @keyframes loader {
    0% { transform: scaleX(0); }
    50% { transform: scaleX(1); }
    100% { transform: translateX(100%); }
  }

  @keyframes pd {
    0% { transform: scale(.15) }
    100% { transform: scale(.25); opacity: 0; }
  }
</style>

<script>
  export default {
    mounted() {
      gsap.to('.pd', {
        opacity: 1,
        y: -600,
        skewY: 14,
        duration: 1,
        opacity: 0,
        ease: Power2.easeInOut
      })
    }
  }
</script>
