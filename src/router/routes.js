import MainLayout from "src/layouts/MainLayout.vue";
import LoginPage from "src/pages/LoginPage.vue";
import HomeUserPage from "src/pages/HomeUserPage.vue"

const routes = [
  {
    path: '/',
    component: MainLayout,
    children: [
      {
        path: '',
        name: "login",
        component: LoginPage
      },
      {
        path: 'home-user',
        name: 'homeuser-page',
        component: HomeUserPage
      },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
