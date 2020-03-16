<!-- =========================================================================================
    File Name: KnowledgeBase.vue
    Description: Knowledge Base Page
    ----------------------------------------------------------------------------------------
    Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
    <div id="knowledge-base-page">
    
        <!-- JUMBOTRON -->
        <div class="knowledge-base-jumbotron">
            <div class="knowledge-base-jumbotron-content lg:p-32 md:p-24 sm:p-16 p-8 rounded-lg mb-base">
                <h1 class="mb-1 text-white">Selectionnez votre Banque Professionelle</h1><br>
                <vs-input icon-no-border placeholder="Nom de votre Banque" v-model="knowledgeBaseSearchQuery" icon-pack="feather" icon="icon-search" size="large" class="w-full mt-6" />
            <br><p class="text-white">Synchronisation bancaire autorisee par l'<b>ACPR - Banque de France</b>. Acces en lecture seule uniquement.</p>
                
            </div>
        </div>

    </div>
</template>

<script>

export default{
    data() {
        return {
            knowledgeBaseSearchQuery: '',
            kb: [
                {
                  id          : 1,
                  title       : 'Sales Automation',
                  description : 'Muffin lemon drops chocolate carrot cake chocolate bar sweet roll.',
                  graphic     : require("@/assets/images/pages/graphic-1.png"),
                  url         : '/pages/knowledge-base/category'
                },
                {
                  id          : 2,
                  title       : 'Marketing Automation',
                  description : 'Gingerbread sesame snaps wafer soufflé. Macaroon brownie ice cream',
                  graphic     : require("@/assets/images/pages/graphic-2.png"),
                  url         : '/pages/knowledge-base/category'
                },
                {
                  id          : 3,
                  title       : 'Marketing BI',
                  description : 'cotton candy caramels danish chocolate cake pie candy. Lemon drops tart.',
                  graphic     : require("@/assets/images/pages/graphic-3.png"),
                  url         : '/pages/knowledge-base/category'
                },
                {
                  id          : 4,
                  title       : 'Personalization',
                  description : 'Pudding oat cake carrot cake lemon drops gummies marshmallow.',
                  graphic     : require("@/assets/images/pages/graphic-4.png"),
                  url         : '/pages/knowledge-base/category'
                },
                {
                  id          : 5,
                  title       : 'Email Marketing',
                  description : 'Gummi bears pudding icing sweet caramels chocolate',
                  graphic     : require("@/assets/images/pages/graphic-5.png"),
                  url         : '/pages/knowledge-base/category'
                },
                {
                  id          : 6,
                  title       : 'Demand Generation',
                  description : 'Dragée jelly beans candy canes pudding cake wafer. Muffin croissant.',
                  graphic     : require("@/assets/images/pages/graphic-6.png"),
                  url         : '/pages/knowledge-base/category'
                },
            ]
        }
    },
    computed: {
        filteredKB() {
            return this.kb.filter((item) => item.title.toLowerCase().includes(this.knowledgeBaseSearchQuery.toLowerCase()) || item.description.toLowerCase().includes(this.knowledgeBaseSearchQuery.toLowerCase()));
        }
    },
    methods: {},
    components: {}
}
</script>

<style lang="scss">
.knowledge-base-jumbotron-content {
    background-image: url('../../assets/images/pages/knowledge-base-cover.jpg');
    background-size: cover;
}
</style>
