<template>
  <div class="player">
    <h2>《{{ song.al.name }}》</h2>
    <p>
      <!-- <b>码率:{{ song.h.br }}</b> -->
      <i>&nbsp;&nbsp;&nbsp;&nbsp;{{ dt }}</i>
      <b>&nbsp;&nbsp;&nbsp;&nbsp;{{ size }}Mb</b>
      <em>&nbsp;&nbsp;&nbsp;&nbsp;{{ singer() }}</em>
    </p>
    <img :src="song.al.picUrl" alt="" width="200" />
    <div class="lyrics">
      
    </div>
    <audio controls autoplay :src="songDetail.url" ref="audio"></audio>
  </div>
</template>

<script>
import { Toast } from "vant";
export default {
  name: "Player",
  data() {
    return {
      song: {
        h: {
          br: 22,
        },
        al: {},
        ar: [],
      },
      songDetail: {},
      lyrics: "",
    };
  },
  computed: {
    singer() {
      return () => {
        let singers = "";
        this.song.ar.forEach((item) => {
          singers += item.name + "  /  ";
        });
        singers = singers.replace(/\/\s*$/, "");
        return singers;
      };
    },
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
    let lyrics = null;
    // console.log();
    let id = this.$route.query.id;
    //歌曲详细
    let songDetail = this.$axios.get("/api/song/detail", {
      params: {
        ids: id,
      },
    });
    songDetail.then((res) => {
      this.song = res.songs[0];
      //歌曲url
      this.$axios
        .get("/api/song/url", {
          params: {
            id: this.song.id,
          },
        })
        .then((res) => {
          // console.log("歌曲url", res.data);
          this.songDetail = res.data[0];
        });
      //歌词
      this.$axios.get("/api/lyric?id=" + this.song.id).then((res) => {
        if (res.code == 200) {
          this.lyrics = res.lrc.lyric;
          console.log("lyrics", this.lyrics);
        } else {
          Toast("歌词加载失败!!!");
        }
      });
    });
  },
  mounted() {
    /* let audio = this.$refs.audio;
    // let audio1 = document.querySelector("audio");
    console.log(this.$refs.audio);
    audio.onseeked = function (ev) {
      console.log(ev);
      console.log(ev.timeStamp / 1000);
    }; */
    // audio.getStartDate()
  },
  components: {},
};
</script>
<style scoped>
.lyrics {
  height: 30em;
  width: 100%;
  border: 1px solid;
}
audio {
  position: absolute;
  bottom: 5em;
  width: 100%;
}
img {
  border-radius: 300px;
  position: absolute;
  top: 155px;
  left: calc(50% - 100px);
  animation: circle 10s infinite linear;
}
@keyframes circle {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>