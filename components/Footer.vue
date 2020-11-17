<!-- layout -->
<template>
  <footer class="font-sec">
    proportional.design
    <span class="font-prim">est. 2019</span>
  </footer>
</template>

<!-- style -->
<style lang="scss" scoped>
  @import '~/static/style/grid.scss';

  footer {
    padding: 11.2rem 0 2rem;
    font-size: 2rem;
    @include breakpoint(mdl) { padding: 120vh 0 2rem; }
  }

  span { margin-left: 1.2rem; font-size: 1.6rem; }
</style>

<!-- logic -->
<script>
  export default {

  }
</script>
