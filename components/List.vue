<!-- layout -->
<template>
  <ul>
    <li v-for="project in projects" :work="project" :key="project.id">
      <article>
        <h3 class="fs-lgg light">{{ project.name }}</h3>
        <sup class="mr-9 ml-1 fs-md font-sec">{{ project.year }}</sup>
        <h4 class="font-prim">{{ project.material }}</h4>
      </article>
      <h4 class="uc font-prim">{{ project.dimensions }}</h4>
      <img :src="project.img">
    </li>
  </ul>
</template>

<!-- style -->
<style lang="scss" scoped>
  @import '~/static/style/grid.scss';

  ul { margin-bottom: 26.8rem; }

  li {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-end;
    border-bottom: 1px solid var(--gravity);
    padding: 3.2rem 0;
    h4 { font-size: 2.3rem; }
  }

  article {
    display: flex;
    flex: 1;
    h4 { align-self: flex-end; font-size: 2.8rem; }
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
        projects
      }
    },
  }
</script>
