<template>
  <div>
    <ul class="flex-center">
      <router-link tag="li" :to="{ path: '/otherDemo' }">
        <button>OtherDemo</button>
      </router-link>
      <router-link tag="li" :to="{ path: '/toast' }">
        <button>ref</button>
      </router-link>
      <router-link tag="li" :to="{ path: '/banner' }">
        <button>Banner</button>
      </router-link>
      <router-link tag="li" :to="{ path: '/vueslider' }">
        <button>VueSlider</button>
      </router-link>
      <router-link tag="li" :to="{ path: '/draggable' }">
        <button>draggable</button>
      </router-link>
      <router-link tag="li" :to="{ path: '/moment' }">
        <button>moment</button>
      </router-link>
      <router-link tag="li" :to="{ path: '/goTop' }">
        <button>goTop</button>
      </router-link>
      <router-link tag="li" :to="{ path: '/soltscope' }">
        <button>soltScope</button>
      </router-link>

      <router-link tag="li" :to="{ path: '/animation' }">
        <button>animation</button>
      </router-link>

      <router-link tag="li" :to="{ path: '/mixins' }">
        <button>mixins</button>
      </router-link>

      <router-link tag="li" :to="{ path: '/directives' }">
        <button>directives</button>
      </router-link>

      <router-link tag="li" :to="{ path: '/vconsole' }">
        <button>Vconsole</button>
      </router-link>

      <router-link tag="li" :to="{ path: '/changepage' }">
        <button>ChangePage</button>
      </router-link>
      <router-link tag="li" :to="{ path: '/dialog' }">
        <button>Dialog</button>
      </router-link>
      <router-link tag="li" :to="{ path: '/wytab' }">
        <button>WyTab</button>
      </router-link>
      <router-link tag="li" :to="{ path: '/wbtab' }">
        <button>WbTab</button>
      </router-link>
      <router-link tag="li" :to="{ path: '/moreArrow' }">
        <button>MoreArrow</button>
      </router-link>
      <router-link tag="li" :to="{ path: '/jjskeleton' }">
        <button>JjSkeleton</button>
      </router-link>
      <router-link tag="li" :to="{ path: '/barrageWrapper' }">
        <button>BarrageWrapper</button>
      </router-link>
      <router-link tag="li" :to="{ path: '/progressbar' }">
        <button>progressbar</button>
      </router-link>
      <router-link tag="li" :to="{ path: '/voservable' }">
        <button>voservable</button>
      </router-link>
      <router-link tag="li" :to="{ path: '/sliderBar' }">
        <button>左滑菜单</button>
      </router-link>
      <router-link tag="li" :to="{ path: '/conponentCommunication' }">
        <button>父子组件通信</button>
      </router-link>
      <router-link tag="li" :to="{ path: '/eventBus' }">
        <button>Event Bus</button>
      </router-link>
      <router-link tag="li" :to="{ path: '/scrolltop' }">
        <button>ScrollTop</button>
      </router-link>
      <router-link tag="li" :to="{ path: '/editor' }">
        <button>Editor</button>
      </router-link>
      <router-link tag="li" :to="{ path: '/zx-editor' }">
        <button>ax-Editor</button>
      </router-link>
      <router-link tag="li" :to="{ path: '/checkbox' }">
        <button>checkbox</button>
      </router-link>
      <router-link tag="li" :to="{ path: '/swiper' }">
        <button>Swiper</button>
      </router-link>
      <router-link tag="li" :to="{ path: '/cube-swiper' }">
        <button>Cube-Swiper</button>
      </router-link>
      <router-link tag="li" :to="{ path: '/Barrage' }">
        <button>Barrage</button>
      </router-link>
      <router-link tag="li" :to="{ path: '/LifeCycle' }">
        <button>自定义生命周期</button>
      </router-link>
      <router-link tag="li" :to="{ path: '/AttrsDemo' }">
        <button>AttrsDemo</button>
      </router-link>
      <router-link tag="li" :to="{ path: '/HookEvent' }">
        <button>HookEvent</button>
      </router-link>
      <router-link tag="li" :to="{ path: '/observable' }">
        <button>observable</button>
      </router-link>
      <router-link tag="li" :to="{ path: '/CssEffect' }">
        <button>css效果</button>
      </router-link>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  }
};
</script>
<style lang="stylus" scoped>
li {
  display: flex;
}
ul li + li {
  margin-top: .3rem;
}
</style>
