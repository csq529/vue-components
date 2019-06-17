<template>
  <div>
    <div class="nav-main">
      <div class="m-box">
        <div class="m-box-col inner-box">
          <div class="scroll-box slide-container">
            <div class="slide-wrap">
              <ul class="nav_item">
                <li class="item_li cur"><span>
                  热门
                  <em></em></span>
                  <!---->
                </li>
                <li class="item_li"><span>
                  新鲜事
                  <em></em></span>
                  <!---->
                </li>
                <li class="item_li"><span>
                  附近
                  <em></em></span>
                  <!---->
                </li>
                <li class="item_li"><span>
                  搞笑
                  <em></em></span>
                  <!---->
                </li>
                <li class="item_li"><span>
                  情感
                  <em></em></span>
                  <!---->
                </li>
                <li class="item_li"><span>
                  明星
                  <em></em></span>
                  <!---->
                </li>
                <li class="item_li"><span>
                  社会
                  <em></em></span>
                  <!---->
                </li>
                <li class="item_li"><span>
                  数码
                  <em></em></span>
                  <!---->
                </li>
                <li class="item_li"><span>
                  体育
                  <em></em></span>
                  <!---->
                </li>
                <li class="item_li"><span>
                  汽车
                  <em></em></span>
                  <!---->
                </li>
                <li class="item_li"><span>
                  电影
                  <em></em></span>
                  <!---->
                </li>
                <li class="item_li"><span>
                  游戏
                  <em></em></span>
                  <!---->
                </li>
              </ul>
            </div>
          </div>
          <!---->
          <div class="lite-nav-sublist m-col-4">
            <ul class="m-auto-list">
              <li class="m-auto-box cur"><span class="m-text-cut">热门</span></li>
              <li class="m-auto-box"><span class="m-text-cut">新鲜事</span></li>
              <li class="m-auto-box"><span class="m-text-cut">附近</span></li>
              <li class="m-auto-box"><span class="m-text-cut">搞笑</span></li>
              <li class="m-auto-box"><span class="m-text-cut">情感</span></li>
              <li class="m-auto-box"><span class="m-text-cut">明星</span></li>
              <li class="m-auto-box"><span class="m-text-cut">社会</span></li>
              <li class="m-auto-box"><span class="m-text-cut">数码</span></li>
              <li class="m-auto-box"><span class="m-text-cut">体育</span></li>
              <li class="m-auto-box"><span class="m-text-cut">汽车</span></li>
              <li class="m-auto-box"><span class="m-text-cut">电影</span></li>
              <li class="m-auto-box"><span class="m-text-cut">游戏</span></li>
            </ul>
          </div>
        </div>
        <div class="nav-plus m-box-center m-box-center-a"><i class="m-font m-font-arrow-down aniRotate"></i></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
    }
  },
  created () {
    document.title = '仿微博tab'
  }
}

</script>
<style lang="stylus" scoped>
.lite-topbar .nav-main
  top: 0;
  right: 0;
  left: 0;
  font-size: .32rem;
  color: #a5adb5
.lite-topbar .nav-left, .lite-topbar .nav-main, .lite-topbar .nav-right, .lite-topbar .nav-search
  position: absolute;
  line-height: .4rem;
.lite-topbar.main-top .nav-main
  top: .7rem
.m-box
  display: flex
.m-box-col
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  width: 100%;
  display: block;
  min-width: 0;
.lite-topbar .nav-main .nav_item .item_li
  display: inline-block;
  margin: 0 .75rem;
.slide-container
  overflow: hidden!important;
  height: .75rem;
  font-size: .32rem
.slide-container, .slide-container .slide-wrap
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
.nav_item
  display: flex
.lite-topbar .nav-main .scroll-box
  overflow: auto;
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
.slide-container, .slide-container .slide-wrap
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
.slide-container .slide-wrap
  position: relative;
  padding-bottom: .6rem;
  margin-bottom: -.6rem;
  overflow-x: scroll;
  overflow-y: hidden;
  -webkit-overflow-scrolling: touch;
  white-space: nowrap;
[class*=m-col]
  overflow: hidden;
.lite-nav-sublist
  position: absolute;
  top: .7rem;
  left: 0;
  right: 0;
  text-align: left;
  padding: 0 .2rem .4rem;
  color: #333;
  background-color: #fafafa;
  z-index: 2;
.m-auto-list
  overflow: hidden;
  font-size: 0;
.lite-nav-sublist .m-auto-list
  width: 100%;
.m-auto-box
  display: inline-block;
  vertical-align: top;
  box-sizing: border-box;
.m-col-4 .m-auto-box, .m-col-4 .m-item-box
 width: 25%;
.lite-nav-sublist .m-auto-box
  position: relative;
  padding: 0 .5rem;
  font-size: .3rem;
  text-align: center;
  margin-top: .5rem;
.lite-nav-sublist .m-auto-box.cur
  color: #ff8200;
.lite-nav-sublist .m-auto-box:nth-of-type(4n+1)
  margin-left: -.25rem;
</style>
