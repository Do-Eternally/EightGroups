1.配置跨域代理。调用接口前面加上/api，如"/playlist/catlist",使用“/api/playlist/catlist”

```
this.$axios.get("/api/playlist/catlist").then((res) => {
      console.log(res);
    });
```

2.axios 挂载到 vue 实例上，使用 this.axios 发哦是哪个 ajax 请求
