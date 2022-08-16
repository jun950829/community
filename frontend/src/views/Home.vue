<template>
  <section id="home">
    <img alt="Vue logo" :src="state.logo" />
    <div>{{ state.isLogin }}</div>

    <div>{{ state.userId }} 님 안녕하세요!</div>

    <div class="homeArea">메인화면</div>
    1
  </section>
</template>

<script setup lang="ts">
import { useStore } from "vuex";
import { useRouter } from "vue-router";

const router = useRouter();
const store = useStore();

const state = reactive({
  isLogin: false,
  userId: "",
  logo: require("../assets/logo.png"),
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

console.log(store.state.userId);

if (store.state.userId == null) {
  router.push({ path: "/login" });
} else if (store.state.userId != null) {
  state.isLogin = true;
  state.userId = store.state.userId;
}

// (async () => {
//   try {
//     let userData = await checkLogin();

//     if (userData.user_data.user_id == "") {
//       store.commit("setUserId", userData.user_data.user_id);
//       state.isLogin = true;
//       return;
//     }
//   } catch (e) {
//     console.log(e);
//   }
// })();

// async function checkLogin(): Promise<httpRespond> {
//   const response = await window.fetch("/api/user/data", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       user_id: "test4",
//     }),
//   });

//   const result = await response.json();
//   return result;
// }
</script>

<script lang="ts">
import { defineComponent, reactive } from "vue";

export default defineComponent({
  name: "Home",
});
</script>
