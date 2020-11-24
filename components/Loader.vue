<template lang="html">
  <div class="wrapper">
    <div class="track"/>
  </div>
</template>


<style lang="scss" scoped>
  @import '~/static/style/grid.scss';

  .wrapper {
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
    width: 100%; height: .4rem;
    background: var(--gravity);
    transform:scaleX(0);
    transform-origin: left;
  }
</style>

<script>
  export default {
    mounted() {
      gsap.to(".track", {keyframes: [
        { scaleX: 1, duration: .75 },
        { x: '100%', duration: .5, delay: -0.05 }
      ], ease: "expo.inOut" })
    }
  }
</script>
