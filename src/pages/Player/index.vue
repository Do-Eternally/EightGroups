<template>
  <div class="player">
    <h1>歌名：{{ song.al.name }}</h1>
    <!-- <i>时长：{{ song.dt / 1000 }}s</i><br /> -->
    <i>时长：{{ dt }}</i
    ><br />
    <b>码率:{{ song.h.br }}</b>
    <p>大小:{{ size }}Mb</p>
    <img :src="song.al.picUrl" alt="" width="200" />
    <p v-for="item in song.ar" :key="item.id + Math.random()">
      {{ item.name }}
    </p>
    <audio controls autoplay :src="songDetail.url" ref="audio">
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
        h: {
          br:22
        },
        al: {},
      },
      songDetail: {},
    };
  },
  computed: {
    size() {
      return (this.songDetail.size / 1024 / 1024).toFixed(2);
    },
    dt() {
      let sec = this.song.dt / 1000;
      if (sec < 60) {
        return parseInt(this.song.dt / 1000);
      } else {
        let min = parseInt(sec / 60);
        let s = parseInt(sec % 60);
        return min + "分" + s + "秒";
      }
    },
  },
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
            console.log("歌曲url", res.data);
            /*  if (res.code == 200)  */ this.songDetail = res.data[0];
          });
      });
    //歌曲url
  },
  mounted() {
    let audio = this.$refs.audio;
    // let audio1 = document.querySelector("audio");
    console.log(this.$refs.audio);
    audio.onseeked=function(ev){
      console.log(ev);
      console.log(ev.timeStamp/1000);
    }
    // audio.getStartDate()
  },
  components: {},
};
</script>
<style scoped>
img {
  border-radius: 500px;
}
audio{
  /* tr */
}
</style>