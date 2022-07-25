import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

var store = new Vuex.Store({
    state : {
        g_userID : null,
    },

    getters : {
        getUser : (state) => {
            if(state.g_userID !== null)
                return state.g_userID;
            else 
                return null;
        }
    },

    mutations : {
        setUserId(state, user_id) {
            state.g_userID = user_id;
        },
    },

    actions : {
        setUserId(context, user_id) {
            context.commit('setUserId', user_id);
        }
    }
});

export default store;