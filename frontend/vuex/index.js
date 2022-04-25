import Vue from 'vue'
import Vuex from 'vuex'
import { state } from '../../backend/routes/db';

Vue.use(Vuex);

var store = new Vuex.Store({
    state : {
        user : null,
    },

    mutations : {
        setUserId(state, user_id) {
            state.user = user_id;
        },
    },

    actions : {
        setUserId(context, user_id) {
            context.commit('setUserId', user_id);
        }
    }
});

export default store;