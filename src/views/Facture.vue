<!-- =========================================================================================
    File Name: CardBasic.vue
    Description: Basic Cards
    ----------------------------------------------------------------------------------------
    Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->

<template>
  <div id="basic-card">
    <h4>Importer vos factures</h4>
    <br />
    Il vous suffit de connecter vos comptes, vos documents seront ensuite
    importés automatiquement.
    <br />
    <br />
    <div class="vx-row">
      <div class="vx-col w-full sm:w-1/2 lg:w-1/3 mb-base">
        <vx-card>
          <img
            src="./img/content-img-3.jpg"
            alt="content-img"
            class="responsive rounded-lg"
          />

          <div class="my-6">
            <h5 class="mb-2">Connecter Gmail</h5>
            <p class="text-grey">
              Importez automatiquement vos factures depuis votre boite email.
            </p>
          </div>
          <div class="flex justify-between flex-wrap">
            <vs-button
              href="./GmailConnect.vue"
              id="authorize-button"
              class="mt-4 mr-2 shadow-lg"
              type="gradient"
              color="#7367F0"
              gradient-color-secondary="#CE9FFC"
              >Connecter Gmail</vs-button
            >
          </div>
        </vx-card>
      </div>

      <div class="vx-col w-full sm:w-1/2 lg:w-1/3 mb-base">
        <vx-card>
          <img
            src="./img/content-img-2.jpg"
            alt="content-img"
            class="responsive rounded-lg"
          />
          <div class="my-6">
            <h5 class="mb-2">Connecter Espace Client</h5>
            <p class="text-grey">
              Vous pouvez importer vos factures depuis les sites de vos
              fournisseurs.
            </p>
          </div>
          <div class="flex justify-between flex-wrap">
            <vs-button
              class="mt-4 mr-2 shadow-lg"
              type="gradient"
              color="#7367F0"
              gradient-color-secondary="#CE9FFC"
              >Liste des APIs</vs-button
            >
            <vs-button class="mt-4" type="border" color="#b9b9b9"
              >Imports</vs-button
            >
          </div>
        </vx-card>
      </div>

      <div class="vx-col w-full sm:w-1/2 lg:w-1/3 mb-base">
        <vx-card>
          <img
            src="./img/content-img-1.jpg"
            alt="content-img"
            class="responsive rounded-lg"
          />

          <div class="my-6">
            <h5 class="mb-2">Connecter Slack</h5>
            <p class="text-grey">
              Simplement glissez / deposez un document dans votre channel Slack.
            </p>
          </div>
          <div class="flex justify-between flex-wrap">
            <vs-button
              class="mt-4 mr-2 shadow-lg"
              type="gradient"
              color="#7367F0"
              gradient-color-secondary="#CE9FFC"
              >Connecter Slack</vs-button
            >
          </div>
        </vx-card>
      </div>
    </div>

    <!-- CARD WITH TABS COMPONENT -->
    <div class="vx-row match-height">
      <!-- CARD WITH VERTICAL TABS -->

      <!-- CARD WITH VERTICAL ICON TABS -->
    </div>
  </div>
</template>

<script>
import VuePerfectScrollbar from "vue-perfect-scrollbar";
import { videoPlayer } from "vue-video-player";
import VxTimeline from "@/components/timeline/VxTimeline.vue";
import "video.js/dist/video-js.css";

export default {
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
      chatMsgInput: "",

      card_9: {},

      timelineData: [
        {
          color: "primary",
          icon: "PlusIcon",
          title: "New Task Added",
          desc: "Bonbon macaroon jelly beans gummi bears jelly lollipop apple",
          time: "25 Days Ago",
        },
        {
          color: "warning",
          icon: "AlertCircleIcon",
          title: "Task Update Found",
          desc: "Cupcake gummi bears soufflé caramels candy",
          time: "15 Days Ago",
        },
        {
          color: "success",
          icon: "CheckIcon",
          title: "Task Finished",
          desc: "Candy ice cream cake. Halvah gummi bears",
          time: "20 mins ago",
        },
      ],

      name: "",
      email: "",
      msg: "",

      playerOptions: {},
      settings: {
        // perfectscrollbar settings
        maxScrollbarLength: 60,
        wheelSpeed: 0.6,
      },
    };
  },
  components: {
    VuePerfectScrollbar,
    videoPlayer,
    VxTimeline,
  },
  mounted() {
    this.$refs.chatLogPS.$el.scrollTop = this.$refs.chatLog.scrollHeight;
  },
  created() {
    // Card 1
    this.$http
      .get("/api/users/pixinvent/product/1")
      .then((response) => {
        this.card_1 = response.data;
      })
      .catch((error) => {
        console.log(error);
      });

    // Card 2
    this.$http
      .get("/api/users/pixinvent/product/sales/1")
      .then((response) => {
        this.card_2 = response.data;
      })
      .catch((error) => {
        console.log(error);
      });

    // Card 3
    this.$http
      .get("/api/users/pixinvent/product/goals/1")
      .then((response) => {
        this.card_3 = response.data;
      })
      .catch((error) => {
        console.log(error);
      });

    // Card 4
    this.$http
      .get("/api/users/89")
      .then((response) => {
        this.card_4 = response.data;
      })
      .catch((error) => {
        console.log(error);
      });

    // Card 5
    this.$http
      .get("/api/users/58")
      .then((response) => {
        this.card_5 = response.data;
      })
      .catch((error) => {
        console.log(error);
      });

    // Card 6
    this.$http
      .get("/api/users/16")
      .then((response) => {
        this.card_6 = response.data;
      })
      .catch((error) => {
        console.log(error);
      });

    // Card 7
    this.$http
      .get("/api/place/18")
      .then((response) => {
        this.card_7 = response.data;
      })
      .catch((error) => {
        console.log(error);
      });

    // Card 8
    this.$http
      .get("/api/place/76/weather")
      .then((response) => {
        this.card_8 = response.data;
      })
      .catch((error) => {
        console.log(error);
      });

    // Chat Log
    this.$http
      .get("/api/chat/demo-1/log")
      .then((response) => {
        this.chatLog = response.data;
      })
      .catch((error) => {
        console.log(error);
      });

    // Card 9
    this.$http
      .get("/api/item/12/review")
      .then((response) => {
        this.card_9 = response.data;
      })
      .catch((error) => {
        console.log(error);
      });

    // Player Options
    this.$http
      .get("/api/card/card-basic/player-option")
      .then((response) => {
        this.playerOptions = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
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
