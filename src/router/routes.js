import MainLayout from "src/layouts/MainLayout.vue";
import LoginPage from "src/pages/LoginPage.vue";
import HomeUserPage from "src/pages/HomeUserPage.vue"
import ProfilePage from "src/pages/ProfilePage.vue";
import ConsultationPage from "src/pages/ConsultationPage.vue";
import FacultyTaskPage from "src/pages/FacultyTaskPage.vue";

const routes = [
  {
    path: '/',
    component: MainLayout,
    children: [
      {
        path: '',
        name: 'login',
        component: LoginPage
      },
      {
        path: 'home-user',
        name: 'homeuser-page',
        component: HomeUserPage
      },
      {
        path: 'profile',
        name: 'profile-page',
        component: ProfilePage
      },
      {
        path: 'consultation',
        name: 'consultation-page',
        component: ConsultationPage
      },
      {
        path: 'faculty-task',
        name: 'facultytask-page',
        component: FacultyTaskPage
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
