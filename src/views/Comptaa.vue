<!-- =========================================================================================
    File Name: Clipboard.vue
    Description: Clipboard demo
    ----------------------------------------------------------------------------------------
    Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>

    <div id="page-clipboard-demo">
    
    <p align="right">
    
    
    <vs-button class="mb-base mr-3" type="border">Plan Comptable</vs-button>
    <vs-button class="mb-base mr-3" type="border">Dates d'exercice</vs-button>
    
    </p>
          
        <clipboard-directive></clipboard-directive>
        <clipboard-without-directive></clipboard-without-directive>
    </div>
</template>

<script>
import ClipboardDirective from './ClipboardDirective.vue'
import ClipboardWithoutDirective from './ClipboardWithoutDirective.vue'

export default{
    components: {
        ClipboardDirective,
        ClipboardWithoutDirective
    }
}
</script>
