<template>
  <div class="player">
    <h2>《{{ song.al.name }}》</h2>
    <p>
      <!-- <b>码率:{{ song.h.br }}</b> -->
      <i>&nbsp;&nbsp;&nbsp;&nbsp;{{ dt }}</i>
      <b>&nbsp;&nbsp;&nbsp;&nbsp;{{ size }}Mb</b>
      <em>&nbsp;&nbsp;&nbsp;&nbsp;{{ singer() }}</em>
    </p>
    <div class="lyrics">
      <img :src="song.al.picUrl" alt="" width="200" />
      <p class="lyc">
        <i>{{ txt[index - 3] }}</i>
        <i>{{ txt[index - 2] }}</i>
        <b>{{ txt[index - 1] }}</b>
        <i>{{ txt[index + 1] }}</i>
      </p>
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
      lyrics: "", //歌词元数据
      txt: [], //歌词文本
      lycTime: [], //歌词对应时间
      index: 0,
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
          this.songDetail = res.data[0];
        });
      //歌词
      this.$axios.get("/api/lyric?id=" + this.song.id).then((res) => {
        if (res.code == 200) {
          this.lyrics = res.lrc.lyric;
          //处理歌词数据
          let lyc = res.lrc.lyric;
          lyc = lyc.split(/\n/);
          let txt = lyc.map((item) => {
            let xx=item.split(/\[*\]/)[1]
            if(!xx)return "~~~~~"
            return xx;
          });
          let lycTime = lyc.map((item) => {
            let time = item.split(/\[*\]/)[0];
            time = time.replace("[", "");
            time = time.split(":");
            return time;
          });
          lycTime = lycTime.map((item) => {
            let time = item[0] * 60 * 1000 + item[1] * 1000;
            if (isNaN(time)) return;
            return time;
          });
          if (lycTime[lycTime.length - 1] == undefined) lycTime.pop();
          this.txt = txt;
          this.lycTime = lycTime;
        } else {
          Toast("歌词加载失败!!!");
        }
      });
    });
  },
  mounted() {
    let audio = this.$refs.audio;
    //正常播放歌词同步
    audio.addEventListener("timeupdate", () => {
      if (audio.currentTime * 1000 > this.lycTime[this.index]) {
        this.index++;
      }
    });
    //拖动播放矫正歌词进度
    audio.addEventListener("seeked", () => {
      let ct = audio.currentTime * 1000;
      let index = this.lycTime.findIndex((item, index, arr) => {
        return item < ct;
      });
      this.index = index;
    });
    // audio.getStartDate()
  },
  components: {},
};
</script>
<style scoped>
.lyrics {
  height: 30em;
  width: 100%;
  position: relative;
  border: 1px solid;
}
.lyc {
  display: flex;
  width: 100%;
  height: 30%;
  text-align: center;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  position: absolute;
  bottom: 20px;
}
audio {
  position: absolute;
  bottom: 5em;
  width: 100%;
}
img {
  border-radius: 300px;
  position: absolute;
  top: 0;
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