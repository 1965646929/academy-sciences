<template>
  <div class="infrastructure">
    <div class="content">
      <h3 class="title">基础设施</h3>
      <p>
        国家基因组科学数据中心不断加强高性能计算与存储能力建设，目前拥有437万亿次/秒的计算能力，约11200个计算核心，46PB的存储资源，1.6Gbps网络带宽，形成了国内领先的生物大数据云计算平台。
      </p>
      <el-row :gutter="20" style="margin: 20px 0">
        <el-col :span="6" v-for="(item, index) in baseList" :key="index">
          <div class="itemContent">
            <div class="top">
              <i :class="item.icon"></i>
            </div>
            <div class="middle">{{ item.number }}</div>
            <div class="bottom">{{ item.name }}</div>
          </div>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="12">
          <h3 class="title">分中心</h3>
          <div class="subCenter" v-for="(item, index) in subList" :key="index">
            <a :href="item.url">{{ item.name }}</a>
          </div>
        </el-col>
        <el-col :span="12">
          <h3 class="title">友情链接</h3>
          <el-select v-model="value" placeholder="其他国家数据中心">
            <el-option
              v-for="item in options"
              :key="item.label"
              :label="item.label"
              :value="item.label"
            >
            </el-option>
          </el-select>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: "",
      options: [
        {
          label: "国家高能物理科学数据中心",
        },
        {
          label: "国家微生物科学数据中心",
        },
        {
          label: "国家空间科学数据中心",
        },
        {
          label: "国家天文科学数据中心",
        },
      ],
      subList: [
        {
          name: " 国家基因组科学数据中心生物多样性分中心",
          url: "https://ngdc.cncb.ac.cn/subcenter/1",
        },
        {
          name: " 国家基因组科学数据中心生物多样性分中心",
          url: "https://ngdc.cncb.ac.cn/subcenter/1",
        },
        {
          name: " 国家基因组科学数据中心生物多样性分中心",
          url: "https://ngdc.cncb.ac.cn/subcenter/1",
        },
        {
          name: " 国家基因组科学数据中心生物多样性分中心",
          url: "https://ngdc.cncb.ac.cn/subcenter/1",
        },
      ],
      baseList: [
        {
          name: "Cores",
          number: "11200",
          icon: "el-icon-s-marketing",
        },
        {
          name: "TFlops",
          number: "437",
          icon: "el-icon-s-opportunity",
        },
        {
          name: "Storage",
          number: "46PB",
          icon: "el-icon-upload",
        },
        {
          name: "Network",
          number: "1.6GB",
          icon: "el-icon-s-operation",
        },
      ],
    };
  },
};
</script>
<style lang="less" scoped>
.infrastructure {
  margin: 20px 0;
  .content {
    width: 1200px;
    margin-left: auto !important;
    margin-right: auto !important;
    .title {
      color: rgb(33, 133, 208);
      font-size: 18px;
      font-weight: 700;
    }
    .itemContent {
      text-align: center;
      .top,
      .middle {
        font-size: 56px;
        color: rgb(0, 181, 173);
      }
      .top {
        margin-bottom: -25px;
      }
      .middle {
        margin-bottom: -15px;
      }
      .bottom {
        font-size: 14px;
        font-weight: 700;
        color: rgba(0, 0, 0, 0.87);
      }
    }
    .subCenter {
      a {
        color: rgb(33, 133, 208);
      }
    }
  }
}
::v-deep .el-select {
  width: 100%;
}
</style>
