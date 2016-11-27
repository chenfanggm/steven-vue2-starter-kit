<template>
  <div class="home">
    <div>
      <label for="maxFeeds">Number of feeds to show:</label>
      <input id="maxFeeds" v-model="maxFeeds" />
    </div>
    <feed-list :max-feeds="maxFeedsFromString"></feed-list>
  </div>
</template>

<script>
import FeedList from '../components/FeedList'

export default {
  components: { FeedList },
  data() {
    return {
      maxFeeds: 15
    }
  },
  computed: {
    maxFeedsFromString() {
      return parseInt(this.maxFeeds, 10)
    }
  }
}
</script>

<style lang="scss">
  @import "../styles/animation";

  .home {
    width: 100%;
    height: 100%;
  }
</style>
