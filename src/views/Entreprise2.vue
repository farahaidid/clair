<!-- =========================================================================================
    File Name: CardBasic.vue
    Description: Basic Cards
    ----------------------------------------------------------------------------------------
    Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->

<template>
        
        

        <!-- CARD WITH TABS COMPONENT -->
        <div class="vx-row match-height">
       

          

       

            <!-- CARD WITH VERTICAL ICON TABS -->
            <div class="vx-col w-full  md:mt-0 mt-base">
                <vx-card>
                    <template slot="no-body">
                        <vs-tabs vs-position="left" alignment="fixed">
                            <vs-tab label="General" vs-icon="extension">
                                <div class="mt-1 pl-2">
                                    <p>Chocolate cake brownie candy canes marzipan. Chocolate cake powder jujubes bonbon tart cake bonbon sweet roll. Carrot cake sweet dragée ice cream pie candy canes sesame snaps tart halvah. Lemon drops pastry tart candy. Caramels jelly beans dessert dessert cupcake lollipop cake cotton candy. Pudding chupa chups ice cream tiramisu liquorice. Lollipop jelly pie tiramisu pudding marshmallow.</p>
                             
                             
                                </div>
                            </vs-tab>
                            <vs-tab label="Infos Fiscales" vs-icon="store">
                                <div class="mt-1 pl-2">
  
                                   
       <br>
            Veuillez completer les informations fiscales relatives a votre entreprise.<br>
             <div class="demo-alignment">
            <vs-input disabled="true" label-placeholder="Microentreprise" v-model="value1" />
            
            <vs-input disabled="true" label-placeholder="Exemption de TVA" v-model="value2" />
            <datepicker-default ></datepicker-default>
        </div>
              <br>
         <br><br><br><br>
         <br><br><br><br>
         <br><br><br><br>
         
         Vos informations fiscales determinent vos taux d'imposition ainsi que les mentions legales presentes sur vos factures.
                                   </div>
                            </vs-tab>
                            <vs-tab label="Infos Comptables" vs-icon="get_app">
                                <div class="mt-1 pl-2">
                                    <p>Cheesecake pie lollipop dragée candy icing jujubes fruitcake. Apple pie caramels apple pie gingerbread danish candy canes brownie liquorice topping. Icing dragée donut jelly caramels cake. Toffee gummi bears ice cream apple pie. Jujubes candy marzipan lollipop tiramisu biscuit apple pie liquorice. Lemon drops icing gummies cake marshmallow. </p>
                                </div>
                            </vs-tab>
                        </vs-tabs>
                    </template>
                </vx-card>
            </div>
        </div>
    </div>
</template>

<script>
import DatepickerDefault from './DatepickerDefault.vue'
import VuePerfectScrollbar from 'vue-perfect-scrollbar'
import { videoPlayer }     from 'vue-video-player'
import VxTimeline          from "@/components/timeline/VxTimeline.vue"
import 'video.js/dist/video-js.css'



export default{
    data() {
        return {
            // card 1
            card_1: {},
            card_2: {},
            card_3: {},
            card_4: {},
            card_5: {},
            card_6: {},
            card_7: {},
            card_8: {},

            chatLog: [],
            chatMsgInput: '',

            card_9: {},

            timelineData: [
              {
                color : "primary",
                icon  : "PlusIcon",
                title : "New Task Added",
                desc  : "Bonbon macaroon jelly beans gummi bears jelly lollipop apple",
                time  : "25 Days Ago"
              },
              {
                color : "warning",
                icon  : "AlertCircleIcon",
                title : "Task Update Found",
                desc  : "Cupcake gummi bears soufflé caramels candy",
                time  : "15 Days Ago"
              },
              {
                color : "success",
                icon  : "CheckIcon",
                title : "Task Finished",
                desc  : "Candy ice cream cake. Halvah gummi bears",
                time  : "20 mins ago"
              }
            ],

            name  : '',
            email : '',
            msg   : '',

            playerOptions: {},
            settings: { // perfectscrollbar settings
                maxScrollbarLength: 60,
                wheelSpeed: .60,
            },
        }
    },
    components: {
        VuePerfectScrollbar,
        videoPlayer,
        VxTimeline,
        DatepickerDefault
    },
    mounted() {
        this.$refs.chatLogPS.$el.scrollTop = this.$refs.chatLog.scrollHeight;
    },
    created() {
      // Card 1
      this.$http.get("/api/users/pixinvent/product/1")
        .then((response) => { this.card_1 = response.data })
        .catch((error)   => { console.log(error) })

      // Card 2
      this.$http.get("/api/users/pixinvent/product/sales/1")
        .then((response) => { this.card_2 = response.data })
        .catch((error)   => { console.log(error) })

      // Card 3
      this.$http.get("/api/users/pixinvent/product/goals/1")
        .then((response) => { this.card_3 = response.data })
        .catch((error)   => { console.log(error) })

      // Card 4
      this.$http.get("/api/users/89")
        .then((response) => { this.card_4 = response.data })
        .catch((error)   => { console.log(error) })

      // Card 5
      this.$http.get("/api/users/58")
        .then((response) => { this.card_5 = response.data })
        .catch((error)   => { console.log(error) })

      // Card 6
      this.$http.get("/api/users/16")
        .then((response) => { this.card_6 = response.data })
        .catch((error)   => { console.log(error) })

      // Card 7
      this.$http.get("/api/place/18")
        .then((response) => { this.card_7 = response.data })
        .catch((error)   => { console.log(error) })

      // Card 8
      this.$http.get("/api/place/76/weather")
        .then((response) => { this.card_8 = response.data })
        .catch((error)   => { console.log(error) })

      // Chat Log
      this.$http.get("/api/chat/demo-1/log")
        .then((response) => { this.chatLog = response.data })
        .catch((error)   => { console.log(error) })

      // Card 9
      this.$http.get("/api/item/12/review")
        .then((response) => { this.card_9 = response.data })
        .catch((error)   => { console.log(error) })

      // Player Options
      this.$http.get("/api/card/card-basic/player-option")
        .then((response) => { this.playerOptions = response.data })
        .catch((error)   => { console.log(error) })
    }
}
</script>




<style lang="scss">
#demo-basic-card {
    .overlay-card {
        .vx-card__collapsible-content {
            max-height: 485px;
        }
    }

    .chat-card-log {
        height: 360px;

        .chat-sent-msg {
            background-color: #f2f4f7 !important;
        }
    }

    .card-video {
        .video-js {
            height: 370px;
        }
    }
}
</style>
