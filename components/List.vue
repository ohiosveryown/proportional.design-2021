<!-- layout -->
<template>
  <li>
    <figure>
      <img
        class="img-main"
        :class="{ whileHovering: hover }"
        :src="project.img"
      />

      <figcaption class="mt-1">
        <div class="row">
          <a target="_blank" :href="project.storyLink">
            <div class="story link">
              <span class="font-sec font mdd uc">{{ project.viewStory }}</span>
              <img class="story-thumb" :src="project.storyThumb" alt="" />
            </div>
          </a>
          <div
            class="name"
            :class="{ outline: hover }"
            @mouseenter="hover = true"
            @mouseleave="hover = false"
          >
            {{ project.name }}
          </div>
          <div class="material font-prim">
            <span class="font-ter thin italic">in</span>
            {{ project.material }}
          </div>
        </div>
        <div class="meta uc">
          <span class="dimensions">({{ project.dimensions }})</span>
          <span class="year font-prim">from {{ project.year }}</span>
        </div>
      </figcaption>
    </figure>
  </li>
</template>

<!-- style -->
<style lang="scss" scoped>
@import "~/static/style/grid.scss";

.row {
  display: flex;
  @include breakpoint(md) {
    display: inherit;
  }
}

.story {
  display: flex;
  align-items: center;
  margin-bottom: 2.2rem;
  width: max-content;
  margin-left: auto;
  span {
    margin-right: 1.6rem;
  }
}

.story-thumb {
  margin: 0;
  width: auto;
  height: 5.6rem;
}

.name,
.material {
  line-height: 0.94;
  @include breakpoint(md) {
    font-size: 8vw;
  }
}

.name {
  flex: 1;
  font-weight: 300;
  @include breakpoint(md) {
    flex: 0;
    font-weight: 200;
  }
}

.meta {
  @include breakpoint(md) {
    margin-top: 2.4rem;
  }
}

.dimensions {
  display: none;
  @include breakpoint(md) {
    display: inline;
    margin-right: 0.4rem;
  }
}

li {
  margin-top: 7.2rem;
  @include breakpoint(md) {
    display: flex;
    justify-content: flex-end;
    margin: 6.4rem 0 14rem;
    text-align: right;
  }
}

.img-main {
  @include breakpoint(md) {
    position: fixed;
    bottom: 2.4rem;
    left: 2.4rem;
    margin: auto;
    max-width: 80vw;
    width: auto;
    height: 80vh;
    object-fit: cover;
    opacity: 0;
    pointer-events: none;
  }
}

figcaption {
  @include breakpoint(md) {
    width: max-content;
  }
}

figcaption:after {
  display: none;
  content: "";
  position: absolute;
  z-index: var(--zmin);
  right: 0;
  margin: 6.4rem 0;
  width: grid-width(5);
  height: 1px;
  background: var(--gravity);
  @include breakpoint(md) {
    display: block;
  }
}

.whileHovering {
  @include breakpoint(mdl) {
    opacity: 1;
  }
}

.outline {
  @include breakpoint(mdl) {
    color: transparent;
    text-stroke: 0.5px var(--gravity);
    -webkit-text-stroke: 0.5px var(--gravity);
  }
}
</style>

<!-- logic -->
<script>
import projects from "~/static/projects";
export default {
  props: {
    project: Object,
  },
  data() {
    return {
      projects,
      hover: false,
    };
  },
  mounted() {},
};
</script>
