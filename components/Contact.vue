<!-- layout -->
<template>
  <section>
    <article>
      <h4 class="mb-2">About / Contact
        <a
          href="https://www.instagram.com/proportional.design"
          target="_blank">
          <svg class="ml-1" width="24" height="24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
        </a>
      </h4>
      <p>Here you’ll find a repository showcasing wood furniture and functional objects, designed and hand crafted by
        <a
          class="link"
          target="_blank"
          href="https://twitter.com/cmykw_">
          Matthew Pence</a>.
      </p>
      <p>If you’re interested in a purchasing a piece, or are inquiring about a custom build, please reach out by filling out the form below. Have fun browsing around, friend.</p>
    </article>

    <form
      name="contactus"
      action="/"
      method="post"
      netlify
      netlify-honeypot="bot-field">

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
        <textarea data-autoresize rows="2" name="message" required/>
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
  }

  h4 {
    display: flex;
    // justify-content: space-between;
    align-items: flex-end;
    font-size: 3rem;
    font-weight: 300;
  }

  svg {
    transform: scale(.8);
    fill: var(--gravity);
    padding-bottom: .6rem;
  }

  p { font-size: 1.6rem; }
  p + p { text-indent: 4ch; margin-bottom: .4rem; }

  div {
    display: flex;
    flex-direction: column;
    margin-bottom: 3.2rem;
  }

  label { font-size: 2.4rem; }

  input, textarea {
    border: 1px solid var(--gravity);
    border-radius: 0;
    padding: 0 1.2rem;
    height: 4rem;
    background: transparent;
    font-size: 1.6rem;
    background-clip: padding-box;
  }

  textarea {
    padding: 1.2rem 1.2rem 1.6rem;
    box-sizing: border-box;
    resize: none;
    line-height: 1.1;
   }

   textarea:focus { background: var(--blush); }

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
    mounted() {


      const addAutoResize = () => {
        document.querySelectorAll('[data-autoresize]').forEach(function (element) {
          element.style.boxSizing = 'border-box'
          var offset = element.offsetHeight - element.clientHeight
          element.addEventListener('input', function (event) {
            event.target.style.height = 'auto'
            event.target.style.height = event.target.scrollHeight + offset + 'px'
          })
          element.removeAttribute('data-autoresize')
        })
      }
      addAutoResize()
    }
  }
</script>
