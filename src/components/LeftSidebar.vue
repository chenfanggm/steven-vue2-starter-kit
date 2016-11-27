<template>
  <div class="left-side-bar">
    <ul class="list">
      <li class="list-item" v-for="item in navOpt">
        <router-link :to="{ path: item.link, exact: true }"
                     class="link"
                     :class="linkClass"
                     @mouseover="toggleLinkByMouseState"
                     @mouseout="toggleLinkByMouseState">{{item.name}}</router-link>
        <i v-show="$route.path === item.link" class="fa fa-caret-left arrow" aria-hidden="true"></i>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navOpt: [
        { name: 'Home', link: '/' },
        { name: 'Profile', link: '/profile' },
        { name: 'Group', link: '/group' },
        { name: 'About', link: '/about' }
      ],
      linkClass: ''
    }
  },
  methods: {
    toggleLinkByMouseState(event) {
      const classList = event.target.classList
      if (classList.contains('mouse-over')) {
        event.target.classList.remove('mouse-over')
      } else {
        event.target.classList.add('mouse-over')
      }
    }
  }
}
</script>

<style lang="scss">
  @import "../styles/constants";

  .left-side-bar {
    flex: none;
    position: fixed;
    display: flex;
    justify-content: center;
    width: $left-sidebar-width;
    height: 100%;
    padding-top: 2rem;
    background-color:$bg-color-third;
    color: $text-color-light;
    font-size: 2rem;
    line-height: 3rem;
    font-weight: bold;

    >.list {
      width: 100%;
      list-style-type: none;
      padding: 0;

      >.list-item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        padding: 1rem 0 0.8rem 2rem;
        border-bottom: 1px solid $text-color-grey;
        >.link {
          color: $link-color-light;
        }
        >.link.active {
          color: $link-color-primary;
        }
        >.link.mouse-over {
          color: $link-color-primary;
        }
        >.arrow {
          font-size: 3rem;
          margin-right: -1px;
        }

      }
    }
  }
</style>
