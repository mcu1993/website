<template>
    <div class="banner" :style="{ 'background-image': footer_list[selectedIndex].bannerImg }">
        <div class="banner_tips" data-aos="fade-right">
            <div class="banner_title">{{ footer_list[selectedIndex].bannerTitle }}</div>
            <div class="banner_text">
                {{ footer_list[selectedIndex].bannerText }}
            </div>
        </div>
    </div>
    <div class="body">
        <div class="section" data-aos="fade-up">
            <div class="common-title-text">人才招聘</div>
            <div class="invite-text">科睿高科认真关注每一位员工的成长！</div>
            <div class="invite-p">
                在科睿高科，有一整套科学的人才招聘、选拔、使用和开发的人力资源管理体系。我们有广阔的个人发展空间、优良的个人成长环境、有效的绩效考核激励机制、丰富的企业文化和优厚的福利待遇。目前热招职位如下：</div>
            <div class="invite-item">
                <div class="invite-item-box">
                    <div class="invite-shrink">
                        <img :src="img14" alt="" class="shrink-img1">
                        <img :src="img15" alt="" class="shrink-img2">
                    </div>
                    <div class="invite-item-icon">
                        <img :src="img16" alt="">
                    </div>
                    <div class="invite-item-title">电商运营店长/主管</div>
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

import img11 from "@/assets/talent/talent-2.jpg";
import img12 from "@/assets/talent/talent-3.jpg";
import img13 from "@/assets/talent/talent-4.jpg";
import img14 from "@/assets/talent/invite-right.png";
import img15 from "@/assets/talent/invite-right.png";
import img16 from "@/assets/talent/invite-icon.png";

const footer_list = [
    {
        bannerTitle: '携手科睿高科',
        bannerText: '理想从此刻启航',
        bannerImg: 'url(' + img11 + ')',
        img2: 'url(' + img12 + ')',
        img3: 'url(' + img13 + ')',
        name: '销售平台',
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
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    text-align: left;
    box-sizing: border-box;
    margin-bottom: 76px;

    .banner_tips {
        margin: auto;
        display: flex;

        .banner_title {
            font-size: clamp(16px, 4vw, 28px);
            color: #fff;
            font-weight: 400;
            line-height: 33px;
            margin-right: 14px;
            text-align: left !important;
        }

        .banner_text {
            flex: 1;
            font-size: clamp(16px, 4vw, 28px);
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
        max-width: 1120px;
        margin: auto;
        margin-bottom: 30px;
        display: flex;
        flex-direction: column;
        align-items: start;
        padding: 0 20px;

        .common-title-text {
            font-size: 36px;
            font-family: Microsoft YaHei-Bold, Microsoft YaHei;
            font-weight: bold;
            color: #333333;
            line-height: 44px;
        }

        .invite-text {
            margin: 24px 0;
            font-size: 19px;
            font-family: Microsoft YaHei-Bold, Microsoft YaHei;
            font-weight: bold;
            color: #333333;
        }

        .invite-p {
            font-size: 16px;
            font-family: Microsoft YaHei-Regular, Microsoft YaHei;
            font-weight: 400;
            color: #333333;
            line-height: 34px;
            margin-bottom: 48px;
        }

        .invite-item {
            width: 100%;
            padding: 24px 48px;
            background: #FFFFFF;
            border-radius: 5px 5px 5px 5px;
            opacity: 1;
            border: 1px solid #DDDDDD;
            transition: all .365s;
            position: relative;
            margin-bottom: 30px;

            .invite-item-box {
                display: flex;
                align-items: center;
                cursor: pointer;

                .shrink-img1 {
                    width: 9px;
                    height: 18px;
                }

                .shrink-img2 {
                    width: 18px;
                    height: 9px;
                    display: none;
                }

                .invite-item-icon {
                    width: 28px;
                    height: 28px;
                    flex-shrink: 0;
                    margin: 0 15px;
                }

                .invite-item-title {
                    font-size: 21px;
                    font-family: Microsoft YaHei-Bold, Microsoft YaHei;
                    font-weight: bold;
                    color: #333333;
                }
            }
        }

        .invite-item-active {
            box-shadow: 0 0 24px 0 rgba(40, 65, 134, 0.15);
            border-radius: 5px 5px 5px 5px;
            opacity: 1;
            border-bottom: 3px solid #94C33A;
            padding: 40px 48px;

            .shrink-img1 {
                display: none;
            }

            .shrink-img2 {
                display: block;
                transition: all .365s;
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
        margin-bottom: 4vw;

        .banner_tips {
            margin: auto;
            display: flex;

            .banner_title {
                font-size: 4.8vw;
                line-height: 5.867vw;
                letter-spacing: 0vw;
                margin-bottom: 2.0vw;
            }

            .banner_text {
                font-size: 4.8vw;
                line-height: 5.867vw;
                letter-spacing: 0vw;
            }
        }
    }

    .body {
        .section {
            margin: auto;
            margin-bottom: 4vw;
            display: flex;
            flex-direction: column;
            align-items: center;

            .common-title-text {
                font-size: 4.8vw;
                font-family: Microsoft YaHei-Bold, Microsoft YaHei;
                font-weight: bold;
                color: #333333;
                line-height: 5.867vw;
                margin-bottom: 4vw;
            }
        }
    }
}
</style>