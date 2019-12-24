<template>
  <div class="wrapper">
    <div class="fixed-top swiper-container" id="swiper" ref="memuList">
      <ul class="swiper-wrapper" ref="navRoll">
        <li
          class="swiper-slide type-item"
          :class="{ choosed: choosed === index }"
          v-for="(item, index) in navList"
          :key="index"
          @click="chooseMenu(index)"
        >
          {{ item }}
        </li>
      </ul>
      <div class="more-wrapper" @click="moreType">
        <img
          class="more-img"
          src="../../assets/images/down-arrow.png"
          alt="down"
        />
      </div>
      <div class="all-type-wrapper" v-if="showMoreType">
        <ul class="all-type-list">
          <li
            class="goods-type"
            v-for="(item, index) in navList"
            :key="index"
            @click="chooseMenu(index)"
            :class="{ choosed: choosed === index }"
          >
            {{ item }}
          </li>
        </ul>
      </div>
    </div>

    <div class="goodslist-wrapper" ref="menuFoodsList">
      <ul ref="goodsList" class="goodslist">
        <li class="goods" v-for="(item, index) in goodsList" :key="index">
          {{ item.name }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";
import BScroll from "better-scroll";

export default {
  data() {
    return {
      shopListTop: [],
      menuIndexChange: true,
      showMoreType: false,
      foodScroll: null, // 滑动商品列表
      menuWrapper: null, // 菜单列表
      navRoll: null,
      navList: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
      choosed: 0,
      timer: null,
      goodsList: [
        {
          name: "香蕉1"
        },
        {
          name: "苹果2"
        },
        {
          name: "橘子3"
        },
        {
          name: "橙子4"
        },
        {
          name: "土豆5"
        },
        {
          name: "茄子6"
        },
        {
          name: "香蕉7"
        },
        {
          name: "苹果8"
        },
        {
          name: "橘子9"
        },
        {
          name: "橙子10"
        },
        {
          name: "土豆11"
        },
        {
          name: "茄子12"
        },
        {
          name: "西瓜13"
        },
        {
          name: "葡萄14"
        },
        {
          name: "葡萄15"
        }
      ]
    };
  },
  methods: {
    moreType() {
      this.showMoreType = !this.showMoreType;
      // eslint-disable-next-line no-console
      console.log("showMoreType:", this.showMoreType);
    },
    scrollDong(target) {
      clearInterval(this.timer); // 防止加速
      // window.scrollTo(0, target);
      // 点击后，页面需要滚动到的最终位置，为lisUl中跟当前按钮对应的li的offsetTop
      this.timer = setInterval(() => {
        // 1 获取页面当前位置（页面当前卷曲的高度）
        let scrollTop =
          window.pageYOffset ||
          document.documentElement.scrollTop ||
          document.body.scrollTop;
        var current = scrollTop;
        // 2 设置步长
        var step = (target - current) / 10;
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        // 3 套用公式
        current = current + step;
        // 4 设置window.scrollTo()
        window.scrollTo(0, current);
        // 5 位置到达，清除定时器
        if (current === target) {
          clearInterval(this.timer);
        }
      }, 20);
    },
    // 获取食品列表高度，存入shopListTop
    getFoodListHeight() {
      const listContainer = this.$refs.menuFoodsList;
      if (listContainer) {
        const listArr = Array.from(listContainer.children[0].children);
        listArr.forEach((item, index) => {
          this.shopListTop[index] = item.offsetTop - 200;
        });
        // eslint-disable-next-line no-console
        console.log("shopListTop:", this.shopListTop);
        this.listenScroll(listContainer);
      }
    },

    listenScroll(element) {
      this.foodScroll = new BScroll(element, {
        probeType: 3,
        deceleration: 0.001,
        bounce: false,
        swipeTime: 2000,
        click: true
      });

      this.foodScroll.on("scroll", pos => {
        this.shopListTop.forEach((item, index) => {
          if (this.menuIndexChange && Math.abs(Math.round(pos.y)) >= item) {
            this.choosed = index;
            this.navRoll.slideTo(index - 2);
          }
          // eslint-disable-next-line no-console
          console.log("choosed:", this.choosed);
        });
      });
    },
    // 点击商品列表标题，相应列表移动到最顶层
    chooseMenu(index) {
      if (this.showMoreType) {
        this.showMoreType = false;
      }
      this.choosed = index;
      this.navRoll.slideTo(index - 2);
      // this.scrollDong(300 * i);
      this.foodScroll.scrollTo(0, -this.shopListTop[index], 400);
      this.menuIndexChange = false;
      this.foodScroll.on("scrollEnd", () => {
        this.menuIndexChange = true;
      });
    }
  },
  mounted() {
    this.getFoodListHeight();
    this.navRoll = new Swiper("#swiper", {
      freeMode: true,
      slidesPerView: "auto",
      touchMoveStopPropagation: false
    });
  }
};
</script>

<style scoped lang="stylus">
.wrapper {
  height: 100%;
  width: 100%;
  position: relative;
  font-size: 0.32rem;
}

.fixed-top {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: #fff;
}

.more-wrapper {
  position: absolute;
  top: 0;
  right: 0;
  z-index: 100;
}

.all-type-wrapper {
  .all-type-list {
    display: flex;
    align-items: center;
    flex-wrap: wrap;

    .goods-type {
      width: 33.3%;
      text-align: center;
      height: 1rem;
      line-height: 1rem;
    }
  }
}

.type-item {
  width: auto;
  padding: 0.2rem 0.4rem;
}

.choosed {
  color: red;
}

.goodslist-wrapper {
  height: 100%;
  padding-top: 2rem;
  box-sizing: border-box;

  .goodslist {
    padding-top: 2rem;
  }

  .goods {
    height: 6rem;
    width: 100%;
  }
}
</style>
