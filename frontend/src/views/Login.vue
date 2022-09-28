<template>
  <section id="login">
    <div class="loginArea">
      <h1>로그인</h1>
      <div class="input-box">
        <input
          id="username"
          type="text"
          name="username"
          placeholder="아이디"
          v-model="state.id"
          @input="$emit('update:state.id', $event.target.value)"
        />
        <label for="username">아이디</label>
      </div>
      <div class="input-box">
        <input
          id="password"
          type="password"
          name="password"
          placeholder="비밀번호"
          v-model="state.password"
          @input="$emit('update:state.id', $event.target.value)"
        />
        <label for="password">비밀번호</label>
      </div>

      <div>{{ state.result }}</div>

      <div class="btns">
        <div class="signupBtn" @click="goSignupPage()">회원가입</div>
        <div class="loginBtn" @click="doLogin()">로그인</div>  
      </div>
      
      <!-- <div id="forgot">비밀번호 찾기</div> -->
    </div>
  </section>
</template>

<script setup lang="ts">
import { useStore } from "vuex";
import { useRouter } from "vue-router";

const router = useRouter();
const store = useStore();

const state = reactive({
  id: "",
  password: "",
  loginResult: {
    status: "",
    msg: "",
    user_data: {
      user_id: "",
      user_password: "",
    },
  },
  result: "",
});

interface userData {
  status: string;
  user_data: {
    user_id: string;
    user_password: string;
  };
  msg: string;
}

async function login(): Promise<userData> {
  const response = await window.fetch("/api/users/inquire", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      gb: "login",
      user_id: state.id,
      user_password: state.password,
    }),
  });

  let result = await response.json();
  return result;
}

async function doLogin() {
  state.loginResult = await login();

  if (state.loginResult.status == "fail") {
    alert(state.loginResult.msg);
  } else if (state.loginResult.status == "success") {
    store.commit("setUserId", state.loginResult.user_data.user_id);
    router.push({ path: "/" });
  }
}


function goSignupPage() {
  router.push({ path : '/signup' })
}

</script>

<script lang="ts">
import { defineComponent, reactive } from "vue";

export default defineComponent({
  name: "Login",
});
</script>
