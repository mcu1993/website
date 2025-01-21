<template>
  <div class="carousel">
      <a-carousel style="flex: 1;" :autoplay="true" :before-change="beforeChange">
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
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from "vue";
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
  height: 100%;
  :deep(.ant-carousel) {
    .slick-slide {
      text-align: center;  
      height: 100%;
      background: #f5f5f5;
      overflow: hidden;
    }
    .carousel-item {
      height: 100%;
      display: flex;
      flex-direction: column;
      position: relative;
      img {
        width: 100%;
        object-fit: cover;
        height: calc(100vh - 77px);
      }
       .introduction {
         height: 100px;
         text-align: left;
         position: absolute;
         top: 10%;
         left: 10%;
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

@media screen and (max-width: 750px) {
  .carousel {
    margin-bottom: 0;
    :deep(.ant-carousel) {
      .carousel-item {
      img {
        width: 100%;
        object-fit: cover;
        height: calc(100vh - 44px);
      }

      }
    }
  }
}
</style>
