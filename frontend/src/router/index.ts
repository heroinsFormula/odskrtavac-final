import { createRouter, createWebHistory } from 'vue-router'
import { useUserStore } from '@/stores/userStore'

import LoginView from '@/views/LoginView.vue'
import RegisterView from '@/views/RegisterView.vue'
import DashboardView from '@/views/Dashboard.vue'
// import CalendarView from '@/views/CalendarView.vue'
// import BasicChartView from '@/views/Charts/BasicChartView.vue'
// import FormElementsView from '@/views/Forms/FormElementsView.vue'
// import FormLayoutView from '@/views/Forms/FormLayoutView.vue'
// import SettingsView from '@/views/Pages/SettingsView.vue'
// import ProfileView from '@/views/ProfileView.vue'
// import AlertsView from '@/views/UiElements/AlertsView.vue'
// import ButtonsView from '@/views/UiElements/ButtonsView.vue'

const routes = [
  {
    path: '/',
    name: 'dashboard',
    component: DashboardView,
    meta: {
      title: 'Seznam knih',
      requiresAuth: true
    }
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView,
    meta: {
      title: 'Přihlásit se',
      requiresGuest: true
    }
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterView,
    meta: {
      title: 'Registrovat se',
      requiresGuest: true
    }
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || { left: 0, top: 0 }
  }
})

router.beforeEach((to, from, next) => {
  const userStore = useUserStore()

  document.title = `Odškrtávač - ${to.meta.title}`

  if (to.meta.requiresAuth && !userStore.loggedIn) {
    next({ name: 'login', query: { redirect: to.fullPath } })
  } else if (to.meta.requiresGuest && userStore.loggedIn) {
    next({ name: 'dashboard' })
  } else {
    next()
  }
})

export default router
