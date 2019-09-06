// import HelloWorld from './components/HelloWorld.vue'
import Homepage from './components/Homepage.vue'
import Resume from './components/Resume.vue'
import Projects from './components/Projects.vue'

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
    },
    {
        path: '/projects',
        component: Projects,
        name: "Projects"
    }

]

export default routes;