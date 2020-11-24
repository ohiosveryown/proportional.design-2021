<!-- layout -->
<template>
  <footer class="font-sec">
    proportional.design
    <span class="trigger font-prim">est. 2019</span>
    <section class="channel font-prim"/>
    <!-- <figure>
      <svg width="20" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.767 19.406V12.48h1.305V9.703H2.767V2.776h6.935v1.217h4.15V2.776H12.47V1.393h-1.383V0H0v19.406h2.767zM5.07 12.48V24h10.857v-1.355h1.355V21.29h1.354v-1.355H20V9.066h-1.364V7.711h-1.354V6.356h-1.355V4.992H5.07v7.488zm7.399-2.777h1.105V8.71H9.702v.994h-.924v2.777h2.308v-1.384h1.383V9.703zm-4.69-1.992V21.29h6.793v-1.355h1.355V18.57h1.355v-8.14h-1.355V9.066h-1.355V7.711H7.78z" fill="#000"/></svg>
    </figure> -->
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
