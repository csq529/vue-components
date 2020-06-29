import Vue from "vue";
import Router from "vue-router";

const Home = r =>
  require.ensure([], () => r(require("./views/Home/Home")), "Home");
const Toast = r =>
  require.ensure([], () => r(require("./views/Toast/Toast")), "Toast");
const Banner = r =>
  require.ensure([], () => r(require("./views/Banner/Banner")), "Banner");
const VueSlider = r =>
  require.ensure(
    [],
    () => r(require("./views/VueSlider/VueSlider")),
    "VueSlider"
  );
const DraggAble = r =>
  require.ensure(
    [],
    () => r(require("./views/DraggAble/DraggAble")),
    "DraggAble"
  );
const Moment = r =>
  require.ensure([], () => r(require("./views/Moment/Moment")), "Moment");
const GoTop = r =>
  require.ensure([], () => r(require("./views/GoTop/GoTop")), "GoTop");
const SoltScope = r =>
  require.ensure(
    [],
    () => r(require("./views/SoltScope/SoltScope")),
    "SoltScope"
  );
const Animation = r =>
  require.ensure(
    [],
    () => r(require("./views/Animation/Animation")),
    "Animation"
  );
const MixinsDemo = r =>
  require.ensure(
    [],
    () => r(require("./views/MixinsDemo/MixinsDemo")),
    "MixinsDemo"
  );
const Directives = r =>
  require.ensure(
    [],
    () => r(require("./views/Directives/Directives")),
    "Directives"
  );
const Vconsole = r =>
  require.ensure([], () => r(require("./views/Vconsole/Vconsole")), "Vconsole");
const ChangePage = r =>
  require.ensure(
    [],
    () => r(require("./views/ChangePage/ChangePage")),
    "ChangePage"
  );
const Foo = r =>
  require.ensure(
    [],
    () => r(require("./views/ChangePage/children/Foo")),
    "Foo"
  );
const Dialog = r =>
  require.ensure([], () => r(require("./views/Dialog")), "Dialog");
// 网易的tab
const WyTab = r =>
  require.ensure([], () => r(require("./views/WyTab/WyTab")), "WyTab");
// 微博的tab
const WbTab = r =>
  require.ensure([], () => r(require("./views/WbTab/WbTab")), "WbTab");
// Infinite Arrow
const MoreArrow = r =>
  require.ensure(
    [],
    () => r(require("./views/MoreArrow/MoreArrow")),
    "MoreArrow"
  );
// 仿掘金的骨架屏
const JjSkeleton = r =>
  require.ensure(
    [],
    () => r(require("./views/JjSkeleton/JjSkeleton")),
    "JjSkeleton"
  );
// 弹幕
const BarrageWrapper = r =>
  require.ensure(
    [],
    () => r(require("./views/BarrageWrapper/BarrageWrapper")),
    "BarrageWrapper"
  );
// 进度条
const ProgressBar = r =>
  require.ensure(
    [],
    () => r(require("./views/ProgressBar/ProgressBar")),
    "ProgressBar"
  );
// vue observe
const VObservable = r =>
  require.ensure(
    [],
    () => r(require("./views/VObservable/VObservable")),
    "VObservable"
  );
// 左滑菜单SliderBar
const SliderBar = r =>
  require.ensure([], () => r(require("./views/SliderBar")), "SliderBar");
// 父子组件通信
const ConponentCommunication = r =>
  require.ensure(
    [],
    () => r(require("./views/ConponentCommunication")),
    "ConponentCommunication"
  );
// Event Bus
const EventBus = r =>
  require.ensure([], () => r(require("./views/EventBus")), "EventBus");
// 其他的demo
const OtherDemo = r =>
  require.ensure([], () => r(require("./views/OtherDemo")), "OtherDemo");
// 返回顶部
const ScrollTop = r =>
  require.ensure(
    [],
    () => r(require("./views/ScrollTop/ScrollTop.vue")),
    "ScrollTop"
  );

const Editor = r =>
  require.ensure([], () => r(require("./views/Editor/Editor.vue")), "Editor");
const Editor1 = r =>
  require.ensure(
    [],
    () => r(require("./views/Editor1/Editor1.vue")),
    "Editor1"
  );
const CheckBox = r =>
  require.ensure(
    [],
    () => r(require("./views/CheckBox/CheckBox.vue")),
    "CheckBox"
  );
const Swiper = r =>
  require.ensure([], () => r(require("./views/Swiper/index.vue")), "Swiper");
const CubeSwiper = r =>
  require.ensure(
    [],
    () => r(require("./views/CubeSwiper/index.vue")),
    "CubeSwiper"
  );
const Barrage = r =>
  require.ensure([], () => r(require("./views/Barrage/index.vue")), "Barrage");
const LifeCycle = r =>
  require.ensure(
    [],
    () => r(require("./views/LifeCycle/index.vue")),
    "LifeCycle"
  );
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "*",
      redirect: "/home"
    },
    {
      path: "/home",
      name: "Home",
      component: Home
    },
    {
      path: "/toast",
      name: "Toast",
      component: Toast
    },
    {
      path: "/banner",
      name: "Banner",
      component: Banner
    },
    {
      path: "/vueslider",
      name: "VueSlider",
      component: VueSlider
    },
    {
      path: "/draggable",
      name: "DraggAble",
      component: DraggAble
    },
    {
      path: "/moment",
      name: "Moment",
      component: Moment
    },
    {
      path: "/goTop",
      name: "GoTop",
      component: GoTop
    },
    {
      path: "/soltscope",
      name: "SoltScope",
      component: SoltScope
    },
    {
      path: "/animation",
      name: "Animation",
      component: Animation
    },
    {
      path: "/mixins",
      name: "MixinsDemo",
      component: MixinsDemo
    },
    {
      path: "/directives",
      name: "Directives",
      component: Directives
    },
    {
      path: "/vconsole",
      name: "Vconsole",
      component: Vconsole
    },
    {
      path: "/changepage",
      name: "ChangePage",
      component: ChangePage,
      children: [
        {
          path: "/foo",
          name: "Foo",
          component: Foo
        }
      ]
    },
    {
      path: "/dialog",
      name: "Dialog",
      component: Dialog
    },
    {
      path: "/wytab",
      name: "WyTab",
      component: WyTab
    },
    {
      path: "/wbtab",
      name: "WbTab",
      component: WbTab
    },
    {
      path: "/moreArrow",
      name: "MoreArrow",
      component: MoreArrow
    },
    {
      path: "/jjskeleton",
      name: "JjSkeleton",
      component: JjSkeleton
    },
    {
      path: "/barrageWrapper",
      name: "BarrageWrapper",
      component: BarrageWrapper
    },
    {
      path: "/progressbar",
      name: "ProgressBar",
      component: ProgressBar
    },
    {
      path: "/voservable",
      name: "VObservable",
      component: VObservable
    },
    {
      path: "/sliderBar",
      name: "SliderBar",
      component: SliderBar
    },
    {
      path: "/conponentCommunication",
      name: "ConponentCommunication",
      component: ConponentCommunication
    },
    {
      path: "/eventBus",
      name: "EventBus",
      component: EventBus
    },
    {
      path: "/otherDemo",
      name: OtherDemo,
      component: OtherDemo
    },
    {
      path: "/scrolltop",
      name: ScrollTop,
      component: ScrollTop
    },
    {
      path: "/editor",
      name: Editor,
      component: Editor
    },
    {
      path: "/zx-editor",
      name: Editor1,
      component: Editor1
    },
    {
      path: "/checkbox",
      name: CheckBox,
      component: CheckBox
    },
    {
      path: "/swiper",
      name: Swiper,
      component: Swiper
    },
    {
      path: "/cube-swiper",
      name: CubeSwiper,
      component: CubeSwiper
    },
    {
      path: "/barrage",
      name: Barrage,
      component: Barrage
    },
    {
      path: "/LifeCycle",
      name: LifeCycle,
      component: LifeCycle
    },
    {
      path: "/AttrsDemo",
      component: () => import("@/views/AttrsDemo"),
      name: "AttrsDemo"
    }
  ]
});
