import Vue from 'vue';
import VueRouter from 'vue-router';
import checkPassWord from '../src/components/checkPassWord.vue';
import noticeList from '../src/components/noticeList.vue';
import noticeDetail from '../src/components/noticeDetail.vue';
import App from '../src/app.vue'

Vue.use(VueRouter);

var router = new VueRouter({
    routes: [
        {
            path: '/checkpassword',
            component: checkPassWord
        },
        {
            path: '/noticelist',
            component: noticeList
        },
        {
            path: '/noticedetail',
            component: noticeDetail
        }
    ]
})

new Vue({
    el: '#app',
    template: '<app/>',
    router,
    components: {
        App
    }
})