import Vue from 'vue'
import Router from 'vue-router'
import PageTransition from '../components/PageTransition.vue'
import Index from '../components/Index.vue'
import Hdcon from '../components/Hdcon.vue'
import News from '../components/NewList.vue'
import Movie from '../components/Movie.vue'
import MoveDetail from '../components/video/MoveDetail.vue'
Router.prototype.goBack = function() {
    this.isBack = true
    window.history.go(-1)
}

Vue.use(Router)
const router = new Router({

    scrollBehavior: () => ({ y: 0 }),
    routes: [{
        path: '/',
        name: 'PageTransition',
        component: PageTransition,
        children: [{
                path: '',
                component: Index
            },
            {
                path: '/article/hd/:id',
                component: Hdcon
            }, {
                path: '/news',
                component: News
            }, {
                path: '/movie',
                component: Movie

            }, {
                path: '/movie/detail/:id',
                component: MoveDetail
            }
        ]

    }]
})
export default router