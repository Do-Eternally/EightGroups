<template>
  <div class="songs-list">
    <h1>歌单列表</h1>
  </div>
</template>

<script>
export default {
  name: "SongsList",
  data() {
    return {};
  },
  computed: {},
  watch: {},

  methods: {},
  created() {
    console.log(111, this.$axios);
    this.$axios.get("/api/playlist/catlist").then((res) => {
      console.log(res);
    });
  },
  mounted() {},
  components: {},
};
</script>
<style scoped>
</style>