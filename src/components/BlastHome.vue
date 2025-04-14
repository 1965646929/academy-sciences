<template>
  <div class="blastHome">
    <div class="blastHomeContent">
      <div class="blastTop">
        <el-row :gutter="20">
          <el-col :span="12">
            <div class="topLeft">
              <h3>BLAST序列比对工具</h3>
              <p class="textContent">
                <span class="enStyle">BLAST（Basic Local Alignment Search Tool）</span>
                通过核苷酸或蛋白质序列与数据库的比对，依据序列相似性推断其生物学意义。
              </p>
            </div>
          </el-col>
          <el-col :span="12">
            <div class="topRight">
              <el-row :gutter="5">
                <el-col :span="8">
                  <div class="dataList vertailLine">
                    <div class="number">1101</div>
                    <div class="title">数据库</div>
                  </div>
                </el-col>
                <el-col :span="8">
                  <div class="dataList vertailLine">
                    <div class="number">380</div>
                    <div class="title">特色数据库</div>
                  </div>
                </el-col>
                <el-col :span="8">
                  <div class="dataList">
                    <div class="number">721</div>
                    <div class="title">常用数据库</div>
                  </div>
                </el-col>
              </el-row>
              <el-row :gutter="5">
                <el-col :span="4" v-for="(item, index) in bottomList" :key="index">
                  <div class="bottomWrap">
                    <div class="bottomNumber">{{ item.number }}</div>
                    <div class="bottomName">{{ item.name }}</div>
                  </div>
                </el-col>
              </el-row>
            </div>
          </el-col>
        </el-row>
      </div>
      <el-row :gutter="20">
        <el-col :span="6" v-for="(item, index) in cardList" :key="index">
          <div class="cardItem">
            <div class="imgContent">
              <img :src="item.imgUrl" alt="" />
            </div>
            <div class="cardName">{{ item.name }}</div>
            <div class="cardTag">{{ item.tag }}</div>
            <div class="cardNumber">{{ item.number }}</div>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      bottomList: [
        {
          name: "人",
          number: "4",
        },
        {
          name: "真菌",
          number: "4",
        },
        {
          name: "病毒",
          number: "13",
        },
        {
          name: "动物",
          number: "34",
        },
        {
          name: "植物",
          number: "1011",
        },
        {
          name: "原生物",
          number: "4",
        },
      ],
      cardList: [
        {
          name: "核苷酸 BLAST",
          imgUrl: require("@/assets/imgs/01-afcff60e-balabala.jpg"),
          number: "e.g., SARS-CoV-2 (C_AA019067.1)",
          tag: "核苷酸",
        },
        {
          name: "蛋白质 BLAST",
          imgUrl: require("@/assets/imgs/02-bfaf862c-balabala.jpg"),
          number: "e.g., SARS-CoV-2 (C_AA019067.1)",
          tag: "蛋白质",
        },
        {
          name: "BLASTX",
          imgUrl: require("@/assets/imgs/03-98183649-balabala.jpg"),
          number: "e.g., SARS-CoV-2 (C_AA019067.1)",
          tag: "翻译后核苷酸",
        },
        {
          name: "TBLASTN",
          imgUrl: require("@/assets/imgs/04-8b4fb40a-balabala.jpg"),
          number: "e.g., SARS-CoV-2 (C_AA019067.1)",
          tag: "蛋白质",
        },
      ],
    };
  },
};
</script>
<style lang="less" scoped>
.blastHome {
  height: 650px;
  background: url("../assets/imgs/bg1-93867b2a-balabala.png") no-repeat fixed !important;
  background-size: cover !important;
  width: 100%;
  .blastHomeContent {
    width: 1200px;
    margin-left: auto !important;
    margin-right: auto !important;
    padding: 30px 0;
    .blastTop {
      height: 200px;
      display: flex;
      align-items: center;
      margin-bottom: 40px;
      .topLeft {
        margin-top: 25px;
        h3 {
          font-size: 28px;
          font-weight: 700;
          color: #000;
        }
        .textContent {
          font-size: 16px;
          font-weight: lighter;
          line-height: 30px;
          color: #333;
          margin-top: 30px;
          .enStyle {
            font-weight: 600;
          }
        }
      }
      .topRight {
        .vertailLine {
          border-right: 1px solid #999;
        }
        .dataList {
          height: 60px;
          margin-top: 8px;
          .number {
            font-size: 35px;
            // padding-bottom: 5px;
            color: #555;
            text-align: center;
            font-weight: 700;
          }
          .title {
            font-size: 1.2rem;
            color: #555;
            text-align: center;
            font-weight: 700;
          }
        }
      }
    }
    .bottomWrap {
      height: 60px;
      text-align: center;
      margin-top: 40px;
      .bottomNumber {
        font-weight: normal;
        font-size: 28px;
      }
      .bottomName {
        font-weight: normal;
        font-size: 16px;
      }
    }
    .cardItem {
      box-shadow: 0 0 1rem #ccc;
      border-radius: 5px;
      background-color: #fff;
      text-align: center;
      padding-bottom: 20px;
      .imgContent {
        width: 285px;
        height: 164px;
        overflow: hidden;
        img {
          width: 285px;
          height: 164px;
          &:hover {
            transition: 0.5s;
            transform: scale(1.1);
          }
        }
      }
      .cardName {
        font-size: 21px;
        color: #333;
        font-weight: 500;
        padding-top: 15px;
      }
      .cardTag {
        color: #37536a;
        font-weight: bolder;
        font-size: 13px;
        padding: 5px 0;
      }
      .cardNumber {
      }
    }
  }
}
</style>
