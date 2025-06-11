<template>
  <div class="banner">
    <img class="img" src="../assets/about/banner.jpg" alt="" srcset="" />
  </div>
  <div class="body">
    <div class="section" data-aos="fade-up" data-aos-delay="300">
      <div class="section-title">
        企业简介
      </div>
       <!-- <div class="section-subtitle" data-aos="fade-up">
        {{ $t("about.describe1") }}
      </div> -->
      <div class="section-content" style="margin-top: 32px;">
        科睿高科（深圳）科技公司是一家从事前沿材料科学与工程研究与销售的公司，我们的产品涵盖材料制备合成、材料检测、材料环境控制等一系列实验室及户外产业线，我们的客户群体包括国内外高校、科研院所、检测机构、商混及外加剂生产企业等各个领域。</div>
      <div class="section-content">
        自公司成立以来，公司切实执行“产学研”发展方针，与各大高校及研究所深入合作，在浙江和广东都建立了规模化的生产和研发基地，不断在自我超越中迭代，以高水准品质，根据不同的客户需求，严格依照行业最高标准为客户提供定制服务，给予客户高可靠性解决方案。
      </div> 
      <div class="section-content">
        经过多年的发展，科睿品牌已具备较强的市场竞争力，真诚、实质、优质、专业是我们的口号，我们将继续坚持科技创新，专注为客户创造价值，聚焦创新产品与核心技术，围绕品牌发展的核心任务，全面深入推进科睿品牌产品竞争力的提升，为推动世界科学仪器振兴作出“科睿人”的贡献。
      </div> 
      

    </div>
    <div class="footer-grid-box">
        <div class="footer-grid">
          <div
            v-for="(itm, index) in footer_list"
            :key="index"
            class="footer-box-item"
          >
            <div class="content">
              <!-- <img class="img" :src="itm.img" style="margin-top: 20px;width: 80px; height: 80px;" alt="" srcset="" />
              <div>{{ itm.name }}</div>
              <div>{{ itm.srt }}</div> -->
            </div>
          </div>
        </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from "vue";
import { isZhLocale, isEnLocale } from "@/utils/helper";

import UrIcon from "@/components/icon";
const isChina = isZhLocale();
const isEnglish = isEnLocale();
const { t } = useI18n();

import img1 from "@/assets/about/icon1.png";
import img2 from "@/assets/about/icon2.png";
import img3 from "@/assets/about/icon3.png";
import img4 from "@/assets/about/icon4.png";
const footer_list = [
  {
    img: img1,
    name: '高端测试领导者',
    srt: '科睿高科，专注于高端测试解决方案，提供球差电镜、冷冻电镜、FIB、同步辐射等200余种测试服务，覆盖多学科领域。',
  },
  {
    img: img2,
    name: '卓越服务记录',
    srt: '成功服务案例逾10000例，博士工程师团队超过500人，平台累计关注人数突破100万，彰显专业实力。',
  },
  {
    img: img3,
    name: '科研成果丰硕',
    srt: '客户研究成果发表于Nature、Science等顶级期刊，涵盖能源、材料、催化等前沿领域，学术影响力显著。',
  },
  {
    img: img4,
    name: '精准检测服务',
    srt: '从微观结构到宏观性能，全方位表征样品特性，助力企业研发与科研创新，提供精准、高效的服务体验。',
  },
];


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
  width: 100%;
  height: 428px;
  margin-bottom: 77px;
}

.img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.body {

  .section {
    max-width: 1448px;
    margin: auto auto 30px auto;
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
      // height: 276px;
      .footer-grid {
        display: grid;
        margin: auto 24px;
        row-gap: 37px;
        column-gap: 17px;
        grid-template-columns: repeat(auto-fit, minmax(322px, 1fr));

        .footer-box-item {
          border-radius: 20px;
          // background-color: #f8f8f8;
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

        // .footer-box-item:hover {
        //   background-color: #1B9EDB;
        //   box-shadow: 0px 20px 30px rgba(204, 79, 0, 0.2);
        //   .footer-img {
        //     color: #fff;
        //   }
        //   div {
        //     color: #fff;
        //   }
        // }
      }
    }
}

@media screen and (max-width: 750px) {
  .banner {
    height: 57.067vw;
    margin-bottom: 5.067vw;
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
        margin: 5.867vw auto 20.267vw auto;

        .footer-grid {
          display: grid;
          margin: auto 3.2vw;
          row-gap: 6.4vw;
          grid-template-columns: repeat(auto-fit, minmax(100%, 1fr));
          // height: 28.267vw;
          .footer-box-item {
            border-radius: 2.667vw;
            min-height: 28.267vw;
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
              // margin: 5.733vw 6.267vw 0px 16.933vw;
              text-align: center;
              font-size: 4.267vw;
              line-height: 5.867vw;
              padding-top: 1.333vw;
              text-align: start;
              }
              div:last-child {
                margin: 1.6vw 0 0px 0;
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
