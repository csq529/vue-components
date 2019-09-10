<template>
  <div>
    <div class="wap-section channel-bar channel-closed" ref="tabContent">
      <ul class="wap-linklist">
        <li class="link-item"><a href="https://3g.163.com/touch/news/?ver=c&amp;clickfrom=index2018_header">新闻</a></li>
        <li class="link-item"><a href="https://3g.163.com/touch/ent/?ver=c&amp;clickfrom=index2018_header">娱乐</a></li>
        <li class="link-item"><a href="https://3g.163.com/touch/sports/?ver=c&amp;clickfrom=index2018_header">体育</a></li>
        <li class="link-item"><a href="https://3g.163.com/touch/money/?ver=c&amp;clickfrom=index2018_header">财经</a></li>
        <li class="link-item"><a href="https://3g.163.com/touch/photo/?ver=c&amp;clickfrom=index2018_header">图片</a></li>
        <li class="link-item"><a href="https://3g.163.com/touch/auto/?ver=c&amp;clickfrom=index2018_header">汽车</a></li>
        <li class="link-item"><a href="https://3g.163.com/touch/idol?from=index3g?clickfrom=index2018_header">星闻</a></li>
        <li class="link-item"><a href="https://3g.163.com/touch/war/?ver=c&amp;clickfrom=index2018_header">军事</a></li>
        <li class="link-item"><a href="https://3g.163.com/touch/liveshow/?ver=c&amp;clickfrom=index2018_header">直播</a></li>
        <li class="link-item"><a href="https://3g.163.com/touch/video/?ver=c&amp;clickfrom=index2018_header">视频</a></li>
        <li class="link-item"><a href="https://3g.163.com/touch/tech/?ver=c&amp;clickfrom=index2018_header">科技</a></li>
        <li class="link-item"><a href="https://3g.163.com/touch/mobile/?ver=c&amp;clickfrom=index2018_header">手机</a></li>
        <li class="link-item"><a href="https://3g.163.com/touch/digi/?ver=c&amp;clickfrom=index2018_header">数码</a></li>
        <li class="link-item"><a href="https://3g.163.com/touch/local/?ver=c&amp;clickfrom=index2018_header">本地</a></li>
        <li class="link-item"><a href="https://3g.163.com/touch/dy/?ver=c&amp;clickfrom=index2018_header">网易号</a></li>
        <li class="link-item"><a href="https://3g.163.com/touch/joke/?ver=c&amp;clickfrom=index2018_header">段子</a></li>
        <li class="link-item"><a href="https://3g.163.com/touch/lady/?ver=c&amp;clickfrom=index2018_header">时尚</a></li>
        <li class="link-item"><a href="https://3g.163.com/touch/tie/?ver=c&amp;clickfrom=index2018_header">跟贴</a></li>
        <li class="link-item"><a href="https://3g.163.com/touch/game/?ver=c&amp;clickfrom=index2018_header">游戏</a></li>
        <li class="link-item"><a href="https://3g.163.com/touch/edu/?ver=c&amp;clickfrom=index2018_header">教育</a></li>
        <li class="link-item"><a href="https://3g.163.com/touch/open/?ver=c&amp;clickfrom=index2018_header">公开课</a></li>
        <li class="link-item"><a href="https://3g.163.com/touch/jiankang/?ver=c&amp;clickfrom=index2018_header">健康</a></li>
        <!---->
        <li class="link-item"><a href="https://3g.163.com/touch/travel/?ver=c&amp;clickfrom=index2018_header">旅游</a></li>
        <li class="link-item"><a href="https://3g.163.com/touch/baby/?ver=c&amp;clickfrom=index2018_header">亲子</a></li>
        <li class="link-item"><a href="https://3g.163.com/touch/art/?ver=c&amp;clickfrom=index2018_header">艺术</a></li>
        <li class="link-item"><a href="https://3g.163.com/touch/shuangchuang/?ver=c&amp;clickfrom=index2018_header">双创</a></li>
        <li class="link-item"><a href="http://house.3g.163.com/?clickfrom=index2018_header">房产</a></li>
        <li class="link-item"><a href="http://home.3g.163.com/?clickfrom=index2018_header">家居</a></li>
        <!---->
        <!---->
      </ul>
      <span class="toggle-btn" @click="showDetail">
        <i class="cubeic-select"></i>
      </span>
    </div>
  </div>
</template>
<script>
import { toggleClass } from '../../common/utils.js'

export default {
  data () {
    return {}
  },
  methods: {
    showDetail () {
      let dom = this.$refs.tabContent
      // let isTrue = ssDom.hasClass(dom, 'channel-closed')
      // if (isTrue) {
      //   ssDom.removeClass(dom, 'channel-closed')
      // } else {
      //   ssDom.addClass(dom, 'channel-closed')
      // }
      toggleClass(dom, 'channel-closed')
    }
  },
  created () {
    document.title = '手机网易网'
  }
}

</script>

<style scoped lang="stylus">
.wap-section
  padding: .2rem
  background: #fff
  margin-bottom: .12rem
.channel-bar, .channel-bar ul
  height: 3.45rem
  overflow: hidden
.channel-bar
  margin-bottom: 0;
  line-height: .45rem;
  overflow: hidden;
  position: relative;
  z-index: 40;
  -webkit-transition: all .3s linear;
  -o-transition: all .3s linear;
  transition: all .3s linear;
  background: #f8f8f8;
.wap-section .wap-linklist, .wap-section .wap-linklist a
  color: #333;
.wap-section .wap-linklist
  margin-left: -.47rem;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: start;
  -webkit-align-items: flex-start;
  -ms-flex-align: start;
  align-items: flex-start;
  -webkit-box-pack: start;
  -webkit-justify-content: flex-start;
  -ms-flex-pack: start;
  justify-content: flex-start;
  letter-spacing: 0;
  font-size: 0;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
.channel-bar, .channel-bar ul
  height: 3.45rem;
  overflow: hidden;
.wap-section .wap-linklist .link-item
  width: 2em;
  display: inline-block;
  font-size: .32rem;
  height: .7rem;
  line-height: .7rem;
  text-align: center;
  margin: 0 0 0 .59rem;
  white-space: nowrap;
.channel-closed
  height: 1.32rem
.channel-closed .toggle-btn
  padding-bottom: .16rem;
.toggle-btn
  font-size: 0;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  width: .64rem;
  height: .7rem;
  padding-bottom: .18rem;
  background: #f8f8f8;
  -webkit-transform: rotate(0deg);
  -ms-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: all .3s linear;
  -o-transition: all .3s linear;
  transition: all .3s linear;
  position: absolute;
  bottom: 0;
  right: 0;
  padding-right: .4rem;
.channel-closed .toggle-btn i
  -webkit-transform: rotate(0deg)
  -ms-transform: rotate(0deg)
  transform: rotate(0deg)
.toggle-btn i
  display: block
  width: .5rem
  height: .5rem
  -webkit-transform: rotate(180deg)
  -ms-transform: rotate(180deg)
  transform: rotate(180deg)
  background: url('../../assets/images/arrow-down.png') no-repeat center center
</style>
