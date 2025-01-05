<template>
  <div class="logistics-mian">
    <div class="banner">
      <div class="banner_tips" data-aos="fade-right">
        <div class="banner_title">{{ $t("financialService.bannerTitle") }}</div>
        <div class="banner_text">
          {{ $t("financialService.describe1") }}
        </div>
      </div>
    </div>

    <div class="title_tips" data-aos="fade-up">
      {{ $t("financialService.describe2") }}
    </div>

    <div class="container">
      <div class="item" :data-aos="isPC ? 'fade-left' : 'fade-up'">
        <div class="text">
          <h2>{{ $t("financialService.serviceName1") }}</h2>
          <p>
            {{ $t("financialService.serviceContent1") }}
          </p>
        </div>
        <div class="image">
          <img :src="huozhuImg" alt="Description 1" />
        </div>
      </div>

      <div class="item" :data-aos="isPC ? 'fade-right' : 'fade-up'">
        <div class="image img2">
          <img :src="chengyunImg" alt="Description 2" />
        </div>
        <div class="text">
          <h2>{{ $t("financialService.serviceName2") }}</h2>
          <p>
            {{ $t("financialService.serviceContent2") }}
          </p>
        </div>
      </div>

      <div class="item" :data-aos="isPC ? 'fade-left' : 'fade-up'">
        <div class="text">
          <h2>{{ $t("financialService.serviceName3") }}</h2>
          <p>
            {{ $t("financialService.serviceContent3") }}
          </p>
        </div>
        <div class="image img3">
          <img :src="sijiImg" alt="Description 2" />
        </div>
      </div>
    </div>
    <div class="title" data-aos="fade-up">
      {{ $t("financialService.serviceName16") }}
    </div>
    <div class="footer">
      <div
        v-for="(itm, index) in footer_list"
        :key="index"
        class="foo_box"
        :class="{ foo_box_2: index === 1 }"
        data-aos="fade-up"
        :data-aos-delay="300 + index * 200"
      >
        <ur-icon class="foo_img" :type="itm.img"></ur-icon>
        <!-- <img class="foo_img" :src="itm.img" alt="" srcset="" /> -->
        <div>
          <div class="foo_title">{{ itm.name }}</div>
          <div class="foo_text">{{ itm.srt }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onBeforeMount, onMounted, onBeforeUnmount } from "vue";
import UrIcon from "@/components/icon";

import huozhu from "@/assets/finance/huozhu.jpg";
import chengyun from "@/assets/finance/chengyun.jpg";
import siji from "@/assets/finance/siji.jpg";

import huozhuH5 from "@/assets/finance/huozhuh5.png";
import chengyunH5 from "@/assets/finance/chengyunH5.png";
import sijiH5 from "@/assets/finance/sijiH5.png";

const { t } = useI18n();
const footer_list = [
  {
    img: "flexible",
    name: t("financialService.serviceName4"),
    srt: t("financialService.serviceContent4"),
  },
  {
    img: "large-loans",
    name: t("financialService.serviceName5"),
    srt: t("financialService.serviceContent5"),
  },
  {
    img: "interest",
    name: t("financialService.serviceName6"),
    srt: t("financialService.serviceContent6"),
  },
  {
    img: "kuai-01",
    name: t("financialService.serviceName7"),
    srt: t("financialService.serviceContent7"),
  },
];

const huozhuImg = ref(huozhu);
const chengyunImg = ref(chengyun);
const sijiImg = ref(siji);
const isPC = ref(false);

const updateImageSource = () => {
  if (window.innerWidth <= 750) {
    huozhuImg.value = huozhuH5;
    chengyunImg.value = chengyunH5;
    sijiImg.value = sijiH5;
    isPC.value = false;
  } else {
    huozhuImg.value = huozhu;
    chengyunImg.value = chengyun;
    sijiImg.value = siji;
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
.logistics-mian {
  box-sizing: border-box;
  .banner {
    position: relative;
    width: 100%;
    height: 428px;
    background-image: url("../assets/finance/l_banner.jpg");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    text-align: left;
    box-sizing: border-box;
    margin-bottom: 64px;
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
    font-size: clamp(24px, 6vw, 36px);
    color: #31353d;
    text-align: center;
    padding: 0% 15%;
  }

  .title_tips {
    max-width: 1400px;
    font-weight: 400;
    font-size: clamp(16px, 4vw, 16px);
    color: #494949;
    line-height: 28px;
    text-align: center;
    margin: auto;
    padding: 0% 24px;
    // padding: 0% 18.7%;
  }

  .container {
    display: flex;
    flex-direction: column;
    gap: 50px;
    max-width: 1400px;
    padding: 0px 24px;
    margin: 78px auto 72px auto;
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

  .footer {
    max-width: 1400px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    justify-content: center;
    gap: 32px;
    margin: auto;
    margin-top: 78px;
    margin-bottom: 175px;
    padding: 0 24px;
    width: 100%;
    .foo_box {
      background-color: #f8f8f8;
      border-radius: 20px;
      padding: 20px;
      text-align: center;
      display: flex;
      flex-direction: column;
      // align-items: center;
      // justify-content: center;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      min-height: 276px;

      .foo_img {
        font-size: 67px;
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
        padding: 0px 29px;
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
  .logistics-mian {
    .banner {
      background-position: right 0% bottom;
      background-image: url("../assets/finance/l_logis_banner_h5.png");
      background-repeat: no-repeat;
      background-size: cover;
      min-height: 57.067vw;
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

    .title {
      padding: 0% 3.2%;
      font-size: 4.8vw;
    }

    .title_tips {
      padding: 0% 3.2%;
      font-size: 3.2vw;
      line-height: 4.8vw;
    }
    .container {
      background-color: #f8f8f8;
      padding: 6.8vw 2.667vw 9.2vw 2.667vw;

      margin: 9.067vw auto 12.267vw auto;
      .item {
        flex-direction: column;
        border: none;
        box-shadow: none;

        .text {
          padding: 0px;
          width: 100%;
          text-align: center; /* Center the text horizontally */
          align-items: center; /* Center the text horizontally */
          order: -1; /* Place the text above the image */

          h2 {
            font-size: 3.733vw;
            margin-bottom: 3.2vw;
            line-height: 4.933vw;
          }
          p {
            font-size: 3.2vw;
            line-height: 4.8vw;
          }
        }
        .image {
          border-radius: 4.6vw;
          overflow: hidden;
          order: 1; /* Ensure the image is below the text */
          max-width: 100%; /* Allow full width on smaller screens */
          height: auto; /* Allow height to adjust based on the image's aspect ratio */
        }
      }
      .item:hover {
        box-shadow: none;
      }
    }
    .footer {
      margin-top: 6.4vw;
      margin-bottom: 23.733vw;
      padding: 0px 3.2vw;
      justify-content: flex-start;
      grid-template-columns: repeat(auto-fit, minmax(100%, 100%));
      .foo_box {
        flex-direction: row;
        align-items: flex-start;
        text-align: left;
        min-height: auto;
        justify-content: flex-start;
        border-radius: 2.667vw;
        padding: 4.133vw 6vw 6vw 6vw;
        .foo_img {
          font-size: 8vw;
          margin-right: 6vw;
        }
        .foo_title {
          font-size: 4.267vw;
          line-height: 5.867vw;
          margin: 0.4vw 0px 1.867vw 0px;
        }

        .foo_text {
          font-size: 3.2vw;
          line-height: 4.8vw;
          padding: 0px;
        }
      }
    }
  }
}
</style>
