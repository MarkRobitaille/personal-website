// import HelloWorld from './components/HelloWorld.vue'
import Homepage from './components/Homepage.vue'
import Resume from './components/Resume.vue'

const routes = [
    {
        path: '/',
        component: Homepage,
        name: "Homepage"
    },
    {
        path: '/resume',
        component: Resume,
        name: "Resume"
    }

]

export default routes;