import { createRouter, createWebHistory} from 'vue-router'


const Approved = { template: '<div>Approved</div>' }
const Disapproved = { template: '<div>Disapproved</div>' }
const Pending = { template: '<div>Pending</div>' }

const routes = [
  { path: '/', component: Pending },
  { path: '/approved', component: Approved },
  { path: '/disapproved', component: Disapproved },
  { path: '/pending', component: Pending },
]

export default createRouter({
  history: createWebHistory(),
  routes,
})

