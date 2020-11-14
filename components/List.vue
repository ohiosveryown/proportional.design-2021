<!-- layout -->
<template>
  <li
    @mouseenter = 'hover = true'
    @mouseleave = 'hover = false'>
    <figure class="first-img">
      <img class="avatar mb-1" :class = "{ active : hover }" :src="project.img">
      <figcaption class="mt-1">
        <span class="name light">{{ project.name }}</span>
        <sub class="mb-1 ml-1 font-sec">{{ project.year }}</sub>
        <span class="materials font-prim">{{ project.material }}</span>
        <span class="dimensions ml-1 uc font-prim">{{ project.dimensions }}</span>
      </figcaption>
    </figure>
  </li>
</template>

<!-- style -->
<style lang="scss" scoped>
  @import '~/static/style/grid.scss';

  li {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-end;
    position: relative;
    z-index: var(--zmax);
    padding: 3.2rem 0;
    width: 100%;
    @include breakpoint(mdl) { border-bottom: 1px solid var(--gravity); }
  }

  figure { width: 100%; }

  img {
    @include breakpoint(mdl) {
      position: absolute;
      top: 0; right: 0; bottom: 0; left: 0;
      z-index: var(--zmax);
      margin: auto;
      width: auto; height: 80vh;
      opacity: 0;
      pointer-events: none;
      box-shadow: 0 4px 84px rgba(0,0,0,.24);
      // transform: scale(.97);
      transition: all 300ms ease;
    }
  }

  figcaption {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-end;
    font-size: 2rem;
    width: 100%;
    line-height: 1;
  }

  sub {
    align-self: flex-start;
    font-size: 1.7rem;
    flex: 1;
    @include breakpoint(mdl) { flex: 0; margin-right: 4rem; }
  }

  .name {
    font-size: 2rem;
    @include breakpoint(mdl) { font-size: 2.7rem; }
  }

  .materials {
    @include breakpoint(mdl) { flex: 1; font-size: 2.4rem; }
  }

  .dimensions {
    display: none;
    @include breakpoint(mdl) { display: inherit; justify-self: end; }
  }

  .active {
    @include breakpoint(mdl) { opacity: 1; transform: scale(1); }
  }
  // @media(pointer: fine) { .active { opacity: 1; }}

</style>

<!-- logic -->
<script>
  import projects from '~/static/projects'
  export default {
    props: {
      project: Object
    },
    data() {
      return {
        projects,
        hover: false,
      }
    },
    mounted() {

    }
  }
</script>
