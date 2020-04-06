<!-- =========================================================================================
    File Name: DatePickerDefault.vue
    Description: A simple Vue.js datepicker component. Supports disabling of dates, inline mode, translations
    ----------------------------------------------------------------------------------------
    Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
      
        <div class="mt-5 pl-2">
            <datepicker placeholder="31 Decembre" v-model="date"></datepicker>
         </div>

</template>

<script>
import Datepicker from 'vuejs-datepicker';

export default {
    props:{
        dateModel:{
            type: Date,
            default: null
        }
    },
    data() {
        return {
            date: null,
        }
    },
    watch:{
        date(v){
            this.$emit("date-change",v)
        },
        dateModel(v){
            this.date = v
        }
    },
    components: {
        Datepicker
    }
}
</script>
