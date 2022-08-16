<template>
    <section id="signup">
        <div class="signupArea">
            <h1>회원가입</h1>
            <div class="idLayer">
                <div class="input-box">
                    <input
                        id="userid"
                        maxlength="16"
                        type="text"
                        name="userid"
                        placeholder="아이디"
                        v-model="state.id"
                        @input="checkId"
                    />
                    <label for="userid">아이디</label>
                </div>
                <div>

                </div>
            </div>

            <div class="passwordLayer">
                <div class="input-box">
                    <input
                        id="password"
                        maxlength="16"
                        type="password"
                        name="password"
                        placeholder="비밀번호"
                        v-model="state.password"
                        @input="checkPassword"
                        />
                        <!-- @input="$emit('update:state.password', $event.target.value)" -->
                    <label for="password">비밀번호</label>
                </div>
            </div>

            <div class="passwordLayer">
                <div class="input-box">
                    <input
                        id="passwordCheck"
                        maxlength="16"
                        type="password"
                        name="passwordCheck"
                        placeholder="비밀번호 체크"
                        v-model="state.passwordCheck"
                        @input="checkPassword"
                        />
                    <label for="passwordCheck">비밀번호 체크</label>
                </div>
            </div>

            <div class="nameLayer">
                <div class="input-box">
                    <input
                        id="username"
                        maxlength="4"
                        type="text"
                        name="username"
                        placeholder="이름"
                        v-model="state.username"
                        @input="checkName"
                    />
                    <!-- @input="$emit('update:state.username', $event.target.value)" -->
                    <label for="username">이름</label>
                </div>
                <div>

                </div>
            </div>

            <div class="birthLayer">
                <div class="input-box">
                    <input
                        id="birth"
                        type="text"
                        name="birth"
                        placeholder="생일"
                        v-model="state.birth"
                        @input="$emit('update:state.birth', $event.target.value)"
                    />
                    <label for="birth">생일</label>
                </div>
                <div>

                </div>
            </div>

            <div class="phoneLayer">
                <div class="input-box">
                    <input
                        id="phone"
                        type="text"
                        name="phone"
                        placeholder="전화번호"
                        v-model="state.phone"
                        @input="$emit('update:state.phone', $event.target.value)"
                    />
                    <label for="phone">전화번호</label>
                </div>
                <div>

                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";

const state = reactive({
    id : "",
    password : "",
    passwordCheck : "",
    username : "",
    birth : "",
    phone : "",
})


function checkId(data) {
    let id = data.data;
    if((/[a-zA-Z0-9]/g).test(id)) {
        return ;
    } else {
        alert('영문자, 숫자만 가능합니다.');
        return;
    }    
}

function checkPassword(data) {
    let id = data.data;
    if((/[a-zA-Z0-9]/g).test(id)) {
        return ;
    } else {
        alert('영문자, 숫자만 가능합니다.');
        return;
    } 
}

function checkName(data) {
        let id = data.data;
        console.log(data);
    if((/[ㄱ-ㅎㅏ-ㅣ가-힣\\b]/g).test(id)) {
        return ;
    } else {
        alert('한글만 가능합니다.');
        return;
    } 
}

</script>

<script lang="ts">
import { defineComponent, reactive } from "vue";

export default defineComponent({
  name: "SignUp",
});
</script>