<!-- layout -->
<template>
  <section>
    <form
    name="contactus"
    action="/test"
    method="post"
    netlify
    netlify-honeypot="bot-field"
  >
      <input type="hidden" name="form-name" value="contactus" />
      <div>
        <label for="name">Name:</label>
        <input type="text" name="name" required/>
      </div>
      <div>
        <input type="email" name="email" required/>
        <label for="email">Email:</label>
      </div>
      <div>
        <textarea name="message" required></textarea>
        <label for="message">Message:</label>
      </div>
      <button type="submit" value="Send message">Send</button>
  </form>
  </section>
</template>

<!-- style -->
<style lang="scss" scoped>
  @import '~/static/style/grid.scss';

</style>

<!-- logic -->
<script>
  export default {

  }
</script>
