<template>
    <section class="signuppage">

        <div class="signupLayer">
            <h1>회원가입</h1>
            <v-text-field label="ID" :rules="id_rules" v-model='id' hide-details="auto"></v-text-field>  
            <v-text-field label="PASSWORD" :rules="pw_rules" v-model='password' hide-details="auto" :append-icon="showPw ? 'mdi-eye' : 'mid-eye-off'" :type="showPw ? 'text' : 'password'" @click:append="showPw = !showPw"></v-text-field>
            <v-text-field label="이름" :rules="name_rules" v-model='name' hide-details="auto"></v-text-field>    
            <v-text-field label="닉네임" :rules="nickname_rules" v-model='nickname' hide-details="auto"></v-text-field>    
            <v-btn @click="signup">회원가입</v-btn>
        </div>

    </section>
</template>

<script>

export default ({
    data() { 
        return {
            id_rules : [
                value => !!value || '입력해주세요',
                value => /^[A-Za-z0-9+]*$/.test(value) || '영어와 숫자만 입력해주세요',
                value => value.length <= 12 || '최대 12글자 입니다.'
            ],
            pw_rules : [
                value => !!value || '입력해주세요',
                value => value.length <= 12 || '최대 12글자 입니다.'
            ],
            name_rules : [
                value => !!value || '입력해주세요',
                value => /^[A-Za-z가-힣+]*$/.test(value) || '영어 또는 한글만 입력 가능합니다.',
                value => value.length <= 4 || '최대 12글자 입니다.'
            ],
            nickname_rules : [
                value => !!value || '입력해주세요',    
                value => /^[A-Za-z0-9+]*$/.test(value) || '영어와 숫자만 입력해주세요',
                value => value.length <= 12 || '최대 12글자 입니다.'
            ],

            id: '',
            password: '',
            name : '',
            nickname : '',
        }
    },

    methods : {
        signup () {
            const vm = this;

            //입력 필드가 빈칸일 때
            if(vm.id === '' || vm.id > 12) {
                alert('id를 확인하세요');
                return 0;
            }

            if(vm.password === '' || vm.password > 12) {
                alert('password를 확인하세요');
                return 0;
            }

            if(vm.name === '' || vm.name > 12) {
                alert('name를 확인하세요');
                return 0;
            }

            if(vm.nickname === '' || vm.nickname > 12) {
                alert('nickname를 확인하세요');
                return 0;
            }

            vm.$http.post("/api/users/inquire", {
                gb : 'signup',
                user_id : vm.id,
                user_password : vm.password,
                user_name : vm.name,
                user_nickname : vm.nickname,
            })
            .then(
                (res) => {
                    alert(res.data);
                    vm.$router.push("/login");
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
