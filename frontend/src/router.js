import Vue from 'vue'
import Router from 'vue-router'
import {store} from './store.js'
import VueCookies from 'vue-cookies'
import Module1 from './components/Game/Module1'
import Module2 from './components/Game/Module2'
import Login from './components/Login'
import Reports from './components/Reports'
import Logout from './components/Logout'
import Signup from './components/Signup'
import Home from './components/Home'

Vue.use(Router)

let router = new Router({
	routes: [
		{
			path: '/',
			name: 'Home',
			component: Home
		},
		{
			path: '/Module1',
			name: 'Module1',
			component: Module1
		},
		{
			path: '/Module2',
			name: 'Module2',
			component: Module2
		},
		{
			path: '/Reports',
			name: 'Reports',
			component: Reports
		},
		{
			path: '/login',
			name: 'Login',
			component: Login
		},
		{
			path: '/Logout',
			name: 'Logout',
			component: Logout
		},
		{
			path: '/Signup',
			name: 'Signup',
			component: Signup
		},
	]
})

router.beforeEach((to, from, next) => {
  if (!store.state.auth.token && (!VueCookies.get('token') || !VueCookies.get('userID'))) {
    if (to.path == "/") {
      next();
    } else if (to.path == "/Reports" && !VueCookies.get('admin')) {
      next({
        path: "/Login"
      });
    } else if (to.path !== '/Login' && to.path !== '/Signup' && !store.state.traineeId) {
      next({
        path: '/Signup',
        query: {
          previousPath: to.path
        }
      })
    } else {
      next()
    }
  } else {
    next()
  }
});

export default router
