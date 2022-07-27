<template>
  <div class="home">
    <img alt="Vue logo" :src="logo" />
  </div>
</template>

<script setup>

async function checkLogin(this: any): Promise<boolean> {
  const response = await window.fetch("/api/user/data", {
    method: 'POST',
    headers: {
              'content-type' : 'application/json;charset=UTF8',
    },
    body: JSON.stringify({
      user_id : 'test4',
    }),
  })

  console.log(response);

  return false;
}
</script>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Home",
  data: () => ({
    logo: require("../assets/logo.png"),
  }),
});
</script>
