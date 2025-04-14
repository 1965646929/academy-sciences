<template>
  <div class="blastContainer">
    <div class="conLeft"></div>
    <div class="conRight">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="首页" name="first">
          <BlastHome></BlastHome>
        </el-tab-pane>
        <el-tab-pane label="最近结果" name="second">最近结果</el-tab-pane>
        <el-tab-pane label="已存策略" name="third">已存策略</el-tab-pane>
      </el-tabs>
      <!-- <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>English</el-dropdown-item>
            <el-dropdown-item>简体中文</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown> -->
      <a href="/blast/home" class="logoImg">
        <img src="@/assets/imgs/logo-9d1595c9-balabala.svg" alt="" class="ngbc" />
      </a>
    </div>
  </div>
</template>
<script>
import BlastHome from "@/components/BlastHome.vue";
export default {
  data() {
    return {
      activeName: "first",
    };
  },
  components: {
    BlastHome,
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
  },
};
</script>
<style scoped lang="less">
.blastContainer {
  display: flex;
  justify-content: space-between;
  .conLeft {
    height: 100%;
    display: flex;
    align-items: center;
    a {
      color: #0c64b6 !important;
      font-weight: bold !important;
      font-size: 16px !important;
    }

    .nsti {
      width: 85px;
      padding-left: 15px;
    }
  }
  .conRight {
    flex-grow: 1;
    position: relative;
    a {
      color: #0c64b6 !important;
      font-weight: bold !important;
      font-size: 16px !important;
      padding: 11px 14px;
      display: inline-block;
      &:hover {
        background: rgba(0, 0, 0, 0.05);
        border-radius: 4px;
      }
    }
    .logoImg {
      position: absolute;
      left: 0;
      top: 0;
      .ngbc {
        width: 140px;
        padding-right: 12px;
      }
    }
  }
}
::v-deep .el-dropdown-link {
  cursor: pointer;
  color: #0c64b6 !important;
  font-weight: bold !important;
  font-size: 16px !important;
  padding: 11px 14px;
  &:hover {
    background: rgba(0, 0, 0, 0.05);
    border-radius: 4px;
  }
}
.el-icon-arrow-down {
  font-size: 12px;
}
::v-deep .el-tabs__nav {
  float: right;
}
::v-deep .el-tabs__nav-wrap,
::v-deep .el-tabs__item {
  height: 60px;
}
::v-deep .el-tabs__item {
  font-size: 16px;
  font-weight: 700;
  line-height: 60px;
}
::v-deep .el-tabs__header {
  margin-bottom: 0px;
}
</style>
