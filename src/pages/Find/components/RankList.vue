<template>
  <div class="ranklist">
    <h1>排行榜</h1>
  </div>
</template>

<script>
export default {
  name: "RankList",
  data() {
    return {};
  },
  computed: {},
  watch: {},

  methods: {},
  created() {
    this.$axios.get("/api/toplist/detail").then((res) => {
      console.log("排行榜", res);
    });
  },
  mounted() {},
  components: {},
};
</script>
<style scoped>
</style>