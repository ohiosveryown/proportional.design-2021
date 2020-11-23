<!-- layout -->
<template>
  <div class="leave-target">
    <Loader/>
    <div class="width">
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
  </div>
</template>

<!-- style -->
<style lang="scss" scoped>
  @import '~/static/style/grid.scss';

.loading-page {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.8);
  text-align: center;
  padding-top: 200px;
  font-size: 30px;
  font-family: sans-serif;
}

  ul {
    margin: 4rem 0 11.2rem;
    @include breakpoint(mdl) { margin: 0 0 20rem; }
  }
</style>

<!-- logic -->
<script>
  import Loader from '~/components/Loader'
  import Header from '~/components/Header'
  import Hero from '~/components/Hero'
  import List from '~/components/List'
  import Contact from '~/components/Contact'
  import Footer from '~/components/Footer'
  import projects from '~/static/projects'

  export default {
    head: () => ({
      title: 'prop—home',
    }),
    loading: '~/components/Loader.vue',
    components: { Header, Hero, List, Contact, Footer, Loader },
    data() {
      return {
        projects,
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
        delay: 1,
        ease: Power2.easeInOut
      })
      gsap.from('.anim--delay', {
        opacity: 0,
        y: 20,
        skewY: 10,
        delay: 2,
        duration: 1,
        ease: Power2.easeInOut
      })
    }
  }
</script>
