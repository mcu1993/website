<template>
  <div class="freshFruit-mian">
    <div class="banner">
      <div class="banner_tips" data-aos="fade-right">
        <div class="banner_title">{{ $t("freshFruit.describe") }}</div>
        <div class="banner_text">
          {{ $t("freshFruit.describe2") }}
        </div>
      </div>
    </div>

    <div class="section" data-aos="fade-up">
      <div class="section-small-title">{{ $t("freshFruit.describe3") }}</div>
      <div class="section-subtitle">
        {{ $t("freshFruit.describe4") }}
      </div>
    </div>
    <div class="bo_arrow">
      <div class="arr_box" data-aos="fade-up" :data-aos-delay="300 + 1 * 100">
        <div class="arr_item">
          <img
            class="arr_item_img"
            src="../assets/freshFruit/yuantou.png"
            alt=""
            srcset=""
          />
        </div>
        <div class="arr_text">{{ $t("freshFruit.describe5") }}</div>
      </div>

      <img
        class="arr_img"
        :src="jiantouImg"
        alt=""
        srcset=""
        data-aos="fade-up"
        :data-aos-delay="300 + 2 * 100"
      />

      <div class="arr_box" data-aos="fade-up" :data-aos-delay="300 + 3 * 100">
        <div class="arr_item">
          <img
            class="arr_item_img"
            src="../assets/freshFruit/gaoxiao.png"
            alt=""
            srcset=""
          />
        </div>
        <div class="arr_text">{{ $t("freshFruit.describe6") }}</div>
      </div>

      <img
        class="arr_img"
        :src="jiantouImg"
        alt=""
        srcset=""
        data-aos="fade-up"
        :data-aos-delay="300 + 4 * 100"
      />

      <div class="arr_box" data-aos="fade-up" :data-aos-delay="300 + 5 * 100">
        <div class="arr_item">
          <img
            class="arr_item_img"
            src="../assets/freshFruit/haiguan.png"
            alt=""
            srcset=""
          />
        </div>
        <div class="arr_text">{{ $t("freshFruit.describe7") }}</div>
      </div>

      <img
        class="arr_img"
        :src="jiantouImg"
        alt=""
        srcset=""
        data-aos="fade-up"
        :data-aos-delay="300 + 6 * 100"
      />

      <div class="arr_box" data-aos="fade-up" :data-aos-delay="300 + 7 * 100">
        <div class="arr_item">
          <img
            class="arr_item_img"
            src="../assets/freshFruit/shichang.png"
            alt=""
            srcset=""
          />
        </div>
        <div class="arr_text">{{ $t("freshFruit.describe8") }}</div>
      </div>
    </div>

    <div class="section" data-aos="fade-up">
      <div class="section-title">{{ $t("freshFruit.describe9") }}</div>
      <div class="section-subtitle">
        {{ $t("freshFruit.describe10") }}
      </div>
      <div class="section-subtitle">
        {{ $t("freshFruit.describe11") }}
      </div>
    </div>

    <div class="container">
      <div class="item" :data-aos="isPC ? 'fade-left' : 'fade-up'">
        <div class="text">
          <h2>{{ $t("freshFruit.describe12") }}</h2>
          <p>
            {{ $t("freshFruit.describe13") }}
          </p>
        </div>
        <div class="image">
          <img :src="daicaiImg" alt="Description 1" />
        </div>
      </div>

      <div class="item" :data-aos="isPC ? 'fade-right' : 'fade-up'">
        <div class="image">
          <img :src="liulianImg" alt="Description 2" />
        </div>
        <div class="text">
          <h2>
            {{ $t("freshFruit.describe14") }}
          </h2>
          <p>
            {{ $t("freshFruit.describe15") }}
          </p>
        </div>
      </div>

      <div class="item" :data-aos="isPC ? 'fade-right' : 'fade-up'">
        <div class="text">
          <h2>
            {{ $t("freshFruit.describe16") }}
          </h2>
          <p>
            {{ $t("freshFruit.describe17") }}
          </p>
        </div>
        <div class="image">
          <img :src="haiguanImg" alt="Description 1" />
        </div>
      </div>

      <div class="item" :data-aos="isPC ? 'fade-left' : 'fade-up'">
        <div class="image">
          <img :src="maoyiImg" alt="Description 2" />
        </div>
        <div class="text">
          <h2>
            {{ $t("freshFruit.describe18") }}
          </h2>
          <p>
            {{ $t("freshFruit.describe19") }}
          </p>
        </div>
      </div>
    </div>
    <div class="section" data-aos="fade-up">
      <div class="section-title">{{ $t("freshFruit.describe20") }}</div>
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
        <div class="foo">
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
import jiantou from "@/assets/freshFruit/jiantou.png";
import jiantouH5 from "@/assets/freshFruit/jiantou_h5.png";
import daicai from "@/assets/freshFruit/daicai.png";
import daicaiH5 from "@/assets/freshFruit/daicai_h5.jpg";
import liulian from "@/assets/freshFruit/liulian.png";
import liulianH5 from "@/assets/freshFruit/liulian_h5.jpg";
import maoyi from "@/assets/freshFruit/maoyi.png";
import maoyiH5 from "@/assets/freshFruit/maoyi_h5.jpg";
import haiguan from "@/assets/freshFruit/haiguan1.png";
import haiguanH5 from "@/assets/freshFruit/haiguan_h5.jpg";

const { t } = useI18n();
const jiantouImg = ref(jiantou);
const daicaiImg = ref(daicai);
const liulianImg = ref(liulian);
const maoyiImg = ref(maoyi);
const haiguanImg = ref(haiguan);

const isPC = ref(true);
const footer_list = [
  {
    img: "technology",
    name: t("freshFruit.describe21"),
    srt: t("freshFruit.describe22"),
  },
  {
    img: "natural-resources",
    name: t("freshFruit.describe23"),
    srt: t("freshFruit.describe24"),
  },
  {
    img: "optimize",
    name: t("freshFruit.describe25"),
    srt: t("freshFruit.describe26"),
  },
];
const updateImageSource = () => {
  if (window.innerWidth <= 750) {
    jiantouImg.value = jiantouH5;
    daicaiImg.value = daicaiH5;
    liulianImg.value = liulianH5;
    maoyiImg.value = maoyiH5;
    haiguanImg.value = haiguanH5;
    isPC.value = false;
  } else {
    jiantouImg.value = jiantou;
    daicaiImg.value = daicai;
    liulianImg.value = liulian;
    maoyiImg.value = maoyi;
    haiguanImg.value = haiguan;
    isPC.value = true;
  }
};
onBeforeMount(() => {
  if (window.innerWidth <= 750) {
    isPC.value = false;
  } else {
    isPC.value = true;
  }
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
.freshFruit-mian {
  box-sizing: border-box;
  .banner {
    position: relative;
    width: 100%;
    height: 428px;
    background-image: url("../assets/freshFruit/t_banner.png");
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
    font-size: clamp(16px, 4vw, 36px);
    color: #31353d;
    margin-bottom: 70px;
    text-align: center;
    padding: 0% 15%;
  }

  .title_tips {
    font-weight: 400;
    font-size: clamp(14px, 4vw, 18px);
    color: #494949;
    line-height: 28px;
    text-align: center;
    // padding: 0% 15%;
    margin-top: 20px;
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
      margin-bottom: 19px;
    }

    .section-small-title {
      font-weight: bold;
      font-size: 24px;
      color: #31353d;
      line-height: 44px;
      margin-bottom: 19px;
    }

    .section-subtitle {
      margin: 0px 24px auto 24px;
      max-width: 1200px;
      text-align: center;
      font-weight: 400;
      font-size: 16px;
      line-height: 21px;
      color: #a0a0a0;
    }
  }

  .bo_arrow {
    padding: 0% auto;
    width: 100%;
    margin-top: 64px;
    margin-bottom: 94px;
    margin: 64px auto 153px auto;
    max-width: 1200px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .arr_box {
      max-width: 148px;
      max-height: 148px;
      width: 10vw;
      height: 10vw;
      text-align: center;
      .arr_item {
        width: 100%;
        height: 100%;
        background: rgba(255, 255, 255, 0.39);
        box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.08);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        .arr_item_img {
          max-width: 50%;
          max-height: 50%;
        }
      }
      .arr_text {
        margin-top: 18px;
        font-weight: bold;
        font-size: clamp(14px, 2vw, 20px);
        color: #31353d;
        // line-height: 44px;
      }
    }
    .arr_img {
      max-width: 79px;
      max-height: 35px;
      width: 4vw;
      height: 2vw;
      // margin-top: 55px;
    }
  }

  .container {
    max-width: 1400px;
    display: flex;
    flex-direction: column;
    gap: 50px;
    padding: 0px 24px;
    margin: 46px auto 72px auto;
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
        width: 63%;
        padding: 0px 10% 0px 7%;

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
    margin: 60px auto 166px auto;
    padding-left: 14px;
    padding-right: 14px;
    row-gap: 37px;
    column-gap: 20px;
    grid-template-columns: repeat(auto-fit, minmax(322px, 1fr));
    .foo_box {
      background-color: #f8f8f8;
      border-radius: 20px;
      padding: 30px 20px 20px 20px;
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;
      //   justify-content: center;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      min-height: 322px;

      .foo_img {
        font-size: 66px;
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
        // padding: 0px 29px;
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
  .freshFruit-mian {
    .banner {
      background-position: right 0% bottom;
      background-image: url("../assets/freshFruit/h5_l_banner.png");
      background-repeat: no-repeat;
      background-size: cover;
      height: 57.067vw;
      margin-bottom: 5.6vw;

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

    .section {
      .section-title {
        font-size: 4.8vw;
      }

      .section-subtitle {
        font-size: 3.2vw;
        line-height: 4.8vw;
      }
    }

    .bo_arrow {
      padding: 0 0.933vw;
      width: 100%;
      margin-top: 6.8vw;
      margin-bottom: 15.467vw;
      display: flex;
      justify-content: space-between;
      align-items: start;
      .arr_box {
        max-width: auto;
        max-height: auto;
        width: 19.2vw;
        height: 100%;
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        .arr_item {
          width: 10.667vw;
          height: 10.667vw;
          background: rgba(255, 255, 255, 0.39);
          box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.08);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          .arr_item_img {
            width: 6.133vw;
            height: 5.733vw;
          }
        }
        .arr_text {
          margin-top: 1.867vw;
          font-weight: 400;
          font-size: 2.933vw;
          color: #31353d;
        }
      }
      .arr_img {
        max-width: 6.667vw;
        max-height: 3.333vw;
        width: 6.667vw;
        height: 3.333vw;
        margin-top: 3.733vw;
      }
    }
    .container {
      margin-top: 5.333vw;
      margin-bottom: 13.2vw;
      padding: 0 3.2vw;
      gap: 2.667vw;
      .item {
        flex-direction: column-reverse;
        box-shadow: none;

        .text {
          h2 {
            font-size: 4.267vw;
          }
          p {
            font-size: 3.2vw;
            line-height: 4.8vw;
          }
          padding: 3.2vw 0px 0px 2.533vw;
          width: 100%;
          text-align: start; /* Center the text horizontally */
          align-items: start; /* Center the text horizontally */
          order: -1; /* Place the text above the image */
        }
        .image {
          order: 1; /* Ensure the image is below the text */
          max-width: 100%; /* Allow full width on smaller screens */
          height: auto; /* Allow height to adjust based on the image's aspect ratio */
        }
      }
    }
    .footer {
      padding: 0 3.2vw;
      margin-top: 5.333vw;
      margin-bottom: 12.667vw;
      justify-content: flex-start;
      grid-template-columns: repeat(auto-fit, minmax(100%, 100%));
      .foo_box {
        flex-direction: row;
        align-items: center;
        text-align: left;
        height: auto;
        justify-content: flex-start;
        padding: 0;
        min-height: 31.733vw;
        .foo_img {
          font-size: 8vw;
          top: 5.333vw;
          left: 5.733vw;
          position: absolute;
        }
        .foo_title {
          font-weight: 600;
          font-size: 4.267vw;
          line-height: 5.867vw;

          padding: 5.333vw 0 0 20vw;
          margin: 0 0 14px 0;
        }
        .foo_text {
          font-size: 3.2vw;
          line-height: 4.8vw;
          padding: 0 6.4vw 5.067vw 20vw;
        }
      }
    }
  }
}
</style>
