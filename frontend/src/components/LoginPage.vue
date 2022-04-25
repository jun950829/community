<template>
    <section class="loginPage">

        <div class="loginLayer">
            <h1>로그인</h1>
            <v-text-field label="ID" :rules="id_rules" v-model='id' hide-details="auto"></v-text-field>  
            <v-text-field label="PASSWORD" :rules="pw_rules" v-model='password' hide-details="auto"></v-text-field>    
            <div class="loginBtns">
                <v-btn @click="gotoSignup()">회원가입</v-btn>
                <v-btn @click="login()">로그인</v-btn>
            </div>
        </div>

    </section>
</template>

<script>

export default ({
    data() { 
        return {
            id_rules : [
                value => !!value || '입력해주세요',
                value => /^[A-Za-z0-9+]*$/.test(value) || '영어와 숫자만 입력해주세요'
            ],
            pw_rules : [
                value => !!value || '입력해주세요'
            ],

            id: '',
            password: '',
        }
    },

    methods : {
      gotoSignup() {
        // debugger //eslint-disable-line no-debugger
        const vm = this;
        vm.$router.push('/signup')
      },

      login() {
        const vm = this;
          
        vm.$http.post("/api/users/inquire", {
            gb : 'login',
            user_id : vm.id,
            user_password : vm.password,
        })
        .then(
            (res) => {
                // console.log(res.data);
                alert('로그인 성공 : ' + res.data.user_data.user_id);

                vm.$store.commit('setUserId', res.data.user_data.user_id);

                vm.$router.push('/');
            },
            (err) => {
                alert('로그인 실패! : ' + err);
            }
        )
        .catch((err) => {
            alert(err);
        })
      }
    }
})
</script>
