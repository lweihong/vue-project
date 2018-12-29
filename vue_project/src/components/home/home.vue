<template>
  <div>
    <mt-swipe :auto="4000">
        <mt-swipe-item>
          <img src='../../assets/banner1.png'/>
        </mt-swipe-item>
        <mt-swipe-item>
          <img src='../../assets/banner2.png'/>
        </mt-swipe-item>
      </mt-swipe>
    <div class="grid">
      <my-ul>
        <my-li v-for="(grid,index) in grids" :key="index">
          <a href="#">
            <span :class="grid.className"></span>
            <div>{{grid.title}}</div>
          </a>
        </my-li>
      </my-ul>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Home',
  data () {
    return {
      grids: [
        {className: 'cms-news', title: '新闻资讯'},
        {className: 'cms-photo', title: '图文分享'},
        {className: 'cms-goodsShow', title: '商品展示'},
        {className: 'cms-message', title: '留言反馈'},
        {className: 'cms-search', title: '搜索资讯'},
        {className: 'cms-contact', title: '联系我们'}
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* 九宫格样式 */

.grid span {
  display: inline-block;
  width: 20px;
  height: 20px;
  background-size:20px 20px;
  background-repeat:no-repeat;
}
.grid a {
  text-decoration: none;
}
.cms-news {
  background-image: url('../../assets/icons/news.png');
}
.cms-photo {
  background-image: url('../../assets/icons/fenxiang.png');
}
.cms-goodsShow {
  background-image: url('../../assets/icons/ziyuan.png')
}
.cms-message {
  background-image: url('../../assets/icons/liuyan.png')
}

.cms-search {
  background-image: url('../../assets/icons/sousuo.png')
}
.cms-contact {
  background-image: url('../../assets/icons/lianxiwomen.png')
}

img {
  width: 100%;
  margin-top: 40px;
  height: 200px;
}
.mint-swipe{
   height: 200px;
   background: #42b983;
}
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
