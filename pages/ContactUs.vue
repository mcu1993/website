<template>
  <div class="contact-us-main">
    <div class="banner">
      <!-- <img class="img" src="../assets/contact_us/banner.png" alt="" srcset="" /> -->
    </div>
    <div class="body">
      <!-- <div class="bo_title">联系方式</div>

      <div class="footer">
        <div v-for="(itm, index) in footer_list" :key="index" class="foo_box">
          <img class="foo_img" :src="itm.img" alt="" srcset="" />
          <div class="foo_title">{{ itm.name }}</div>
          <div class="foo_text">{{ itm.srt }}</div>
        </div>
      </div> -->

      <div class="section">
        <div class="section-title" data-aos="fade-up">
          {{ $t("contactUs.contactInfo") }}
        </div>
      </div>
      <div class="question-grid-box">
        <div class="question-grid">
          <div
            v-for="(item, index) in footer_list"
            :key="index"
            class="question-box-item"
            data-aos="zoom-in-right"
            :data-aos-delay="300 + index * 200"
          >
            <ur-icon class="question-img" :type="item.img"></ur-icon>
            <!-- <img class="question-img" :src="item.img" alt="" srcset="" /> -->
            <div>{{ item.name }}</div>
            <div>{{ item.srt }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import UrIcon from "@/components/icon";

const { t } = useI18n();
const footer_list = [
  {
    img: "address",
    name: t("contactUs.address"),
    srt: t("contactUs.describe1"),
  },
  {
    img: "phone",
    name: t("contactUs.phone"),
    srt: t("contactUs.describe2"),
  },
  {
    img: "mailbox",
    name: t("contactUs.mail"),
    srt: t("contactUs.describe3"),
  },
  {
    img: "website",
    name: t("contactUs.website"),
    srt: t("contactUs.describe4"),
  },
];
</script>

<style lang="less" scoped>
.contact-us-main {
  box-sizing: border-box;

  .banner {
    position: relative;
    width: 100%;
    height: 428px;
    background-image: url("../assets/contact_us/banner.png");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    text-align: left;
    box-sizing: border-box;
    margin-bottom: 77px;
  }

  .body {
    // margin: 0 auto;

    .question-grid-box {
      position: relative;
      max-width: 1448px;
      margin: 48px auto 0px auto;
      padding-bottom: 100px;

      .question-grid {
        display: grid;
        margin: auto 24px;
        row-gap: 20px;
        column-gap: 22px;
        grid-template-columns: repeat(auto-fit, minmax(333px, 1fr));

        .question-box-item {
          min-height: 203px;
          background-color: #faf8f7;
          border-radius: 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: start;

          .question-img {
            margin-top: 16px;
            font-size: 52px;
          }

          div {
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
            flex: 1;
            display: flex;
            align-items: center;
          }
        }
        .question-box-item:hover {
          background-color: #1B9EDB;
          box-shadow: 0px 20px 30px rgba(204, 79, 0, 0.2);
          .question-img {
            color: #fff;
          }
          div {
            color: #fff;
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
  }
}

@media screen and (max-width: 750px) {
  .contact-us-main {
    background-color: #f5f5f5;

    .banner {
      height: 57.067vw;
      background-image: url("../assets/contact_us/banner_h5.png");
      margin-bottom: 4.933vw;
    }

    .body {
      .section {
        .section-title {
          font-size: 4.8vw;
        }
      }

      .question-grid-box {
        width: 100%;
        margin: 6.667vw auto 0px auto;
        padding-bottom: 9.2vw;

        .question-grid {
          margin: auto 3.2vw;
          row-gap: 1.867vw;
          column-gap: 2.667vw;
          grid-template-columns: repeat(auto-fit, minmax(42.933vw, 1fr));

          .question-box-item {
            background-color: white;
            min-height: 49.2vw;
            border-radius: 2.667vw;
            justify-content: start;
            .question-img {
              margin-top: 3.2vw;
              font-size: 8.8vw;
            }

            div {
              margin-top: 2.667vw;
              font-size: 4.267vw;
              line-height: 5.733vw;
            }

            div:last-child {
              flex: 1;
              display: flex;
              align-items: center;
              margin: 3.2vw;
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
