<template>
  <div class="fullscence-main">
    <div class="banner">
      <div class="banner_tips" data-aos="fade-right">
        <div class="banner_title">
          {{ $t("fullScence.bannerTitle") }}
        </div>
        <div class="banner_text">
          {{ $t("fullScence.describe1") }}
        </div>
      </div>
    </div>
    <div class="body">
      <div class="section" data-aos="fade-up">
        <div class="section-title">{{ $t("fullScence.describe2") }}</div>
        <div class="section-subtitle">{{ $t("fullScence.describe3") }}</div>
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
            <img class="question-img" :src="item.img.value" alt="" srcset="" />
            <div>{{ item.name }}</div>
            <div>{{ item.text }}</div>
          </div>
        </div>
      </div>

      <div class="bg">
        <div class="section" data-aos="fade-up">
          <div class="section-title" style="color: white">
            {{ $t("fullScence.describe12") }}
          </div>
          <div class="section-subtitle" style="color: white">
            {{ $t("fullScence.describe13") }}
          </div>
        </div>
        <div class="card_body">
          <div class="card_item">
            <div class="card_header">
              <div
                v-for="(cd, idx) in cardList"
                :key="idx"
                class="card_name"
                :class="{ aitve: cd.id === cardid }"
                @mouseenter="cardid = cd.id"
              >
                <div class="card_title">{{ cd.name }}</div>
                <div :class="{ aitve_divider: cd.id === cardid }"></div>
              </div>
            </div>
            <div class="card_content">
              <div v-if="cardid === 0" class="card_box" data-aos="flip-down">
                <div class="card_text_body">
                  <div class="card_text">
                    {{ cardList[0].desc }}
                    <div class="tags">
                      <div
                        v-for="(tag, index) in cardList[0].contents"
                        :key="index"
                      >
                        {{ tag }}
                      </div>
                    </div>
                  </div>
                  <img
                    class="card_img"
                    :src="cardList[0].img"
                    alt=""
                    srcset=""
                  />
                </div>
              </div>
              <div v-if="cardid === 1" class="card_box" data-aos="flip-down">
                <div class="card_text_body">
                  <div class="card_text">
                    {{ cardList[1].desc }}
                    <div class="tags">
                      <div
                        v-for="(tag, index) in cardList[1].contents"
                        :key="index"
                      >
                        {{ tag }}
                      </div>
                    </div>
                  </div>
                  <img
                    class="card_img"
                    :src="cardList[1].img"
                    alt=""
                    srcset=""
                  />
                </div>
              </div>
              <div v-if="cardid === 2" class="card_box" data-aos="flip-down">
                <div class="card_text_body">
                  <div class="card_text">
                    {{ cardList[2].desc }}
                    <div class="tags">
                      <div
                        v-for="(tag, index) in cardList[2].contents"
                        :key="index"
                      >
                        {{ tag }}
                      </div>
                    </div>
                  </div>
                  <img
                    class="card_img"
                    :src="cardList[2].img"
                    alt=""
                    srcset=""
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="card_item_h5">
            <div class="card_header_h5">
              <div
                v-for="(cd, idx) in cardList"
                :key="idx"
                class="card_name"
                @click="cardid = cd.id"
              >
                <div class="card_title" :class="{ aitve: cd.id === cardid }">
                  {{ cd.name }}
                </div>
                <img
                  v-if="cd.id === cardid"
                  class="selected_img"
                  src="../assets/full_scence/selected_icon.png"
                  alt=""
                  srcset=""
                />
              </div>
            </div>
            <div class="card_content_h5">
              <div v-if="cardid === 0" class="card_box" data-aos="flip-down">
                <div class="card_text">
                  {{ cardList[0].desc }}
                  <div class="tags">
                    <div
                      v-for="(tag, index) in cardList[0].contents"
                      :key="index"
                    >
                      {{ tag }}
                    </div>
                  </div>
                </div>
              </div>
              <div v-if="cardid === 1" class="card_box" data-aos="flip-down">
                <div class="card_text">
                  {{ cardList[1].desc }}
                  <div class="tags">
                    <div
                      v-for="(tag, index) in cardList[1].contents"
                      :key="index"
                    >
                      {{ tag }}
                    </div>
                  </div>
                </div>
              </div>
              <div v-if="cardid === 2" class="card_box" data-aos="flip-down">
                <div class="card_text">
                  {{ cardList[2].desc }}
                  <div class="tags">
                    <div
                      v-for="(tag, index) in cardList[2].contents"
                      :key="index"
                    >
                      {{ tag }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="section" data-aos="fade-up">
        <div class="section-title">{{ $t("fullScence.describe51") }}</div>
        <div class="section-subtitle" style="width: 646px">
          {{ $t("fullScence.describe52") }}
        </div>
      </div>
      <div class="grid-box">
        <div class="grid">
          <div
            v-for="(item, index) in grid_list"
            :key="index"
            class="box-item"
            data-aos="fade-up"
            :data-aos-delay="300 + index * 200"
          >
            <ur-icon class="num-img" :type="item.img.value"></ur-icon>
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
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from "vue";
import UrIcon from "@/components/icon";

import issue1 from "@/assets/full_scence/f_issue_1.png";
import issue2 from "@/assets/full_scence/f_issue_2.png";
import issue3 from "@/assets/full_scence/f_issue_3.png";
import issue4 from "@/assets/full_scence/f_issue_4.png";

import issue1H5 from "@/assets/full_scence/f_issue_h5_1.png";
import issue2H5 from "@/assets/full_scence/f_issue_h5_2.png";
import issue3H5 from "@/assets/full_scence/f_issue_h5_3.png";
import issue4H5 from "@/assets/full_scence/f_issue_h5_4.png";
import digital from "@/assets/full_scence/f_digital.png";
import transportation from "@/assets/full_scence/f_transportation.png";
import platform from "@/assets/full_scence/f_platform.png";

const issue1Img = ref(issue1);
const issue2Img = ref(issue2);
const issue3Img = ref(issue3);
const issue4Img = ref(issue4);

const { t } = useI18n();
const issue_list = [
  {
    img: issue1Img,
    name: t("fullScence.describe4"),
    text: t("fullScence.describe5"),
  },
  {
    img: issue2Img,
    name: t("fullScence.describe6"),
    text: t("fullScence.describe7"),
  },
  {
    img: issue3Img,
    name: t("fullScence.describe8"),
    text: t("fullScence.describe9"),
  },
  {
    img: issue4Img,
    name: t("fullScence.describe10"),
    text: t("fullScence.describe11"),
  },
];

const cardid = ref<number>(0);
const cardList = [
  {
    img: digital,
    contents: [
      t("fullScence.describe14"),
      t("fullScence.describe15"),
      t("fullScence.describe16"),
      t("fullScence.describe17"),
      t("fullScence.describe18"),
      t("fullScence.describe19"),
      t("fullScence.describe20"),
      t("fullScence.describe21"),
    ],
    name: t("fullScence.describe22"),
    desc: t("fullScence.describe23"),
    id: 0,
  },
  {
    img: transportation,
    contents: [
      t("fullScence.describe24"),
      t("fullScence.describe25"),
      t("fullScence.describe26"),
      t("fullScence.describe27"),
      t("fullScence.describe28"),
      t("fullScence.describe29"),
      t("fullScence.describe30"),
      t("fullScence.describe31"),
    ],
    name: t("fullScence.describe32"),
    desc: t("fullScence.describe33"),
    id: 1,
  },
  {
    img: platform,
    contents: [
      t("fullScence.describe34"),
      t("fullScence.describe35"),
      t("fullScence.describe36"),
      t("fullScence.describe37"),
      t("fullScence.describe38"),
      t("fullScence.describe39"),
      t("fullScence.describe40"),
    ],
    name: t("fullScence.describe41"),
    desc: t("fullScence.describe42"),
    id: 2,
  },
];

const feijiImg = ref("dingzhi-01");
const huojianImg = ref("optimize");
const botImg = ref("technology");
const eyeImg = ref("transparent");

const grid_list = [
  {
    img: feijiImg,
    name: t("fullScence.describe43"),
    text: t("fullScence.describe44"),
  },
  {
    img: huojianImg,
    name: t("fullScence.describe45"),
    text: t("fullScence.describe46"),
  },
  {
    img: botImg,
    name: t("fullScence.describe47"),
    text: t("fullScence.describe48"),
  },
  {
    img: eyeImg,
    name: t("fullScence.describe49"),
    text: t("fullScence.describe50"),
  },
];

const updateImageSource = () => {
  if (window.innerWidth <= 750) {
    issue1Img.value = issue1H5;
    issue2Img.value = issue2H5;
    issue3Img.value = issue3H5;
    issue4Img.value = issue4H5;
  } else {
    issue1Img.value = issue1;
    issue2Img.value = issue2;
    issue3Img.value = issue3;
    issue4Img.value = issue4;
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

<style lang="less" scoped>
.fullscence-main {
  box-sizing: border-box;

  .banner {
    position: relative;
    width: 100%;
    height: 428px;
    background-image: url("../assets/full_scence/f_banner.jpg");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    text-align: left;
    box-sizing: border-box;
    margin-bottom: 0;

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
        text-align: center;
        margin-top: 76px;
        font-weight: bold;
        font-size: 36px;
        color: #31353d;
      }

      .section-subtitle {
        max-width: 852px;
        text-align: center;
        margin-top: 14px;
        font-weight: 400;
        font-size: 16px;
        line-height: 21px;
        color: #a0a0a0;
      }
    }

    .bg {
      width: 100%;
      min-height: 601px;
      display: flex;
      flex-direction: column;
      align-items: center;
      background-image: url("../assets/full_scence/f_answer_bg.png");
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;

      .card_body {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 42px 0px 40px 0px;

        .card_item {
          border: 1px solid #d8d8d8;
          border-radius: 10px;
          width: 73%;
          max-width: 1400px;
          display: flex;
          flex-direction: column;

          background-color: white;

          .card_header {
            background-color: #fff9ed;
            width: 100%;
            min-height: clamp(50px, 1vw, 80px);
            padding: 0px 17.7%;
            border-radius: 10px 10px 0px 0px;
            border-bottom: 1px solid #d8d8d8;
            display: flex;
            justify-content: space-between;
            // align-items: center;
            box-sizing: border-box;
            // background-color: green;

            .card_name {
              font-weight: 400;
              font-size: clamp(12px, 1vw, 24px);
              color: #7c6c5e;
              cursor: pointer;
              line-height: clamp(12px, 1vw, 24px);
              max-width: 25%;
              display: flex;
              // height: 100%;
              flex-direction: column;
              align-content: space-between;
              justify-content: space-between;
              box-sizing: border-box;
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
            background-image: url("../assets/full_scence/shuzihua_bg.png");
            background-size: cover;
            background-position: 0%;
            background-repeat: no-repeat;

            .card_box {
              display: flex;
              align-items: center;
              justify-content: center;
              margin-top: clamp(25px, 1px, 52px);
              margin-bottom: clamp(44px, 1px, 66px);

              .card_text_body {
                display: flex;
                align-items: center;
                justify-content: center;

                .card_text {
                  display: flex;
                  flex-direction: column;
                  max-width: 37.8%;
                  font-weight: 400;
                  font-size: clamp(9px, 1vw, 18px);
                  color: #31353d;
                  line-height: clamp(15px, 1vw, 30px);
                  .tags {
                    width: 100%;
                    display: flex;
                    flex-wrap: wrap;
                    flex-direction: row;
                    margin-top: 27px;
                    column-gap: 1.8%;
                    div {
                      margin-bottom: 14px;
                      background-color: #1B9EDB;
                      padding-left: 10px;
                      padding-right: 10px;
                      min-width: 23%;
                      min-height: 37px;
                      font-size: clamp(8px, 1vw, 16px);
                      color: #ffffff;
                      text-align: center;
                      line-height: 37px;
                    }
                  }
                }

                .card_img {
                  margin-left: 5.7%;
                  width: 29.5%;
                }
              }
            }
          }
        }

        .card_item_h5 {
          display: none;
        }
      }
    }

    .question-grid-box {
      position: relative;
      max-width: 1448px;
      margin: 48px auto 124px auto;

      .question-grid {
        display: grid;
        margin: auto 24px;
        row-gap: 20px;
        column-gap: 25px;
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

    .grid-box {
      position: relative;
      max-width: 1448px;
      margin: 48px auto 124px auto;

      .grid {
        display: grid;
        margin: auto 24px;
        row-gap: 40px;
        column-gap: 116px;
        grid-template-columns: repeat(auto-fit, minmax(642px, 1fr));

        .box-item {
          min-height: 203px;
          background-color: #f8f8f8;
          border-radius: 10px;
          display: flex;
          flex-direction: row;
          align-items: center;

          .num-img {
            font-size: 48px;
            margin-left: 42px;
          }

          .box-item-column {
            display: flex;
            flex-direction: column;
            margin-left: 37px;

            div {
              font-weight: 600;
              font-size: 28px;
              color: #31353d;
              line-height: 44px;
              padding-top: 10px;
            }

            div:last-child {
              margin-top: 21px;
              margin-right: 21px;
              white-space: pre-line;
              font-weight: 400;
              font-size: 16px;
              color: #606367;
              line-height: 28px;
              padding-bottom: 10px;
            }
          }
        }

        .box-item:hover {
          background: #1B9EDB;
          box-shadow: 0px 20px 30px rgba(204, 79, 0, 0.2);
          .num-img {
            color: white;
          }
          .box-item-column {
            div {
              color: white;
            }

            div:last-child {
              color: white;
            }
          }
        }
      }
    }
  }
}

@media (max-width: 750px) {
  .fullscence-main {
    .banner {
      background-position: right 0% bottom;
      background-image: url("../assets/full_scence/f_banner_h5.jpg");
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

        .section-subtitle {
          max-width: 93.6vw;
          text-align: center;
          margin-top: 3.2vw;
          font-size: 3.2vw;
          line-height: 4.8vw;
          color: #a0a0a0;
        }
      }

      .bg {
        background-image: url("../assets/full_scence/f_answer_bg_h5.png");
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        min-height: 100vw;

        .card_body {
          margin: 5.6vw 0px 5.333vw 0px;

          .card_item {
            display: none;
          }

          .card_item_h5 {
            border-radius: 2.667vw;
            width: 93.6%;
            display: flex;
            flex-direction: column;
            background-color: white;
            overflow: hidden;

            .card_header_h5 {
              background-color: #fff9ed;
              width: 100%;
              min-height: 10.533vw;
              display: flex;
              justify-content: space-between;
              box-sizing: border-box;

              .card_name {
                flex: 1;
                font-weight: 400;
                font-size: 3.733vw;
                color: #7c6c5e;
                cursor: pointer;
                text-align: center;
                align-content: space-between;
                justify-content: space-between;
                display: flex;
                flex-direction: column;
                align-items: center;
                .card_title {
                  width: 100%;
                  height: 100%;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  text-align: center;
                  padding: 1.333vw;
                }
                .selected_img {
                  width: 4.4vw;
                }
              }
              .aitve {
                background-color: #1B9EDB;
                color: #fff;
              }
              .header_item {
              }
            }

            .card_content_h5 {
              padding: 4.267vw 0vw 5.867vw 0vw;
              min-height: 38.533vw;
              display: flex;
              flex-direction: column;
              background-image: url("../assets/full_scence/shuzihua_bg_h5.png");
              background-size: cover;
              background-position: 0%;
              background-repeat: no-repeat;

              .card_box {
                margin: auto 3.2vw;
                font-weight: 400;
                font-size: 2.667vw;
                color: #31353d;
                line-height: 3.467vw;

                .tags {
                  display: flex;
                  flex-wrap: wrap;
                  flex-direction: row;
                  margin-top: 3.6vw;
                  column-gap: 5.7%;

                  div {
                    margin-bottom: 2.267vw;
                    background-color: #1B9EDB;
                    padding-left: 1.333vw;
                    padding-right: 1.333vw;
                    min-width: 20%;
                    min-height: 5.733vw;
                    font-weight: 400;
                    font-size: 2.933vw;
                    color: #ffffff;
                    line-height: 5.733vw;
                    text-align: center;
                  }
                }
              }
            }
          }
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
              text-align: center;
            }

            div:last-child {
              margin: 1.867vw;
              font-size: 3.2vw;
              line-height: 4.8vw;
            }
          }
        }
      }

      .grid-box {
        margin: 5.2vw 3.2vw 12.667vw 3.2vw;

        .grid {
          margin: 0;
          row-gap: 2.4vw;
          grid-template-columns: 100%;

          .box-item {
            min-height: 31.733vw;
            border-radius: 2.667vw;
            align-items: start;
            .num-img {
              font-size: 8vw;
              margin-top: 4.933vw;
              margin-left: 6.667vw;
            }

            .box-item-column {
              margin-left: 5.333vw;
              margin-top: 5.333vw;

              div {
                font-size: 4.267vw;
                line-height: 5.867vw;
                padding-top: 1.333vw;
              }

              div:last-child {
                margin-top: 1.867vw;
                margin-right: 3.2vw;
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
}
</style>
