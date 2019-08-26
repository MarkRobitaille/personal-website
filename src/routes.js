// import HelloWorld from './components/HelloWorld.vue'
import Homepage from './components/Homepage.vue'
import AboutMe from './components/AboutMe.vue'

const routes = [
    {
        path: '/',
        component: Homepage,
        name: "Homepage"
    },
    {
        path: '/about',
        component: AboutMe,
        name: "AboutMe"
    }

]

export default routes;