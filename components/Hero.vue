<!-- layout -->
<template>
  <section>
    <figure class="first-img">
      <img :src="firstSrc" :alt="firstAlt">
      <figcaption class="mt-1">
        <div class="row">
          <span class="name light">{{ firstName }}</span>
          <span class="material font-prim">
            <span class="font-ter thin italic">in</span>
            {{ firstMaterial }}
          </span>
        </div>
        <span class="year uc font-prim">from {{ firstYear }}</span>
      </figcaption>
    </figure>

    <figure class="second-img">
      <img :src="secondSrc" :alt="secondAlt">
      <figcaption class="mt-1">
        <div class="row">
          <span class="name light">{{ secondName }}</span>
          <span class="material font-prim">
            <span class="font-ter thin italic">in</span>
            {{ secondMaterial }}
          </span>
        </div>
        <span class="year uc font-prim">from {{ secondYear }}</span>
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
      margin: -20.8rem 0 24rem;
      width: grid-width(5);
    }
  }

  .row { display: flex; line-height: .8; }
  .name { flex: 1; }
  .year { font-size: 1.6rem; }

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
