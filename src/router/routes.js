import MainLayout from "src/layouts/MainLayout.vue";
import LoginPage from "src/pages/LoginPage.vue";
import HomeUserPage from "src/pages/HomeUserPage.vue";
import HomeAdminPage from "src/pages/HomeAdminPage.vue";
import HomeStudentPage from "src/pages/HomeStudentPage.vue";
import ProfilePage from "src/pages/ProfilePage.vue";

const routes = [
  {
    path: '/',
    component: MainLayout,
    children: [
      {
<<<<<<< HEAD
        path: '/',
        name: 'login',
=======
        path: '',
        name: "login",
>>>>>>> e73d8b8c82d44940b5622fbfbb1f2d26a9e4e589
        component: LoginPage
      },
      {
        path: 'home-user',
        name: 'homeuser-page',
        component: HomeUserPage
      },
      {
        path: 'home-admin',
        name: 'homeadmin-page',
        component: HomeAdminPage
      },
      {
        path: 'home-student',
        name: 'homestudent-page',
        component: HomeStudentPage
      },
      {
<<<<<<< HEAD
        path: 'faculty-task',
        name: 'facultytask-page',
        component: FacultyTaskPage
=======
        path: 'profile',
        name: 'profile-page',
        component: ProfilePage
>>>>>>> e73d8b8c82d44940b5622fbfbb1f2d26a9e4e589
      }
    ]
  },
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
