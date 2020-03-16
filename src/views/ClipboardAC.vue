<!-- =========================================================================================
	File Name: ClipboardDirective.vue
	Description: Clipboard demo
	----------------------------------------------------------------------------------------
	Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
	Author: Pixinvent
	Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->

<template>
	<vx-card title="Comptabilite Simplifiee">
		Je suis Microentrepreneur, ou entrepreneur individuel repondant aux criteres d'eligibilite.<br><br>
        <vs-button type="relief" size="large">
			Acceder a ma compta
		</vs-button>
		<template slot="codeContainer">
&lt;template&gt;
    &lt;vs-input v-model=&quot;text&quot; class=&quot;inline-flex&quot; /&gt;
    &lt;vs-button
        v-clipboard:copy=&quot;text&quot;
        v-clipboard:success=&quot;onCopy&quot;
        v-clipboard:error=&quot;onError&quot;&gt;
        Copy
    &lt;/vs-button&gt;
&lt;/template&gt;

&lt;script&gt;
export default {
    data() {
        return {
            text: 'Copy Me!',
        }
    },
    methods: {
        onCopy() {
            this.$vs.notify({
                title: 'Success',
                text: 'Text copied successfully',
                color: 'success',
                iconPack: 'feather',
                position: 'top-center',
                icon: 'icon-check-circle'
            })
        },
        onError() {
            this.$vs.notify({
                title: 'Failed',
                text: 'Error in copying text',
                color: 'danger',
                iconPack: 'feather',
                position: 'top-center',
                icon: 'icon-alert-circle'
            })
        },
    }
}
&lt;/script&gt;
		</template>
	</vx-card>
</template>

<script>
export default {
    data() {
        return {
            text: 'Copy Me',
        }
    },
    methods: {
        onCopy() {
            this.$vs.notify({
                title: 'Success',
                text: 'Text copied successfully',
                color: 'success',
                iconPack: 'feather',
                position: 'top-center',
                icon:'icon-check-circle'
            })
        },
        onError() {
            this.$vs.notify({
                title: 'Failed',
                text: 'Error in copying text',
                color: 'danger',
                iconPack: 'feather',
                position: 'top-center',
                icon:'icon-alert-circle'
            })
        },
    }
}
</script>
