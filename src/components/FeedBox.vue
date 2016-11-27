<template>
  <div class="feed-box">
    <div>{{currentFeed}} Hello</div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    props: {
      feedIndex: { type: Number, required: true }
    },
    computed: {
      currentFeed() {
        return this.feeds[this.feedIndex % this.feeds.length]
      },
      ...mapGetters({
        feeds: 'getFeeds'
      })
    }
  }
</script>

<style lang="scss">
  @import '../styles/constants';

  .feed-box{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 1rem;
    padding: 1rem;
    border: 1px solid $bg-color-secondary-transparent;
    box-shadow: 2px 2px 2px #BBBBBB;
  }
</style>
