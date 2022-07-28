<template>
  <div class="home">
    <img alt="Vue logo" :src="logo" />
    <div>{{isLogin}}</div>
  </div>
</template>

<script setup lang="ts">
  interface httpRespond {
    status: String,
    user_data : userData
  }

  interface userData {
    user_id: String,
    user_password: String,
    user_name: String,
    user_nickname : String
  }

  async function checkLogin(this: any): Promise<httpRespond> {
    const response = await window.fetch("/api/user/data", {
      method: 'POST',
      headers: {
        'Content-Type' : 'application/json',
      },
      body: JSON.stringify({
        user_id : 'test4',
      }),
    })

    const result = await response.json();
    return result;
  }

  let userData = await checkLogin();

  if (userData.user_data.user_id == 'test4') {
    console.log('true');
  }

</script>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Home",
  data: () => ({
    logo: require("../assets/logo.png"),
    isLogin : false,
  }),

});
</script>
