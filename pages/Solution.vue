<template>
  <div class="solution-main">
    <div class="banner">
      <div class="banner_tips" data-aos="fade-right">
        <div class="banner_title">{{ $t("solution.bannerTitle") }}</div>
        <div class="banner_text">
          {{ $t("solution.describe1") }}
        </div>
      </div>
    </div>
    <div class="body">
      <div class="footer-grid-box">
        <div class="footer-grid">
          <div
            v-for="(itm, index) in footer_list"
            :key="index"
            class="footer-box-item"
            data-aos="fade-up"
            :data-aos-delay="300 + index * 200"
          >
            <ur-icon class="footer-img" :type="itm.img.value"></ur-icon>
            <div>{{ itm.name }}</div>
            <div>{{ itm.srt }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from "vue";
import UrIcon from "@/components/icon";
import mapBg from "@/assets/solution/bg_map.jpg";
import system1 from "@/assets/solution/bg_system_1.png";
import system2 from "@/assets/solution/bg_system_2.png";
import system3 from "@/assets/solution/bg_system_3.png";
import bgCenter from "@/assets/solution/bg_center.jpg";
import bgCenterS from "@/assets/solution/bg_center_s.jpg";
import bgCenterS1 from "@/assets/solution/bg_center_s_1.jpg";
import bgCenterS2 from "@/assets/solution/bg_center_s_2.jpg";
import bgCenterS3 from "@/assets/solution/bg_center_s_3.jpg";
import bgCenterS4 from "@/assets/solution/bg_center_s_4.jpg";
import left from "@/assets/solution/left_arrow.png";
import right from "@/assets/solution/right_arrow.png";

import mapBgH5 from "@/assets/solution/bg_map_h5.png";
import system1H5 from "@/assets/solution/bg_system_h5_1.png";
import system2H5 from "@/assets/solution/bg_system_h5_2.png";
import system3H5 from "@/assets/solution/bg_system_h5_3.png";
import bgCenterH5 from "@/assets/solution/bg_center_h5.png";

const feijiImg = ref("dingzhi-01");
const huojianImg = ref("kuai-01");
const jinbiImg = ref("reduce-costs");
const shijianImg = ref("serve");
const mapBgImg = ref(mapBg);
const system1Img = ref(system1);
const system2Img = ref(system2);
const system3Img = ref(system3);
const bgCenterImg = ref(bgCenter);
const bgCenterSImg = ref(bgCenterS);
const bgCenterS1Img = ref(bgCenterS1);
const bgCenterS2Img = ref(bgCenterS2);
const bgCenterS3Img = ref(bgCenterS3);
const bgCenterS4Img = ref(bgCenterS4);

const showSubTitle = ref(false);
const cardid = ref<number>(0);
const carousel = ref();
const progress = ref((0 / 5) * 100);
const { t } = useI18n();
const servic_list = [
  {
    name: t("solution.describe3"),
    desc: t("solution.describe4"),
  },
  {
    name: t("solution.describe5"),
    desc: t("solution.describe6"),
  },
  {
    name: t("solution.describe7"),
    desc: t("solution.describe8"),
  },
];

const system_list = [
  {
    img: system1Img,
    name: t("solution.describe11"),
    desc: t("solution.describe12"),
  },
  {
    img: system2Img,
    name: t("solution.describe13"),
    desc: t("solution.describe14"),
  },
  {
    img: system3Img,
    name: t("solution.describe15"),
    desc: t("solution.describe16"),
  },
];

const cardList = [
  {
    name: t("solution.describe19"),
    bg1: bgCenterImg,
    bg2: bgCenterSImg,
    contents: [t("solution.describe33"), t("solution.describe34")],
    id: 0,
  },
  {
    name: t("solution.describe20"),
    bg1: bgCenterImg,
    bg2: bgCenterS1Img,
    contents: [t("solution.describe36")],
    id: 1,
  },
  {
    name: t("solution.describe21"),
    bg1: bgCenterImg,
    bg2: bgCenterS2Img,
    contents: [t("solution.describe37")],
    id: 2,
  },
  {
    name: t("solution.describe22"),
    bg1: bgCenterImg,
    bg2: bgCenterS3Img,
    contents: [t("solution.describe38")],
    id: 3,
  },
  {
    name: t("solution.describe23"),
    bg1: bgCenterImg,
    bg2: bgCenterS4Img,
    contents: [t("solution.describe39")],
    id: 4,
  },
];

const updateImageSource = () => {
  if (window.innerWidth <= 750) {
    mapBgImg.value = mapBgH5;
    system1Img.value = system1H5;
    system2Img.value = system2H5;
    system3Img.value = system3H5;
    bgCenterImg.value = bgCenterH5;
    servic_list[0].desc = t("solution.describe4");
    servic_list[1].desc = t("solution.describe6");
    servic_list[2].desc = t("solution.describe8");
    showSubTitle.value = true;
  } else {
    mapBgImg.value = mapBg;
    system1Img.value = system1;
    system2Img.value = system2;
    system3Img.value = system3;
    bgCenterImg.value = bgCenter;
    servic_list[0].desc = t("solution.describe40");
    servic_list[1].desc = t("solution.describe41");
    servic_list[2].desc = t("solution.describe42");
    showSubTitle.value = false;
  }
};

const footer_list = [
  {
    img: feijiImg,
    name: t("solution.describe25"),
    srt: t("solution.describe26"),
  },
  {
    img: huojianImg,
    name: t("solution.describe27"),
    srt: t("solution.describe28"),
  },
  {
    img: jinbiImg,
    name: t("solution.describe29"),
    srt: t("solution.describe30"),
  },
  {
    img: shijianImg,
    name: t("solution.describe31"),
    srt: t("solution.describe32"),
  },
];

const prev = () => {
  carousel.value.prev();
};

const next = () => {
  carousel.value.next();
};

const onChange = (currentSlide: number) => {
  progress.value = (currentSlide / 4) * 100;
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

<style lang="less" scoped>
.solution-main {
  box-sizing: border-box;

  .banner {
    position: relative;
    width: 100%;
    height: 428px;
    background-image: url("../assets/solution/bg_top.jpg");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    text-align: left;
    box-sizing: border-box;
    margin-bottom: 76px;

    .banner_tips {
      margin-left: 20%;

      .banner_title {
        font-size: clamp(16px, 4vw, 36px);
        /* Responsive font size using clamp */
        font-weight: bold;
        color: #31353d;
        line-height: 44px;
        letter-spacing: 4px;
        margin-bottom: 24px;
        text-align: left !important;
      }

      .banner_text {
        width: 60%;
        font-size: clamp(12px, 2vw, 16px);
        /* Responsive font size using clamp */
        font-weight: 400;
        color: #494949;
        line-height: 28px;
      }
    }
  }

  .body {
    .section {
      max-width: 1400px;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      align-items: center;

      .section-title {
        font-weight: bold;
        font-size: 36px;
        color: #31353d;
      }

      .section-subtitle-1 {
        max-width: 512px;
        text-align: center;
        margin-top: 19px;
        font-weight: 400;
        font-size: 16px;
        line-height: 21px;
        color: #a0a0a0;
      }

      .section-subtitle {
        max-width: 646px;
        text-align: center;
        margin-top: 14px;
        font-weight: 400;
        font-size: 16px;
        line-height: 21px;
        color: #a0a0a0;
      }
    }

    .service-network-map {
      position: relative;
      max-width: 1448px;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 28px;

      .service-network-map-img {
        width: 100%;
        z-index: -1;
      }

      .grid-box {
        position: relative;
        width: 100%;
        margin: 0 auto;

        .grid {
          display: flex;
          flex-wrap: wrap;
          flex-direction: row;
          margin: auto 24px;
          justify-content: space-between;

          .box-item {
            overflow: hidden;
            width: 30%;
            transform: translate(0%, -50%);
            min-height: 178px;
            padding: 31px 38px;
            background: rgba(255, 255, 255, 1);
            box-shadow: 0px 20px 20px rgba(0, 0, 0, 0.1);
            border-radius: 20px;
            border: 1px solid #ffffff;
            display: flex;
            flex-direction: column;

            div {
              font-weight: 600;
              font-size: 24px;
              color: #1B9EDB;
              line-height: 32px;
            }

            div:last-child {
              margin-top: 13px;
              font-weight: 400;
              font-size: 16px;
              color: #606367;
              line-height: 28px;
            }
          }
        }
      }
    }

    .system-grid-box {
      position: relative;
      max-width: 1448px;
      margin: 46px auto 111px auto;

      .system-grid {
        display: grid;
        margin: auto 24px;
        row-gap: 20px;
        column-gap: 54px;
        grid-template-columns: repeat(auto-fit, minmax(430px, 1fr));

        .system-box-item {
          min-height: 140px;
          display: flex;
          flex-direction: column;
          position: relative;
          justify-content: center;

          .system-img {
            position: absolute;
            z-index: -1;
            width: 100%;
            height: 100%;
          }

          div {
            margin: 0px 23px 0px 41px;
            font-weight: 600;
            font-size: 28px;
            color: #ffffff;
            line-height: 37px;
          }

          div:last-child {
            margin: 10px 23px 0 41px;
            font-weight: 400;
            font-size: 16px;
            color: #ffffff;
            line-height: 26px;
          }
        }
      }
    }

    .dispatch-center {
      margin-top: 111px;
      margin-bottom: 98px;
      width: 100%;
      background-size: cover;
      background: linear-gradient(to bottom, #f4fbff, #f7f4f4);

      background-image: url("../assets/solution/bg_dispatch_cover.jpg");
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      height: 969px;
      display: flex;
      flex-direction: column;
      align-items: center;

      .section {
        margin-top: 85px;
      }

      .carousel {
        display: none;
      }

      .card_item {
        width: 73%;
        max-width: 1400px;
        display: flex;
        flex-direction: column;
        margin-top: 81px;
        .card_header {
          width: 100%;
          min-height: clamp(50px, 1vw, 80px);
          padding: 0px 30px;
          border-radius: 10px 10px 0px 0px;
          border-bottom: 1px solid #d8d8d8;
          display: flex;
          justify-content: space-between;
          box-sizing: border-box;

          .card_name {
            font-weight: 400;
            font-size: clamp(12px, 1vw, 24px);
            color: #7c6c5e;
            cursor: pointer;
            line-height: clamp(12px, 1vw, 24px);
            max-width: 25%;
            display: flex;
            height: 100%;
            flex-direction: column;
            align-content: space-between;
            justify-content: space-between;
          }
          .card_title {
            padding: 10px;
            height: 100%;
            display: flex;
            align-items: center;
            text-align: center;
          }
          .aitve {
            font-weight: bold;
            font-size: clamp(12px, 1vw, 24px);
            color: #1B9EDB;
          }
          .aitve_divider {
            border-bottom: 3px solid #1B9EDB;
          }
        }

        .card_content {
          flex: 1;

          .card_box {
            height: 100%;
            display: flex;
            align-items: end;
            justify-content: center;
            margin-top: 68px;
            position: relative;

            .card_text_body {
              display: flex;
              align-items: center;
              justify-content: center;

              .card_img {
                padding-left: 24px;
                z-index: 2;
                width: 48.6%;
              }

              .card_text {
                margin-left: 41px;
                padding-right: 24px;
                z-index: 2;
                font-weight: 600;
                font-size: clamp(14px, 1vw, 28px);
                color: #ffffff;
                line-height: clamp(24px, 1vw, 48px);
              }

              .card_text_row {
                display: flex;
                align-items: center;

                .arrow {
                  width: 15px;
                  height: 15px;
                  margin-right: 15px;
                }
              }
            }
          }
        }
      }
    }

    .footer-grid-box {
      position: relative;
      max-width: 1448px;
      margin: 46px auto 111px auto;

      .footer-grid {
        display: grid;
        margin: auto 24px;
        row-gap: 37px;
        column-gap: 17px;
        grid-template-columns: repeat(auto-fit, minmax(322px, 1fr));

        .footer-box-item {
          border-radius: 20px;
          background-color: #f8f8f8;
          min-height: 276px;
          display: flex;
          flex-direction: column;
          position: relative;
          align-items: center;
          justify-content: start;

          .footer-img {
            padding-top: 38px;
            font-size: 66px;
          }

          div {
            margin: 19px 5px 0px 5px;
            font-weight: 600;
            font-size: 20px;
            color: #1f1f1f;
            line-height: 27px;
            text-align: center;
          }

          div:last-child {
            margin: 18px 23px 23px 23px;
            font-weight: 400;
            font-size: 16px;
            color: #5f6367;
            line-height: 26px;
            padding-bottom: 10px;
          }
        }

        .footer-box-item:hover {
          background-color: #1B9EDB;
          box-shadow: 0px 20px 30px rgba(204, 79, 0, 0.2);
          .footer-img {
            color: #fff;
          }
          div {
            color: #fff;
          }
        }
      }
    }
  }
}

@media (max-width: 750px) {
  .solution-main {
    .banner {
      background-position: right 0% bottom;
      background-image: url("../assets/solution/bg_top_h5.jpg");
      background-repeat: no-repeat;
      background-size: cover;
      height: 57.067vw;
      margin-bottom: 0vw;

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

    .body {
      .section {
        .section-title {
          margin-top: 6.667vw;
          font-weight: bold;
          font-size: 4.8vw;
          color: #31353d;
        }

        .section-subtitle-1 {
          width: 60.8vw;
          font-size: 3.2vw;
          line-height: 5.867vw;
        }

        .section-subtitle {
          max-width: 93.6vw;
          text-align: center;
          margin-top: 3.2vw;
          font-size: 3.2vw;
          line-height: 4.8vw;
          color: #a0a0a0;
        }
      }

      .grid-box {
        position: relative;
        width: 100%;
        margin: 0 auto;

        .grid {
          margin: auto 3.2vw;
          row-gap: 3.2vw;
          column-gap: 2.533vw;
          grid-template-columns: repeat(auto-fit, minmax(45.467vw, 1fr));

          .box-item {
            min-height: 13.733vw;
            padding: 1.733vw 5.067vw;
            box-shadow: 0px 2.667vw 2.667vw rgba(0, 0, 0, 0.1);
            border-radius: 2.667vw;

            div {
              font-size: 3.733vw;
              line-height: 4.933vw;
            }

            div:last-child {
              margin-top: 0.933vw;
              font-size: 3.2vw;
              line-height: 4.8vw;
            }
          }
        }
      }

      .service-network-map {
        .grid-box {
          position: relative;
          margin: 0 auto;

          .grid {
            margin: auto 3.2vw;

            .box-item {
              // background-color: red;
              width: 48%;
              min-height: 23.733vw;
              padding: 1.733vw 3.067vw;
              box-shadow: 0px 2.667vw 2.667vw rgba(0, 0, 0, 0.1);
              border-radius: 2.667vw;
              div {
                white-space: pre-line;
                font-size: 3.733vw;
                line-height: 4.933vw;
              }

              div:last-child {
                white-space: pre-line;
                margin-top: 0.933vw;
                font-size: 3.2vw;
                line-height: 4.8vw;
              }
            }

            .box-item-big {
              width: 100%;
            }
          }
        }
      }

      .system-grid-box {
        position: relative;
        margin: 6.133vw auto 0px auto;

        .system-grid {
          margin: 0vw;
          row-gap: 2.667vw;
          grid-template-columns: repeat(auto-fit, minmax(100%, 1fr));

          .system-box-item {
            margin: 0px 3.2vw;
            min-height: 30.4vw;

            div {
              margin: 0vw 6.267vw 0px 6.267vw;
              font-size: 4.267vw;
              line-height: 43px;
            }

            div:last-child {
              margin: 3.2vw 6.267vw 3.067vw 6.267vw;
              font-size: 3.2vw;
              line-height: 4.133vw;
            }
          }
        }
      }

      .dispatch-center {
        background-image: url("");
        margin-top: 0vw;
        margin-bottom: 16.133vw;
        height: auto;
        position: relative;

        .section {
          margin-top: 11.733vw;
          .section-title {
            margin-top: 0;
          }
        }

        .card_item {
          display: none;
        }

        .carousel {
          display: block;
          margin-top: 5.2vw;
          width: 100%;
          height: auto;
          background-image: url("../assets/solution/bg_center_h5.png");
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;

          .carousel-item {
            height: 140.933vw;
            display: flex;
            flex-direction: column;

            .carousel-item-img {
              margin: 8.8vw 2vw 0vw 3.2vw;
              width: 94%;
            }

            .carousel-item-title {
              margin: 6.133vw 3.2vw 0vw 3.2vw;
              font-weight: bold;
              font-size: 4.267vw;
              color: #ffffff;
              line-height: 5.6vw;
            }

            .carousel-item-contents {
              margin: 0vw 3.2vw 0vw 3.2vw;
              font-weight: 400;
              font-size: 3.733vw;
              color: #ffffff;
              line-height: 6.4vw;
            }
          }
        }

        .carousel-indicator {
          position: absolute;
          display: flex;
          justify-content: space-between;
          width: 32.133vw;
          height: 5.867vw;
          bottom: 16vw;
        }

        .progress-bar {
          position: absolute;
          height: 0.4vw;
          bottom: 10.533vw;
          background-color: #e3e3e3;
          width: 94.4vw;

          /* 初始宽度为0 */
          .progress {
            max-width: 100%;
            height: 0.4vw;
            background-color: #e95b00;
            /* 进度条宽度变化的动画效果 */
            transition: width 1s ease;
            width: 0;
          }
        }
      }

      .footer-grid-box {
        margin: 5.867vw auto 20.267vw auto;

        .footer-grid {
          display: grid;
          margin: auto 3.2vw;
          row-gap: 6.4vw;
          grid-template-columns: repeat(auto-fit, minmax(100%, 1fr));

          .footer-box-item {
            border-radius: 2.667vw;
            min-height: 28.267vw;
            align-items: start;

            .footer-img {
              top: 4.667vw;
              padding-top: 0;
              left: 3.733vw;
              position: absolute;
              font-size: 8vw;
            }

            div {
              margin: 5.733vw 6.267vw 0px 16.933vw;
              font-size: 4.267vw;
              line-height: 5.867vw;
              padding-top: 1.333vw;
              text-align: start;
            }

            div:last-child {
              margin: 1.6vw 6.267vw 0px 16.933vw;
              font-size: 3.2vw;
              line-height: 4.8vw;
              padding-bottom: 1.333vw;
            }
          }
        }
      }
    }
  }
}
</style>
