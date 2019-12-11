// import HelloWorld from './components/HelloWorld.vue'
import Homepage from './components/Homepage.vue'
import Resume from './components/Resume.vue'
import Projects from './components/Projects.vue'

const routes = [
    {
        path: '/',
        component: Homepage,
        name: "Homepage",
        meta: {
            title: 'Mark Robitaille'
        }
    },
    {
        path: '/resume',
        component: Resume,
        name: "Resume",
        meta: {
            title: 'Resume - Mark Robitaille'
        }
    },
    {
        path: '/projects',
        component: Projects,
        name: "Projects",
        meta: {
            title: 'Projects - Mark Robitaille'
        }
    }

]

export default routes;