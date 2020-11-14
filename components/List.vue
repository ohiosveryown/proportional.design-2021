<!-- layout -->
<template>
    <li>
      <article
        @mouseenter = 'hover = true'
        @mouseleave = 'hover = false'
      >
        <h3 class="fs-lgg light">{{ project.name }}</h3>
        <sup class="mr-9 ml-1 fs-md font-sec">{{ project.year }}</sup>
        <h4 class="font-prim">{{ project.material }}</h4>
      </article>
      <h4 class="uc font-prim">{{ project.dimensions }}</h4>
      <img class="avatar" :class = "{ active : hover }" :src="project.img">
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
    border-bottom: 1px solid var(--gravity);
    padding: 3.2rem 0;
    h4 { font-size: 2.3rem; }
  }

  article {
    display: flex;
    flex: 1;
    h4 { align-self: flex-end; font-size: 2.8rem; }
  }

  img {
    position: absolute;
    top: 0; right: 0; bottom: 0; left: 0;
    z-index: var(--zmax);
    margin: auto;
    width: auto; height: 80vh;
    opacity: 0;
    pointer-events: none;
    box-shadow: 0 4px 84px rgba(0,0,0,.1);
  }

  @media(pointer: fine) { .active { opacity: 1; }}

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
