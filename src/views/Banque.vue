<!-- =========================================================================================
    File Name: FormWizard.vue
    Description: Form Wizard (third-party) - Imports page portions
    ----------------------------------------------------------------------------------------
    Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->

<template>
    <div id="extra-component-form-wizard-demo">

        <form-wizard-number-tab></form-wizard-number-tab>
    </div>
</template>

<script>
import FormWizardNumberTab from "./forms/form-wizard/FormWizardNumberTab.vue"
import FormWizardIconTab from "./forms/form-wizard/FormWizardIconTab.vue"
import FormWizardValidation from "./forms/form-wizard/FormWizardValidation.vue"

import StatisticsCardLine from '@/components/statistics-cards/StatisticsCardLine.vue'

export default {
    components: {
        FormWizardNumberTab,
        FormWizardIconTab,
        FormWizardValidation,
    }
}
</script>
