<!-- layout -->
<template>
  <header>
    <div class="lines line-one">
      <h1 class="anim--enter fs-xl font-sec">proportional</h1>
      <h1 class="anim--enter fs-xl font-sec">.design</h1>
    </div>

    <div class="lines line-two">
      <nuxt-link to='/contact'>
        <button class="anim--enter uc font-sec">Get in Touch</button>
      </nuxt-link>
      <h2 class="anim--enter fs-lg tar font-prim">is a studio building</h2>
    </div>

    <div class="anim--enter lines line-three">
      <h2 class="fs-lg font-prim">wood furniture</h2>
      <span class="mr-1 ml-1 fs-lg font-prim-italic">and</span>
      <h2 class="fs-lg font-prim">other</h2>
    </div>

    <div class="anim--enter lines line-four">
      <h2 class="fs-lg font-prim">functional, well-to-do</h2>
    </div>

    <div class="anim--enter lines line-five">
      <h2 class="anim--enter fs-lg font-prim">objects.</h2>
      <a
        class="link anim-enter uc font-sec"
        target="_blank"
        href="https://github.com/ohiosveryown/proportional.design-2021">
        source</a>
    </div>
  </header>
</template>

<!-- style -->
<style lang="scss" scoped>
  @import '~/static/style/grid.scss';

  header {
    display: flex;
    flex-direction: column;
    position: relative;
  }

  .lines {
    display: flex;
    align-items: center;
  }

  .theme input {
    position: absolute;
    top: 0; left: 0;
    width: 100%; height: 100%;
    opacity: 0;
    cursor: pointer;
    font-size: 1.6rem;
  }

  .line-one {
    display: flex;
    flex-wrap: wrap;
    margin-top: 4vh;
    margin-bottom: .2rem;
    /* width: max-content; */
    border: 1px solid transparent;
    .icon { margin: -.8rem 0 0 1.2rem; }
    @include breakpoint(md) { margin-bottom: 2rem; }
    @include breakpoint(mdl) {
      margin-bottom: 0;
      .icon { margin: -3.2rem 0 0 2.8rem; }
     }
  }

  .line-two {
    flex-direction: column-reverse;
    margin-bottom: .8rem;
    @include breakpoint(md) {
      flex-direction: row;
      justify-content: space-between;
      margin-top: -2rem;
      margin-bottom: 1.2rem;
    }
    a { margin-left: 3%; }
    button {
      margin: 2rem auto;
      padding: 3.2vh 9.6vw;
      font-size: 1.6rem;
      @include breakpoint(md) {
        margin: 1rem 0 0 0;
        padding: 3.2vh 3.2vw;
        font-size: 1.6rem;
      }
      @include breakpoint(mdl) {
        margin: 1.6rem 0 0;
        padding: 3.2vh 3.2vw;
        &:hover {
          box-shadow:
            inset 1px 1px 0 rgba(255,255,255,1),
            inset -1px -1px 0px rgba(0,0,0,.8);
        }
      }
    }
  }

  .line-three {
      justify-content: flex-end;
      flex-wrap: wrap;
      flex-direction: row;
      margin-bottom: .8rem;
    @include breakpoint(md) {
      justify-content: space-between;
      margin-bottom: 1.2rem;
      span { margin-top: -.5rem; }
     }
  }

  .line-four {
    margin-bottom: .8rem;
    @include breakpoint(md) { margin-bottom: 1.2rem; }
  }

  .line-five {
    margin-bottom: .8rem;
    flex-direction: row-reverse;
    justify-content: space-between;
    a {
      margin: .2rem 0 0 2.4rem;
      /* background: pink; */
     }
    @include breakpoint(md) {
      flex-direction: row;
      justify-content: flex-start;
      margin-bottom: 1.2rem;
      margin-left: grid-width(1);
      a {
        margin: 1.4rem 0 0 4.8rem;
        background: transparent;
       }
    }
  }

  button {
    position: relative;
    padding: 0 1.2rem;
    background: none;
    box-shadow: inset 3px 3px 0 rgba(255,255,255,1), inset -3px -3px 0px rgba(0,0,0,.8);
    cursor: pointer;
    span { margin-top: -.6rem; }
  }
</style>

<!-- logic -->
<script>
  export default {

  }
</script>
