<template>
  <div class="sand-trade-mian">
    <div class="banner">
      <div class="banner_tips" data-aos="fade-right">
        <div class="banner_title">{{ $t("sandTrade.describe") }}</div>
        <div class="banner_text">
          {{ $t("sandTrade.describe2") }}
        </div>
      </div>
    </div>

    <div class="title" data-aos="fade-up">{{ $t("sandTrade.describe3") }}</div>

    <div class="info">
      <div class="info_item" data-aos="fade-up" :data-aos-delay="300 + 100">
        <div class="info_image">
          <img class="info_img" :src="xinxiImg" alt="" srcset="" />
        </div>

        <div class="info_box">
          <div class="info_title">{{ $t("sandTrade.describe4") }}</div>
          <div class="info_str">
            {{ $t("sandTrade.describe5") }}
          </div>
        </div>
      </div>

      <div class="info_item" data-aos="fade-up" :data-aos-delay="300 + 200">
        <div class="info_image">
          <img class="info_img" :src="caigouImg" alt="" srcset="" />
        </div>

        <div class="info_box">
          <div class="info_title">{{ $t("sandTrade.describe6") }}</div>
          <div class="info_str">
            {{ $t("sandTrade.describe7") }}
          </div>
        </div>
      </div>

      <div class="info_item" data-aos="fade-up" :data-aos-delay="300 + 300">
        <div class="info_image">
          <img class="info_img" :src="gonghuoImg" alt="" srcset="" />
        </div>

        <div class="info_box">
          <div class="info_title">{{ $t("sandTrade.describe8") }}</div>
          <div class="info_str">
            {{ $t("sandTrade.describe9") }}
          </div>
        </div>
      </div>
    </div>

    <div class="title" data-aos="fade-up">
      {{ $t("sandTrade.describe10") }}
      <div class="title_tips">
        {{ $t("sandTrade.describe11") }}
      </div>
    </div>

    <div class="container">
      <div
        class="item"
        :data-aos="isPC ? 'fade-left' : 'fade-up'"
        :data-aos-delay="300 + 100"
      >
        <div class="text">
          <h2>{{ $t("sandTrade.describe12") }}</h2>
          <p>
            {{ $t("sandTrade.describe13") }}
          </p>
        </div>
        <div class="image">
          <img :src="zheng_img" alt="Description 1" />
        </div>
      </div>

      <div
        class="item"
        :data-aos="isPC ? 'fade-right' : 'fade-up'"
        :data-aos-delay="300 + 200"
      >
        <div class="image">
          <img :src="jianhua_img" alt="Description 2" />
        </div>
        <div class="text">
          <h2>{{ $t("sandTrade.describe14") }}</h2>
          <p>
            {{ $t("sandTrade.describe15") }}
          </p>
        </div>
      </div>

      <div
        class="item"
        :data-aos="isPC ? 'fade-left' : 'fade-up'"
        :data-aos-delay="300 + 300"
      >
        <div class="text">
          <h2>{{ $t("sandTrade.describe16") }}</h2>
          <p>
            {{ $t("sandTrade.describe17") }}
          </p>
        </div>
        <div class="image">
          <img :src="zhineng_img" alt="Description 2" />
        </div>
      </div>
    </div>

    <div class="title" data-aos="fade-up">{{ $t("sandTrade.describe18") }}</div>

    <div class="footer">
      <div
        v-for="(itm, index) in footer_list"
        :key="index"
        class="foo_box"
        data-aos="fade-up"
        :data-aos-delay="300 + index * 200"
      >
        <!-- <img class="foo_img" :src="itm.img" alt="" srcset="" /> -->
        <ur-icon class="foo_img" :type="itm.img"></ur-icon>
        <div>
          <div class="foo_title">{{ itm.name }}</div>
          <div class="foo_text">{{ itm.srt }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from "vue";
import UrIcon from "@/components/icon";

import xinxi from "@/assets/sand_trade/xinxi.png";
import caigou from "@/assets/sand_trade/caigou.png";
import gonghuo from "@/assets/sand_trade/gonghuo.png";
import zhenghea from "@/assets/sand_trade/zhenghea.png";
import jianhua from "@/assets/sand_trade/jianhua.png";
import zhineng from "@/assets/sand_trade/zhineng.png";

import zhenghea_h5 from "@/assets/sand_trade/zhenghea_h5.png";
import jianhua_h5 from "@/assets/sand_trade/jianhua_h5.png";
import zhineng_h5 from "@/assets/sand_trade/zhineng_h5.png";

const { t } = useI18n();

const xinxiImg = ref(xinxi);
const caigouImg = ref(caigou);
const gonghuoImg = ref(gonghuo);
const footer_list = [
  {
    img: "flow-path",
    name: t("sandTrade.describe19"),
    srt: t("sandTrade.describe20"),
  },
  {
    img: "natural-resources",
    name: t("sandTrade.describe21"),
    srt: t("sandTrade.describe22"),
  },
  {
    img: "optimize",
    name: t("sandTrade.describe23"),
    srt: t("sandTrade.describe24"),
  },
  {
    img: "price",
    name: t("sandTrade.describe25"),
    srt: t("sandTrade.describe26"),
  },
];

const zheng_img = ref(zhenghea);
const jianhua_img = ref(jianhua);
const zhineng_img = ref(zhineng);
const isPC = ref(false);

const updateImageSource = () => {
  if (window.innerWidth <= 750) {
    zheng_img.value = zhenghea_h5;
    jianhua_img.value = jianhua_h5;
    zhineng_img.value = zhineng_h5;
    isPC.value = false;
  } else {
    zheng_img.value = zhenghea;
    jianhua_img.value = jianhua;
    zhineng_img.value = zhineng;
    isPC.value = true;
  }
};

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
.sand-trade-mian {
  box-sizing: border-box;
  .banner {
    position: relative;
    width: 100%;
    height: 428px;
    background-image: url("../assets/sand_trade/l_banner.png");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    text-align: left;
    box-sizing: border-box;
    margin-bottom: 77px;
    .banner_tips {
      margin-left: 20%;
      .banner_title {
        font-size: clamp(
          16px,
          4vw,
          36px
        ); /* Responsive font size using clamp */
        font-weight: bold;
        color: #31353d;
        line-height: 44px;
        letter-spacing: 4px;
        margin-bottom: 24px;
        text-align: left !important;
      }
      .banner_text {
        width: 60%;
        font-size: clamp(
          12px,
          2vw,
          16px
        ); /* Responsive font size using clamp */
        font-weight: 400;
        color: #494949;
        line-height: 28px;
      }
    }
  }

  .title {
    font-weight: bold;
    font-size: clamp(16px, 4vw, 36px);
    color: #31353d;
    text-align: center;
    padding: 0% 15%;
  }

  .title_tips {
    max-width: 1400px;
    color: #606367;
    font-weight: 400;
    font-size: clamp(14px, 4vw, 18px);
    line-height: 28px;
    text-align: center;
    margin: auto;
    margin-top: 20px;
  }

  .container {
    max-width: 1400px;
    display: flex;
    flex-direction: column;
    gap: 50px;
    padding: 0px 24px;
    margin: 58px auto 98px auto;
    .item {
      display: flex;
      flex-direction: row;
      align-items: center;
      border-radius: 20px;
      border: 1px solid #e8e8e8;

      overflow: hidden;
      width: 100%;

      .text {
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: left;
        width: 60%;
        padding: 0px 14% 0px 8%;

        h2 {
          font-weight: 600;
          font-size: 24px;
          color: #1f1f1f;
          margin-bottom: 16px;
          line-height: 32px;
        }
        p {
          font-weight: 400;
          font-size: 16px;
          color: #606367;
          line-height: 28px;
        }
      }
      .image {
        flex: 1;
        max-width: 50%; /* Ensure the image doesn't exceed half the width */
        height: 240px; /* Set a fixed height for the image */
        display: flex;
        justify-content: center; /* Center the image horizontally */
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          max-width: 100%; /* Ensure the image width doesn't exceed the container's width */
          max-height: 100%;
        }
      }
    }
    .item:hover {
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }
  }

  .info {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(310px, auto));
    align-items: center;
    justify-content: center;
    gap: 18px;
    margin-top: 60px;
    margin-bottom: 116px;
    padding: 0 15%;
    width: 100%;
    .info_item {
      background-color: #f8f8f8;
      border-radius: 20px;
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;
      min-height: 320px;
      max-width: 440px;
      background: #f8f8f8;
      border-radius: 20px;
      overflow: hidden;
      .info_image {
        height: 146px;
        max-width: 100%; /* Ensure the image doesn't exceed half the width */
        display: flex;
        justify-content: center; /* Center the image horizontally */
        margin-bottom: 14px;
        .info_img {
          width: 100%;
          height: 146px;
          object-fit: cover;
          max-width: 100%; /* Ensure the image width doesn't exceed the container's width */
          max-height: 100%;
        }
      }
      .info_box {
        .info_title {
          font-weight: 600;
          font-size: clamp(16px, 4vw, 24px);
          color: #1f1f1f;
          line-height: 32px;
          margin-bottom: 8px;
        }
        .info_str {
          font-weight: 400;
          font-size: 16px;
          color: #606367;
          padding: 0 27px;
          line-height: 27px;
        }
      }
    }
  }

  .footer {
    max-width: 1400px;
    display: grid;
    margin: 60px auto 166px auto;
    padding-left: 14px;
    padding-right: 14px;
    row-gap: 37px;
    column-gap: 20px;
    grid-template-columns: repeat(auto-fit, minmax(322px, 1fr));
    .foo_box {
      background-color: #f8f8f8;
      border-radius: 20px;
      padding: 30px 20px 20px 20px;
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;
      //   justify-content: center;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      min-height: 322px;

      .foo_img {
        font-size: 66px;
      }

      .foo_title {
        font-weight: 600;
        font-size: 24px;
        color: #1f1f1f;
        line-height: 32px;
        margin: 21px 0px 16px 0px;
      }

      .foo_text {
        font-weight: 400;
        font-size: 16px;
        color: #606367;
        line-height: 28px;
        // padding: 0px 29px;
      }
    }
    .foo_box:hover {
      background-color: #1B9EDB;
      box-shadow: 0px 20px 30px rgba(204, 79, 0, 0.2);
      .foo_img {
        color: #fff;
      }
      div {
        color: #fff;
      }
    }
  }
}

@media (max-width: 750px) {
  .sand-trade-mian {
    .banner {
      background-position: right 0% bottom;
      background-image: url("../assets/sand_trade/l_banner_h5.png");
      background-repeat: no-repeat;
      background-size: cover;
      height: 57.067vw;
      margin-bottom: 6.4vw;

      .banner_tips {
        max-width: 100%;
        margin-left: 6.667vw;

        .banner_title {
          font-size: 4.8vw;
          line-height: 5.867vw;
          letter-spacing: 0vw;
          margin-bottom: 2.4vw;
        }

        .banner_text {
          width: 55%;
          font-size: 3.2vw;
          line-height: 4.8vw;
        }
      }
    }
    .container {
      margin-top: 4.133vw;
      margin-bottom: 12.533vw;
      padding: 0 3.2vw;
      gap: 2.667vw;
      .item {
        flex-direction: column-reverse;
        border: none;
        box-shadow: none;
        border-radius: 2.667vw;
        border: 1px solid #e8e8e8;
        .text {
          padding: 3.2vw 0 0 2.533vw;
          width: 100%;
          text-align: start; /* Center the text horizontally */
          align-items: start; /* Center the text horizontally */
          order: -1; /* Place the text above the image */
          h2 {
            font-size: 4.267vw;
            line-height: 5.733vw;
            margin-bottom: 3.2vw;
          }
          p {
            font-size: 3.2vw;
            line-height: 4.8vw;
          }
        }
        .image {
          order: 1; /* Ensure the image is below the text */
          max-width: 100%; /* Allow full width on smaller screens */
          height: auto; /* Allow height to adjust based on the image's aspect ratio */
        }
      }
    }

    .title {
      font-size: 4.8vw;
      line-height: 5.867vw;
      padding: 0 3.2vw;
    }

    .title_tips {
      font-size: 3.2vw;
      line-height: 4.8vw;
      padding: 0% 0%;
      margin-top: 3.2vw;
    }

    .info {
      // display: grid;
      // grid-template-columns: repeat(auto-fit, minmax(310px, auto));
      // align-items: center;
      // justify-content: center;
      gap: 2.667vw;
      margin-top: 5.6vw;
      margin-bottom: 12vw;
      padding: 0 3.2vw;
      width: 100%;
      .info_item {
        border-radius: 2.667vw;
        text-align: start;
        flex-direction: column;
        align-items: start;
        height: auto;
        min-height: auto;
        max-width: auto;
        .info_image {
          width: 100%;
          margin-bottom: 0;
          .info_img {
            object-fit: cover;
          }
        }
        .info_box {
          padding-bottom: 2.667vw;
          .info_title {
            font-size: 4.267vw;
            line-height: 5.733vw;
            margin-top: 5.067vw;
            margin-left: 5.067vw;
            margin-right: 1.333vw;
          }
          .info_str {
            font-size: 3.2vw;
            line-height: 4.8vw;
            padding: 0 5.067vw 1.333vw 5.067vw;
          }
        }
      }
    }

    .footer {
      padding: 0 3.2vw;
      margin-top: 5.333vw;
      margin-bottom: 12.667vw;
      justify-content: flex-start;
      grid-template-columns: repeat(auto-fit, minmax(100%, 100%));
      .foo_box {
        flex-direction: row;
        align-items: center;
        text-align: left;
        height: auto;
        justify-content: flex-start;
        padding: 0;
        min-height: 31.733vw;
        .foo_img {
          font-size: 8vw;
          top: 5.333vw;
          left: 5.733vw;
          position: absolute;
        }
        .foo_title {
          font-weight: 600;
          font-size: 4.267vw;
          line-height: 5.867vw;

          padding: 5.333vw 0 0 20vw;
          margin: 0 0 14px 0;
        }
        .foo_text {
          font-size: 3.2vw;
          line-height: 4.8vw;
          padding: 0 6.4vw 5.067vw 20vw;
        }
      }
    }
  }
}
</style>
