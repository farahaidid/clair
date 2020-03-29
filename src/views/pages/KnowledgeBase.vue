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
  

        <!-- KNOWLEDGE BASE CARDS  -->
        <div class="vx-row">
                <div class="vx-col w-full md:w-1/3 sm:w-1/2 mb-base" v-for="item in filteredKB" :key="item.id" @click="$router.push(item.url).catch(() => {})">
                    <vx-card class="text-center cursor-pointer">
                        <img :src="item.graphic" alt="graphic" width="180" class="mx-auto mb-4">
                        <h4 class="mb-2">{{ item.title.toUpperCase() }}</h4>
                        <small>{{ item.description }}</small>
                    </vx-card>
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
                  title       : 'Microentreprise',
                  description : 'La demarche a suivre pour etablir votre comptabilité simplifiee.',
                  graphic     : require("@/assets/images/pages/graphic-2.png"),
                  url         : '/pages/knowledge-base2'
                },
                       {
                  id          : 3,
                  title       : "Mode d'Emploi",
                  description : "Questions frequentes concernant l'utilisation de l'application Clair.",
                  graphic     : require("@/assets/images/pages/graphic-3.png"),
                  url         : '/pages/knowledge-base3'
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
