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
          <div v-for="(item, index) in products" class="level-1-item" v-on:click="level1SelectAction(index)"
            :key="index">
            <div class="level-1-title" :class="{ active: level1SelectIndex == index }">
              <div :class="{ active: level1SelectIndex == index }" class="level-1-text">{{ item.title }} </div>
            </div>
            <div class="level-2-list">
              <div v-for="(item2, index2) in item.children" class="level-2-item" :key="index2"
                v-on:click="level2SelectAction(index2, $event)">
                <div class="level-2-title" :class="{ active: level2SelectIndex == index2 }"
                  :style="{ height: level1SelectIndex == index ? 'calc(' + (34) + 'px' + ')' : '0' }">
                  <img class="level-2-icon level-2-icon-default" src="/assets/product/nav-arrow-right.png" alt="">
                  <img class="level-2-icon level-2-icon-active" src="/assets/product/nav-arrow-bottom.png" alt="">
                  <div :class="{ active: level2SelectIndex == index2 }" class="level-2-text">{{ item2.title }} </div>
                </div>
                <div class="level-3-list" style="display: block;">
                  <div v-for="(item3, index3) in item2.children" class="level-3-item" :key="index3"
                    v-on:click="level3SelectAction(index3, $event)">
                    <div class="level-3-title" :class="{ active: level3SelectIndex == index3 }">
                      <div class="level-3-text"
                        :style="{ height: item3.key == String((level1SelectIndex || 0) + 1) && level2SelectIndex == index2 ? '34px' : '0' }">
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
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onBeforeMount, onMounted, onBeforeUnmount } from "vue";

const products = ref([
  {
    key: '1',
    title: '基础性能检测',
    children: [
      {
        key: '1',
        title: '力学性能分析检测系列',
      },
      {
        key: '1',
        title: '耐久性及其他性能分析检测系列',
      },
      {
        key: '1',
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
        title: '材料加工系列',
        children: [
          {
            key: '2',
            title: '切磨抛',
          },
          {
            key: '2',
            title: '破、研磨、压片',
          },
          {
            key: '2',
            title: '高温烧结炉设备',
          },
        ]
      },
      {
        key: '2',
        title: '材料成型系列',
      },
      {
        key: '2',
        title: '材料分离系列',
      },
      {
        key: '2',
        title: '材料混合系列',
      },
    ],
  },
  {
    key: '3',
    title: '环境控制设备',
    children: [
      {
        key: '3',
        title: '恒控系统系列',
        children: [
          {
            key: '3',
            title: '箱体',
          },
          {
            key: '3',
            title: '机体',
          },
          {
            key: '3',
            title: '锅炉',
          },
        ],
      },
      {
        key: '3',
        title: '无菌环境系列',
      },
      {
        key: '3',
        title: '气体环境系列',
      },
    ],
  },
  {
    key: '4',
    title: '微观分析检测',
    children: [
      {
        key: '4',
        title: '显微镜系列',
        children: [
          {
            key: '4',
            title: '光学显微镜',
          },
          {
            key: '4',
            title: '金相显微镜',
          },
          {
            key: '4',
            title: '电子显微镜',
          },
        ],
      },
      {
        key: '4',
        title: '元素分析检测系列',
      },
      {
        key: '4',
        title: '内部结构分析检测系列',
        children: [
          {
            key: '4',
            title: 'CT、X光、核磁等成像相关',
          },
        ],
      },
    ],
  },
  {
    key: '5',
    title: '科睿定制系列-定制化解决方案',
  },
]);


const level1SelectIndex = ref<number | null>(0);

const level2SelectIndex = ref<number | null>(0);

const level3SelectIndex = ref<number | null>(0);

const isPC = ref(true);

const updateImageSource = () => {

};
onBeforeMount(() => {
  updateImageSource();
});
onMounted(() => {
  updateImageSource(); // Set the initial image
  window.addEventListener("resize", updateImageSource);
});


onBeforeUnmount(() => {
  window.removeEventListener("resize", updateImageSource);
});

const level1SelectAction = (index: number) => {
  if (level1SelectIndex.value == index) {
    level1SelectIndex.value = null
  } else {
    level1SelectIndex.value = index
  }
  level2SelectIndex.value = null
  level3SelectIndex.value = null
}

const level2SelectAction = (index: number, event: MouseEvent) => {
  event.stopPropagation();
  if (level2SelectIndex.value == index) {
    level2SelectIndex.value = null
  } else {
    level2SelectIndex.value = index
  }
  level3SelectIndex.value = null
}

const level3SelectAction = (index: number, event: MouseEvent) => {
  event.stopPropagation();
  if (level3SelectIndex.value == index) {
    level3SelectIndex.value = null
  } else {
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
  }
}


@media screen and (max-width: 750px) {
  .product {
    background: #f8f8f8;

  }
}
</style>
