<!-- layout -->
<template>
  <div class="width">
    <Header class="skw"/>
    <Hero
      class="skw anim--enter"
      :firstSrc="require('~/static/img/walnut-sideboard.jpg')"
      firstAlt="Walnut Sideboard"
      firstName="Walnut Sideboard"
      firstYear="2020"
      firstMaterial="Black Walnut"

      :secondSrc="require('~/static/img/mila-cabinet.jpg')"
      secondAlt="Mila Cabinet"
      secondName="Mila Cabinet"
      secondYear="2020"
      secondMaterial="Sapele"
    />
    <List/>
    <Article class="skw anim--enter"/>
  </div>
</template>

<!-- style -->
<style lang="scss" scoped>
  @import '~/static/style/grid.scss';

</style>

<!-- logic -->
<script>
  import Header from '~/components/Header'
  import Hero from '~/components/Hero'
  import List from '~/components/List'
  import Article from '~/components/Article'
  export default {
    head: () => ({
      title: 'home'
    }),
    components: { Header, Hero, List, Article, },
    mounted() {
      gsap.from('.anim--enter', {
        opacity: 0,
        y: 200,
        skewY: 10,
        stagger: .05,
        duration: 1,
        ease: Power2.easeInOut
      })
    }
  }
</script>
