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
            <div class="invite-item" :class="{ 'invite-item-active': selectedZhiweiIndex == 1 }"
                @click="handleClick(1)">
                <div class="invite-item-box">
                    <div class="invite-shrink">
                        <img :src="img14" alt="" class="shrink-img1">
                        <img :src="img15" alt="" class="shrink-img2">
                    </div>
                    <img class="invite-item-icon" :src="img16" alt="">
                    <div class="invite-item-title">电商运营店长/主管</div>
                </div>

                <div class="invite-item-content">
                    【岗位职责】
                    <p style="line-height: 2;">1.协助负责职能运营团队后续工作开展，为线上店铺提供专业系统的运营支持，包含月度店铺、单品营销策略统筹制定监控各店落地执行及效果反馈；
                    </p>
                    <p style="line-height: 2;">2.平台级活动统筹各店执行；</p>
                    <p style="line-height: 2;">3.日常与平台小二资源对接，与同行进行深度交流；</p>
                    <p style="line-height: 2;">4.在平台内获取资源，为品牌力增长尝试跨界及更多品牌曝光机会；</p>
                    <p class="MsoNormal"
                        style="margin-left: 0pt; text-indent: 0pt; background: #ffffff; line-height: 2;">
                        5.平台付费推广赋能提升，协助制定相关流程与规范等。</p>
                    <br>


                    【任职要求】
                    <p style="line-height: 2;">1.大专及以上学历，2年以上工作经验，并有3年以上独立运营京东/天猫店铺的经验；</p>
                    <p style="line-height: 2;">2.具备较强的数据分析和业务判断能力，能根据运营、推广效果及时调整运营方案；</p>
                    <p style="line-height: 2;">3.思路清晰、沟通协调能力强，工作积极，具有较强的执行力；</p>
                    <p style="line-height: 2;">4.责任心强，有良好团队合作精神，抗压力强；</p>
                    <p class="MsoNormal"
                        style="margin-left: 0pt; text-indent: 0pt; background: #ffffff; line-height: 2;">
                        5.对私域流量运营有一定了解，能够进行公私域流量转化与运营。</p>
                </div>
            </div>
            <div class="invite-item" :class="{ 'invite-item-active': selectedZhiweiIndex == 2 }"
                @click="handleClick(2)">
                <div class="invite-item-box">
                    <div class="invite-shrink">
                        <img :src="img14" alt="" class="shrink-img1">
                        <img :src="img15" alt="" class="shrink-img2">
                    </div>
                    <img class="invite-item-icon" :src="img16" alt="">
                    <div class="invite-item-title">售前客服</div>
                </div>

                <div class="invite-item-content">
                    【岗位职责】
                    <p style="line-height: 2;">1、利用淘宝旺旺等在线聊天工具回答客户提问,引导客户在网上顺利购买；</p>
                    <p style="line-height: 2;">2、熟悉淘宝的各种操作规则处理客户要求修改价格管理；踏实、能吃苦,有网购经验,了解网购流程,熟悉淘宝和其他电商平台的买卖流程；</p>
                    <p style="line-height: 2;">3、了解客户服务需求信息，进行有效跟踪，做好售前指导和服务跟进工作；</p>
                    <p class="p" style="margin: 0pt; padding: 0pt; line-height: 2;">4、针对客户需求制作报价，合同以及其他文件整理。</p>
                    <br>


                    【任职要求】
                    <p style="line-height: 2;">1.从事过客服1年及以上经验，打字速度每分钟60字以上；</p>
                    <p style="line-height: 2;">2.有仪器行业内销售经验优先考虑；</p>
                    <p style="line-height: 2;">3.成就欲望强，有冲劲，务实好学;</p>
                    <p style="line-height: 2;">4.工作细致耐心,积极主动,有责任心;脾气温和,不急躁,凡事能从对方角度出发考虑,具备突发事件处理能力；</p>
                    <p class="p" style="margin: 0pt; padding: 0pt; line-height: 2;">5.有一定的学习能力，能主动学习产品知识和行业发展情况。</p>
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
    },
];


const selectedIndex = ref(0)


const selectedZhiweiIndex = ref(0)

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


const handleClick = (key: number) => {
    console.log(selectedZhiweiIndex.value);
    if (key == selectedZhiweiIndex.value) {
        selectedZhiweiIndex.value = 0;
        return;
    }
    selectedZhiweiIndex.value = key;
};

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
                height: 45px;

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

            .invite-item-content {
                font-size: 20px;
                font-family: Microsoft YaHei-Regular, Microsoft YaHei;
                font-weight: 400;
                color: #666666;
                line-height: 18px;
                height: 0;
                overflow: hidden;

                p {
                    font-size: 20px;
                    margin: 0 !important;
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
                display: block !important;
                width: 9px !important;
                height: 18px !important;
                transition: all .365s;
            }

            .invite-item-content {
                height: auto;
                margin-top: 16px;
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
            align-items: start;

            .common-title-text {
                font-size: 4.8vw;
                font-family: Microsoft YaHei-Bold, Microsoft YaHei;
                font-weight: bold;
                color: #333333;
                line-height: 5.867vw;
            }

            .invite-text {
                margin: 3.2vw 0;
                font-size: 2.533vw;
                font-family: Microsoft YaHei-Bold, Microsoft YaHei;
                font-weight: bold;
                color: #333333;
            }

            .invite-p {
                font-size: 2.133vw;
                font-family: Microsoft YaHei-Regular, Microsoft YaHei;
                font-weight: 400;
                color: #333333;
                line-height: 4.533vw;
                margin-bottom: 6.4vw;
            }

            .invite-item {
                width: 100%;
                padding: 3.2vw 6.4vw;
                background: #FFFFFF;
                border-radius: 0.667vw 0.667vw 0.667vw 0.667vw;
                opacity: 1;
                border: 1px solid #DDDDDD;
                transition: all .365s;
                position: relative;
                margin-bottom: 4vw;

                .invite-item-box {
                    display: flex;
                    align-items: center;
                    cursor: pointer;
                    height: 6vw;

                    .shrink-img1 {
                        width: 1.2vw;
                        height: 2.4vw;
                    }

                    .shrink-img2 {
                        width: 2.4vw;
                        height: 1.2vw;
                        display: none;
                    }

                    .invite-item-icon {
                        width: 3.733vw;
                        height: 3.733vw;
                        flex-shrink: 0;
                        margin: 0 2vw;
                    }

                    .invite-item-title {
                        font-size: 2.8vw;
                        font-family: Microsoft YaHei-Bold, Microsoft YaHei;
                        font-weight: bold;
                        color: #333333;
                    }
                }

                .invite-item-content {
                    font-size: 2.667vw;
                    font-family: Microsoft YaHei-Regular, Microsoft YaHei;
                    font-weight: 400;
                    color: #666666;
                    line-height: 2.4vw;
                    height: 0;
                    overflow: hidden;

                    p {
                        font-size: 2.667vw;
                        margin: 0 !important;
                    }
                }
            }

            .invite-item-active {
                box-shadow: 0 0 3.2vw 0 rgba(40, 65, 134, 0.15);
                border-radius: 0.667vw 0.667vw 0.667vw 0.667vw;
                opacity: 1;
                border-bottom: 0.4vw solid #94C33A;
                padding: 5.333vw 6.4vw;

                .shrink-img1 {
                    display: none;
                }

                .shrink-img2 {
                    display: block !important;
                    width: 1.2vw !important;
                    height: 2.4vw !important;
                    transition: all .365s;
                }

                .invite-item-content {
                    height: auto;
                    margin-top: 2.133vw;
                    transition: all .365s;
                }
            }
        }
    }
}
</style>