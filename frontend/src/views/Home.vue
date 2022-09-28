<template>
  <section id="home">
    <img alt="Vue logo" :src="state.logo" />
    <div>{{ state.isLogin }}</div>

    <div>{{ state.userId }} 님 안녕하세요!</div>

    <div class="homeArea">
      <p>메인화면</p> 
        
      <div>
        <roulletelayer/>
      </div>
    </div>
    
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

if (store.state.userId == null) {
  router.push({ path: "/login" });
} else if (store.state.userId != null) {
  state.isLogin = true;
  state.userId = store.state.userId;
}

</script>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import roulletelayer from "../components/Roullete.vue";

export default defineComponent({
  name: "Home",
  components : {
    roulletelayer,
  }
});
</script>
