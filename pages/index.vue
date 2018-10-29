<template>
  <section class="container">
    simple Vue SSR Template
    <h1><i class="fa fa-home"/></h1>
    <img
      src="~/assets/images/avatar.jpg"
      alt="userAvatar"
      class="avatar">
  </section>
</template>

<script>

export default {
  data() {
    return {}
  }
}
</script>

<style lang="scss">
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
