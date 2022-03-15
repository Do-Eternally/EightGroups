<template>
  <div class="recommend">
    <h1>每日推荐</h1>
  </div>
</template>

<script>
export default {
  name: "RecommendedDaily",
  data() {
    return {};
  },
  computed: {},
  watch: {},

  methods: {},
  created() {
    this.$axios.get("/api/personalized").then((res) => {
      console.log(res);
    });
  },
  mounted() {},
  components: {},
};
</script>
<style scoped>
</style>