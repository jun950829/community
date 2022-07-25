import Vue from 'vue';
import VueRouter from 'vue-router';
import MainPage from '../src/components/MainPage';
import LoginPage from '../src/components/LoginPage';
import SignupPage from '../src/components/SignupPage';


Vue.use(VueRouter);

const routes = [
    //메인페이지
    {
        path: '/',
        name: 'MainPage',
        component: MainPage,
    },

    //로그인 페이지
    {
        path: '/login',
        name: 'LoginPage',
        component: LoginPage,
    },

    //회원가입 페이지 
    {
        path: '/signup',
        name: 'SignupPage',
        component : SignupPage,
    }
];


var router = new VueRouter({
    mode : "history",
    routes,
})

export default router;

