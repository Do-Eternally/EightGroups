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
    /* fetch(
      "http://192.168.1.98:3000/login/cellphone?phone=17634428483&password=cc20010227"
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
      }); */
    this.$axios.get("/api/toplist").then((res) => {
      console.log("排行榜", res);
    });
  },
  mounted() {},
  components: {},
};
</script>
<style scoped>
</style>