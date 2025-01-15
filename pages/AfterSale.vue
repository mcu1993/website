<template>
    <div class="banner">
      <div class="banner_tips" data-aos="fade-right">
        <div class="banner_title">应用广泛</div>
        <div class="banner_text">
          品质耕耘持续领跑市场
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
              @click="selectedIndex=index"
              
            data-aos="fade-up"
            :data-aos-delay="300 + index * 200"
              :class="{content_s:index==selectedIndex}" 
            >
              <!-- <ur-icon class="footer-img" :type="itm.img.value"></ur-icon> -->
              <img class="img" :src="itm.img" style="margin-top: 20px;width: 80px; height: 80px;" alt="" srcset="" />
                <div>{{ itm.name }}</div>
            </div>
          </div>
        </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted, onBeforeUnmount } from "vue";
  import { isZhLocale, isEnLocale } from "@/utils/helper";
  
  const isChina = isZhLocale();
  const isEnglish = isEnLocale();
  const { t } = useI18n();
  
  import img1 from "@/assets/aftersale/fuwu1.png";
  import img2 from "@/assets/aftersale/fuwu2.png";
  import img3 from "@/assets/aftersale/fuwu3.png";
  import img4 from "@/assets/aftersale/fuwu4.png";
  const footer_list = [
    {
      img: img1,
      name: '销售平台',
      srt: '',
    },
    {
      img: img2,
      name: '售后服务',
      srt: '',
    },
    {
      img: img3,
      name: '资料下载',
      srt: '',
    },
    {
      img: img4,
      name: '网上留言',
      srt: '',
    },
  ];
  

  const selectedIndex = ref(0)
  
  const updateImageSource = () => {
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
  .banner {
    position: relative;
    width: 100%;
    height: 428px;
    background-image: url("../assets/aftersale/33.webp");
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
        font-size: clamp(13px, 4vw, 24px);
        /* Responsive font size using clamp */
        color: #fff;
        font-weight: bold;
        line-height: 33px;
        margin-bottom: 14px;
        text-align: left !important;
      }

      .banner_text {
        width: 100%;
        font-size: clamp(16px, 4vw, 28px);
        /* Responsive font size using clamp */
        font-weight: 400;
        color: #fff;
        line-height: 33px;
      }
    }
  }
  
  .img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  .body {
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
  
      .section-content {
        margin: 5px 24px auto 24px;
        text-indent: 2em;
        text-align: start;
        font-weight: 400;
        font-size: 20px;
        color: #606367;
        line-height: 27px;
      }
    }
    .footer-grid-box {
        position: relative;
        max-width: 1448px;
        margin: 46px auto 111px auto;
  
        .footer-grid {
          display: grid;
          margin: auto;
          row-gap: 37px;
          column-gap: 17px;
          justify-content: center;
          grid-template-columns: repeat(auto-fit, 200px);
  
          .footer-box-item {
            border-radius: 12px;
            background-color: #f8f8f8;
            display: flex;
            flex-direction: column;
            position: relative;
            align-items: center;
            justify-content: start;
            -webkit-box-sizing:border-box;
            -moz-box-sizing:border-box;
            box-sizing:border-box;
            height: 160px;
            .footer-img {
              padding-top: 14px;
              font-size: 66px;
            }
  
            div {
              margin: 5px 5px 20px 5px;
              font-weight: 600;
              font-size: 20px;
              color: #1f1f1f;
              line-height: 27px;
              text-align: center;
            }

          }
          .content_s {
            border-bottom: 6px solid #1B9EDB;
          }
        }
      }
  }
  
  @media screen and (max-width: 750px) {
    .banner {
      background-position: left 50% bottom;
      background-repeat: no-repeat;
      background-size: cover;
      height: 57.067vw;
      margin-bottom: 0vw;

      .banner_tips {
        max-width: 100%;
        margin-left: 6.667vw;

        .banner_title {
          font-size: 3.8vw;
          line-height: 4.867vw;
          letter-spacing: 0vw;
          margin-bottom: 2.0vw;
        }

        .banner_text {
        //   width: 55%;
          font-size: 4.8vw;
          line-height: 5.867vw;
          letter-spacing: 0vw;
        }
      }
    }
    .body {
      .section {
        .section-title {
          font-size: 4.8vw;
        }
  
        .section-subtitle {
          font-size: 3.2vw;
          line-height: 4.8vw;
        }
      }
      .footer-grid-box {
          margin: 3.333vw;
          .footer-grid {
            display: grid;
            margin: auto 0;
            row-gap: 0;
            column-gap: 0;
            gap: 3.333vw;
            grid-template-columns: 1fr 1fr;
  
            .footer-box-item {
                height: 160px;
                border-radius: 1.6vw;
              align-items: center;
  
              .footer-img {
                top: 4.667vw;
                padding-top: 0;
                left: 3.733vw;
                position: absolute;
                font-size: 8vw;
              }
  
              .content {
                display: flex;
                flex-direction: column;
                align-items: center;
                div {
                margin: 0.667vw 0.667vw 2.667vw 0.667vw;
                text-align: center;
                font-size: 4.267vw;
                line-height: 5.867vw;
                padding-top: 1.333vw;
                text-align: start;
                }
              }
            }
          }
        }
    }
  }
  </style>
  