<template>
  <ul class="feed-list">
    <transition-group name="stagger" stagger="100">
      <li v-for="n in maxFeeds" :key="n">
        <feed-box :feed-index="n"></feed-box>
      </li>
    </transition-group>
  </ul>
</template>

<script>
  import FeedBox from './FeedBox'

  export default {
    components: { FeedBox },
    props: {
      maxFeeds: { type: Number, required: true }
    }
  }
</script>

<style lang="scss">
  @import '../styles/constants';

  .feed-list {
    list-style-type: none;
    margin-top: 1rem;
    padding-left: 0;
  }
</style>
