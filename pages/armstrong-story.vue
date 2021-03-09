<template>
  <div class="wrapper">
    <header class="">
      <div class="stories-img">
        <div class="story-img"></div>
        <div class="story-img"></div>
        <div class="story-img"></div>
      </div>
      <h1 class="font-sec fs-mdd uc">Armstrong Nightstand</h1>
      <h2 class="font-prim fs-sm uc">From 2021</h2>
    </header>

    <div class="imgs">
      <img
        src="https://images.unsplash.com/photo-1612836622494-20f5f39bd7cc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHw&ixlib=rb-1.2.1&q=80&w=400"
        class="img img-one"
      />
      <img
        src="https://images.unsplash.com/photo-1613932379910-8d7b41792e5d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHw&ixlib=rb-1.2.1&q=80&w=400"
        class="img img-two"
      />

      <img
        src="https://images.unsplash.com/photo-1613205163422-a3a4e0240e2b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYxNTIzMDg2MQ&ixlib=rb-1.2.1&q=80&w=400"
        class="img img-three"
      />
    </div>
  </div>
</template>

<style lang="scss">
@import "~/static/style/grid.scss";
.wrapper {
  margin: 0 auto;
  width: grid-width(6);
}

h1,
h2 {
  line-height: 1;
}

header {
  margin-bottom: 1.6rem;
}

.stories-img {
  display: flex;
  position: relative;
  padding: 20px 0;
  margin: 0 auto 0;
  width: 100%;
  height: 2.4px;
  overflow: hidden;
  background: rgba(255, 255, 255, 0);
}

.story-img {
  background: #fff;
  flex: 1;
  margin-left: 6px;
  transform-origin: left;
  transform: scaleX(0);
  transition: transform ease;
}

.story-img:first-of-type {
  margin-left: 0;
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

.imgs {
  position: relative;
  margin: 0px auto 0;
  width: 50vw;
  height: 70vh;
  overflow: hidden;
}

.img {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  margin: auto;
  width: 100%;
  height: 100%;
  object-fit: contain;
  opacity: 0;
  background: var(--gravity);
}
</style>

<script>
export default {
  mounted() {
    const trigger = document.querySelector("header");
    const stories = document.querySelectorAll(".story-img");
    const storiesQty = document.querySelectorAll(".story-img").length;
    const imgs = document.querySelectorAll(".img");
    const time = "2s";

    imgs[0].style.opacity = "1";
    console.log("hellooooo");
    stories[0].style.cssText = `
    animation: fill ${time} linear forwards;
  `;

    stories[1].style.cssText = `
    animation: fill ${time} ${time} linear forwards;
  `;

    stories[2].style.cssText = `
    animation: fill ${time} calc(${time} * 2) linear forwards;
  `;

    imgs[0].style.cssText = `
    animation: show 1ms linear forwards;
  `;

    imgs[1].style.cssText = `
    animation: show 1ms ${time} linear forwards;
  `;
    imgs[2].style.cssText = `
    animation: show 1ms calc(${time} * 2) linear forwards;
  `;

    trigger.addEventListener("mouseenter", () => {
      stories[0].style.animationPlayState = "paused";
      stories[1].style.animationPlayState = "paused";
      stories[2].style.animationPlayState = "paused";

      imgs[0].style.animationPlayState = "paused";
      imgs[1].style.animationPlayState = "paused";
      imgs[2].style.animationPlayState = "paused";
    });

    trigger.addEventListener("mouseleave", () => {
      stories[0].style.animationPlayState = "running";
      stories[1].style.animationPlayState = "running";
      stories[2].style.animationPlayState = "running";

      imgs[0].style.animationPlayState = "running";
      imgs[1].style.animationPlayState = "running";
      imgs[2].style.animationPlayState = "running";
    });

    // console.log(time)
  },
};
</script>
