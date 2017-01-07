<template>
  <div class="feed-box">
    <div>{{currentFeed}} Hello</div>
  </div>
</template>

<script>
  export default {
    props: {
      feedIndex: { type: Number, required: true }
    },
    data() {
      return {
        feeds: []
      }
    },
    computed: {
      currentFeed() {
        return this.feeds[this.feedIndex % this.feeds.length]
      }
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
