<template>
  <div class="player">
    <h1>歌名：{{ song.al.name }}</h1>
    <i>时长：{{ song.dt / 1000 }}s</i><br />
    <b>码率:{{ song.h.br }}</b>
    <p>大小:{{ song.h.size / 1024 / 1024 }}Mb</p>
    <img :src="song.al.picUrl" alt="" width="200" />
    <p v-for="item in song.ar" :key="item.id + Math.random()">
      {{ item.name }}
    </p>
    <audio controls autoplay :src="songDetail.url">
      <!-- <source  :type="songDetail.type" /> -->
    </audio>
  </div>
</template>

<script>
export default {
  name: "Player",
  data() {
    return {
      song: {
        h: {},
        al: {},
      },
      songDetail: "",
    };
  },
  computed: {},
  watch: {},

  methods: {},
  created() {
    // console.log();
    let id = this.$route.query.id;
    //歌曲详细
    this.$axios
      .get("/api/song/detail", {
        params: {
          ids: id,
        },
      })
      .then((res) => {
        this.song = res.songs[0];
        this.$axios
          .get("/api/song/url", {
            params: {
              id: this.song.id,
            },
          })
          .then((res) => {
            console.log("歌曲url", res);
            if (res.code == 200) this.songDetail = res.data[0];
          });
      });
    //歌曲url
  },
  mounted() {},
  components: {},
};
</script>
<style scoped>

img{
  border-radius:300px ;
  position: absolute;
  top: 223px;
  left: 56px;
  -webkit-animation: circle 10s infinite linear;
}
@-webkit-keyframes circle{
  0%{
    transform: rotate(0deg);
  }
  100%{
    transform: rotate(360deg);
  }
}
audio{
  position: absolute;
  top: 56%;

}
</style>