<template>
  <div class="navbar">
    <div class="header">
      <img class="logo" src="../assets/img/main_logo.png">
      <span class="title">Caster Book</span>
    </div>
    <i class="fa fa-bars menu" aria-hidden="true"></i>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
  @import "../styles/constants";

  .navbar {
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-between;
    top: 0;
    width: 100%;
    height: $navbar-height;
    background-color: $bg-color-secondary;
    color: $text-color-light;
    font-size: 3rem;

    >.header {
      display: flex;
      align-items: center;

      .logo {
        width: 6rem;
        margin: 0 1rem;
      }
    }

    .menu {
      margin-right: 2.5rem;
    }
  }
</style>
