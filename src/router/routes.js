import MainLayout from "src/layouts/MainLayout.vue";
import LoginPage from "src/pages/LoginPage.vue";
im<<<<<<< HEAD
import HomeUserPage from "src/pages/HomeUserPage.vue";
import HomeAdminPage from "src/pages/HomeAdminPage.vue";
import HomeStudentPage from "src/pages/HomeStudentPage.vue";
=======
import HomeUserPage from "src/pages/HomeUserPage.vue"
import ProfilePage from "src/pages/ProfilePage.vue";
import ConsultationPage from "src/pages/ConsultationPage.vue";
import FacultyTaskPage from "src/pages/FacultyTaskPage.vue";
>>>>>>> d9b24b500292b3b60c9d16f6fcfb00dacabafd5b

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
<<<<<<< HEAD
        path: 'home-admin',
        name: 'homeadmin-page',
        component: HomeAdminPage
      },
      {
        path: 'home-student',
        name: 'homestudent-page',
        component: HomeStudentPage
      },
=======
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
      
>>>>>>> d9b24b500292b3b60c9d16f6fcfb00dacabafd5b
his as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
