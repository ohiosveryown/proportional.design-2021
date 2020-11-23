<template lang="html">
  <section>
    <div class="track"/>
  </section>
</template>


<style lang="scss" scoped>
  @import '~/static/style/grid.scss';

  section {
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
    animation: loader 1s cubic-bezier(.8,0,.16,1) forwards;
    transform-origin: left;
  }

  @keyframes loader {
    0% { transform: scaleX(0); }
    50% { transform: scaleX(1); }
    100% { transform: translateX(100%); }
  }
</style>

<script>
  export default {

  }
</script>
