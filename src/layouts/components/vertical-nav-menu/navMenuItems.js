/*=========================================================================================
  File Name: sidebarItems.js
  Description: Sidebar Items list. Add / Remove menu items from here.
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/

export default [
  {
    url: "/",
    name: "Tableau de Bord",
    slug: "dashboard",
    icon: "HomeIcon",
  },
   {
    header: "ACTIVITE",
    icon: "PackageIcon",
    i18n: "ActivitE",
    items: [

    
 //   {
 //   url: "/Collect.vue",
 //   name: "Collecter",
 //   slug: "collect",
 //   icon: "PlusCircleIcon",
 // },
  {
    url: '/pages/invoice',
    name: "Facturer",
    icon: "CopyIcon",
        slug: 'page-invoice',
  },
  {
        url: "/DataListListView.vue",
        name: "Documents",
        slug: "data-list-list-view",
        icon: "LayersIcon",
      },
  
      {
        url: '/pages/knowledge-base',
        slug: 'page-knowledge-base',
        name: "Banque",
        icon: "CreditCardIcon",
      },
  
   ]
      },
  
  
  
{
   header: "GESTION",
    icon: "PackageIcon",
    i18n: "GESTION",
   items: [
  
  {
        url: '/Comptaa.vue',
           name: "Comptable",
           icon: "CheckCircleIcon",
           slug: "extra-component-clipboard",
       
      },
 
  
  
 // {
 //   url: "/Fisca.vue",
 //   name: "Liasse Fiscale",
 //   slug: "Fisca",
 //   icon: "MailIcon",
 // },
   ]
     },
  
]