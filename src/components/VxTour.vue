<!-- =========================================================================================
    File Name: VxTour.vue
    Description: Tour Component
    ----------------------------------------------------------------------------------------
    Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->

<template>
    
</template>

<script>
export default{
    name: 'vx-tour',
    props: {
        steps: {
            required: true,
            type: Array
        }
    },
    watch: {
      '$route.path'() {
        this.$tours['vuexyTour'].stop()
      }
    },
    mounted() {
        this.$tours['vuexyTour'].start()
    }
}
</script>

<style lang="scss">
.v-tour {
    .v-step {
        z-index: 55000;
        background-color: rgba(var(--vs-primary),1);
        border-radius: .5rem;
        padding: 1.5rem;
        filter: drop-shadow(0 0 7px rgba(0,0,0,.5));

        .v-step__arrow {
            border-color: rgba(var(--vs-primary),1);
        }

        .vs-button-border:not(.btn-tour-next):not(.btn-tour-finish) {
            border-color: rgba(255, 255, 255, .5) !important;
        }
    }
}
</style>
