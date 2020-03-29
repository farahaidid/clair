/*=========================================================================================
  File Name: router.js
  Description: Routes for vue-router. Lazy loading is enabled.
  Object Strucutre:
                    path => router path
                    name => router name
                    component(lazy loading) => component to load
                    meta : {
                      rule => which user can have access (ACL)
                      breadcrumb => Add breadcrumb to specific page
                      pageTitle => Display title besides breadcrumb
                    }
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/


import Vue from 'vue'
import Router from 'vue-router'
import auth from "@/auth/authService";

import firebase from 'firebase/app'
import 'firebase/auth'


Vue.use(Router)

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    scrollBehavior () {
        return { x: 0, y: 0 }
    },
    routes: [

        {
    // =============================================================================
    // MAIN LAYOUT ROUTES
    // =============================================================================
            path: '',
            component: () => import('./layouts/main/Main.vue'),
            children: [
        // =============================================================================
        // Theme Routes
        // =============================================================================
             
                
                 {
                    path: '/',
                    name: 'dashboard-analytics',
                    component: () => import('./views/DashboardAnalytics.vue'),
                    meta: {
                        rule: 'editor',
                    }
                },
                
        // =============================================================================
        // UI ELEMENTS
        // =============================================================================
                {
                    path: '/DataListListView.vue',
                    name: 'data-list-list-view',
                    component: () => import('@/views/DataListListView.vue'),
                    meta: {
                        pageTitle: 'Vos Documents',
                        rule: 'editor'
                    },
                },
                
             {
                    path: '/DataClientListView.vue',
                    name: 'data-client-list-view',
                    component: () => import('@/views/DataClientListView.vue'),
                    meta: {
                        pageTitle: 'Vos Clients',
                        rule: 'editor'
                    },
                },
                
                {
                    path: '/DataProduitListView.vue',
                    name: 'data-produit-list-view',
                    component: () => import('@/views/DataProduitListView.vue'),
                    meta: {
                        pageTitle: 'Vos Produits et Services',
                        rule: 'editor'
                    },
                },
                
                
             {
                    path: '/EditerFacture.vue',
                    name: 'data-client-list-view',
                    component: () => import('@/views/EditerFacture.vue'),
                    meta: {
                        pageTitle: 'Editer Facture',
                        rule: 'editor'
                    },
                },
        // =============================================================================
        // Pages Routes
        // =============================================================================
             
                {
                    path: '/pages/knowledge-base',
                    name: 'page-knowledge-base',
                    component: () => import('@/views/pages/KnowledgeBase.vue'),
                    meta: {
                        pageTitle: 'Ressources',
                        rule: 'editor'
                    },
                },
                   {
                    path: '/pages/knowledge-base2',
                    name: 'page-knowledge-base',
                    component: () => import('@/views/pages/KnowledgeBase2.vue'),
                    meta: {
                        pageTitle: 'Microentreprise',
                        rule: 'editor'
                    },
                },
               {
                    path: '/pages/knowledge-base3',
                    name: 'page-knowledge-base',
                    component: () => import('@/views/pages/KnowledgeBase3.vue'),
                    meta: {
                        pageTitle: "Mode d'Emploi",
                        rule: 'editor'
                    },
                },
             
                {
                    path: '/pages/invoice',
                    name: 'page-invoice',
                    component: () => import('@/views/pages/Invoice.vue'),
                    meta: {
                        pageTitle: 'Etablir une facture',
                        rule: 'editor'
                    },
                },
                
                
           //     {
            //    path: '/Collect.vue',
            //    name: 'Collecter',
             //   component: () => import('./views/Collect.vue'),
            //        meta: {
            //            pageTitle: 'Importer vos factures',
            //            rule: 'editor'
             //       },
            //    },
                 {
                path: '/Banque.vue',
                name: 'Banque',
                component: () => import('./views/Banque.vue'),
                    meta: {
                        rule: 'editor'
                    },
              },
                
               {
                path: '/Comptaa.vue',
                name: 'Compta',
                component: () => import('./views/Comptaa.vue'),
                    meta: {
                        pageTitle: 'Mes documents comptables',
                        rule: 'editor'
                    },
              },
              
               {
                path: '/GmailConnect.vue',
                name: 'GmailConnect',
                component: () => import('./views/GmailConnect.vue'),
                    meta: {
                        rule: 'editor'
                    },
              },
              
                  {
                path: '/Fisca.vue',
                name: 'Compta',
                component: () => import('./views/Fisca.vue'),
                    meta: {
                        pageTitle: 'Mes declarations fiscales',
                        rule: 'editor'
                    },
              },
            
                  {
                    path: '/apps/calendar/vue-simple-calendar',
                    name: 'calendar-simple-calendar',
                    component: () => import('./views/apps/calendar/SimpleCalendar.vue'),
                    meta: {
                        rule: 'editor',
                        no_scroll: true,
                    }
                },
                       {
                    path: '/pages/knowledge-base',
                    name: 'page-knowledge-base',
                    component: () => import('@/views/pages/KnowledgeBase.vue'),
                    meta: {
                        breadcrumb: [
                            { title: 'Home', url: '/' },
                            { title: 'Pages' },
                            { title: 'KnowledgeBase', active: true },
                        ],
                        pageTitle: 'KnowledgeBase',
                        rule: 'editor'
                    },
                },
                
                   {
                    path: '/pages/profile',
                    name: 'page-profile',
                    component: () => import('@/views/pages/Profile.vue'),
                    meta: {
                   
                        rule: 'editor'
                    },
                },
                
                
                   {
                    path: '/entreprise',
                    name: 'entreprise',
                    component: () => import('@/views/Entreprise.vue'),
                    meta: {
                   
                        rule: 'editor'
                    },
                },
        // =============================================================================            
            ],
            
            
        },
    // =============================================================================
    // FULL PAGE LAYOUTS
    // =============================================================================
       
       
        {
            path: '',
            component: () => import('@/layouts/full-page/FullPage.vue'),
            children: [
        // =============================================================================
        // PAGES
        // =============================================================================
               
                
                {
                    path: '/callback',
                    name: 'auth-callback',
                    component: () => import('@/views/Callback.vue'),
                    meta: {
                        rule: 'editor'
                    }
                },
                {
                    path: '/pages/login',
                    name: 'page-login',
                    component: () => import('@/views/pages/login/Login.vue'),
                    meta: {
                        rule: 'editor'
                    }
                },
                {
                    path: '/pages/register',
                    name: 'page-register',
                    component: () => import('@/views/pages/register/Register.vue'),
                    meta: {
                        rule: 'editor'
                    }
                },
                {
                    path: '/pages/forgot-password',
                    name: 'page-forgot-password',
                    component: () => import('@/views/pages/ForgotPassword.vue'),
                    meta: {
                        rule: 'editor'
                    }
                },
                {
                    path: '/pages/reset-password',
                    name: 'page-reset-password',
                    component: () => import('@/views/pages/ResetPassword.vue'),
                    meta: {
                        rule: 'editor'
                    }
                },
                {
                    path: '/pages/lock-screen',
                    name: 'page-lock-screen',
                    component: () => import('@/views/pages/LockScreen.vue'),
                    meta: {
                        rule: 'editor'
                    }
                },
                
                  {
                    path: '/pages/faq',
                    name: 'page-faq',
                    component: () => import('@/views/pages/Faq.vue'),
                    meta: {

                        rule: 'editor'
                    },
                },
                {
                    path: '/pages/comingsoon',
                    name: 'page-coming-soon',
                    component: () => import('@/views/pages/ComingSoon.vue'),
                    meta: {
                        rule: 'editor'
                    }
                },
                {
                    path: '/pages/error-404',
                    name: 'page-error-404',
                    component: () => import('@/views/pages/Error404.vue'),
                    meta: {
                        rule: 'editor'
                    }
                },
                {
                    path: '/pages/error-500',
                    name: 'page-error-500',
                    component: () => import('@/views/pages/Error500.vue'),
                    meta: {
                        rule: 'editor'
                    }
                },
                {
                    path: '/pages/not-authorized',
                    name: 'page-not-authorized',
                    component: () => import('@/views/pages/NotAuthorized.vue'),
                    meta: {
                        rule: 'editor'
                    }
                },
                {
                    path: '/pages/maintenance',
                    name: 'page-maintenance',
                    component: () => import('@/views/pages/Maintenance.vue'),
                    meta: {
                        rule: 'editor'
                    }
                },
            ]
        },
        // Redirect to 404 page, if no match found
        {
            path: '*',
            redirect: '/pages/error-404'
        }
    ],
})

router.afterEach(() => {
  // Remove initial loading
  const appLoading = document.getElementById('loading-bg')
    if (appLoading) {
        appLoading.style.display = "none";
    }
})

router.beforeEach((to, from, next) => {
    firebase.auth().onAuthStateChanged(() => {

        // get firebase current user
        const firebaseCurrentUser = firebase.auth().currentUser

        // if (
        //     to.path === "/pages/login" ||
        //     to.path === "/pages/forgot-password" ||
        //     to.path === "/pages/error-404" ||
        //     to.path === "/pages/error-500" ||
        //     to.path === "/pages/register" ||
        //     to.path === "/callback" ||
        //     to.path === "/pages/comingsoon" ||
        //     (auth.isAuthenticated() || firebaseCurrentUser)
        // ) {
        //     return next();
        // }

        // If auth required, check login. If login fails redirect to login page
        if(to.meta.authRequired) {
          if (!(auth.isAuthenticated() || firebaseCurrentUser)) {
            router.push({ path: '/pages/login', query: { to: to.path } })
          }
        }

        return next()
        // Specify the current path as the customState parameter, meaning it
        // will be returned to the application after auth
        // auth.login({ target: to.path });

    });

});

export default router
