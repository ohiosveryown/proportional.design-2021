<!-- layout -->
<template>
  <div class="leave-target">
    <Loader />
    <div class="width">
      <Header />
      <Hero
        class="anim--enter"
        :firstSrc="require('~/static/img/canyon-dresser-01.jpg')"
        firstAlt="Park Dresser"
        firstName="Park Dresser"
        firstYear="2020"
        firstMaterial="Black Walnut"
        :secondSrc="require('~/static/img/mila-cabinet.jpg')"
        secondAlt="Mila Cabinet"
        secondName="Mila Cabinet"
        secondYear="2020"
        secondMaterial="Sapele"
      />
      <ul>
        <header class="light">
          Selected Work Items
          <svg width="18" height="16" fill="none">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0 1h11.504v12.142L6.7 8.545l-.691.722 5.649 5.406.345.331.346-.33 5.649-5.407-.692-.722-4.802 4.596V0H0v1z"
              fill="#000"
            />
          </svg>
        </header>
        <List
          v-for="project in projects"
          :project="project"
          :key="project.id"
        />
      </ul>
      <div class="contact-wrapper">
        <Contact />
      </div>
      <Footer />
    </div>
  </div>
</template>

<!-- style -->
<style lang="scss" scoped>
@import "~/static/style/grid.scss";

ul {
  margin: 4rem 0 11.2rem;
  @include breakpoint(mdl) {
    margin: 0 0 20rem;
  }
}

ul header {
  display: none;
  @include breakpoint(md) {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding-bottom: 2.4rem;
    font-size: 3rem;
  }
  svg {
    margin: 1rem 0 0 0.8rem;
  }
}

.contact-wrapper {
  @include breakpoint(md) {
    margin-left: grid-width(7);
    width: grid-width(5);
  }
}
</style>

<!-- logic -->
<script>
import Loader from "~/components/Loader";
import Header from "~/components/Header";
import Hero from "~/components/Hero";
import List from "~/components/List";
import Contact from "~/components/Contact";
import Footer from "~/components/Footer";
import projects from "~/static/projects";

export default {
  head: () => ({
    title: "Proportional Design",
  }),
  components: { Header, Hero, List, Contact, Footer, Loader },
  data() {
    return {
      projects,
    };
  },
  beforeDestroy() {
    const leaveTarget = document.querySelector(".leave-target");
    leaveTarget.style.cssText = `
        transform: skewY(6deg) translateY(-200px);
        opacity: 0;
        transition: transform 600ms ease, opacity 600ms ease;
      `;
  },
  mounted() {
    gsap.from(".anim--enter", {
      opacity: 0,
      y: 200,
      skewY: 10,
      stagger: 0.05,
      duration: 1,
      delay: 1,
      ease: Power2.easeInOut,
    });
    gsap.from(".anim--delay", {
      opacity: 0,
      y: 20,
      skewY: 10,
      delay: 2,
      duration: 1,
      ease: Power2.easeInOut,
    });
  },
};
</script>
