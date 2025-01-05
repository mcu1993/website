<template>
  <div class="home-container">
    <div class="carousel">
      <a-carousel :autoplay="true" :before-change="beforeChange">
        <div class="carousel-item">
          <img :src="banner1Img" alt="" />
          <div
            v-if="currentIndex === 0"
            class="introduction"
            data-aos="fade-right"
          >
            <h1 class="title">
              {{ $t("home.bannerDescribe") }}
            </h1>
            <h2>
              {{ $t("home.bannerDescribe2") }}
            </h2>
            <h2>
              {{ $t("home.bannerDescribe3") }}
            </h2>
          </div>
        </div>
        <div class="carousel-item">
          <img :src="banner2Img" alt="" />
          <div
            v-if="currentIndex === 1"
            class="introduction"
            data-aos="fade-right"
          >
            <h1 class="title">
              {{ $t("home.bannerDescribe4") }}
            </h1>
            <h1 v-if="isEnglish" class="title">
              {{ $t("home.bannerDescribe4d1") }}
            </h1>
            <h2>
              {{ $t("home.bannerDescribe7") }}
            </h2>
          </div>
        </div>
        <div class="carousel-item">
          <img :src="banner3Img" alt="" />
          <div
            v-if="currentIndex === 2"
            class="introduction"
            data-aos="fade-right"
          >
            <h1 class="title">
              {{ $t("home.bannerDescribe5") }}
            </h1>
            <h1 v-if="isEnglish" class="title">
              {{ $t("home.bannerDescribe5d1") }}
            </h1>
            <h2>
              {{ $t("home.bannerDescribe6") }}
            </h2>
          </div>
        </div>
      </a-carousel>
    </div>

  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from "vue";
import UrIcon from "@/components/icon";
import banner1 from "@/assets/home/banner1.jpg";
import banner1H5 from "@/assets/home/banner1_h5.jpg";
import banner2 from "@/assets/home/banner2.jpg";
import banner2H5 from "@/assets/home/banner2_h5.jpg";
import banner3 from "@/assets/home/banner3.jpg";
import banner3H5 from "@/assets/home/banner3_h5.jpg";
import service from "@/assets/home/service.jpg";
import serviceH5 from "@/assets/home/service_h5.png";
import serviceEn from "@/assets/home/service_english.png";
import serviceEnH5 from "@/assets/home/service_english_h5.png";
import service1 from "@/assets/home/service1.png";
import service2 from "@/assets/home/service2.png";
import service3 from "@/assets/home/service3.png";
import service4 from "@/assets/home/service4.png";
import industrySector1 from "@/assets/home/industry_sector1.png";
import industrySector2 from "@/assets/home/industry_sector2.png";
import industrySector3 from "@/assets/home/industry_sector3.png";
import industrySector4 from "@/assets/home/industry_sector4.png";
import industrySector5 from "@/assets/home/industry_sector5.png";
import industrySector6 from "@/assets/home/industry_sector6.png";
import { isZhLocale, isEnLocale } from "@/utils/helper";

const isChina = isZhLocale();
const isEnglish = isEnLocale();
const banner1Img = ref(banner1);
const banner2Img = ref(banner2);
const banner3Img = ref(banner3);
const serviceImg = ref(service);
const serviceEnImg = ref(serviceEn);

const currentIndex = ref(0);
const beforeChange = (from: number, to: number) => {
  currentIndex.value = to;
};
const { t } = useI18n();
const digitalServices = [
  {
    img: service1,
    title: t("home.serviceName1"),
    describe: t("home.serviceDescribe1"),
  },
  {
    img: service2,
    title: t("home.serviceName2"),
    describe: t("home.serviceDescribe2"),
  },
  {
    img: service3,
    title: t("home.serviceName3"),
    describe: t("home.serviceDescribe3"),
  },
  {
    img: service4,
    title: t("home.serviceName4"),
    describe: t("home.serviceDescribe4"),
  },
];

const industrySector = [
  {
    bgImg: industrySector1,
    icon: "manufacturing",
    title: t("home.industryName1"),
    describe: t("home.industryDescribe1"),
  },
  {
    bgImg: industrySector2,
    icon: "energy-and-Resources",
    title: t("home.industryName2"),
    describe: t("home.industryDescribe2"),
  },
  {
    bgImg: industrySector3,
    icon: "construction-work",
    title: t("home.industryName3"),
    describe: t("home.industryDescribe3"),
  },
  {
    bgImg: industrySector4,
    icon: "warehouse-logistics",
    title: t("home.industryName4"),
    describe: t("home.industryDescribe4"),
  },
  {
    bgImg: industrySector5,
    icon: "cross-border-platform",
    title: t("home.industryName5"),
    describe: t("home.industryDescribe5"),
  },
  {
    bgImg: industrySector6,
    icon: "fresh-fruit",
    title: t("home.industryName6"),
    describe: t("home.industryDescribe6"),
  },
];

const updateImageSource = () => {
  if (window.innerWidth <= 750) {
    banner1Img.value = banner1H5;
    banner2Img.value = banner2H5;
    banner3Img.value = banner3H5;
    serviceImg.value = serviceH5;
    serviceEnImg.value = serviceEnH5;
  } else {
    serviceImg.value = service;
    banner1Img.value = banner1;
    banner2Img.value = banner2;
    banner3Img.value = banner3;
    serviceEnImg.value = serviceEn;
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
.carousel {
  :deep(.ant-carousel) {
    .slick-slide {
      text-align: center;
      height: 480px;
      line-height: 480px;
      background: #f5f5f5;
      overflow: hidden;
    }
    .carousel-item {
      height: 480px;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      .introduction {
        height: 100px;
        text-align: left;
        margin-top: -350px;
        margin-left: 14%;
        position: relative;
        h1 {
          font-weight: 600;
          font-size: clamp(28px, 2.708vw, 52px);
          color: #31353d;
          line-height: clamp(28px, 2.76vw, 52px);
        }
        h2 {
          font-weight: 400;
          font-size: clamp(15px, 1.25vw, 24px);
          color: #494949;
          line-height: clamp(15px, 1.563vw, 30px);
        }
      }
    }
  }
}
.title-box {
  font-weight: bold;
  font-size: clamp(18px, 2vw, 36px);
  color: #31353d;
  text-align: center;
  margin-top: 20px;
  .icon {
    position: relative;
    top: 14px;
    font-size: clamp(60px, 1vw, 73px);
    //font-size: 73px;
  }
}
.service-box {
  max-width: 1920px;
  margin: auto;
  position: relative;
  .title-box {
    font-size: clamp(18px, 2vw, 36px);
    .icon {
      top: clamp(5px, 2vw, 10px);
      font-size: 200%;
    }
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
.digital-services-box {
  background: #f5f5f5;
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
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(190px, 300px));
    justify-content: center;
    gap: 26px;
    margin-top: 70px;

    .service-item {
      background: #ffffff;
      min-height: 310px;
      display: flex;
      flex-direction: column;
      // justify-content: center;
      align-items: center;
      cursor: pointer;
      padding: 26px;
      border-radius: 20px;

      img {
        width: 116px;
        height: 116px;
      }
      .title {
        font-weight: 600;
        font-size: 23px;
        color: #1f1f1f;
        line-height: 32px;
        margin-bottom: 16px;
        text-align: center;
      }
      .describe {
        text-align: center;
        font-weight: 400;
        font-size: 15px;
        color: #606367;
        line-height: 21px;
      }
    }
    .service-item:hover {
      background: #1B9EDB;
      box-shadow: 0px 20px 30px rgba(204, 79, 0, 0.2);
      .title,
      .describe {
        color: #fff;
      }
    }
  }
}

.industry-sector-container {
  padding: 0 12px 140px 12px;
  .industry-sector-grid {
    max-width: 1400px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(190px, 430px));
    align-items: center;
    justify-content: center;
    gap: 40px;
    margin: 70px auto 0 auto;
    .industry-sector-item {
      position: relative;
      min-height: 210px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 0 70px;
      cursor: pointer;
      overflow: hidden;

      img {
        width: 100%;
        height: 100%;
        position: absolute;
        z-index: -1;
      }
      .icon,
      .left-bottom-icon {
        font-size: 60px;
        color: #ffffff;
        transition: all 1s;
      }
      .left-bottom-icon {
        position: absolute;
        left: 10px;
        bottom: 10px;
        visibility: hidden;
      }
      .content-box {
        text-align: center;
        .title {
          white-space: pre-wrap;
          font-weight: 600;
          font-size: 24px;
          color: #ffffff;
          line-height: 32px;
          margin-top: 12px;
          margin-bottom: 18px;
          transition:
            margin 0.6s,
            font-size 1s;
        }
        .describe {
          font-size: 16px;
          color: #ffffff;
          line-height: 22px;
          display: none;
          transition: all 0.6s;
        }
      }
    }
    .industry-sector-item:hover {
      .icon {
        margin-top: -150px;
        margin-bottom: 80px;
      }
      .describe {
        display: inline;
      }
    }
  }
}

.service-advantage-box {
  min-height: 500px;
  background: url(@/assets/home/service_advantage_bg.png) no-repeat center
    center transparent;
  background-size: cover;
  padding-top: 12px;
  .title-box {
    color: #fff;
  }
  .tips {
    width: 100%;
    font-weight: 400;
    font-size: 15px;
    line-height: 44px;
    text-align: center;
    color: #fff;
  }
  .service-carousel {
    margin-top: 80px;
    .service-carousel-item {
      text-align: center;
      margin-bottom: 100px;
      .content {
        width: 60%;
        text-align: center;
        margin: auto;
        h1 {
          font-weight: 600;
          font-size: 36px;
          color: #1B9EDB;
          line-height: 44px;
        }
        h2 {
          font-weight: 400;
          font-size: 16px;
          color: #ffffff;
          line-height: 21px;
        }
      }
    }
  }
}

@media screen and (max-width: 750px) {
  .carousel {
    margin-bottom: 4.533vw;
    :deep(.ant-carousel) {
      .slick-slide {
        height: 83.467vw;
        line-height: 83.467vw;
      }
      .carousel-item {
        height: 83.467vw;
        .introduction {
          height: 40vw;
          text-align: left;
          margin-top: -52.8vw;
          margin-left: 8vw;
          h1 {
            font-size: 5.333vw;
            line-height: 4.067vw;
          }
          h2 {
            font-size: 3.2vw;
            line-height: 4.867vw;
          }
        }
      }
    }
  }

  .title-box {
    font-size: 4.8vw;
    line-height: 5.867vw;
    margin-top: 0;
    padding-top: 8vw;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 3.2vw;
    .icon {
      position: relative;
      top: 0vw;
      font-size: 9.733vw;
    }
  }

  .service-box {
    .title-box {
      width: 100%;
      font-size: 4.8vw;
      margin-top: 0;
      padding-top: 0;
      display: flex;
      align-items: center;
      gap: 3.6vw;
      .icon {
        position: relative;
        top: 0vw;
        font-size: 9.733vw;
      }
    }
  }

  .digital-services-box {
    background-color: #f8f8f8;
    padding: 0 3.2vw 8vw 3.2vw;
    .tips {
      line-height: 4.8vw;
      padding: 0 11.6vw;
    }
    .service-grid {
      grid-template-columns: repeat(2, 50%);
      gap: 2.667vw;
      margin-top: 4.8vw;
      .service-item {
        padding: 2vw;
        min-height: 53.067vw;
        img {
          width: 15.467vw;
          height: 15.467vw;
        }
        .title {
          font-size: 4.267vw;
          margin-bottom: 0;
        }
        .describe {
          text-align: center;
          font-size: 3.2vw;
          line-height: 4vw;
        }
      }
    }
  }
  .industry-sector-container {
    background-color: #f8f8f8;
    padding-bottom: 12.667vw;
    .title-box {
      font-size: 4.8vw;
      margin-top: 0;
      padding-top: 0;
      display: flex;
      align-items: center;
      gap: 3.6vw;
      .icon {
        position: relative;
        top: 0vw;
        font-size: 9.733vw;
      }
    }
    .industry-sector-grid {
      gap: 2.667vw;
      margin-top: 5.6vw;
      .industry-sector-item {
        min-height: 28vw;
        flex-direction: row;
        padding: 0 5.733vw;
        .icon {
          position: absolute;
          font-size: 8vw;
          left: 8.4vw;
          top: 4.933vw;
        }
        .content-box {
          flex: 1;
          text-align: left;
          margin-left: 16.4vw;
          .title {
            margin-bottom: 2.667vw;
            font-size: 4.267vw;
          }
          .describe {
            font-size: 3.2vw;
            display: inline;
          }
        }
      }
    }
  }
  .service-advantage-box {
    .tips {
      font-size: 3vw;
      line-height: 4.8vw;
      padding: 0 2vw;
    }
    .service-carousel {
      .service-carousel-item {
        .content {
          width: 96%;
        }
      }
    }
  }
}
</style>
