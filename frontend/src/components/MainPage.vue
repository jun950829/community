<template>
  <v-container>
    <v-app id="inspire">
      <div>
        <v-card style="display:flex; height: 1000px">
          <v-navigation-drawer
            permanent
            expand-on-hover
          >
            <v-list>
              <v-list-item class="px-2">
                <v-list-item-avatar>
                  <v-img src="https://randomuser.me/api/portraits/women/85.jpg"></v-img>
                </v-list-item-avatar>
              </v-list-item>
    
              <v-list-item link>
                <v-list-item-content>
                  <v-list-item-title class="text-h6">
                    {{user_id}}
                  </v-list-item-title>
                  <v-list-item-subtitle>안녕하세요!</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-list>
    
            <v-divider></v-divider>
    
            <v-list nav dense>
              <v-list-item link>
                <v-list-item-icon>
                  <v-icon>mdi-folder</v-icon>
                </v-list-item-icon>
                <v-list-item-title>Task Table</v-list-item-title>
              </v-list-item>
              <v-list-item link>
                <v-list-item-icon>
                  <v-icon>mdi-account-multiple</v-icon>
                </v-list-item-icon>
                <v-list-item-title>Members List</v-list-item-title>
              </v-list-item>
              <v-list-item link>
                <v-list-item-icon>
                  <v-icon>mdi-star</v-icon>
                </v-list-item-icon>
                <v-list-item-title>Starred</v-list-item-title>
              </v-list-item>
              <v-list-item @click="logout()">
                <v-list-item-icon>
                  <v-icon>mdi-login</v-icon>
                </v-list-item-icon>
                <v-list-item-title>Logout</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-navigation-drawer>

          <tasktable/>

        </v-card>
      </div>
    </v-app>
  </v-container>
</template>

<script>

import tasktable from './TaskTable.vue';

  export default {
    name: 'MainPage',

    data() {
      return {
        user_id : '',
      }
    },

    components : {
      tasktable,
    },

    created() {
      const vm = this;

      //비로그인시 로그인 페이지로
      if(vm.$store.state.user !== null) {
        vm.$router.push('/login');
      }

      // vm.user_id = vm.$store.state.user
      vm.user_id = '임시 아이디'
    },

    methods: {
      logout () {
        const vm = this;
        vm.$store.commit('setUserId', null);
        vm.$router.push('/login');
      }
    }
    
  }
</script>
