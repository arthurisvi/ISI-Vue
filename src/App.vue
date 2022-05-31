<template>
  <Header></Header>
  <router-view />
  <Footer></Footer>
</template>

<script>
import Footer from "@/components/Footer/Footer.vue";
import Header from "@/components/Header/Header.vue";

export default {
  name: "App",
  data() {
    return {};
  },
  components: {
    Footer,
    Header,
  },
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}

#page-container {
  min-height: calc(100vh - 140px);
  background-color: #e5e5e5;
  padding: 20px;
}
</style>
