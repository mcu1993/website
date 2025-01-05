<template>
  <div class="engineering-main">
    <div class="banner">
      <div class="banner_tips" data-aos="fade-right">
        <div class="banner_title">{{ $t("engineering.describe1") }}</div>
        <div class="banner_text">
          {{ $t("engineering.describe2") }}
        </div>
      </div>
    </div>
    <div class="body">
      <div class="section" data-aos="fade-up">
        <div class="section-title">{{ $t("engineering.describe3") }}</div>
      </div>
      <div class="question-grid-box">
        <div class="question-grid">
          <div
            v-for="(item, index) in issue_list"
            :key="index"
            class="question-box-item"
            data-aos="fade-up"
            :data-aos-delay="300 + index * 200"
          >
            <img class="question-img" :src="item.img" alt="" srcset="" />
            <div>{{ item.name }}</div>
            <div>{{ item.text }}</div>
          </div>
        </div>
      </div>
      <div class="section" data-aos="fade-up">
        <div class="section-title">{{ $t("engineering.describe12") }}</div>
        <div class="section-subtitle">
          {{ $t("engineering.describe13") }}
        </div>
        <div class="line"></div>
      </div>

      <div class="card_body">
        <div class="card_item">
          <div class="card_header">
            <div
              v-for="(cd, idx) in cardList"
              :key="idx"
              class="card_name"
              :class="{ aitve: cd.id === cardid }"
              data-aos="fade-up"
              :data-aos-delay="300 + idx * 200"
              @mouseenter="cardid = cd.id"
            >
              <div class="card_title">{{ cd.name }}</div>
              <div :class="{ aitve_divider: cd.id === cardid }"></div>
            </div>
          </div>
          <div class="card_content">
            <img
              class="arrow left_arrow"
              src="../assets/enginering/left_arrow.png"
              alt=""
              srcset=""
              @click="upper()"
            />
            <img
              class="arrow right_arrow"
              src="../assets/enginering/right_arrow.png"
              alt=""
              srcset=""
              @click="below()"
            />
            <div v-if="cardid === 0" class="card_box">
              <div class="card_text_body">
                <div class="card_text" data-aos="fade-right">
                  <div>
                    {{ $t("engineering.describe14") }}
                  </div>
                  <div>{{ $t("engineering.describe15") }}</div>
                </div>
                <img
                  class="card_img"
                  src="../assets/enginering/card_chepai.png"
                  alt=""
                  srcset=""
                  data-aos="fade-left"
                />
              </div>
            </div>
            <div v-if="cardid === 1" class="card_box">
              <div class="card_text_body">
                <div class="card_text" data-aos="fade-right">
                  <div>
                    {{ $t("engineering.describe17") }}
                  </div>
                </div>
                <img
                  class="card_img"
                  src="../assets/enginering/jusefenpei.png"
                  alt=""
                  srcset=""
                  data-aos="fade-left"
                />
              </div>
            </div>
            <div v-if="cardid === 2" class="card_box">
              <div class="card_text_body">
                <div class="card_text" data-aos="fade-right">
                  <div>
                    {{ $t("engineering.describe19") }}
                  </div>
                </div>
                <img
                  class="card_img"
                  src="../assets/enginering/zhinengyichang.png"
                  alt=""
                  srcset=""
                  data-aos="fade-left"
                />
              </div>
            </div>
            <div v-if="cardid === 3" class="card_box">
              <div class="card_text_body">
                <div class="card_text" data-aos="fade-right">
                  <div>
                    {{ $t("engineering.describe21") }}
                  </div>
                </div>
                <img
                  class="card_img"
                  src="../assets/enginering/zhinengsaomiao.png"
                  alt=""
                  srcset=""
                  data-aos="fade-left"
                />
              </div>
            </div>
            <div v-if="cardid === 4" class="card_box">
              <div class="card_text_body">
                <div class="card_text" data-aos="fade-right">
                  <div>
                    {{ $t("engineering.describe23") }}
                  </div>
                </div>
                <img
                  class="card_img"
                  src="../assets/enginering/cheliangguiji.png"
                  alt=""
                  srcset=""
                  data-aos="fade-left"
                />
              </div>
            </div>
            <div v-if="cardid === 5" class="card_box">
              <div class="card_text_body">
                <div class="card_text" data-aos="fade-right">
                  <div>
                    {{ $t("engineering.describe25") }}
                  </div>
                </div>
                <img
                  class="card_img"
                  src="../assets/enginering/duijiewanghuo.png"
                  alt=""
                  srcset=""
                  data-aos="fade-left"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        v-for="(item, index) in cardList"
        :key="index"
        class="card_h5_item"
        data-aos="fade-up"
        :data-aos-delay="300 + index * 200"
      >
        <div class="card_title">{{ item.name }}</div>
        <div>
          <div
            v-for="(content, idx) in item.contents"
            :key="idx"
            class="card_desc"
          >
            {{ content }}
          </div>
        </div>
        <div class="card_img">
          <img :src="item.img" alt="" srcset="" />
        </div>
      </div>
      <div class="section" data-aos="fade-up">
        <div class="section-title">{{ $t("engineering.describe27") }}</div>
      </div>
      <div class="footer-grid-box">
        <div class="footer-grid">
          <div
            v-for="(itm, index) in footer_list"
            :key="index"
            class="footer-box-item"
            data-aos="fade-up"
            :data-aos-delay="300 + index * 200"
          >
            <ur-icon class="footer-img" :type="itm.img"></ur-icon>
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

import issue1 from "@/assets/enginering/caozuo.png";
import issue2 from "@/assets/enginering/yunshu.png";
import issue3 from "@/assets/enginering/shuj.png";
import issue4 from "@/assets/enginering/gongdi.png";

import chepai from "@/assets/enginering/card_chepai.png";
import jusefenpei from "@/assets/enginering/jusefenpei.png";
import zhinengyichang from "@/assets/enginering/zhinengyichang.png";
import zhinengsaomiao from "@/assets/enginering/zhinengsaomiao.png";
import cheliangguiji from "@/assets/enginering/cheliangguiji.png";
import duijiewanghuo from "@/assets/enginering/duijiewanghuo.png";

const { t } = useI18n();
const issue_list = [
  {
    img: issue1,
    name: t("engineering.describe4"),
    text: t("engineering.describe5"),
  },
  {
    img: issue2,
    name: t("engineering.describe6"),
    text: t("engineering.describe7"),
  },
  {
    img: issue3,
    name: t("engineering.describe8"),
    text: t("engineering.describe9"),
  },
  {
    img: issue4,
    name: t("engineering.describe10"),
    text: t("engineering.describe11"),
  },
];

const footer_list = [
  {
    img: "transparent",
    name: t("engineering.describe28"),
    srt: t("engineering.describe29"),
  },
  {
    img: "optimize",
    name: t("engineering.describe30"),
    srt: t("engineering.describe31"),
  },
  {
    img: "reduce-costs",
    name: t("engineering.describe32"),
    srt: t("engineering.describe33"),
  },
  {
    img: "cross-border-platform",
    name: t("engineering.describe34"),
    srt: t("engineering.describe35"),
  },
];

const cardid = ref<number>(0);
const cardList = [
  {
    img: chepai,
    contents: [t("engineering.describe14"), t("engineering.describe15")],
    name: t("engineering.describe16"),
    id: 0,
  },
  {
    img: jusefenpei,
    contents: [t("engineering.describe17")],
    name: t("engineering.describe18"),
    id: 1,
  },
  {
    img: zhinengyichang,
    contents: [t("engineering.describe19")],
    name: t("engineering.describe20"),
    id: 2,
  },
  {
    img: zhinengsaomiao,
    contents: [t("engineering.describe21")],
    name: t("engineering.describe22"),
    id: 3,
  },
  {
    img: cheliangguiji,
    contents: [t("engineering.describe23")],
    name: t("engineering.describe24"),
    id: 4,
  },
  {
    img: duijiewanghuo,
    contents: [t("engineering.describe25")],
    name: t("engineering.describe26"),
    id: 5,
  },
];

const upper = () => {
  if (cardid.value > 0) {
    cardid.value -= 1;
  } else if (cardid.value >= 0) {
    cardid.value = 5;
  }
};

const below = () => {
  if (cardid.value < 5) {
    cardid.value += 1;
  } else if (cardid.value >= 5) {
    cardid.value = 0;
  }
};

const updateImageSource = () => {};

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
.engineering-main {
  box-sizing: border-box;

  .banner {
    position: relative;
    width: 100%;
    height: 428px;
    background-image: url("../assets/enginering/l_banner.jpg");
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
    // margin: 0 auto;

    .b_title {
      font-weight: bold;
      font-size: 36px;
      color: #31353d;
      line-height: 44px;
      margin-bottom: 82px;
      text-align: center;
    }

    .question-grid-box {
      position: relative;
      max-width: 1448px;
      margin: 48px auto 124px auto;

      .question-grid {
        display: grid;
        margin: auto 24px;
        row-gap: 20px;
        column-gap: 15px;
        grid-template-columns: repeat(auto-fit, minmax(322px, 1fr));

        .question-box-item {
          min-height: 310px;
          background-color: #faf8f7;
          border-radius: 20px;
          display: flex;
          flex-direction: column;
          align-items: center;

          .question-img {
            width: 100%;
          }

          div {
            text-align: center;
            margin-top: 24px;
            font-weight: 600;
            font-size: 24px;
            color: #1f1f1f;
            line-height: 32px;
          }

          div:last-child {
            margin: 16px;
            white-space: pre-line;
            font-weight: 400;
            font-size: 16px;
            color: #606367;
            line-height: 21px;
            text-align: center;
          }
        }
      }
    }

    .section {
      max-width: 1448px;
      margin: auto;
      display: flex;
      flex-direction: column;
      align-items: center;

      .section-title {
        font-weight: bold;
        font-size: 36px;
        color: #31353d;
      }

      .section-subtitle {
        margin: 14px 24px auto 24px;
        max-width: 646px;
        text-align: center;
        font-weight: 400;
        font-size: 16px;
        line-height: 21px;
        color: #a0a0a0;
      }
    }

    .card_body {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 52px 0px 98px 0px;

      .card_item {
        border: 1px solid #d8d8d8;
        border-radius: 10px;
        width: 73%;
        max-width: 1400px;
        display: flex;
        flex-direction: column;

        .card_header {
          background-color: #fff9ed;
          width: 100%;
          min-height: clamp(50px, 1vw, 80px);
          padding: 0px 30px;
          border-radius: 10px 10px 0px 0px;
          border-bottom: 1px solid #d8d8d8;
          display: flex;
          justify-content: space-between;
          box-sizing: border-box;

          .card_name {
            // background-color: red;
            font-weight: 400;
            font-size: clamp(12px, 1vw, 24px);
            color: #7c6c5e;
            cursor: pointer;
            line-height: clamp(12px, 1vw, 24px);
            max-width: 25%;
            display: flex;
            // height: 100%;
            padding: 10px 10px 0 10px;
            flex-direction: column;
            align-content: space-between;
            justify-content: space-between;
          }
          .card_title {
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
          position: relative;

          .arrow {
            position: absolute;
            width: 38px;
            height: 38px;
          }

          .left_arrow {
            z-index: 99;
            left: 4%;
            top: 50%;
            transform: translate(0%, -50%);
          }

          .right_arrow {
            z-index: 99;
            right: 4%;
            top: 50%;
            transform: translate(0%, -50%);
          }

          .card_box {
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-top: 68px;
            margin-bottom: 24px;
            position: relative;

            .card_text_body {
              display: flex;
              align-items: center;
              justify-content: center;

              .card_img {
                width: 38.1%;
              }

              .card_text {
                max-width: 300px;
                font-weight: 400;
                font-size: 16px;
                color: #606367;
                line-height: 28px;
              }
            }
          }
        }
      }
    }

    .card_h5_item {
      display: none;
    }

    .footer-grid-box {
      position: relative;
      max-width: 1448px;
      margin: 46px auto 111px auto;

      .footer-grid {
        display: grid;
        margin: auto 24px;
        row-gap: 48px;
        column-gap: 17px;
        grid-template-columns: repeat(auto-fit, minmax(322px, 1fr));

        .footer-box-item {
          padding: 10px;
          border-radius: 20px;
          background-color: #f8f8f8;
          min-height: 276px;
          display: flex;
          flex-direction: column;
          position: relative;
          align-items: center;
          justify-content: start;

          .footer-img {
            padding-top: 45px;
            font-size: 66px;
          }

          div {
            text-align: center;
            margin: 19px 5px 0px 5px;
            font-weight: 600;
            font-size: 20px;
            color: #1f1f1f;
            line-height: 27px;
          }

          div:last-child {
            margin: 18px 23px 23px 23px;
            font-weight: 400;
            font-size: 16px;
            color: #5f6367;
            line-height: 26px;
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
  .engineering-main {
    .banner {
      background-position: right 0% bottom;
      background-image: url("../assets/enginering/l_banner_h5.jpg");
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

    .body {
      .b_title {
        font-weight: bold;
        font-size: 36px;
        color: #31353d;
        line-height: 44px;
        margin-bottom: 82px;
        text-align: center;
      }

      .section {
        .section-title {
          text-align: center;
          font-size: 4.8vw;
        }

        .section-subtitle {
          font-size: 3.2vw;
          line-height: 4.8vw;
        }

        .line {
          width: 93.6%;
          margin: 6.4vw auto 4.933vw auto;
          height: 1px;
          background-color: #e3e3e3;
        }
      }

      .question-grid-box {
        margin: 6.667vw auto 9.2vw auto;

        .question-grid {
          margin: auto 3.2vw;
          row-gap: 1.867vw;
          column-gap: 2.667vw;
          grid-template-columns: repeat(auto-fit, minmax(42.933vw, 1fr));

          .question-box-item {
            min-height: 49.2vw;
            border-radius: 2.667vw;

            div {
              margin-top: 3.2vw;
              font-size: 4.267vw;
              line-height: 5.733vw;
            }

            div:last-child {
              margin: 1.867vw;
              font-size: 3.2vw;
              line-height: 4.8vw;
            }
          }
        }
      }

      .card_body {
        display: none;
      }

      .card_h5_item {
        display: block;

        .card_title {
          margin: 0vw 4vw 2.667vw 2.4vw;
          font-weight: bold;
          font-size: 4vw;
          color: #31353d;
          line-height: 5.333vw;
        }

        .card_desc {
          margin: 0vw 4vw 1.867vw 2.4vw;
          font-weight: 400;
          font-size: 3.2vw;
          color: #606367;
          line-height: 4.8vw;
        }

        .card_img {
          width: 100%;
          background-color: #f8f8f8;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 8vw;

          img {
            width: 71.2vw;
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
              left: 3.733vw;
              padding-top: 0;
              position: absolute;
              font-size: 8vw;
            }

            div {
              text-align: start;
              margin: 3.333vw 6.267vw 0px 16.933vw;
              font-size: 4.267vw;
              line-height: 5.867vw;
            }

            div:last-child {
              margin: 1.6vw 6.267vw 0px 16.933vw;
              font-size: 3.2vw;
              line-height: 4.8vw;
            }
          }
        }
      }
    }
  }
}
</style>
