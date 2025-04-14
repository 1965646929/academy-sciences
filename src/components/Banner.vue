<template>
  <div class="homeBanner">
    <div class="bannerContent">
      <div class="bannerLeft">
        <p>
          面向我国人口健康和社会可持续发展的重大战略需求，建立生命与健康大数据汇交存储、安全管理、开放共享与整合挖掘研究体系，研发大数据前沿交叉与转化应用的新方法和新技术，建成支撑我国生命科学发展、国际领先的基因组科学数据中心。
        </p>
        <el-input
          placeholder="Find a bioproject,biosample,game protein,tool,database..."
          v-model="input3"
          class="input-with-select"
        >
          <el-select v-model="select" slot="prepend" placeholder="请选择">
            <el-option label="NGDC Datebases" value="1"></el-option>
            <el-option label="Parent Datebases" value="2"></el-option>
            <el-option label="EBI Datebases" value="3"></el-option>
            <el-option label="NCBI Datebases" value="2"></el-option>
            <el-option label="All Datebases" value="3"></el-option>
          </el-select>
          <!-- <el-cascader
            slot="prepend"
            v-model="value"
            :options="options"
            :props="{ expandTrigger: 'hover' }"
            @change="handleChange"
          ></el-cascader> -->
          <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
        <!-- <el-cascader
          v-model="value"
          :options="options"
          :props="{ expandTrigger: 'hover' }"
          @change="handleChange"
        ></el-cascader> -->
        <p class="exmple">
          <a href="https://escience.org.cn/" target="_black">PRJCA000126</a>
          <span>;</span>
          <span>e.g.,;</span>
          <a href="https://escience.org.cn/" target="_black">PRJCA000126</a>
          <span>;</span>
          <a href="https://escience.org.cn/" target="_black">SAMC000385</a>
          <span>;</span>
          <a href="https://escience.org.cn/" target="_black">tp53</a>
          <span>;</span>
          <a href="https://escience.org.cn/" target="_black">EGFR</a>
          <span>;</span>
          <a href="https://escience.org.cn/" target="_black">human</a>
          <span>;</span>
          <a href="https://escience.org.cn/" target="_black">KaKs_Calculator</a>
          <span>;</span>
          <a href="https://escience.org.cn/" target="_black">GenBank</a>
          <span>;</span>
        </p>
      </div>
      <div class="bannerRight">
        <el-carousel trigger="click" height="150px">
          <el-carousel-item v-for="item in carouselList" :key="item">
            <div class="carouselCont">
              <i class="el-icon-message-solid"></i>
              <div>{{ item }}</div>
            </div>
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: [],
      options: [
        {
          value: "NGDC Datebases",
          label: "NGDC Datebases",
          children: [
            {
              value: "ASCancer Atlas",
              label: "ASCancer Atlas",
            },
          ],
        },
        {
          value: "Parent Datebases",
          label: "Parent Datebases",
          children: [
            {
              value: "AMPSphere",
              label: "AMPSphere",
            },
          ],
        },
        {
          value: "EBI Datebases",
          label: "EBI Datebases",
        },
        {
          value: "NCBI Datebases",
          label: "NCBI Datebases",
        },
        {
          value: "All Datebases",
          label: "All Datebases",
        },
      ],
      select: "All Datebases",
      input3: "",
      carouselList: [
        "免疫力数字解码重大研究计划",
        "GSA数据库入选全球核心生物数据资源GCBR",
        "国家基因组科学数据中心开发完成基因序列数据库，欢迎访问使用！",
        "国家基因组科学数据中心GSA团队招聘启事",
        "国家基因组科学数据中心非编码RNA资源团队招聘启事",
      ],
    };
  },
  methods: {
    handleChange(value) {
      console.log(value);
    },
  },
};
</script>
<style scoped lang="less">
.homeBanner {
  background: url("@/assets/imgs/head-bg-small.png") no-repeat !important;
  background-size: cover !important;
  padding: 30px 0 !important;
  height: 222px;
  display: flex;
  align-items: center;
  .bannerContent {
    width: 1200px;
    margin-left: auto !important;
    margin-right: auto !important;
    display: flex;
    .bannerLeft {
      background: rgba(255, 255, 255, 0.8);
      box-shadow: 0 2px 4px 0 rgba(34, 36, 38, 0.12), 0 2px 10px 0 rgba(34, 36, 38, 0.15);
      border: 1px solid rgba(34, 36, 38, 0.15);
      width: 700px;
      padding: 14px;
      border-radius: 5px;
      .exmple {
        a {
          color: #4183c4;
          text-decoration: none;
        }
      }
    }
    .bannerRight {
      flex-grow: 1;
      margin-left: 30px;
      box-shadow: 0 0 0 1px #a9d5de inset, 0 0 0 0 transparent;
      border-radius: 5px;
    }
  }
}
::v-deep .el-select .el-input {
  width: 130px;
}
::v-deep .input-with-select .el-input-group__prepend {
  background-color: #fff;
}
::v-deep .el-cascader .el-input {
  width: 130px;
}
</style>
<style lang="less">
.el-carousel__item {
  .carouselCont {
    text-align: center;
    margin-top: 20px;
    color: #4183c4;
    font-size: 18px;
    font-weight: 700;
    padding: 0 20px;
  }
}

.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #f8ffff;
  opacity: 0.8;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #f8ffff;
  opacity: 0.8;
}
</style>
