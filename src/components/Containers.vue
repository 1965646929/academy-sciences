<template>
  <div class="homeContainer">
    <div class="container">
      <div class="conLeft">
        <a href="https://ngdc.cncb.ac.cn/" target="_black">
          <img src="@/assets/imgs/ngdc.png" alt="" class="ngbc" />
        </a>
        <a href="https://escience.org.cn/" target="_black">
          <img src="@/assets/imgs/nsti.png" alt="" class="nsti" />
        </a>
      </div>
      <div class="conRight">
        <a href="https://ngdc.cncb.ac.cn/sso/login" class="login">登录</a>
        <el-dropdown trigger="click">
          <span class="el-dropdown-link">
            语言/Language
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>English</el-dropdown-item>
            <el-dropdown-item>简体中文</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      navList: [
        {
          name: "Data Resources",
          url: "https://www.cncb.ac.cn/services",
        },
        {
          name: "Computing Analysis",
          url: "https://www.cncb.ac.cn/tools",
        },
        {
          name: "Data Network",
          url: "https://www.cncb.ac.cn/nodes",
        },
        {
          name: "Standards",
          url: "https://www.cncb.ac.cn/standards",
        },
      ],
    };
  },
};
</script>
<style scoped lang="less">
.homeContainer {
  width: 1200px !important;
  margin-left: auto !important;
  margin-right: auto !important;
  .container {
    background-color: #fff;
    height: 70px;
    display: flex;
    align-items: center;
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
      .ngbc {
        width: 250px;
        padding-right: 12px;
      }
      .nsti {
        width: 85px;
        padding-left: 15px;
      }
    }
    .conRight {
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
</style>
