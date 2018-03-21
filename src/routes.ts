import Management from './components/templates/management.vue'
import User from './components/templates/user.vue'

let route = [
  {
    name: 'Home',
    path: '/home',
    component: { template: `<div>home page</div>` },
    icon: 'home'
  },
  {
    name: 'Management',
    path: '/management',
    component: Management,
    icon: 'folder_open'
  },
  {
    name: 'user',
    path: '/user/:id',
    component: User
  }
]
export default route
