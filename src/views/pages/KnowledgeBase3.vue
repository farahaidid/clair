]<!-- =========================================================================================
    File Name: Faq.vue
    Description: FAQ Page
    ----------------------------------------------------------------------------------------
    Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
    <div id="knowledge-base-page">
        <!-- JUMBOTRON -->
     
        <div class="vx-row">
            <div class="vx-col w-full md:w-2/5 lg:w-1/4 rounded-lg">
                <vx-card>
                    <h4>Categories</h4>
                    <ul class="faq-topics mt-4">
                        <li v-for="category in categories" :key="category.id" class="p-2 font-medium flex items-center" @click="faqFilter = category.id">
                            <div class="h-3 w-3 rounded-full mr-2" :class="'bg-' + category.color"></div><span class="cursor-pointer">{{ category.name }}</span>
                        </li>
                    </ul>

                    <br><br>

                  
                </vx-card>
            </div>

            <!-- FAQ COL -->
            <div class="vx-col w-full md:w-3/5 lg:w-3/4 mt-12 md:mt-0">
                <vs-collapse accordion type="margin" class="p-0">
                    <vs-collapse-item v-for="(que,index) in filteredFaq" class="faq-bg rounded-lg" :class="{'mt-0': !index}" :key="que.id">
                        <div slot="header"><h5>{{ que.question }}</h5></div>
                        <p>{{ que.ans }}</p>
                    </vs-collapse-item>
                </vs-collapse>

            </div>
        </div>
    </div>
</template>

<script>

export default{
    data() {
        return {
            faqSearchQuery: '',
            faqFilter: 1,
            categories: [
                {
                    id: 1,
                    name: 'Toutes les questions',
                    color: 'grey',
                },
                {
                    id: 2,
                    name: 'Comptabilite',
                    color: 'primary'
                },
                {
                    id: 3,
                    name: 'Fiscal',
                    color: 'success'
                },
                {
                    id: 4,
                    name: 'Parametrage',
                    color: 'warning'
                },
                {
                    id: 5,
                    name: 'Autres',
                    color: 'danger'
                },
            ],
            faqs: [
                {
                    id: 1,
                    categoryId: 2,
                    question: 'Collecter mes documents justificatifs',
                    ans: 'Royalty free means you just need to pay for rights to use the item once per end product. You don\'t need to pay additional or ongoing fees for each person who sees or uses it. Please note that there may be some limits placed on uses under the different license types available on the marketplaces, such as our Photo and Music Licenses.'
                },
                {
                    id: 2,
                    categoryId: 2,
                    question: 'Personnaliser et envoyer une Facture',
                    ans: 'The item is what you purchase from Envato Market. The end product is what you build with that item. Example: The item is a business card template; the end product is the finalized business card. The item is a button graphic; the end product is an app using the button graphic in the app\'s interface.'
                },
                {
                    id: 3,
                    categoryId: 2,
                    question: "Gerer mes clients et produits / services ",
                    ans: 'Yes. You can customize our items to fit the needs of your end product. Example: You could change the colors, text, and layout of a flyer template or convert an HTML template into a WordPress theme for a single client.'
                },
                {
                    id: 4,
                    categoryId: 2,
                    question: 'Importer mes transactions bancaires',
                    ans: 'Non-exclusive means that you are not the only person with access to the item. Others will also be licensing and using the same item.'
                },
                {
                    id: 5,
                    categoryId: 3,
                    question: "Modifier les informations de mon profil",
                    ans: 'No, our Regular License is for a free end product (whether or not the item is used in the end product in an editorial way). And our Extended License is for an end product that\'s sold (whether or not the item is used in the end product in an editorial way). If you want to use an item in an editorial way in your end product, choose the Regular License if your end product is distributed for free, and choose the Extended License if your end product is sold to the end customer.'
                },
              
            ],
            supporters: [
                {
                    id: 1,
                    img: require("@/assets/images/portrait/small/avatar-s-1.jpg"),
                    name: 'Boyce Shene',
                    profession: 'Web Developer'
                },
                {
                    id: 2,
                    img: require("@/assets/images/portrait/small/avatar-s-2.jpg"),
                    name: 'Margie Sevy',
                    profession: 'Web Designer'
                },
                {
                    id: 3,
                    img: require("@/assets/images/portrait/small/avatar-s-3.jpg"),
                    name: 'Cyndi Navas',
                    profession: 'Web Developer'
                },
                {
                    id: 4,
                    img: require("@/assets/images/portrait/small/avatar-s-4.jpg"),
                    name: 'Chi Petrusky',
                    profession: 'Web Developer'
                },
                {
                    id: 5,
                    img: require("@/assets/images/portrait/small/avatar-s-5.jpg"),
                    name: 'Shanel Dumag',
                    profession: 'Web Designer'
                },
            ]
        }
    },
    computed: {
        filteredFaq() {
            return this.faqs.filter((faq) => {
                if (this.faqFilter == 1) return (faq.question.toLowerCase().includes(this.faqSearchQuery.toLowerCase()) || faq.ans.toLowerCase().includes(this.faqSearchQuery.toLowerCase()));
                else if (this.faqFilter == 2) return faq.categoryId == 2 && (faq.question.toLowerCase().includes(this.faqSearchQuery.toLowerCase()) || faq.ans.toLowerCase().includes(this.faqSearchQuery.toLowerCase()));
                else if (this.faqFilter == 3) return faq.categoryId == 3 && (faq.question.toLowerCase().includes(this.faqSearchQuery.toLowerCase()) || faq.ans.toLowerCase().includes(this.faqSearchQuery.toLowerCase()));
                else if (this.faqFilter == 4) return faq.categoryId == 4 && (faq.question.toLowerCase().includes(this.faqSearchQuery.toLowerCase()) || faq.ans.toLowerCase().includes(this.faqSearchQuery.toLowerCase()));
                else if (this.faqFilter == 5) return faq.categoryId == 5 && (faq.question.toLowerCase().includes(this.faqSearchQuery.toLowerCase()) || faq.ans.toLowerCase().includes(this.faqSearchQuery.toLowerCase()));
            });
        }
    },
    methods: {
    },
    components: {
    }
}
</script>

<style lang="scss">
#knowledge-base-page {
    .faq-jumbotron-content {
        background-image: url('../../assets/images/pages/faq.jpg');
        background-size: cover;
    }

    .faq-bg {
        background-color: #fff;
    }
}
</style>
