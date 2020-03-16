<template>



	<div class="vx-row">



	

		<!-- MULTIPLE COLUMNS-->
		<div class="vx-col w-full mb-base">
			<vx-card >
				<div class="vx-row">
					<div class="vx-col sm:w-1/2 w-full mb-2">
						<vs-input class="w-full" label-placeholder="Selectionner Client" v-model="input25" />
					</div>
					<div class="vx-col sm:w-1/2 w-full mb-2">
						<vs-input class="w-full" label-placeholder="Facture" v-model="input26" />
					</div>
                    
                    
                    
				</div>
                
                
				<div class="vx-row">
                    
                    <div class="vx-col w-full">
						<vs-input class="w-full" icon-pack="feather" icon="icon-plus"  label-placeholder="Ajouter un produit ou service" v-model="input23" />
                        <br><br>
					</div>
				</div>
                
                
                
				<div class="vx-row">
					<div class="vx-col w-full">
						<vs-button class="mr-3 mb-2">Enregistrer</vs-button>	</div>
				</div>
        <template slot="codeContainer">
&lt;template&gt;
  &lt;div class=&quot;vx-row&quot;&gt;
    &lt;div class=&quot;vx-col sm:w-1/2 w-full mb-2&quot;&gt;
      &lt;vs-input class=&quot;w-full&quot; label-placeholder=&quot;First Name&quot; v-model=&quot;input25&quot; /&gt;
    &lt;/div&gt;
    &lt;div class=&quot;vx-col sm:w-1/2 w-full mb-2&quot;&gt;
      &lt;vs-input class=&quot;w-full&quot; label-placeholder=&quot;Last Name&quot; v-model=&quot;input26&quot; /&gt;
    &lt;/div&gt;
  &lt;/div&gt;
  &lt;div class=&quot;vx-row&quot;&gt;
    &lt;div class=&quot;vx-col sm:w-1/2 w-full mb-2&quot;&gt;
      &lt;vs-input class=&quot;w-full&quot; label-placeholder=&quot;City&quot; v-model=&quot;input27&quot; /&gt;
    &lt;/div&gt;
    &lt;div class=&quot;vx-col sm:w-1/2 w-full mb-2&quot;&gt;
      &lt;vs-input class=&quot;w-full&quot; label-placeholder=&quot;Country&quot; v-model=&quot;input28&quot; /&gt;
    &lt;/div&gt;
  &lt;/div&gt;
  &lt;div class=&quot;vx-row&quot;&gt;
    &lt;div class=&quot;vx-col sm:w-1/2 w-full mb-2&quot;&gt;
      &lt;vs-input class=&quot;w-full&quot; label-placeholder=&quot;Company&quot; v-model=&quot;input29&quot; /&gt;
    &lt;/div&gt;
    &lt;div class=&quot;vx-col sm:w-1/2 w-full mb-6&quot;&gt;
      &lt;vs-input type=&quot;email&quot; class=&quot;w-full&quot; label-placeholder=&quot;Email&quot; v-model=&quot;input30&quot; /&gt;
    &lt;/div&gt;
  &lt;/div&gt;
  &lt;div class=&quot;vx-row&quot;&gt;
    &lt;div class=&quot;vx-col w-full mb-6&quot;&gt;
      &lt;vs-checkbox class=&quot;inline-flex&quot; v-model=&quot;check7&quot;&gt;Remember Me&lt;/vs-checkbox&gt;
    &lt;/div&gt;
  &lt;/div&gt;
  &lt;div class=&quot;vx-row&quot;&gt;
    &lt;div class=&quot;vx-col w-full&quot;&gt;
      &lt;vs-button class=&quot;mr-3 mb-2&quot;&gt;Submit&lt;/vs-button&gt;
      &lt;vs-button color=&quot;warning&quot; type=&quot;border&quot; class=&quot;mb-2&quot; @click=&quot;input25 = input26 = input27 = input28 = input29 = input30 = ''; check7 = false;&quot;&gt;Reset&lt;/vs-button&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/template&gt;
        </template>
			</vx-card>
		</div>
	</div>
</template>

<script>
import SelectDropdownOptions from "./components/extra-components/select/SelectDropdownOptions.vue"
import SelectSelectingValues from "./components/extra-components/select/SelectSelectingValues.vue"

export default{
	data() {
		return {
			check1: '',
			check2: '',
			check3: '',
			check4: '',
			check5: '',
			check6: '',
			check7: '',
			input1: '',
			input2: '',
			input3: '',
			input4: '',
			input5: '',
			input6: '',
			input7: '',
			input8: '',
			input9: '',
			input10: '',
			input11: '',
			input12: '',
			input13: '',
			input14: '',
			input15: '',
			input16: '',
			input17: '',
			input18: '',
			input19: '',
			input20: '',
			input21: '',
			input22: '',
			input23: '',
			input24: '',
			input25: '',
			input26: '',
			input27: '',
			input28: '',
			input29: '',
			input30: '',
		}
},

    components: {
        SelectDropdownOptions,
        SelectSelectingValues
	}
    }
</script>
