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
        <div class="section">
            <div class="common-title-text"  data-aos="fade-up">人才招聘</div>
            <div class="join-idea-item" :style="{ 'background-image': footer_list[selectedIndex].img2 }"  data-aos="fade-up">
                <div class="join-idea">
                    <div class="join-idea-n">01</div>
                    <div class="join-idea-p">
                        企业之间的竞争，不仅仅是知识产品和服务的竞争，更是人才的竞争，好的人才将为企业的发展提供动力，因此力辰科技坚持“以人为本”和“事业留才”人才理念，引进“学历+技术”的优秀人才，同时不断优化人才成长环境，为人才的成长提供广阔的平台，建立“外引内培”的人员储备渠道。
                    </div>
                </div>
            </div>
            <div class="join-idea-item" :style="{ 'background-image': footer_list[selectedIndex].img3 }"  data-aos="fade-up">
                <div class="join-idea">
                    <div class="join-idea-n">02</div>
                    <div class="join-idea-p">
                        以“优化人才梯队结构、提高人才队伍素质”为核心，以“知识化、专业化、职业化”为发展策略，重点打造高素质的专业人才、高水平的技能人才、复合型管理人才队伍，让人才发展与企业发展齐头共进。
                    </div>
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

        .common-title-text {
            font-size: 36px;
            font-family: Microsoft YaHei-Bold, Microsoft YaHei;
            font-weight: bold;
            color: #333333;
            line-height: 44px;
            margin-bottom: 30px;
        }

        .join-idea-item {
            width: 100%;
            height: auto;
            padding: 50px 127px;
            background-repeat: no-repeat;
            background-size: cover;
            margin-bottom: 24px;

            .join-idea {
                padding: 24px;
                background: rgba(255, 255, 255, 0.35);
                box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.1), inset 0 1px 2px 0 rgba(222, 243, 255, 0.4);
                border-radius: 0;
                opacity: 1;
                border: 1px solid;
                border-image: linear-gradient(180deg, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 1)) 0.01 0.01;
                /* filter: blur(1px); */
                display: flex;
                align-items: center;

                .join-idea-n {
                    font-size: 36px; 
                    color: #ecf0f1;
                    margin-right: 10px;
                }

                .join-idea-p {
                    font-size: 18px;
                    text-align: justify;
                    font-family: Microsoft YaHei-Regular, Microsoft YaHei;
                    font-weight: 400;
                    color: #FFFFFF;
                    line-height: 36px;
                }
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

        .join-idea-item {
            width: 100%;
            height: auto;
            padding: 6.667vw 6.933vw;
            background-repeat: no-repeat;
            background-size: cover;
            margin-bottom: 3.2vw;

            .join-idea {
                padding: 3.2vw;
                background: rgba(255, 255, 255, 0.35);
                box-shadow: 0 0.267vw 0.267vw 0 rgba(0, 0, 0, 0.1), inset 0 0.133vw 0.267vw 0 rgba(222, 243, 255, 0.4);
                border-radius: 0;
                opacity: 1;
                border: 1px solid;
                border-image: linear-gradient(180deg, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 1)) 0.01 0.01;
                /* filter: blur(1px); */
                display: flex;
                align-items: center;

                .join-idea-n {
                    font-size: 4.8vw; 
                    margin-right: 1.333vw;
                }

                .join-idea-p {
                    font-size: 2.4vw;
                    text-align: justify;
                    font-family: Microsoft YaHei-Regular, Microsoft YaHei;
                    font-weight: 400;
                    color: #FFFFFF;
                    line-height: 4.8vw;
                }
            }

        }
    }
    }
}
</style>