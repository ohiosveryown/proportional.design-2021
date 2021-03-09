<template>
  <div class="story-wrapper">
    <!-- <div class="reload">reload</div> -->
    <div class="story-meta">
      <ul class="timelines">
        <!-- story timeline -->
        <li class="timeline">
          <div class="timeline-foreground" />
        </li>

        <!-- story timeline -->
        <li class="timeline">
          <div class="timeline-foreground" />
        </li>

        <!-- story timeline -->
        <!-- <li class="timeline">
          <div class="timeline-foreground" />
        </li> -->
      </ul>

      <header class="story-header">
        <img
          src="../static/img/stories/armstrong/thumb-single.png"
          alt="￼"
          class="thumbnail"
        />

        <div class="header-first-row">
          <h1 class="font-sec fs-mdd uc">Armstrong Nightstand</h1>
          <h2 class="font-prim fs-sm uc">From 2021</h2>
        </div>
        <h3 class="header-back font-ter fs-sm">
          <nuxt-link to="/">Go Back</nuxt-link>
        </h3>
      </header>
    </div>

    <ul class="story-img-wrapper">
      <!-- story img -->
      <li>
        <img class="story" src="../static/img/03.jpg" alt="￼" />
      </li>
      <!-- story img -->
      <!-- <li>
        <img
          class="story"
          src="../static/img/stories/armstrong/00.png"
          alt="￼"
        />
      </li> -->
      <!-- story img -->
      <li>
        <video
          autoplay="autoplay"
          playsinline=""
          loop="loop"
          muted
          src="https://res.cloudinary.com/da32ufmnf/video/upload/v1615255140/proportional.design/story-armstrong/01_vwckcf.mp4"
          class="story"
        >
          ￼
        </video>
      </li>
    </ul>
  </div>
</template>

<style lang="scss">
@import "~/static/style/grid.scss";

.timelines {
  display: flex;
  position: relative;
  padding: 20px 0;
  margin: 0 auto 0;
  width: 100%;
  height: 2.4px;
  overflow: hidden;
}

.timeline {
  flex: 1;
  margin-left: 6px;
  background: rgba(255, 255, 255, 0.5);
  transform-origin: left;
  transform: scaleX(1);
  transition: transform ease;
  &:first-of-type {
    margin-left: 0;
  }
}

.timeline-foreground {
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 1);
  transform: scaleX(0);
  transform-origin: left;
}

@keyframes fill {
  0% {
    transform: scaleX(0);
  }
  100% {
    transform: scaleX(1);
  }
}
@keyframes show {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>

<script>
export default {
  layout: "stories",
  mounted() {
    // const reload = document.querySelector(".reload");
    // reload.addEventListener("click", () => {
    //   location.reload();
    // });

    const trigger = document.querySelector(".story-meta");
    const stories = document.querySelectorAll(".timeline-foreground");
    const storiesQty = stories.length;
    const imgs = document.querySelectorAll(".story");
    const time = "5s";
    imgs[0].style.opacity = "1";

    // story timeline
    stories[0].style.cssText = `
      animation: fill ${time} linear forwards;
    `;
    // story timeline
    stories[1].style.cssText = `
      animation: fill ${time} ${time} linear forwards;
    `;
    // story timeline
    // stories[2].style.cssText = `
    //   animation: fill ${time} calc(${time} * 2) linear forwards;
    // `;

    // story img
    imgs[1].style.cssText = `
      animation: show 1ms ${time} linear forwards;
    `;

    // story img
    // imgs[2].style.cssText = `
    //   animation: show 1ms calc(${time} * 2) linear forwards;
    // `;

    trigger.addEventListener("mouseenter", () => {
      stories[0].style.animationPlayState = "paused";
      stories[1].style.animationPlayState = "paused";

      imgs[0].style.animationPlayState = "paused";
      imgs[1].style.animationPlayState = "paused";
    });

    trigger.addEventListener("mouseleave", () => {
      stories[0].style.animationPlayState = "running";
      stories[1].style.animationPlayState = "running";

      imgs[0].style.animationPlayState = "running";
      imgs[1].style.animationPlayState = "running";
    });
  },
};
</script>
