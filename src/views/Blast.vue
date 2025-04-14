<template>
  <div>
    <Header></Header>
    <ContainersBlast></ContainersBlast>
    <Footer></Footer>
  </div>
</template>
<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import ContainersBlast from "@/components/ContainersBlast.vue";
export default {
  name: "blast",
  data() {
    return {};
  },
  components: {
    Header,
    Footer,
    ContainersBlast,
  },
};
</script>
