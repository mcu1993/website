<template>
  <div class="product">
    <div class="common-title">
      <div class="common-title-text">产品列表</div>
      <div class="common-title-line">
        <div class="common-title-line1"></div>
        <div class="common-title-line2"></div>
      </div>
    </div>
    <div class="product-bottom-container">
      <div class="product-aside-nav">
        <div class="level-1-list">
          <div v-for="(item, index) in catogorys" class="level-1-item" v-on:click="level1SelectAction(index)"
            :key="index">
            <div class="level-1-title" :class="{ active: level1SelectIndex == index }">
              <div :class="{ active: level1SelectIndex == index }" class="level-1-text">{{ item.title }} </div>
            </div>
            <div class="level-2-list">
              <div v-for="(item2, index2) in item.children" class="level-2-item" :key="index2"
                v-on:click="level2SelectAction(index2, $event)">
                <div class="level-2-title" :class="{ active: level2SelectIndex == index2 }"
                  :style="{ height: level1SelectIndex == index ? 'calc(' + (isPC ? 34 : 4.533) + (isPC ? 'px' : 'vw') + ')' : '0' }">
                  <img v-if="item2.children != null" class="level-2-icon level-2-icon-default"
                    src="/assets/product/nav-arrow-right.png" alt="">
                  <img v-if="item2.children != null" class="level-2-icon level-2-icon-active"
                    src="/assets/product/nav-arrow-bottom.png" alt="">
                  <div :class="{ active: level2SelectIndex == index2 }" class="level-2-text"
                    :style="{ height: level1SelectIndex == index ? 'calc(' + (isPC ? 34 : 4.533) + (isPC ? 'px' : 'vw') + ')' : '0' }">
                    {{ item2.title }} </div>
                </div>
                <div class="level-3-list" style="display: block;">
                  <div v-for="(item3, index3) in item2.children" class="level-3-item" :key="index3"
                    v-on:click="level3SelectAction(index3, $event)">
                    <div class="level-3-title" :class="{ active: level3SelectIndex == index3 }">
                      <div class="level-3-text"
                        :style="{ height: item3.key == String((level1SelectIndex || 0) + 1) && level2SelectIndex == index2 ? (isPC ? '34px' : '4.533vw') : '0' }">
                        {{
                          item3.title }}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="product-aside-list">
        <a-empty v-if="showProducts.length === 0" description="暂无数据"/>
        <div v-for="(item, index) in showProducts" class="product-item">
          <span class="news">NEW</span>
          <img class="product-img" :src="`${item.image}`" alt="" />
          <div class="product-info">
            <div class="product-title ellipsis-1">{{ item.name }}</div>
            <div class="product-link" target="_blank">
              <span>了解详情</span>
              <img src="@/assets/product/list-arrow-right.png" alt="">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onBeforeMount, onMounted, onBeforeUnmount } from "vue";
const imageModules = import.meta.glob('@/assets/product/*.{jpg,jpeg,png,webp}', { eager: true });

// 提取并排序
const sortedImages = Object.entries(imageModules)
  .filter(([path, module]) => {
    const fileName = path.split('/').pop();
    const num = parseInt(fileName.match(/\d+/)?.[0])
    return !isNaN(num)
  })
  .map(([path, module]) => {
    // 从路径中提取文件名，然后提取数字
    const fileName = path.split('/').pop();
    const num = parseInt(fileName.match(/\d+/)?.[0]);
    console.log(fileName,num)
    return { num, image: module.default };
  })
  .sort((a, b) => a.num - b.num)
  .map(item => item.image);

const catogorys = ref([
  {
    key: '1',
    cid1: '100',
    title: '基础性能检测',
    children: [
      {
        key: '1',
        cid2: '101',
        title: '力学性能分析检测系列',
      },
      {
        key: '1',
        cid2: '102',
        title: '耐久性及其他性能分析检测系列',
      },
      {
        key: '1',
        cid2: '103',
        title: '化学性能分析检测系列',
      },
    ],
  },
  {
    key: '2',
    title: '材料制备与加工',
    children: [
      {
        key: '2',
        cid2: '200',
        title: '材料加工系列',
        children: [
          {
            key: '2',
            cid3: '201',
            title: '切磨抛',
          },
          {
            key: '2',
            cid3: '202',
            title: '破、研磨、压片',
          },
          {
            key: '2',
            cid3: '203',
            title: '高温烧结炉设备',
          },
        ]
      },
      {
        key: '2',
        cid2: '204',
        title: '材料成型系列',
      },
      {
        key: '2',
        cid2: '205',
        title: '材料分离系列',
      },
      {
        key: '2',
        cid2: '206',
        title: '材料混合系列',
      },
    ],
  },
  {
    key: '3',
    cid1: '300',
    title: '环境控制设备',
    children: [
      {
        key: '3',
        cid2: '301',
        title: '恒控系统系列',
        children: [
          {
            key: '3',
            cid3: '302',
            title: '箱体',
          },
          {
            key: '3',
            cid3: '303',
            title: '机体',
          },
          {
            key: '3',
            cid3: '304',
            title: '锅炉',
          },
        ],
      },
      {
        key: '3',
        cid2: '305',
        title: '无菌环境系列',
      },
      {
        key: '3',
        cid2: '306',
        title: '气体环境系列',
      },
    ],
  },
  {
    key: '4',
    title: '微观分析检测',
    cid1: '400',
    children: [
      {
        key: '4',
        cid2: '401',
        title: '显微镜系列',
        children: [
          {
            key: '4',
            cid3: '402',
            title: '光学显微镜',
          },
          {
            key: '4',
            cid3: '403',
            title: '金相显微镜',
          },
          {
            key: '4',
            cid3: '404',
            title: '电子显微镜',
          },
        ],
      },
      {
        key: '4',
        cid2: '405',
        title: '元素分析检测系列',
      },
      {
        key: '4',
        cid2: '406',
        title: '内部结构分析检测系列',
        children: [
          {
            key: '4',
            cid3: '407',
            title: 'CT、X光、核磁等成像相关',
          },
        ],
      },
    ],
  },
  {
    key: '5',
    cid1: '400',
    title: '科睿定制系列-定制化解决方案',
  },
]);


const products = ref([
  {
    cid1: "100",
    cid2: "102",
    cid3: null,
    name: "混凝土（砂浆）3D打印系统(CR-3DPM)桌面级",
    image: sortedImages[0]
  },
  {
    cid1: "100",
    cid2: "102",
    cid3: null,
    name: "混凝土（砂浆）3D打印系统(CR-3DPM)实验室级",
    image: sortedImages[1]
  },
  {
    cid1: "100",
    cid2: "102",
    cid3: null,
    name: "表层混凝土透气系数测试仪（型号：CR-SCA）",
    image: sortedImages[2]
  },
  {
    cid1: "100",
    cid2: "102",
    cid3: null,
    name: "表层混凝土透水系数测试仪（型号：CR-SCW）",
    image: sortedImages[3]
  },
  {
    cid1: "100",
    cid2: "102",
    cid3: null,
    name: "表层混凝土透水系数测试仪（型号：CR-SCW）",
    image: sortedImages[4]
  },
  {
    cid1: "100",
    cid2: "102",
    cid3: null,
    name: "表层混凝土透气透水系数测试仪（型号：CR-SCAW）",
    image: sortedImages[5]
  },
  {
    cid1: "100",
    cid2: "102",
    cid3: null,
    name: "表层混凝土离子渗透性测试仪（型号：CR-SCI）",
    image: sortedImages[6]
  },
  {
    cid1: "100",
    cid2: "102",
    cid3: null,
    name: "非接触混凝土波纹管收缩膨胀测定仪（型号：CR-BSC）",
    image: sortedImages[7]
  },
  {
    cid1: "100",
    cid2: "102",
    cid3: null,
    name: "非接触混凝土（砂浆）波纹管收缩膨胀测定仪（型号：CR-BSCM）",
    image: sortedImages[8]
  },
  {
    cid1: "100",
    cid2: "102",
    cid3: null,
    name: "非接触混凝土收缩膨胀测定仪（型号：CR-NES）",
    image: sortedImages[9]
  },
  {
    cid1: "100",
    cid2: "102",
    cid3: null,
    name: "混凝土氯离子电通量测定仪（型号：CR-RCP）",
    image: sortedImages[10]
  },
  {
    cid1: "100",
    cid2: "102",
    cid3: null,
    name: "混凝土氯离子扩散系数测定仪（型号：CR-RCMN）",
    image: sortedImages[11]
  },
  {
    cid1: "100",
    cid2: "102",
    cid3: null,
    name: "混凝土氯离子渗透性综合测定仪（型号：CR-RCMPN）",
    image: sortedImages[12]
  },
  {
    cid1: "100",
    cid2: "102",
    cid3: null,
    name: "全自动混凝土真空饱水仪（型号：CR-BSY）",
    image: sortedImages[13]
  },
  {
    cid1: "100",
    cid2: "102",
    cid3: null,
    name: "混凝土碳化试验箱（型号：CR-HTX）",
    image: sortedImages[14]
  },
  {
    cid1: "100",
    cid2: "102",
    cid3: null,
    name: "混凝土硫酸盐干湿循环试验机（型号：CR-LSB）",
    image: sortedImages[15]
  },
  {
    cid1: "100",
    cid2: "102",
    cid3: null,
    name: "慢速冻融试验机（型号：CR-HDM）",
    image: sortedImages[16]
  },
  {
    cid1: "100",
    cid2: "102",
    cid3: null,
    name: "混凝土快速冻融试验机（型号：CR-HDK）",
    image: sortedImages[17]
  },
  {
    cid1: "100",
    cid2: "102",
    cid3: null,
    name: "混凝土单面冻融试验机（型号：CR-HDD）",
    image: sortedImages[18]
  },
  {
    cid1: "100",
    cid2: "102",
    cid3: null,
    name: "混凝土绝热温升测定仪（型号：CR-ATC）",
    image: sortedImages[19]
  },
  {
    cid1: "100",
    cid2: "102",
    cid3: null,
    name: "混凝土热物理参数测定仪（型号：CR-TPC）",
    image: sortedImages[20]
  },
  {
    cid1: "100",
    cid2: "102",
    cid3: null,
    name: "混凝土（砂浆）碱骨料反应试验箱（型号：CR-ARC）",
    image: sortedImages[21]
  },
  {
    cid1: "100",
    cid2: "102",
    cid3: null,
    name: "混凝土徐变测定仪（型号：CR-XB）",
    image: sortedImages[22]
  },
  {
    cid1: "100",
    cid2: "102",
    cid3: null,
    name: "混凝土早期抗裂试模（型号：CR-KL）",
    image: sortedImages[23]
  },
  {
    cid1: "100",
    cid2: "102",
    cid3: null,
    name: "混凝土气体渗透测定仪（型号：CR-GPC）",
    image: sortedImages[24]
  },
  {
    cid1: "100",
    cid2: "102",
    cid3: null,
    name: "混凝土结构耐久性综合环境模拟试验系统（型号：CR-CES）",
    image: sortedImages[25]
  },
  {
    cid1: "100",
    cid2: "102",
    cid3: null,
    name: "混凝土硫酸盐（海水）应力耦合试验系统（型号：CR-LSC）",
    image: sortedImages[26]
  },
  {
    cid1: "100",
    cid2: "102",
    cid3: null,
    name: "混凝土硫酸盐有压变温干湿循环试验系统（型号：CR-LIP）",
    image: sortedImages[27]
  },
  {
    cid1: "100",
    cid2: "102",
    cid3: null,
    name: "混凝土多因素耦合侵蚀试验系统（型号：CR-SPE）",
    image: sortedImages[28]
  },
  {
    cid1: "100",
    cid2: "102",
    cid3: null,
    name: "混凝土加速腐蚀箱（型号：CR-FSK）",
    image: sortedImages[29]
  },
  {
    cid1: "100",
    cid2: "102",
    cid3: null,
    name: "钢筋混凝土电化学快速腐蚀测定仪（型号：CR-COR）",
    image: sortedImages[30]
  },
  {
    cid1: "100",
    cid2: "102",
    cid3: null,
    name: "非接触砂浆波纹管收缩膨胀测定仪（型号：CR-BSM）",
    image: sortedImages[31]
  },
  {
    cid1: "100",
    cid2: "102",
    cid3: null,
    name: "全自动立式收缩膨胀测定仪（型号：CR-VES）",
    image: sortedImages[32]
  },
  {
    cid1: "100",
    cid2: "102",
    cid3: null,
    name: "激光收缩膨胀测定仪（型号：CR-LSE）",
    image: sortedImages[33]
  },
  {
    cid1: "100",
    cid2: "102",
    cid3: null,
    name: "硬化混凝土气泡间距系数分析仪（型号：CR-457）",
    image: sortedImages[34]
  },
  {
    cid1: "100",
    cid2: "102",
    cid3: null,
    name: "硬智能混凝土凝结时间测定仪（型号：CR-IST）",
    image: sortedImages[35]
  },
  {
    cid1: "100",
    cid2: "102",
    cid3: null,
    name: "Marriott新型混凝土透水系数测定仪（型号：CR-CWM）",
    image: sortedImages[36]
  },
  {
    cid1: "100",
    cid2: "102",
    cid3: null,
    name: "混凝土双卧轴试验用搅拌机（型号：CR-HJS60）",
    image: sortedImages[37]
  },
  {
    cid1: "100",
    cid2: "102",
    cid3: null,
    name: "混凝土（水泥）标准养护箱（型号：CR-SCB）",
    image: sortedImages[38]
  },
  {
    cid1: "100",
    cid2: "102",
    cid3: null,
    name: "可调式混凝土（水泥）养护箱（型号：CR-TCB）",
    image: sortedImages[39]
  },
  {
    cid1: "100",
    cid2: "102",
    cid3: null,
    name: "混凝土氯离子含量快速测定仪（型号：CR-RCT）",
    image: sortedImages[40]
  },
  {
    cid1: "100",
    cid2: "102",
    cid3: null,
    name: "氯离子自动电位滴定仪（型号：CR-APT）",
    image: sortedImages[41]
  },
  {
    cid1: "100",
    cid2: "102",
    cid3: null,
    name: "混凝土碱含量快速测定仪（型号：CR-RAT）",
    image: sortedImages[42]
  },
  {
    cid1: "100",
    cid2: "102",
    cid3: null,
    name: "新拌混凝土水胶（灰）比/单位用水量测定仪（型号：CR-WBR）",
    image: sortedImages[43]
  },
  {
    cid1: "100",
    cid2: "102",
    cid3: null,
    name: "砂浆流变仪（型号：CR-LBM）",
    image: sortedImages[44]
  },
  {
    cid1: "100",
    cid2: "102",
    cid3: null,
    name: "混凝土流变仪（型号：CR-LBC）",
    image: sortedImages[45]
  },
  {
    cid1: "100",
    cid2: "102",
    cid3: null,
    name: "混凝土特定环境养护箱（型号：CR-SEC）",
    image: sortedImages[46]
  },
  {
    cid1: "100",
    cid2: "102",
    cid3: null,
    name: "混凝土快速冻融试验机（型号：CR-HDK）",
    image: sortedImages[47]
  }
]);

const showProducts = computed(() => {
  if (level3SelectIndex.value != null && level2SelectIndex.value != null && level1SelectIndex.value != null) {
    const cid1 = catogorys.value[level1SelectIndex.value].cid1;
    const cid2 = catogorys.value[level1SelectIndex.value].children[level2SelectIndex.value].cid2;
    const cid3 = catogorys.value[level1SelectIndex.value].children[level2SelectIndex.value].children[level3SelectIndex.value].cid3;
    return products.value.filter(product => {
      return product.cid1 === cid1 &&
        product.cid2 === cid2 &&
        product.cid3 === cid3;
    });
  } else if (level2SelectIndex.value != null && level1SelectIndex.value != null) {
    const cid1 = catogorys.value[level1SelectIndex.value].cid1;
    const cid2 = catogorys.value[level1SelectIndex.value].children[level2SelectIndex.value].cid2;
    
    return products.value.filter(product => {
      return product.cid1 === cid1 &&
        product.cid2 === cid2;
    });
  } else {
    const cid1 = catogorys.value[level1SelectIndex.value].cid1;
    return products.value.filter(product => {
      return product.cid1 === cid1;
    });
  }
});

const level1SelectIndex = ref<number | null>(0);

const level2SelectIndex = ref<number | null>(null);

const level3SelectIndex = ref<number | null>(null);

const isPC = ref(true);

const updateImageSource = () => {
  if (window.innerWidth <= 750) {
    isPC.value = false;
  } else {
    isPC.value = true;
  }
};
onBeforeMount(() => {
  updateImageSource();
});
onMounted(() => {
  updateImageSource(); // Set the initial image
  window.addEventListener("resize", updateImageSource);
  console.log("sortedImages",sortedImages)
});


onBeforeUnmount(() => {
  window.removeEventListener("resize", updateImageSource);
});

const level1SelectAction = (index: number) => {
  if (level1SelectIndex.value != index) {
    level1SelectIndex.value = index
  } else {
    return;
  }
  level2SelectIndex.value = null
  level3SelectIndex.value = null
}

const level2SelectAction = (index: number, event: MouseEvent) => {
  event.stopPropagation();

  if (level2SelectIndex.value == index) {
    var children = catogorys.value[level1SelectIndex.value!].children
    if (children != null && children[level2SelectIndex.value].children != null) {
      level2SelectIndex.value = null
    }
  } else {
    level2SelectIndex.value = index
  }
  console.log('index1:', level1SelectIndex.value, 'index2:', level2SelectIndex.value);
  catogorys.value[level1SelectIndex.value]
  level3SelectIndex.value = null
}

const level3SelectAction = (index: number, event: MouseEvent) => {
  event.stopPropagation();
  if (level3SelectIndex.value != index) {
    level3SelectIndex.value = index
  }
}



</script>

<style scoped lang="less">
.product {
  background: #f7f7f7;
  padding-bottom: 68px;

  .common-title {
    margin: auto;
    padding-top: 30px;
    max-width: 1400px;
    display: flex;
    flex-direction: column;
    align-items: center;

    .common-title-text {
      font-size: 32px;
      font-family: Microsoft YaHei-Bold, Microsoft YaHei;
      font-weight: bold;
      color: #333333;
      line-height: 32px;
    }

    .common-title-line {
      display: flex;
      justify-content: center;
      margin-top: 10px;

      .common-title-line1 {
        width: 32px;
        height: 3px;
        background: #94C33A;
      }

      .common-title-line2 {
        width: 16px;
        height: 3px;
        background: #284186;
      }
    }

  }

  .product-bottom-container {

    margin: auto;
    padding: 20px;
    max-width: 1400px;
    margin-top: 64px;
    display: flex;

    .product-aside-nav {
      align-self: flex-start;
      width: 224px;
      margin-right: 16.8px;
      background: #fff;

      .level-1-list {
        .level-1-item {
          cursor: pointer;

          .level-1-title {
            padding-left: 16px;
            position: relative;

            .level-1-text {
              line-height: 22px;
              font-size: 14px;
              font-family: Microsoft YaHei-Regular, Microsoft YaHei;
              font-weight: 400;
              color: #333333;
              padding: 8px 0;
              padding-right: 16px;
            }
          }

          .level-1-title.active {
            background: #284186;

            .level-1-text {
              color: #fff;
              font-weight: bold;
            }
          }

          // .level-1-title.active+.level-2-list {
          //   display: block;
          // }

          .level-2-list {
            // display: none;

            .level-2-item {
              cursor: pointer;

              .level-2-title {
                padding-left: 22.4px;
                position: relative;
                transition: all 0.3s;
                overflow: hidden;

                .level-2-icon {
                  position: absolute;
                  top: 7.6px;
                  left: 0;
                  width: 19.2px;
                  height: 19.2px;
                }

                img {
                  vertical-align: middle;
                  border: 0;
                  max-width: 100%;
                  height: auto;
                  display: block;
                }

                .level-2-icon-active {
                  display: none;
                }

                .level-2-text {
                  line-height: 33.4px;
                  font-size: 13px;
                  font-family: Microsoft YaHei-Regular, Microsoft YaHei;
                  font-weight: 400;
                  color: #666666;
                }

                a {
                  color: #0062cc;
                  text-decoration: none;
                  background-color: transparent;
                  display: block;
                }
              }

              .level-2-title.active {
                .level-2-icon-default {
                  display: none;
                }

                .level-2-icon-active {
                  display: inline-block;
                }

                .level-2-text {
                  color: #284186;
                  transition: all 0.6s;
                }
              }

              .level-3-list {
                display: block;

                .level-3-item {
                  display: flex;
                  align-items: center;

                  .level-3-title {
                    padding-left: 22.4px;
                    padding-right: 12px;

                    .level-3-text {
                      line-height: 24px;
                      font-size: 14.4px;
                      font-family: Microsoft YaHei-Regular, Microsoft YaHei;
                      font-weight: 400;
                      color: #666666;
                      display: -webkit-box;
                      -webkit-box-orient: vertical;
                      text-overflow: ellipsis;
                      overflow: hidden;
                      -webkit-line-clamp: 1;
                      transition: all 0.3s;
                    }
                  }

                  .level-3-title.active {

                    .level-3-text {
                      color: #284186;
                    }
                  }
                }
              }
            }
          }
        }

        .level-1-item+.level-1-item {
          border-top: 1px solid rgba(40, 65, 134, 0.1);
        }
      }
    }

    .product-aside-list {
      flex: 1;
      display: grid;
      // flex-wrap: wrap;
      align-items: center;
      justify-content: center;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      row-gap: 17px;
      column-gap: 17px;

      .product-item {
        background-color: white;
        min-height: 300px;
        // width: 30%;
        position: relative;
        cursor: pointer;
        overflow: hidden;

        .news {
          position: absolute;
          top: 10px;
          left: 10px;
          font-size: 14px;
          color: #ccc;
          font-weight: bold;
          z-index: 9;
        }

        .product-img {
          width: 100%;
          height: 220px;
          transition: 0.4s;
        }

        .product-info {
          padding: 0 10px;
          padding-top: 16px;

          .product-title {
            transition: 0.3s;
            font-size: 12px;
            font-family: Microsoft YaHei-Regular, Microsoft YaHei;
            font-weight: 400;
            color: #333333;
            margin-bottom: 12.8px;
            min-height: 28px;
            text-align: left;
          }

          .ellipsis-1 {
            overflow: hidden;
            // white-space: nowrap;
            // text-overflow: ellipsis;
          }

          .product-link {
            transition: 0.4s;
            border-top: 1px solid rgba(0, 0, 0, 0.1);
            height: 33.6px;
            transition: 0.3s;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 11.2px;
            font-family: Microsoft YaHei-Regular, Microsoft YaHei;
            font-weight: 400;
            color: #666666;

            img {
              width: 14.4px;
            }
          }
        }
      }

      .product-item:hover {
         box-shadow: 0 0 0 1px #284186;
        .product-title {
          color: #284186;
        }

        .product-link {
          color: #284186;
        }
      }
    }
  }
}


@media screen and (max-width: 750px) {
  .product {
    padding-bottom: 9.067vw;

    .common-title {
      padding-top: 4vw;
      max-width: 186.667vw;

      .common-title-text {
        font-size: 4.267vw;
        line-height: 4.267vw;
      }

      .common-title-line {
        margin-top: 1.333vw;

        .common-title-line1 {
          width: 4.267vw;
          height: 0.4vw;
        }

        .common-title-line2 {
          width: 2.133vw;
          height: 0.4vw;
        }
      }

    }

    .product-bottom-container {

      margin: auto;
      padding: 2.667vw;
      max-width: 186.667vw;
      margin-top: 8.533vw;
      display: flex;
      flex-direction: column;
      gap: 2.667vw;

      .product-aside-nav {
        align-self: center;
        width: 100%;
        margin-right: 0;
        background: #fff;

        .level-1-list {
          .level-1-item {
            cursor: pointer;

            .level-1-title {
              padding-left: 2.133vw;
              position: relative;

              .level-1-text {
                line-height: 3.933vw;
                font-size: 1.867vw;
                font-family: Microsoft YaHei-Regular, Microsoft YaHei;
                font-weight: 400;
                color: #333333;
                padding: 3.067vw 0;
                padding-right: 2.133vw;
              }
            }

            .level-1-title.active {
              background: #284186;

              .level-1-text {
                color: #fff;
                font-weight: bold;
              }
            }

            // .level-1-title.active+.level-2-list {
            //   display: block;
            // }

            .level-2-list {
              // display: none;

              .level-2-item {
                cursor: pointer;

                .level-2-title {
                  padding-left: 2.987vw;
                  position: relative;
                  transition: all 0.3s;
                  overflow: hidden;

                  .level-2-icon {
                    position: absolute;
                    top: 1.013vw;
                    left: 0;
                    width: 2.56vw;
                    height: 2.56vw;
                  }

                  img {
                    vertical-align: middle;
                    border: 0;
                    max-width: 100%;
                    height: auto;
                    display: block;
                  }

                  .level-2-icon-active {
                    display: none;
                  }

                  .level-2-text {
                    line-height: 4.453vw;
                    font-size: 1.733vw;
                    font-family: Microsoft YaHei-Regular, Microsoft YaHei;
                    font-weight: 400;
                    color: #666666;
                  }

                  a {
                    color: #0062cc;
                    text-decoration: none;
                    background-color: transparent;
                    display: block;
                  }
                }

                .level-2-title.active {
                  .level-2-icon-default {
                    display: none;
                  }

                  .level-2-icon-active {
                    display: inline-block;
                  }

                  .level-2-text {
                    color: #284186;
                    transition: all 0.6s;
                  }
                }

                .level-3-list {
                  display: block;

                  .level-3-item {
                    display: flex;
                    align-items: center;

                    .level-3-title {
                      padding-left: 2.987vw;
                      padding-right: 1.6vw;

                      .level-3-text {
                        line-height: 3.2vw;
                        font-size: 1.92vw;
                        font-family: Microsoft YaHei-Regular, Microsoft YaHei;
                        font-weight: 400;
                        color: #666666;
                        display: -webkit-box;
                        -webkit-box-orient: vertical;
                        text-overflow: ellipsis;
                        overflow: hidden;
                        -webkit-line-clamp: 1;
                        transition: all 0.3s;
                      }
                    }

                    .level-3-title.active {

                      .level-3-text {
                        color: #284186;
                      }
                    }
                  }
                }
              }
            }
          }

          .level-1-item+.level-1-item {
            border-top: 1px solid rgba(40, 65, 134, 0.1);
          }
        }
      }

      .product-aside-list {
        flex: 1;
        display: flex;
        flex-wrap: wrap;
        row-gap: 2.267vw;
        column-gap: 2.267vw;

        .product-item {
          background-color: white;
          width: 100%;
          min-height: auto;
          position: relative;
          cursor: pointer;
          overflow: hidden;

          .news {
            position: absolute;
            top: 1.333vw;
            left: 1.333vw;
            font-size: 1.867vw;
            color: #ccc;
            font-weight: bold;
          }

          .product-img {
            width: 100%;
            // height: 29.333vw;
            transition: 0.4s;
          }

          .product-info {
            padding: 0 1.333vw;
            padding-top: 2.133vw;

            .product-title {
              transition: 0.3s;
              font-size: 2.133vw;
              font-family: Microsoft YaHei-Regular, Microsoft YaHei;
              font-weight: 400;
              color: #333333;
              margin-bottom: 1.707vw;
              min-height: 2.333vw;
              text-align: center;
            }

            .ellipsis-1 {
              overflow: hidden;
              white-space: nowrap;
              text-overflow: ellipsis;
            }

            .product-link {
              transition: 0.4s;
              border-top: 1px solid rgba(0, 0, 0, 0.1);
              height: 4.48vw;
              transition: 0.3s;
              display: flex;
              justify-content: center;
              align-items: center;
              font-size: 1.493vw;
              font-family: Microsoft YaHei-Regular, Microsoft YaHei;
              font-weight: 400;
              color: #666666;

              img {
                width: 1.92vw;
              }
            }
          }
        }

        .product-item:hover {
          // .product-img {
          //   transform: scale(1.1);
          // }

          .product-title {
            color: #284186;
            // font-weight: 600;
          }

          .product-link {
            color: #284186;
          }
        }
      }
    }
  }
}
</style>
