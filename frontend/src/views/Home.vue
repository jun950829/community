<template>
  <div class="home">
    <img alt="Vue logo" :src="logo" />
    kdsfhaskjdhf
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Home",
  data: () => ({
    logo: require("../assets/logo.png"),
  }),
});
</script>
