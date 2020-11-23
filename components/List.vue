<!-- layout -->
<template>
  <li>
    <figure>
      <img :class = "{ whileHovering : hover }" :src="project.img">
      <figcaption class="mt-1">
        <span class="year mb-2 fs-mdd font-sec">{{ project.year }}</span>

        <span
          class="name fs-lg thin"
          :class = "{ outline : hover }"
          @mouseenter = 'hover = true'
          @mouseleave = 'hover = false'>
          {{ project.name }}
        </span>

        <span class="materials fs-lg font-prim"><span class="font-ter thin italic">in </span>{{ project.material }}</span>
        <span class="dimensions fs-mdd mt-8 uc font-prim">({{ project.dimensions }})</span>
      </figcaption>
    </figure>
  </li>
</template>

<!-- style -->
<style lang="scss" scoped>
  @import '~/static/style/grid.scss';

  li {
    @include breakpoint(mdl) {
      display: flex;
      justify-content: flex-end;
      margin: 14rem 0;
      text-align: right;
    }
  }

  figure {

  }

  img {
    position: fixed;
    bottom: 2.4rem; left: 2.4rem;
    margin: auto;
    max-width: 80vw;
    width: auto; height: 80vh;
    object-fit: cover;
    opacity: 0;
    pointer-events: none;
  }

  figcaption {
    width: max-content;
  }

  figcaption:after {
    content: '';
    position: absolute;
    z-index: var(--zmin);
    right: 0;
    display: block;
    margin: 6.4rem 0;
    width: grid-width(7); height: 1px;
    background: var(--gravity);
  }

  .year {
    display: block;
    @include breakpoint(mdl) {

    }
  }

  .name {
    display: block;
    background-size: 1px 1em;
    // box-shadow:
    //   inset 0 -.4rem var(--gravity),
    //   inset 0 -2rem var(--blush);
    display: inline;
    @include breakpoint(mdl) {

    }
  }

  .materials {
    display: block;
    @include breakpoint(mdl) {

    }
  }

  .dimensions {
    display: block;
    @include breakpoint(mdl) {

    }
  }

  .whileHovering {
    @include breakpoint(mdl) { opacity: 1; }
  }

  .outline {
    @include breakpoint(mdl) {
      color: transparent;
      text-stroke: .5px var(--gravity);
      -webkit-text-stroke: .5px var(--gravity);
     }
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
