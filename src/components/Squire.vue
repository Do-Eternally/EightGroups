<template>
  <div class="squire">
    <div class="container">
      <i>{{ ranking }}</i>
      <p>{{ songsName }}</p>
      <b>{{ singerName }}</b>
      <s>{{ album }}</s>
      <u>{{ time }}</u>
    </div>
  </div>
</template>

<script>
export default {
  name: "squire",
  props: ["ranking", "songsName", "singerName", "album"],
  data() {
    return {};
  },
  computed: {},
  watch: {},

  methods: {},
  created() {},
  mounted() {},
  components: {},
};
</script>
<style scoped>
.container {
  height: 5em;
  width: 100px;
  padding: 0 1em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  line-height: 5em;
}
/* .container p {
  flex: 1;
} */
.container i {
  width: 2em;
}
</style>