<template>
  <div>
    <Header></Header>
    <Container></Container>
    <Banner></Banner>
    <CardList></CardList>
    <Resource></Resource>
    <Infrastructure></Infrastructure>
    <Footer></Footer>
  </div>
</template>
<script>
import Header from "@/components/Header.vue";
import Container from "@/components/Containers.vue";
import Banner from "@/components/Banner.vue";
import CardList from "@/components/CardList.vue";
import Resource from "@/components/Resource.vue";
import Footer from "@/components/Footer.vue";
import Infrastructure from "@/components/Infrastructure.vue";
export default {
  name: "home",
  data() {
    return {};
  },
  components: {
    Header,
    Container,
    Banner,
    CardList,
    Resource,
    Footer,
    Infrastructure,
  },
};
</script>
