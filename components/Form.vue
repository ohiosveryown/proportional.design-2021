<!-- layout -->
<template>
  <section>
    <article>
      <h4 class="mb-2">About / Contact</h4>
      <p>Here you’ll find a repository showcasing wood furniture and functional objects, designed and hand crafted by <a class="link" target="_blank" href="https://twitter.com/cmykw_">Matthew Pence</a>.</p>
      <p>If you’re interested in a purchasing a piece, or creating a custom build specifically for your needs, please contact me below. Have fun browsing around, friend.</p>
    </article>

    <form
    name="contactus"
    action="/"
    method="post"
    netlify
    netlify-honeypot="bot-field"
  >
      <input type="hidden" name="form-name" value="contact"/>
      <div class="name">
        <label class="font-sec" for="name">Your Name</label>
        <input type="text" name="name" required/>
      </div>

      <div class="email">
        <label class="font-sec" for="email">Your Email</label>
        <input type="email" name="email" required/>
      </div>

      <div class="message">
        <label class="font-sec" for="message">Project Information</label>
        <textarea name="message" required/>
      </div>

      <button class="font-sec uc" type="submit" value="Send message">Submit Form</button>
  </form>
  </section>
</template>

<!-- style -->
<style lang="scss" scoped>
  @import '~/static/style/grid.scss';
  section { padding-bottom: 11.2rem; }

  article {
    margin-bottom: 5.6rem;
    @include breakpoint(mdl) { width: grid-width(5); }
  }

  h4 { font-size: 2.8rem; font-weight: 300; }

  p { font-size: 1.6rem; }
  p + p { text-indent: 4ch; }

  div {
    display: flex;
    flex-direction: column;
    margin-bottom: 3.2rem;
    @include breakpoint(mdl) { width: grid-width(5); }
  }

  label { font-size: 2.4rem; }

  input, textarea {
    border: 1px solid var(--gravity);
    padding: 0 1.2rem;
    height: 4rem;
    background: var(--blush);
    font-size: 1.6rem;
  }

  textarea {
    padding-top: 1.2rem;
    height: 3.2rem;
   }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    margin-top: 4rem;
    padding: 2rem 4.8rem;
    background: none;
    box-shadow: inset 3px 3px 0 rgba(255,255,255,1), inset -3px -3px 0px rgba(0,0,0,.8);
    font-size: 1.8rem;
    cursor: pointer;
    &:hover {
      box-shadow:
        inset 1px 1px 0 rgba(255,255,255,1),
        inset -1px -1px 0px rgba(0,0,0,.8);
    }
  }

</style>

<!-- logic -->
<script>
  export default {

  }
</script>
