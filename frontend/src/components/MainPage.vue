<template>
  <v-container>
    메인페이지 입니다.
  </v-container>
</template>

<script>
  export default {
    name: 'MainPage',

    data() {
      return {
        
      }
    },

    created() {
      const vm = this;

      //비로그인시 로그인 페이지로
      if(vm.$store.state.user === null) {
        vm.$router.push('/login');
      }
    },
    
  }
</script>
