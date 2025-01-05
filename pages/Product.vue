<template>
  <div class="product">
    <div class="banner">
      <!-- <img class="img" src="../assets/contact_us/banner.png" alt="" srcset="" /> -->
    </div>
    <!-- <div class="product-banner">
      <img src="@/assets/product/banner.png" alt="" />
    </div> -->
    <div class="digital-services-box">
      <div class="title-box" data-aos="fade-up">
        {{ $t("product.productCenter") }}
      </div>
      <div class="tips" data-aos="fade-up" data-aos-delay="300">
        {{ $t("product.tips") }}
      </div>
      <div class="service-grid">
        <div
          v-for="(item, index) in digitalServices"
          :key="index"
          class="service-item"
          data-aos="fade-up"
          :data-aos-delay="300 + index * 200"
        >
          <img :src="item.img" alt="" />
          <div class="content-box">
            <div class="title">{{ item.title }}</div>
            <ul class="describe">
              <li v-for="(list, index) in item.describe" :key="index">
                {{ list }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="title-box" data-aos="fade-up">
      {{ $t("product.productAdvantages") }}
    </div>
    <div class="product-advantages">
      <div class="center-img">
        <img src="@/assets/product/center_img.png" data-aos="zoom-in" alt="" />
      </div>
      <div class="product-advantages-card">
        <div
          v-for="(item, index) in productAdvantages"
          :key="index"
          class="product-advantages-item"
          :data-aos="
            isPC ? (index % 2 === 0 ? 'fade-right' : 'fade-left') : 'fade-up'
          "
        >
          <img
            v-if="index % 2 !== 0"
            class="left-arrow"
            src="@/assets/product/left_arrow.png"
          />
          <img
            v-else
            class="right-arrow"
            src="@/assets/product/right_arrow.png"
          />
          <div class="left-box">
            <ur-icon class="icon" :type="item.icon"></ur-icon>
          </div>
          <div class="right-box">
            <div class="title">{{ item.title }}</div>
            <div class="describe">{{ item.describe }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onBeforeMount, onMounted, onBeforeUnmount } from "vue";
import UrIcon from "@/components/icon";
import productIcon1 from "assets/product/product_icon1.png";
import productIcon2 from "assets/product/product_icon2.png";
import productIcon3 from "assets/product/product_icon3.png";
import productIcon4 from "assets/product/product_icon4.png";
import productIcon5 from "assets/product/product_icon5.png";

const { t } = useI18n();
const isPC = ref(true);
const digitalServices = [
  {
    img: productIcon1,
    title: t("product.productName1"),
    describe: [
      t("product.productDescribe1"),
      t("product.productDescribe2"),
      t("product.productDescribe3"),
      t("product.productDescribe19"),
    ],
  },
  {
    img: productIcon2,
    title: t("product.productName2"),
    describe: [
      t("product.productDescribe4"),
      t("product.productDescribe5"),
      t("product.productDescribe6"),
      t("product.productDescribe7"),
    ],
  },
  {
    img: productIcon3,
    title: t("product.productName3"),
    describe: [
      t("product.productDescribe8"),
      t("product.productDescribe9"),
      t("product.productDescribe10"),
      t("product.productDescribe11"),
    ],
  },
  {
    img: productIcon4,
    title: t("product.productName4"),
    describe: [
      t("product.productDescribe12"),
      t("product.productDescribe13"),
      t("product.productDescribe14"),
    ],
  },
  {
    img: productIcon5,
    title: t("product.productName5"),
    describe: [
      t("product.productDescribe15"),
      t("product.productDescribe16"),
      t("product.productDescribe17"),
      t("product.productDescribe18"),
    ],
  },
];

const productAdvantages = [
  {
    icon: "fresh-fruit",
    title: t("product.advantages1"),
    describe: t("product.advantagesDescribe1"),
  },
  {
    icon: "configuration",
    title: t("product.advantages2"),
    describe: t("product.advantagesDescribe2"),
  },
  {
    icon: "comprehensive",
    title: t("product.advantages3"),
    describe: t("product.advantagesDescribe3"),
  },
  {
    icon: "association",
    title: t("product.advantages4"),
    describe: t("product.advantagesDescribe4"),
  },
];
const updateImageSource = () => {
  if (window.innerWidth <= 750) {
    isPC.value = false;
  } else {
    isPC.value = true;
  }
};
onBeforeMount(() => {
  updateImageSource();
});
onMounted(() => {
  updateImageSource(); // Set the initial image
  window.addEventListener("resize", updateImageSource);
});

// Clean up event listener when the component is unmounted
onBeforeUnmount(() => {
  window.removeEventListener("resize", updateImageSource);
});
</script>

<style scoped lang="less">
.product {
  .banner {
    position: relative;
    width: 100%;
    height: 428px;
    background-image: url("../assets/product/banner.jpg");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    text-align: left;
    box-sizing: border-box;
  }
  .product-banner {
    img {
      vertical-align: middle;
      max-width: 100%;
      width: auto;
      height: auto;
    }
  }
  .title-box {
    font-weight: bold;
    font-size: 36px;
    color: #31353d;
    text-align: center;
    margin-top: 20px;
    .icon {
      position: relative;
      top: 14px;
      font-size: 73px;
    }
  }
  .digital-services-box {
    //min-height: 657px;
    //padding-top: 30px;
    padding: 30px 0 100px 0;
    .tips {
      font-weight: 400;
      font-size: 15px;
      color: #a0a0a0;
      line-height: 44px;
      text-align: center;
    }

    .service-grid {
      height: 268px;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(190px, 256px));
      align-items: center;
      justify-content: center;
      gap: 26px;
      margin-top: 70px;

      .service-item {
        background: #ffffff;
        min-height: 268px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        padding: 12px;
        border-radius: 20px;
        border: 1px solid #e8e8e8;
        overflow: hidden;
        img {
          width: 100px;
          height: 100px;
          transition:
            margin 0.6s,
            font-size 1s;
        }
        .content-box {
          .title {
            font-weight: 600;
            font-size: 24px;
            color: #1f1f1f;
            line-height: 32px;
            margin-bottom: 16px;
            transition:
              margin 0.6s,
              font-size 1s;
            text-align: center;
          }
          .describe {
            font-weight: 400;
            font-size: 16px;
            line-height: 28px;
            text-align: left;
            display: none;
          }
        }
      }
      .service-item:hover {
        background: #1B9EDB;
        box-shadow: 0px 20px 30px rgba(204, 79, 0, 0.2);
        img {
          margin-top: -180px;
          margin-bottom: 100px;
        }
        .title {
          color: #fff;
        }
        .describe {
          color: #fff;
          display: inline-block;
        }
      }
    }
  }
  .product-advantages {
    vertical-align: middle;
    max-width: 100%;
    width: auto;
    height: auto;
    background: url(@/assets/product/product_advantages_bg.png) no-repeat;
    background-size: 100%;
    margin-top: 20px;
    position: relative;
    padding: 100px 0;
    //display: flex;
    //justify-content: center;
    .center-img {
      width: 30%;
      position: absolute;
      text-align: center;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      img {
        vertical-align: middle;
        max-width: 100%;
        width: auto;
        height: auto;
        max-height: 350px;
      }
    }
    .product-advantages-card {
      margin: auto;
      max-width: 1400px;
      padding: 0 24px;
      display: grid;
      //grid-template-columns: repeat(2, minmax(120px, 372px));
      grid-template-columns: repeat(2, minmax(120px, 30%));
      justify-content: space-between;
      gap: 80px;
      position: relative;
      top: 10px;
      .product-advantages-item {
        min-height: 148px;
        background: url(@/assets/product/advantages_item.png) no-repeat;
        background-size: 100%;
        display: flex;
        align-items: center;
        box-shadow: 0px 0px 20px 1px rgba(186, 93, 0, 0.2);
        border-radius: 4px;
        padding-right: 12px;
        position: relative;
        .left-arrow {
          position: absolute;
          left: -100px;
        }
        .right-arrow {
          position: absolute;
          right: -100px;
        }
        .left-box {
          width: 120px;
          text-align: center;
          .icon {
            font-size: 48px;
          }
        }
        .right-box {
          .title {
            font-weight: 600;
            font-size: 24px;
            color: #1f1f1f;
            margin-top: 8px;
            margin-bottom: 8px;
          }
          .describe {
            font-weight: 400;
            font-size: 16px;
            color: #606367;
            line-height: 24px;
            margin-bottom: 8px;
          }
        }
      }
    }
  }
}

@media screen and (max-width: 1410px) {
  .product {
    .digital-services-box {
      .service-grid {
        height: 548px;
      }
    }
  }
}

@media screen and (max-width: 841px) {
  .product {
    .digital-services-box {
      .service-grid {
        height: 838px;
      }
    }
  }
}
@media screen and (max-width: 750px) {
  .product {
    background: #f8f8f8;
    .banner {
      height: 57.067vw;
      background-image: url("../assets/product/banner_h5.jpg");
    }
    .title-box {
      font-size: 4.8vw;
      line-height: 5.867vw;
      margin-top: 0;
    }
    .digital-services-box {
      padding: 0 3.2vw 13.333vw 3.2vw;
      .title-box {
        font-size: 4.8vw;
        line-height: 5.867vw;
        margin-top: 4.933vw;
        .icon {
          position: relative;
          top: 14px;
          font-size: 73px;
        }
      }
      .tips {
        font-size: 3.2vw;
        line-height: 4.8vw;
        margin-top: 3.2vw;
      }
      .service-grid {
        margin-top: 5.867vw;
        height: auto;
        grid-template-columns: repeat(1, 100%);
        gap: 2.133vw;
        .service-item {
          flex-direction: row;
          min-height: 21.333vw;
          background: #ffffff;
          border: none;
          border-radius: 2.667vw;
          pointer-events: none;
          .content-box {
            width: 80%;
            .title {
              font-size: 4.267vw;
              text-align: left;
              margin-bottom: 0;
              margin-left: 9.2vw;
            }
            .describe {
              font-size: 3.2vw;
              color: #606367;
              line-height: 4.8vw;
              display: flex;
              flex-wrap: wrap;
              list-style-type: none;
              li {
                width: 50%;
              }
            }
          }
        }
      }
    }
    .product-advantages {
      background: transparent;
      margin-top: 5.067vw;
      padding-top: 0;
      .center-img {
        display: none;
      }
      .product-advantages-card {
        grid-template-columns: repeat(1, 100%);
        gap: 2.667vw;
        padding: 0 3.2vw;
        .product-advantages-item {
          background-color: #ffffff;
          height: 26.8vw;
          box-shadow: none;
          .left-arrow,
          .right-arrow {
            display: none;
          }
          .left-box {
            width: 16.267vw;
            text-align: center;
            .icon {
              font-size: 8vw;
            }
          }
          .right-box {
            width: 83%;
            .title {
              font-weight: 600;
              font-size: 4.267vw;
              color: #1f1f1f;
              margin-bottom: 1.333vw;
            }
            .describe {
              font-weight: 400;
              font-size: 3.2vw;
              color: #606367;
              line-height: 4.8vw;
            }
          }
        }
      }
    }
  }
}
</style>
