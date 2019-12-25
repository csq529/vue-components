<template>
  <div class="barrage-wrapper">
    <div class="subtitles swiper-container" id="barrage">
      <ul class="swiper-wrapper">
        <li
          class="swiper-slide"
          v-for="(item, index) in barrageList"
          :key="index"
        >
          <div>{{ item }}</div>
          <div>1</div>
          <div>2</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";
export default {
  data() {
    return {
      barrageList: [
        "张三进入了Z ZEGNA品牌馆dsdsdsd",
        "李四进入了Z ZEGNA品牌馆dsd",
        "王五进入了Z ZEGNA品牌馆dsddd",
        "jack ZEGNA品牌馆"
      ]
    };
  },
  mounted() {
    const barrageWrapper = new Swiper("#barrage", {
      direction: "vertical",
      loop: true,
      slidesPerView: "auto",
      spaceBetween: 10,
      speed: 1000,
      allowTouchMove: false,
      autoplay: {
        disableOnInteraction: false,
        stopOnLastSlide: true,
        delay: 2000
      },
      lazy: {
        loadPrevNext: true,
        loadPrevNextAmount: 3
      },
      touchMoveStopPropagation: false
      // initialSlide: 1
    });
    // eslint-disable-next-line no-console
    console.log("barrageWrapper:", barrageWrapper);
  }
};
</script>

<style scoped lang="stylus">
.barrage-wrapper {
  font-size: 0.32rem;

  .subtitles {
    height: 3rem;
    width: 6rem;
    position: fixed;
    bottom: 1rem;
    left: .5rem;
    ul {
      display: -webkit-box !important;
      li {
        background-color: rgba(0, 0, 0, 0.8);
        display: inline-flex;
        width: auto !important;
        max-width: 100%;
        color: #fff;
        opacity: 0.7;
        border-radius: .4rem;
      }

      li.swiper-slide-prev {
        opacity: 0;
      }

      li.swiper-slide-next+li {
        animation: fadeTo 0.3s;
      }

      li.swiper-slide-next+li+li {
        opacity: 0;
      }

      li.swiper-slide-next {
        opacity: .3;
        animation: next 0.3s;
      }

      li.swiper-slide-active {
        opacity: 0;
        animation: fadeOut 0.3s;
      }
    }
  }

  .swiper-wrapper {
    .swiper-slide {
      height: .8rem !important;
      line-height: .8rem;
    }
  }
}

@keyframes fadeOut {
  25% {
    opacity: 0.075;
  }
  50% {
    opacity: 0.05;
  }
  75% {
    opacity: 0.025;
  }
  100% {
    opacity: 0;
  }
}

@keyframes next {
  0% {
    opacity: 0.7;
  }
  25% {
    opacity: 0.6;
  }
  50% {
    opacity: 0.5;
  }
  75% {
    opacity: 0.4;
  }
  100% {
    opacity: 0.3;
  }
}

@keyframes fadeTo {
  0% {
    opacity: 0.1;
  }
  25% {
    opacity: 0.25;
  }
  50% {
    opacity: 0.4;
  }
  75% {
    opacity: 0.55;
  }
  100% {
    opacity: 0.7;
  }
}
</style>
