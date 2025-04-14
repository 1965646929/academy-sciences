<template>
  <div class="homeSource">
    <div class="sourceContent">
      <div class="sourceLeft">
        <h3 class="sourceTitle">
          <i class="el-icon-d-arrow-right"></i>
          数据资源
        </h3>
        <el-collapse v-model="activeNames" @change="handleChange">
          <el-collapse-item
            v-for="item in dataSourceList"
            :title="item.name"
            :name="item.name"
            :key="item.name"
          >
            <div
              class="collapseItem"
              v-for="collapseItem in item.children"
              :key="collapseItem.name"
            >
              {{ collapseItem.name }}
            </div>
          </el-collapse-item>
        </el-collapse>
      </div>
      <div class="sourceRight">
        <h3 class="sourceTitle">
          <i class="el-icon-star-on"></i>
          热门资源
        </h3>
        <div class="hotSource">
          <div class="hotItem" v-for="(hotSource, index) in hotSourceList" :key="index">
            <div class="hotLeft">
              <img :src="hotSource.imgUrl" alt="" />
            </div>
            <div class="hotRight">
              <div class="top">{{ hotSource.EName }}</div>
              <div class="bottom">{{ hotSource.CName }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeNames: [],
      dataSourceList: [
        {
          name: "原始数据",
          children: [
            {
              name: "BioCode",
              url: "",
            },
            {
              name: "BioProject",
            },
            {
              name: "BioSample",
            },
            {
              name: "BaseData",
            },
          ],
        },
        {
          name: "基因组和变异",
          children: [
            {
              name: "BioCode",
              url: "",
            },
            {
              name: "BioProject",
            },
            {
              name: "BioSample",
            },
            {
              name: "BaseData",
            },
          ],
        },
        {
          name: "基因表达",
          children: [
            {
              name: "BioCode",
              url: "",
            },
            {
              name: "BioProject",
            },
            {
              name: "BioSample",
            },
            {
              name: "BaseData",
            },
          ],
        },
        {
          name: "非编码RAN",
          children: [
            {
              name: "BioCode",
              url: "",
            },
            {
              name: "BioProject",
            },
            {
              name: "BioSample",
            },
            {
              name: "BaseData",
            },
          ],
        },
        {
          name: "表观基因组",
          children: [
            {
              name: "BioCode",
              url: "",
            },
            {
              name: "BioProject",
            },
            {
              name: "BioSample",
            },
            {
              name: "BaseData",
            },
          ],
        },
        {
          name: "单细胞组学",
          children: [
            {
              name: "BioCode",
              url: "",
            },
            {
              name: "BioProject",
            },
            {
              name: "BioSample",
            },
            {
              name: "BaseData",
            },
          ],
        },
        {
          name: "生物多样性和生物合成",
          children: [
            {
              name: "BioCode",
              url: "",
            },
            {
              name: "BioProject",
            },
            {
              name: "BioSample",
            },
            {
              name: "BaseData",
            },
          ],
        },
        {
          name: "健康和疾病",
          children: [
            {
              name: "BioCode",
              url: "",
            },
            {
              name: "BioProject",
            },
            {
              name: "BioSample",
            },
            {
              name: "BaseData",
            },
          ],
        },
        {
          name: "文献和教育",
          children: [
            {
              name: "BioCode",
              url: "",
            },
            {
              name: "BioProject",
            },
            {
              name: "BioSample",
            },
            {
              name: "BaseData",
            },
          ],
        },
        {
          name: "工具",
          children: [
            {
              name: "BioCode",
              url: "",
            },
            {
              name: "BioProject",
            },
            {
              name: "BioSample",
            },
            {
              name: "BaseData",
            },
          ],
        },
      ],
      hotSourceList: [
        {
          imgUrl: require("@/assets/imgs/biocode.svg"),
          EName: "BioCode",
          CName: "生物工具软件",
        },
        {
          imgUrl: require("@/assets/imgs/bioproject.svg"),
          EName: "BioProject",
          CName: "生物项目库",
        },
        {
          imgUrl: require("@/assets/imgs/biosample.svg"),
          EName: "BioSample",
          CName: "生物样本库",
        },
        {
          imgUrl: require("@/assets/imgs/bit.svg"),
          EName: "BIT",
          CName: "生物信息在线分析平台",
        },
        {
          imgUrl: require("@/assets/imgs/dbc.svg"),
          EName: "Database Commons",
          CName: "生物数据库目录",
        },
        {
          imgUrl: require("@/assets/imgs/gen-3.png"),
          EName: "GENBase",
          CName: "基因序列库",
        },
        {
          imgUrl: require("@/assets/imgs/gsa.svg"),
          EName: "GSA",
          CName: "组学原始数据归档库",
        },
        {
          imgUrl: require("@/assets/imgs/gsa-human.svg"),
          EName: "GSA-Human",
          CName: "人类组学原始数据归档库",
        },
        {
          imgUrl: require("@/assets/imgs/gsa-human.svg"),
          EName: "GSA-Human",
          CName: "人类组学原始数据归档库",
        },
        {
          imgUrl: require("@/assets/imgs/gsa.svg"),
          EName: "GSA",
          CName: "组学原始数据归档库",
        },
        {
          imgUrl: require("@/assets/imgs/gsa-human.svg"),
          EName: "GSA-Human",
          CName: "人类组学原始数据归档库",
        },
        {
          imgUrl: require("@/assets/imgs/gsa-human.svg"),
          EName: "GSA-Human",
          CName: "人类组学原始数据归档库",
        },
      ],
    };
  },
  methods: {
    handleChange(val) {
      console.log(val);
    },
  },
};
</script>
<style scoped lang="less">
.homeSource {
  margin-top: 13px;
  .sourceContent {
    width: 1200px;
    margin-left: auto !important;
    margin-right: auto !important;
    display: flex;
    align-items: center;
    justify-content: center;
    .sourceTitle {
      color: rgb(33, 133, 208);
      font-size: 18px;
      font-weight: 700;
      margin-bottom: 5px;
      i {
        font-weight: 700;
      }
    }
    .sourceLeft {
      width: 270px;
      .collapseItem {
        display: inline-block;
        width: 50%;
        color: rgb(65, 131, 196);
        font-size: 14px;
        cursor: pointer;
      }
    }
    .sourceRight {
      flex-grow: 1;
      margin-left: 20px;
      margin-top: 15px;
      .hotSource {
        display: flex;
        flex-wrap: wrap;
        .hotItem {
          width: 290px;
          height: 105px;
          margin-right: 20px;
          &:nth-child(3n + 3) {
            margin-right: 0px;
          }
          display: flex;
          // justify-content: space-around;
          align-items: center;
          border-bottom: 1px solid rgba(34, 36, 38, 0.15);
          .hotLeft {
            margin-right: 30px;
            img {
              width: 80px;
              height: auto;
            }
          }
          .hotRight {
            .top {
              color: rgb(65, 131, 196);
              font-size: 18px;
              font-weight: 700;
            }
          }
        }
      }
    }
  }
}
::v-deep .el-collapse-item__header {
  background: rgb(22, 120, 194);
  color: #fff;
  font-weight: bolder;
  font-size: 14px;
  font-weight: 700;
  margin-bottom: 15px;
  height: 25px;
  line-height: 30px;
  border-radius: 5px;
  padding-left: 15px;
}
::v-deep .el-collapse {
  width: 270px;
}
</style>
<style lang="less"></style>
