<!-- layout -->
<template>
  <nuxt class="width" />
</template>

<!-- style -->
<style lang="scss" scoped>
@import "~/static/style/grid.scss";
.story-wrapper {
  position: ￼;
  margin: 0 auto;
  @include breakpoint(md) {
    width: grid-width(6);
  }
}

.story-header {
  display: flex;
  align-items: center;
  line-height: 1;
}

.thumbnail {
  margin-right: 0.8rem;
  width: 4.8rem;
  height: auto;
}

.header-first-row {
  display: flex;
  flex-direction: column;
  flex: 1;
}

.header-back {
  align-self: center;
}

.story-img-wrapper {
  position: relative;
  margin-top: 1.6rem;
}
.story {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  margin: auto;
  width: 100%;
  height: 80vh;
  background: var(--gravity);
  object-fit: contain;
  opacity: 0;
}
</style>

<!-- logic -->
<script>
export default {};
</script>
