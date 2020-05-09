import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/profil',
    name: 'profil',
    redirect: 'Profil/visi',
    component: () => import('../views/Profil.vue'),
    children: [
      {
        path: 'visi',
        name: 'visi',
        components :{
        profil: () => import('@/components/Profil/visi.vue'),
        }
      },
      {
        path: 'sarpras',
        name: 'sarpras',
        components :{
        profil: () => import('@/components/Profil/sarpras.vue'),
        }
      },
      {
        path: 'agenda',
        name: 'agenda',
        components :{
        profil: () => import('@/components/Profil/agenda.vue'),
        }
      },
      {
        path: 'komite',
        name: 'komite',
        components :{
        profil: () => import('@/components/Profil/komite.vue'),
        }
      },
      {
        path: 'program',
        name: 'program',
        components :{
        profil: () => import('@/components/Profil/program.vue'),
        }
      },
      {
        path: 'guru',
        name: 'guru',
        components :{
        profil: () => import('@/components/Profil/guru.vue'),
        }
      }
    ]
  },
  {
    path: '/Siswa',
    name: 'kesiswaan',
    redirect: 'Siswa/data',
    component: () => import('../views/Kesiswaan.vue'),
    children: [
      {
        path: 'data',
        name: 'data',
        components :{
        kesiswaan: () => import('@/components/Siswa/data.vue'),
        }
      },
      {
        path: 'prestasi',
        name: 'prestasi',
        components :{
        kesiswaan: () => import('@/components/Siswa/prestasi.vue'),
        }
      },
      {
        path: 'karya',
        name: 'karya',
        components :{
        kesiswaan: () => import('@/components/Siswa/karya.vue'),
        }
      },
      {
        path: 'galleri',
        name: 'galleri',
        components :{
        kesiswaan: () => import('@/components/Siswa/galleri.vue'),
        }
      }
    ]
  },
  {
    path: '/Informasi',
    name: 'informasi',
    redirect: 'Informasi/pendaftaran',
    component: () => import('../views/Informasi.vue'),
    children: [
      {
        path: 'pendaftaran',
        name: 'pendaftaran',
        components :{
        informasi: () => import('@/components/Informasi/pendaftaran.vue'),
        }
      },
      {
        path: 'berita',
        name: 'berita',
        components :{
        informasi: () => import('@/components/Informasi/berita.vue'),
        }
      },
      {
        path: 'kaldik',
        name: 'kaldik',
        components :{
        informasi: () => import('@/components/Informasi/kaldik.vue'),
        }
      },
      {
        path: 'extra',
        name: 'extra',
        components :{
        informasi: () => import('@/components/Informasi/extra.vue'),
        }
      }
    ]
  },
  {
    path: '/latest',
    name: 'latest',
    component: () => import('../components/latest.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
