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
                    name: 'Sommaire',
                    color: 'grey',
                },
                {
                    id: 2,
                    name: 'Comptabilite',
                    color: 'primary'
                },
                {
                    id: 3,
                    name: 'Facturation',
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
                    id: 4,
                    categoryId: 3,
                    question: "Changer votre profil de facturation",
                    ans: "La premiere etape avant d'emettre votre premiere facture est d'editer les donnees de votre entreprise. Il vous suffit de cliquer sur l'icone situee en haut a droite de l'ecran, puis sur 'Entreprise'. Vous pouvez ainsi importer votre logo et saisir toutes les donnees relatives a votre societe."
                },
                 {
                    id: 5,
                    categoryId: 3,
                    question: "Creer votre premier Client",
                    ans: "Avant de pouvoir facturer, il vous est demande de creer vos Clients, en cliquant sur le bouton du meme nom qui se trouve dans la section 'Facturer'. Il vous est alors demande de renseigner certains champs tels que l'adresse ou le numero SIREN du client. Ces mentions legales sont en effet requises par la loi lorsque votre client est professionnel. Si vous emettez une facture a destination d'un particulier, vous pouvez laisser ces champs vides."
                },
                 {
                    id: 5,
                    categoryId: 3,
                    question: "Creer vos produits ou prestations de service",
                    ans: "Dans la section Facturer vous avez la possibilite de creer vos produits et services en cliquant sur le bouton 'Produits' puis sur 'Ajouter Produit'. Il vous suffit ensuite de renseigner un nom, prix unitaire et description. Cette derniere ne sera pas visible sur votre facture."
                },
                
                 {
                    id: 5,
                    categoryId: 3,
                    question: "Etablir votre premiere facture",
                    ans: "Une fois que vous avez edite votre profil Entreprise et cree vos clients et produits, vous pouvez etablir vos factures en cliquant sur le bouton 'Editer Facture'. Vous avez le choix entre etablir une Facture, un Devis ou un Avoir. Le choix de la numerotation de vos factures est libre."
                },
              
                 {
                    id: 5,
                    categoryId: 3,
                    question: "Qu'en est-il de la TVA ?",
                    ans: "La TVA est etablie par defaut a 20%. Si vous n'etes pas assujetti a la TVA, vous avez la possibilite de decocher cette case dans le menu 'Editer Facture'."
                },
                 {
                    id: 5,
                    categoryId: 3,
                    question: "Sauvegarder votre document",
                    ans: "Une fois que votre document est pret, il vous suffit de cliquer sur le bouton 'Sauvegarder'. Un fichier PDF est alors genere, vous pouvez l'enregister sur votre PC ou mobile. Le document est automatiquement reporte dans votre section 'Documents' afin de relier par la suite a une transaction bancaire."
                },
                
                 {
                    id: 5,
                    categoryId: 3,
                    question: "Puis-je modifier une facture?",
                    ans: "Non. Conformement aux dispositions legales anti-fraude a la TVA, une fois votre facture generee celle-ci ne peut etre modifiee. Vous pouvez par contre creer une facture d'avoir."
                },
                
                 {
                    id: 5,
                    categoryId: 3,
                    question: "Outil de facturation agree par l'Etat",
                    ans: "Clair est conforme a la nouvelle legislation en matiere de facturation (loi du 1er janvier 2018). Vous pouvez telecharger une attestation de conformite depuis les parametres de votre profil."
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
