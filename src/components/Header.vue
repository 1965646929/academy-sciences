<template>
  <header>
    <nav class="navBar">
      <div class="navLeft">
        <a href="https://www.cncb.ac.cn/" target="_black">
          <img src="@/assets/imgs/cncb-logo-w.png" alt="" class="logo" />
        </a>
      </div>
      <div class="navRight">
        <ul>
          <li v-for="(item, index) in navList" :key="index">
            <a :href="item.url" target="_black">
              <strong>{{ item.name }}</strong>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
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
.navBar {
  height: 50px;
  background-color: #157bc6;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .logo {
    height: 50px;
  }
  .navRight {
    li {
      display: inline-block;
      &:hover {
        background-color: #fff;
        a {
          color: #157bc6;
        }
      }
      a {
        color: #fff;
        font-size: 14px;
        height: 50px;
        display: inline-block;
        line-height: 50px;
        padding: 0 15px;
      }
    }
  }
}
</style>
