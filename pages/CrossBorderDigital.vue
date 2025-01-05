<template>
  <div class="crossborderdigital-main">
    <div class="banner">
      <div class="banner_tips" data-aos="fade-right">
        <div class="banner_title">{{ $t("crossBorderDigital.describe") }}</div>
        <div class="banner_text">
          {{ $t("crossBorderDigital.describe2") }}
        </div>
      </div>
    </div>

    <div class="body">
      <div class="card">
        <img
          class="pc-bg"
          src="../assets/cross_border_digital/bg_pc.png"
          alt=""
          srcset=""
        />
        <div class="pc-text-content">
          <div data-aos="fade-up">
            {{ $t("crossBorderDigital.describe3") }}
          </div>
          <div class="pc-subtext-content">
            <div data-aos="fade-up" :data-aos-delay="300 + 1 * 100">
              {{ $t("crossBorderDigital.describe4") }}
            </div>
            <div data-aos="fade-up" :data-aos-delay="300 + 2 * 100">
              {{ $t("crossBorderDigital.describe5") }}
            </div>
            <div data-aos="fade-up" :data-aos-delay="300 + 3 * 100">
              {{ $t("crossBorderDigital.describe6") }}
            </div>
          </div>
          <div data-aos="fade-up" :data-aos-delay="300 + 4 * 100">
            {{ $t("crossBorderDigital.describe7") }}
          </div>
          <div class="pc-subtext-content">
            <div data-aos="fade-up" :data-aos-delay="300 + 5 * 100">
              {{ $t("crossBorderDigital.describe8") }}
            </div>
            <div data-aos="fade-up" :data-aos-delay="300 + 6 * 100">
              {{ $t("crossBorderDigital.describe9") }}
            </div>
            <div data-aos="fade-up" :data-aos-delay="300 + 7 * 100">
              {{ $t("crossBorderDigital.describe10") }}
            </div>
          </div>
          <div data-aos="fade-up" :data-aos-delay="300 + 8 * 100">
            {{ $t("crossBorderDigital.describe11") }}
          </div>
          <div class="pc-subtext-content">
            <div data-aos="fade-up" :data-aos-delay="300 + 9 * 100">
              {{ $t("crossBorderDigital.describe12") }}
            </div>
            <div data-aos="fade-up" :data-aos-delay="300 + 10 * 100">
              {{ $t("crossBorderDigital.describe13") }}
            </div>
            <div data-aos="fade-up" :data-aos-delay="300 + 11 * 100">
              {{ $t("crossBorderDigital.describe14") }}
            </div>
          </div>
        </div>
        <img
          class="pc-img"
          src="../assets/cross_border_digital/l_pc.jpg"
          alt=""
          srcset=""
          data-aos="fade-left"
        />
      </div>
      <div class="card_h5">
        <img
          class="pc-img-h5"
          src="../assets/cross_border_digital/l_pc_h5.png"
          alt=""
          srcset=""
        />
        <div class="card-h5-content">
          <div>{{ $t("crossBorderDigital.describe3") }}</div>
          <div class="sub-text">
            <div>{{ $t("crossBorderDigital.describe4") }}</div>
            <div>{{ $t("crossBorderDigital.describe5") }}</div>
            <div>{{ $t("crossBorderDigital.describe6") }}</div>
          </div>
          <div>{{ $t("crossBorderDigital.describe7") }}</div>
          <div class="sub-text">
            <div>{{ $t("crossBorderDigital.describe8") }}</div>
            <div>{{ $t("crossBorderDigital.describe9") }}</div>
            <div>{{ $t("crossBorderDigital.describe10") }}</div>
          </div>
          <div>{{ $t("crossBorderDigital.describe11") }}</div>
          <div class="sub-text">
            <div>{{ $t("crossBorderDigital.describe12") }}</div>
            <div>{{ $t("crossBorderDigital.describe13") }}</div>
            <div>{{ $t("crossBorderDigital.describe14") }}</div>
          </div>
        </div>
      </div>
      <div class="youshi-title">
        {{ $t("crossBorderDigital.describe23") }}
      </div>
      <div class="grid-box">
        <img
          v-if="isChina"
          class="grid-img"
          src="../assets/cross_border_digital/l_advantage.png"
          alt=""
          srcset=""
          data-aos="zoom-in"
          :data-aos-delay="300 + 1 * 100"
        />
        <img
          v-if="isEnglish"
          class="grid-img"
          src="../assets/cross_border_digital/l_advantage_h5.png"
          alt=""
          srcset=""
          data-aos="zoom-in"
          :data-aos-delay="300 + 1 * 100"
        />
        <div class="grid">
          <div
            v-for="(item, index) in grid_list"
            :key="index"
            class="box-item"
            :data-aos="index % 2 === 0 ? 'fade-right' : 'fade-left'"
          >
            <img class="num-img" :src="item.img" alt="" srcset="" />
            <div class="box-item-column">
              <div>
                {{ item.name }}
              </div>
              <div>
                {{ item.text }}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="footer-grid-box">
        <div class="footer-grid">
          <div
            v-for="(itm, index) in grid_list"
            :key="index"
            class="footer-box-item"
            data-aos="fade-up"
            :data-aos-delay="300 + index * 200"
          >
            <img class="footer-img" :src="itm.img" alt="" srcset="" />
            <div>{{ itm.name }}</div>
            <div>{{ itm.text }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import num01 from "@/assets/cross_border_digital/num_01.png";
import num02 from "@/assets/cross_border_digital/num_02.png";
import num03 from "@/assets/cross_border_digital/num_03.png";
import num04 from "@/assets/cross_border_digital/num_04.png";
import { isZhLocale, isEnLocale } from "@/utils/helper";

const isChina = isZhLocale();
const isEnglish = isEnLocale();
const { t } = useI18n();

const grid_list = [
  {
    img: num01,
    name: t("crossBorderDigital.describe15"),
    text: t("crossBorderDigital.describe16"),
  },
  {
    img: num02,
    name: t("crossBorderDigital.describe17"),
    text: t("crossBorderDigital.describe18"),
  },
  {
    img: num03,
    name: t("crossBorderDigital.describe19"),
    text: t("crossBorderDigital.describe20"),
  },
  {
    img: num04,
    name: t("crossBorderDigital.describe21"),
    text: t("crossBorderDigital.describe22"),
  },
];
</script>

<style scoped lang="less">
.crossborderdigital-main {
  box-sizing: border-box;

  .banner {
    position: relative;
    width: 100%;
    height: 428px;
    background-image: url("../assets/cross_border_digital/l_banner2X.jpg");
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

  .title_tips {
    font-weight: 400;
    font-size: clamp(16px, 4vw, 16px);
    color: #494949;
    margin-bottom: 78px;
    line-height: 28px;
    text-align: center;
    padding: 0% 15%;
  }

  .body {
    .card {
      margin: 0 auto 106px auto;
      max-width: 1400px;
      position: relative;

      .pc-text-content {
        position: absolute;
        left: 3.5%;
        top: 18.7%;
        bottom: 0%;
        width: 37.9%;
        display: flex;
        flex-direction: column;

        font-weight: 600;
        font-size: clamp(12px, 1.3vw, 28px);
        color: #31353d;

        .pc-subtext-content {
          display: flex;
          flex-direction: row;
          margin-top: 3.6%;
          margin-bottom: 7.6%;

          div {
            margin-right: 10px;
            background-color: #1B9EDB;
            padding: 0.6% 3%;
            font-weight: 400;
            font-size: clamp(8px, 1.3vw, 16px);
            color: #ffffff;
          }
        }
      }

      .pc-bg {
        width: 100%;
        position: absolute;
        z-index: -1;
      }

      .pc-img {
        margin-top: 10.5%;
        margin-left: 41.5%;
        margin-right: 4%;
        width: 54.5%;
        height: 89.2%;
      }
    }

    .card_h5 {
      display: none;
    }

    .youshi-title {
      background-color: white;
      text-align: center;
      font-weight: bold;
      font-size: 36px;
      color: #31353d;
      line-height: 44px;
      padding-top: 16px;
    }

    .grid-box {
      margin: 69px auto 0px auto;
      max-width: 1448px;
      position: relative;

      .grid {
        display: grid;
        row-gap: 40px;
        margin: 0 24px 142px 24px;
        column-gap: 8.2%;
        grid-template-columns: repeat(2, 45.8%);

        .box-item {
          min-height: 203px;
          padding-bottom: 10px;
          background-color: #f8f8f8;
          border-radius: 10px;
          display: flex;
          flex-direction: row;
          align-items: center;

          .num-img {
            width: 48px;
            height: 40px;
            margin-left: 42px;
          }

          .box-item-column {
            display: flex;
            flex-direction: column;
            margin-left: 37px;

            div {
              font-weight: 600;
              font-size: clamp(14px, 1.3vw, 28px);
              color: #31353d;
              line-height: clamp(18px, 1.3vw, 44px);
            }

            div:last-child {
              margin-top: 21px;
              margin-right: 10px;
              // white-space: pre-line;
              font-weight: 400;
              font-size: clamp(8px, 1.3vw, 16px);
              color: #494949;
              line-height: clamp(16px, 1.3vw, 28px);
            }
          }
        }
      }

      .grid-img {
        position: absolute;
        width: 415px;
        height: 415px;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        z-index: 1;
      }
    }

    .footer-grid-box {
      display: none;
      position: relative;
      max-width: 1448px;
      margin: 46px auto 111px auto;

      .footer-grid {
        display: grid;
        margin: auto 24px;
        row-gap: 48px;
        column-gap: 37px;
        grid-template-columns: repeat(auto-fit, minmax(322px, 1fr));

        .footer-box-item {
          border-radius: 20px;

          background-image: url("../assets/cross_border_digital/youshi_bg.png");
          background-repeat: no-repeat;
          background-size: cover;
          // background-color: #F8F8F8;
          min-height: 276px;
          display: flex;
          flex-direction: column;
          position: relative;
          align-items: center;

          div {
            font-weight: 600;
            color: #1f1f1f;
            line-height: 27px;
          }

          div:last-child {
            font-weight: 400;
            color: #5f6367;
          }
        }
      }
    }
  }
}

@media (max-width: 750px) {
  .crossborderdigital-main {
    .banner {
      background-position: right 0% bottom;
      background-image: url("../assets/cross_border_digital/l_bannerH5.png");
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

      .card {
        display: none;
      }

      .card_h5 {
        margin-top: 6.133vw;
        display: flex;
        position: relative;
        justify-content: center;

        .pc-img-h5 {
          position: absolute;
          top: 0;
          width: 66.667vw;
        }

        .card-h5-content {
          margin-top: 35.333vw;
          min-height: 96.133vw;
          width: 100%;
          background-image: url("../assets/cross_border_digital/bg_pc_h5.png");
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          font-weight: bold;
          font-size: 4vw;
          color: #31353d;
          line-height: 5.333vw;
          padding: 23.067vw 3.2vw 0vw 3.2vw;

          .sub-text {
            display: flex;
            justify-content: space-between;

            margin: 3.6vw 0px 6vw 0px;

            div {
              width: 29.867vw;
              background-color: #1B9EDB;
              font-weight: 400;
              font-size: 3.2vw;
              color: #ffffff;
              padding: 1.467vw 0vw;
              text-align: center;
            }
          }
        }
      }

      .youshi-title {
        padding-top: 2.533vw;
        font-size: 4.8vw;
        background-color: #f8f8f8;
      }

      .grid-box {
        display: none;
      }

      .footer-grid-box {
        background-color: #f8f8f8;
        width: 100%;
        display: block;
        position: relative;
        margin: 0 auto 0 auto;
        padding-top: 5.867vw;
        padding-bottom: 12.8vw;

        .footer-grid {
          display: grid;
          margin: auto 3.2vw;
          row-gap: 2.667vw;
          grid-template-columns: repeat(auto-fit, minmax(100%, 1fr));

          .footer-box-item {
            border-radius: 2.667vw;
            min-height: 32vw;
            align-items: start;

            .footer-img {
              top: 6vw;
              left: 5.333vw;
              position: absolute;
              width: 6.38vw;
              height: 5.333vw;
            }

            div {
              margin: 5.6vw 6.267vw 0px 16.933vw;
              font-size: 4.267vw;
              line-height: 5.867vw;
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

      .title {
        margin-top: 2.533vw;
        margin-bottom: 5.067vw;
        font-size: 4.8vw;
        line-height: 5.867vw;
      }
    }
  }
}
</style>
