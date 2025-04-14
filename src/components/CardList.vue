<template>
  <div class="homeCard">
    <div class="cardContent">
      <div
        class="cardList"
        v-for="item in cardList"
        :key="item.name"
        :title="item.title"
        @click="cardClick(item)"
      >
        <img :src="item.imgSrc" alt="" />
        <div class="content">
          <h3 class="texts">{{ item.name }}</h3>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      cardList: [
        {
          name: "提交",
          imgSrc: require("@/assets/imgs/submit.svg"),
          title: "科学数据汇交",
        },
        {
          name: "科技计划项目数据汇交",
          imgSrc: require("@/assets/imgs/sdas.svg"),
          title: "科学数据汇交服务系统",
        },
        {
          name: "人遗资源信息管理备份",
          imgSrc: require("@/assets/imgs/data.svg"),
          title: "国家人类遗传资源信息一体化管理备份",
        },
        {
          name: "序列搜索比对",
          imgSrc: require("@/assets/imgs/blast.svg"),
          title: "序列比对工具",
        },
        {
          name: "新冠病毒信息库",
          imgSrc: require("@/assets/imgs/rcov19.svg"),
          title: "2019新冠病毒信息库",
        },
        {
          name: "免疫力数字解码",
          imgSrc: require("@/assets/imgs/idp.png"),
          title: "免疫力数字解码重大研究计划",
        },
      ],
    };
  },
  methods: {
    cardClick(item) {
      console.log("item", item);
      if (item.name == "序列搜索比对") {
        window.open("/blast/home");
      }
    },
  },
};
</script>
<style scoped lang="less">
.homeCard {
  margin-top: 13px;
  .cardContent {
    width: 1200px;
    margin-left: auto !important;
    margin-right: auto !important;
    display: flex;
    align-items: center;
    justify-content: center;
    .cardList {
      &:nth-child(1) {
        margin-left: 0px;
      }
      &:nth-child(2n + 1) {
        box-shadow: 0 0 0 1px #d4d4d5, 0 2px 0 0 #2185d0, 0 1px 3px 0 #d4d4d5;
      }
      &:nth-child(2n) {
        box-shadow: 0 0 0 1px #d4d4d5, 0 2px 0 0 #f2711c, 0 1px 3px 0 #d4d4d5;
      }
      &:hover {
        cursor: pointer;
        z-index: 5;
        background: #fff;
        border: none;
        box-shadow: 0 1px 3px 0 #bcbdbd, 0 0 0 1px #d4d4d5;
        transform: translateY(-3px);
      }
      margin-left: 20px;
      // box-shadow: 0 0 0 1px #d4d4d5, 0 2px 0 0 #2185d0, 0 1px 3px 0 #d4d4d5;
      border-radius: 5px;
      img {
        padding: 15px 45px;
        background: linear-gradient(rgba(176, 223, 248, 0.8), rgb(238, 238, 248, 0.1));
        width: 94px;
        height: 87px;
      }
      .content {
        padding: 14px;

        .texts {
          text-align: center;
          height: 46px;
          // line-height: 46px;
          color: #4183c4;
          font-size: 18px;
          font-weight: 700;
        }
      }
    }
  }
}
</style>
<style lang="less"></style>
