<template>
  <footer class="footer">
    <div class="footerTop">
      <el-row :gutter="20">
        <el-col :span="6">
          <img src="@/assets/imgs/ngdc-logo-blue.png" alt="" />
          <div class="footerTitle">National Genomics Data Center</div>
          <div class="fotterDetail">
            <i class="el-icon-phone"></i>
            <span class="footerItem">86-10-84097298</span>
          </div>
          <div class="fotterDetail">
            <i class="el-icon-s-promotion"></i>
            <span class="footerItem">ngdc(at)big.ac.cn</span>
          </div>
          <div class="fotterDetail">
            <span class="footerItem">Policies and Disclaimers</span>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="footerTitle">Research & Resources</div>
          <div class="fotterDetail" v-for="item in footerList" :key="item">
            {{ item }}
          </div>
        </el-col>
        <el-col :span="6">
          <div class="footerTitle">Featured</div>
          <div class="fotterDetail" v-for="item in footerList" :key="item">
            {{ item }}
          </div>
        </el-col>
        <el-col :span="6">
          <div class="footerTitle">Alliance & Collaboration</div>
          <div class="fotterDetail" v-for="item in footerList" :key="item">
            {{ item }}
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="footerBottom">
      <img src="@/assets/imgs/cncb-logo.png" alt="" />
      <div class="bottomRight">
        <div>
          © 2025
          <span class="bottomColor">
            China National Center for Bioinformation / Beijing Institute of Genomics, Chinese
            Academy of Sciences</span
          >
        </div>
        <div>No.1 Beichen West Road, Chaoyang District, Beijing 100101, China</div>
        <div>
          <span class="bottomColor">京ICP备10050270号</span>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  data() {
    return {
      footerList: [
        "Databases",
        "Tools",
        "Standards",
        "Topics & Projects",
        "Publications",
        "Annual Reports",
      ],
    };
  },
};
</script>
<style lang="less" scoped>
.footer {
  border-top: 3px solid #0c64b6;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);
  .footerTop {
    height: 200px;
    border-bottom: 1px solid #eee;
    padding: 20px;
    .footerTitle {
      color: #051133;
      font-size: 14px;
      font-weight: bolder;
    }
    .fotterDetail {
      .footerItem {
        margin-left: 15px;
      }
    }
    .fotterDetail,
    .footerTitle {
      line-height: 25px;
    }
  }
  .footerBottom {
    width: 1200px;
    margin-left: auto !important;
    margin-right: auto !important;
    display: flex;
    align-items: center;
    justify-content: space-around;
    img {
      width: 300px;
    }
    .bottomRight {
      font-size: 14px;
      color: #555;
      padding: 3px;
      .bottomColor {
        color: #337ab7;
      }
    }
  }
}
</style>
