<template>
  <div class="songs-list">歌单列表</div>
</template>

<script>
// import axios from "../../../";
export default {
  name: "SongsList",
  data() {
    return {};
  },
  computed: {},
  watch: {},

  methods: {},
  created() {
    axios.get("/playlist/catlist").then((res) => {
      console.log(res);
    });
  },
  mounted() {},
  components: {},
};
</script>
<style scoped>
</style>