<!-- layout -->
<template>
  <li
    @mouseenter = 'hover = true'
    @mouseleave = 'hover = false'>
    <figure class="first-img">
      <img class="imgLg mb-1" :class = "{ whileHovering : hover }" :src="project.img">
      <img class="imgSm mb-1" :src="project.img">
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
    padding: 2.4rem 0;
    width: 100%;
    @include breakpoint(mdl) { border-bottom: .75px solid var(--gravity); }
  }

  // figure { display: flex; align-items: center; width: 100%; }

  figure {
    @include breakpoint(mdl) {
      display: flex;
      align-items: center;
      width: 100%;
    }
  }

  .imgLg {
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
      transition: all 200ms ease;
    }
  }

  .imgSm {
    --size: 4.8rem;
    display: none;
    @include breakpoint(mdl) {
      display: inline-flex;
      margin: 0 1.6rem 0 0;
      // border-radius: 4px;
      width: var(--size); height: calc(var(--size) + 1rem);
      object-fit: cover;
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
    @include breakpoint(mdl) { font-size: 2.4rem; }
  }

  .materials {
    @include breakpoint(mdl) { flex: 1; font-size: 2.2rem; }
  }

  .dimensions {
    display: none;
    @include breakpoint(mdl) { display: inherit; justify-self: end; font-size: 1.9rem; }
  }

  .whileHovering {
    @include breakpoint(mdl) { opacity: 1; transform: scale(1); }
  }

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
