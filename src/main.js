import Vue from 'vue'
import ElementUI from 'element-ui'
import VueRouter from 'vue-router'
import 'element-ui/lib/theme-default/index.css'
import App from './App.vue'
import peopleCenter from './components/peopleCenter.vue'


Vue.use(ElementUI)
Vue.use(VueRouter)

const routes = [
    {
        path: '/peopleCenter',
        component: peopleCenter,
    },

]
const router = new VueRouter({
    routes
})
new Vue({
    el: '#app',
    router,
    render: h => h(App)
})
