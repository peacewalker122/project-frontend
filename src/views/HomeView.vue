<template>
  <Navbar />
  <div class="container-fluid bodyhome">
    <div class="home">
      <img
        alt="Vue logo"
        src="../assets/project-logo.svg"
        width="400"
        height="400"
      />
      <h3 class="mt-5">This is a home page</h3>
      <p class="mt-2">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam
        blanditiis ex officia esse error pariatur ratione. Illo, nam natus
        itaque iure quidem doloribus modi ut maiores, laborum expedita
        consectetur nihil?
      </p>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar.vue";

export default {
  name: "HomeView",
  components: {
    Navbar,
  },
};
</script>

<style scoped>
.bodyhome {
  /* background-image: url("../assets/bg.svg"); */
  background: #3d3b52;
}
</style>
