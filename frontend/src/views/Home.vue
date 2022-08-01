<template>
  <div class="home">
    <img alt="Vue logo" :src="logo" />
    <div>{{ state.isLogin }}</div>
  </div>
</template>

<script setup lang="ts">
const state = reactive({
  isLogin: false,
});

interface httpRespond {
  status: string;
  user_data: userDataForm;
}

interface userDataForm {
  user_id: string;
  user_password: string;
  user_name: string;
  user_nickname: string;
}

async function checkLogin(): Promise<httpRespond> {
  const response = await window.fetch("/api/user/data", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      user_id: "test4",
    }),
  });

  const result = await response.json();
  return result;
}

(async () => {
  try {
    let userData = await checkLogin();

    if (userData.user_data.user_id == "test4") {
      console.log("true");
      state.isLogin = true;
      return;
    }
  } catch (e) {
    console.log(e);
  }
})();
</script>

<script lang="ts">
import { defineComponent, reactive } from "vue";

export default defineComponent({
  name: "Home",
  data: () => ({
    logo: require("../assets/logo.png"),
  }),
});
</script>
