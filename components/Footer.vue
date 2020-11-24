<!-- layout -->
<template>
  <footer class="font-sec">
    proportional.design
    <span class="trigger font-prim">est. 2019</span>
    <section class="channel font-prim"/>
  </footer>
</template>

<!-- style -->
<style lang="scss" scoped>
  @import '~/static/style/grid.scss';

  footer {
    display: flex;
    align-items: center;
    padding: 11.2rem 0 2rem;
    font-size: 2rem;
    @include breakpoint(mdl) { padding: 50vh 0 2rem; }
  }

  .channel {
    font-size: 1.6rem;
    cursor: pointer;
  }

  span {
    flex: 1;
    margin-left: 1.2rem;
    font-size: 1.6rem;
  }
</style>

<!-- logic -->
<script>
  export default {
    mounted() {
      const bd = document.querySelector('body')
      const channel = document.querySelector('.channel')
      channel.innerText = 'channel: default'

      channel.addEventListener('click', () => {
        bd.style.transition = 'background 300ms ease'
        bd.classList.toggle('orange')

        if ( bd.classList.contains('orange') ) {
          channel.innerText = 'channel: orange'
        } else {
          channel.innerText = 'channel: default'
        }
      })
    }
  }
</script>
