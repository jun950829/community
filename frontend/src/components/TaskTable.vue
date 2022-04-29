<template>
    <v-div id="tasktable" style="padding: 100px;">
        <v-card-title>Task Table</v-card-title>
        <v-container fluid>
            <v-row dense>
                <v-col v-for="user in userList" :key="user.user_name" :cols="6">
                    <v-card>
                        <v-card-title v-text="user.user_name"></v-card-title>
                        <v-cart-text v-text="user.user_id"></v-cart-text>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </v-div>
</template>

<script>


export default {
    data() {
        return {
            userList: [
                // { name: 'Pre-fab homes', task: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', flex: 6 },
                // { name: 'Favorite road trips', task: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', flex: 6 },
                // { name: 'Best airlines', task: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 6 },
                // { name: 'Best airlines', task: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 6 },
            ],
        };
    },

    created() {
        const vm = this;

        vm.$http.post("/api/users/inquire", {
            gb: 'inquire',
        })
        .then(
            (res) => {
                vm.userList = res.data.userList;
                console.log(vm.userList);   

            },
            (err) => {
                alert('userList 호출 실패 ! : ' + err);
            }
        )
        .catch((err) => {
            alert(err);
        })
    }
}
</script>