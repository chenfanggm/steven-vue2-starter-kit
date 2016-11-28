<template>
  <div class="root">
    <header class="header">
      <navbar></navbar>
    </header>
    <main class="main">
      <left-side-bar></left-side-bar>
      <div class="content-right">
        <div class="container">
          <transition-fade>
            <keep-alive>
              <router-view></router-view>
            </keep-alive>
          </transition-fade>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
  import store from '../vuex/store'
  import Navbar from '../components/Navbar'
  import LeftSideBar from '../components/LeftSideBar'

  export default {
    components: { Navbar, LeftSideBar },
    store
  }
</script>

<style lang="scss">
  @import "../styles/main";
  @import "../styles/animation";

  .root {
    width: 100%;
    height: 100%;

  >.header {
     width: 100%;
   }

  >.main {
     width: 100%;
     height: 100%;
     padding-top: $navbar-height;

  >.content-right {
     width: 100%;
     height: 100%;
     display: flex;
     justify-content: center;
     padding-left: $left-sidebar-width;

  >.container {
     width: 100%;
     height: 100%;
     padding: 2rem;
   }
  }
  }

  &.noScroll {
     overflow: hidden;
   }
  }
</style>
