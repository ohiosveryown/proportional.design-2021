<!-- layout -->
<template>
  <div class="width leave-target">
    <Header class="skw"/>
    <Hero
      class="skw anim--enter"
      :firstSrc="require('~/static/img/canyon-dresser-01.jpg')"
      firstAlt="Canyon Dresser"
      firstName="Canyon Dresser"
      firstYear="2020"
      firstMaterial="American Oak"

      :secondSrc="require('~/static/img/mila-cabinet.jpg')"
      secondAlt="Mila Cabinet"
      secondName="Mila Cabinet"
      secondYear="2020"
      secondMaterial="Sapele"
    />
    <ul>
      <List
        class="skw"
        v-for="project in projects"
        :project="project"
        :key="project.id"
      />
    </ul>
    <Contact class="skw"/>
    <Footer/>
  </div>
</template>

<!-- style -->
<style lang="scss" scoped>
  @import '~/static/style/grid.scss';

  ul {
    margin: 4rem 0 11.2rem;
    @include breakpoint(mdl) { margin: 0 0 20rem; }
  }
</style>

<!-- logic -->
<script>
  import Header from '~/components/Header'
  import Hero from '~/components/Hero'
  import List from '~/components/List'
  import Contact from '~/components/Contact'
  import Footer from '~/components/Footer'
  import projects from '~/static/projects'
  export default {
    head: () => ({
      title: 'prop—home'
    }),
    components: { Header, Hero, List, Contact, Footer, },
    data() {
      return {
        projects
      }
    },
    beforeDestroy() {
      const leaveTarget = document.querySelector('.leave-target')
      leaveTarget.style.cssText = `
        transform: skewY(6deg) translateY(-200px);
        opacity: 0;
        transition: transform 600ms ease, opacity 400ms ease;
      `
    },
    mounted() {
      gsap.from('.anim--enter', {
        opacity: 0,
        y: 200,
        skewY: 10,
        stagger: .05,
        duration: 1,
        ease: Power2.easeInOut
      })
      gsap.from('.anim--delay', {
        opacity: 0,
        skewY: 10,
        y: 20,
        duration: 1.24,
        delay: 1,
        ease: Power2.easeInOut
      })
    }
  }
</script>
