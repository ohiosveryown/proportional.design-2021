<!-- layout -->
<template>
  <section>
    <figure class="first-img">
      <img :src="firstSrc" :alt="firstAlt">
      <figcaption class="mt-1">
        <span class="fs-mdd light">{{ firstName }}</span>
        <sub class="mb-1 ml-1 font-sec">{{ firstYear }}</sub>
        <span class="font-prim">{{ firstMaterial }}</span>
      </figcaption>
    </figure>

    <figure class="second-img">
      <img :src="secondSrc" :alt="secondAlt">
      <figcaption class="mt-1">
        <span class="fs-mdd light">{{ secondName }}</span>
        <sub class="mb-1 ml-1 font-sec">{{ secondYear }}</sub>
        <span class="font-prim">{{ secondMaterial }}</span>
      </figcaption>
    </figure>
  </section>
</template>

<!-- style -->
<style lang="scss" scoped>
  @import '~/static/style/grid.scss';

  section { pointer-events: none; }

  .first-img {
    margin-top: 6.4rem;
    @include breakpoint(md) {
      margin: -6.4rem 0 0 grid-width(7);
      width: grid-width(5);
    }
  }

  .second-img {
    margin-top: 7.2rem;
    @include breakpoint(md) {
      margin: -20.8rem 0 26.8rem;
      width: grid-width(5);
    }
  }

  figcaption {
    display: flex;
    flex-wrap: wrap;
    font-size: 2rem;
    line-height: 1;
  }

  sub {
    flex: 1; align-self:
    flex-start;
    font-size: 1.7rem;
  }

</style>

<!-- logic -->
<script>
  export default {
    props: [
      'firstSrc',
      'firstAlt',
      'firstName',
      'firstYear',
      'firstMaterial',
      'secondSrc',
      'secondAlt',
      'secondName',
      'secondYear',
      'secondMaterial',
    ]
  }
</script>
