<template>
	<div class="vx-row">

		



		<!-- HORIZONTAL LAYOUT WITH ICON-->
		<div class="vx-col md:w-1/2 w-full mb-base">
        
        
       
        
			<vx-card title="General"><br>
				<div class="vx-row mb-6 scroll-area--data-list-add-new">
                
 <template v-if="dataImg">

          <!-- Image Container -->
          <div class="img-container w-64 mx-auto flex items-center justify-center">
            <img :src="dataImg" alt="img" class="responsive">
          </div>



          <!-- Image upload Buttons -->
          <div class="modify-img flex justify-between mt-5">
            <input type="file" class="hidden" ref="updateImgInput" @change="updateCurrImg" accept="image/*">
            <vs-button class="mr-4" type="flat" @click="$refs.updateImgInput.click()">Editer</vs-button>
            <vs-button type="flat" color="#999" @click="dataImg = null">Supprimer</vs-button>
          </div>
        </template>

         <div class="upload-img vx-col  w-full" v-if="!dataImg"><center>
          <input type="file" class="hidden" ref="uploadImgInput" @change="updateCurrImg" accept="image/*">
          <vs-button @click="$refs.uploadImgInput.click()">Ajouter Logo (PDF ou image)</vs-button>
     </center> </div> 
        <br><br><br>
                </div>
                <div class="vx-row mb-6">
					<div class="vx-col sm:w-1/3 w-full">
						<span>Nom Entreprise</span>
					</div>
					<div class="vx-col sm:w-2/3 w-full">
						<vs-input class="w-full"  icon-no-border v-model="input5" placeholder="Denomination Sociale"/>
					</div>
				</div>
				<div class="vx-row mb-6">
					<div class="vx-col sm:w-1/3 w-full">
						<span>SIREN</span>
					</div>
					<div class="vx-col sm:w-2/3 w-full">
						<vs-input class="w-full"  icon-no-border v-model="input6" />
					</div>
				</div>
                
                
				<div class="vx-row mb-6">
					<div class="vx-col sm:w-1/3 w-full">
						<span>Adresse</span>
					</div>
					<div class="vx-col sm:w-2/3 w-full">
						<vs-input class="w-full"  icon-no-border v-model="input7" placeholder="Rue et numero"/>
					</div>
				</div>
                <div class="vx-row mb-6">
					<div class="vx-col sm:w-1/3 w-full">
						<span>Code Postal</span>
					</div>
					<div class="vx-col sm:w-2/3 w-full">
						<vs-input class="w-full"  icon-no-border v-model="input7" />
					</div>
				</div>
                
                      <div class="vx-row mb-6">
					<div class="vx-col sm:w-1/3 w-full">
						<span>Ville</span>
					</div>
					<div class="vx-col sm:w-2/3 w-full">
						<vs-input class="w-full"  icon-no-border v-model="input7" />
					</div>
				</div>
                
				<div class="vx-row mb-6">
					<div class="vx-col sm:w-1/3 w-full">
						<span>Code NAF</span>
					</div>
					<div class="vx-col sm:w-2/3 w-full">
						<vs-input class="w-full"  icon-no-border v-model="input7" />
					</div>
				</div>
			
            
            <br><br>
            
            
				<div class="vx-row">
					<div class="vx-col sm:w-2/3 w-full ml-auto">
						<vs-button class="mr-3 mb-2">Enregistrer les modifications</vs-button>		</div>
				</div>

        <!-- CODE -->
        <template slot="codeContainer">
&lt;template&gt;
  &lt;div class=&quot;vx-row mb-6&quot;&gt;
    &lt;div class=&quot;vx-col sm:w-1/3 w-full&quot;&gt;
      &lt;span&gt;First Name&lt;/span&gt;
    &lt;/div&gt;
    &lt;div class=&quot;vx-col sm:w-2/3 w-full&quot;&gt;
      &lt;vs-input class=&quot;w-full&quot; icon-pack=&quot;feather&quot; icon=&quot;icon-user&quot; icon-no-border v-model=&quot;input5&quot; /&gt;
    &lt;/div&gt;
  &lt;/div&gt;
  &lt;div class=&quot;vx-row mb-6&quot;&gt;
    &lt;div class=&quot;vx-col sm:w-1/3 w-full&quot;&gt;
      &lt;span&gt;Email&lt;/span&gt;
    &lt;/div&gt;
    &lt;div class=&quot;vx-col sm:w-2/3 w-full&quot;&gt;
      &lt;vs-input type=&quot;email&quot; class=&quot;w-full&quot; icon-pack=&quot;feather&quot; icon=&quot;icon-mail&quot; icon-no-border v-model=&quot;input6&quot; /&gt;
    &lt;/div&gt;
  &lt;/div&gt;
  &lt;div class=&quot;vx-row mb-6&quot;&gt;
    &lt;div class=&quot;vx-col sm:w-1/3 w-full&quot;&gt;
      &lt;span&gt;Mobile&lt;/span&gt;
    &lt;/div&gt;
    &lt;div class=&quot;vx-col sm:w-2/3 w-full&quot;&gt;
      &lt;vs-input class=&quot;w-full&quot; icon-pack=&quot;feather&quot; icon=&quot;icon-smartphone&quot; icon-no-border v-model=&quot;input7&quot; /&gt;
    &lt;/div&gt;
  &lt;/div&gt;
  &lt;div class=&quot;vx-row mb-6&quot;&gt;
    &lt;div class=&quot;vx-col sm:w-1/3 w-full&quot;&gt;
      &lt;span&gt;Password&lt;/span&gt;
    &lt;/div&gt;
    &lt;div class=&quot;vx-col sm:w-2/3 w-full&quot;&gt;
      &lt;vs-input type=&quot;password&quot; class=&quot;w-full&quot; icon-pack=&quot;feather&quot; icon=&quot;icon-lock&quot; icon-no-border v-model=&quot;input8&quot; /&gt;
    &lt;/div&gt;
  &lt;/div&gt;
  &lt;div class=&quot;vx-row mb-6&quot;&gt;
    &lt;div class=&quot;vx-col sm:w-2/3 w-full ml-auto&quot;&gt;
      &lt;vs-checkbox class=&quot;inline-flex&quot; v-model=&quot;check2&quot;&gt;Remember Me&lt;/vs-checkbox&gt;
    &lt;/div&gt;
  &lt;/div&gt;
  &lt;div class=&quot;vx-row&quot;&gt;
    &lt;div class=&quot;vx-col sm:w-2/3 w-full ml-auto&quot;&gt;
      &lt;vs-button class=&quot;mr-3 mb-2&quot;&gt;Submit&lt;/vs-button&gt;
      &lt;vs-button color=&quot;warning&quot; type=&quot;border&quot; class=&quot;mb-2&quot; @click=&quot;input5 = input6 = input7 = input8 = ''; check2 = false;&quot;&gt;Reset&lt;/vs-button&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/template&gt;
        </template>
			</vx-card>
		</div>

		<!-- HORIZONTAL LAYOUT WITH ICON-->
		<div class="vx-col md:w-1/2 w-full mb-base">
			<vx-card title="Informations Fiscales"><br>
            
            
				<div class="vx-row mb-6">
					<div class="vx-col sm:w-1/3 w-full">
						<span>Forme Sociale</span>
					</div>
					<div class="vx-col sm:w-2/3 w-full">
						<vs-input class="w-full" icon-no-border v-model="input9" placeholder="Microentreprise"/>
					</div>
				</div>
				<div class="vx-row mb-6">
					<div class="vx-col sm:w-1/3 w-full">
						<span>Regime Fiscal</span>
					</div>
					<div class="vx-col sm:w-2/3 w-full">
						<vs-input class="w-full" disabled="true" placeholder="Microentreprise"  v-model="input5" />
					</div>
				</div>
                
                
				<div class="vx-row mb-6">
					<div class="vx-col sm:w-1/3 w-full">
						<span>Numero TVA</span>
					</div>
					<div class="vx-col sm:w-2/3 w-full">
						<vs-input class="w-full" icon-no-border v-model="input8" />
					</div>
				</div>
                
				<div class="vx-row mb-6">
					<div class="vx-col sm:w-1/3 w-full">
						<span>Regime TVA</span>
					</div>
					<div class="vx-col sm:w-2/3 w-full">
						<vs-input class="w-full" disabled="true" placeholder="Exemption de TVA"  v-model="input6" />
					</div>
				</div>
				<div class="vx-row mb-6">
					<div class="vx-col sm:w-1/3 w-full">
							<span>Fin d'Exercice</span>
					</div>
					<div class="vx-col sm:w-2/3 w-full">
						 <datepicker-default ></datepicker-default>	
                         
                         </div>
				</div>
				<br>
                <br>
                <br>
				
                <br>
				
                <br>
				
                	<div class="vx-row">
					<div class="vx-col sm:w-2/3 w-full ml-auto">
						<vs-button class="mr-3 mb-2">Enregistrer les modifications</vs-button>
						</div>
				</div>

        <!-- CODE -->
        <template slot="codeContainer">
&lt;template&gt;
  &lt;div class=&quot;vx-row mb-6&quot;&gt;
    &lt;div class=&quot;vx-col sm:w-1/3 w-full&quot;&gt;
      &lt;span&gt;First Name&lt;/span&gt;
    &lt;/div&gt;
    &lt;div class=&quot;vx-col sm:w-2/3 w-full&quot;&gt;
      &lt;vs-input class=&quot;w-full&quot; icon-pack=&quot;feather&quot; icon=&quot;icon-user&quot; icon-no-border v-model=&quot;input5&quot; /&gt;
    &lt;/div&gt;
  &lt;/div&gt;
  &lt;div class=&quot;vx-row mb-6&quot;&gt;
    &lt;div class=&quot;vx-col sm:w-1/3 w-full&quot;&gt;
      &lt;span&gt;Email&lt;/span&gt;
    &lt;/div&gt;
    &lt;div class=&quot;vx-col sm:w-2/3 w-full&quot;&gt;
      &lt;vs-input type=&quot;email&quot; class=&quot;w-full&quot; icon-pack=&quot;feather&quot; icon=&quot;icon-mail&quot; icon-no-border v-model=&quot;input6&quot; /&gt;
    &lt;/div&gt;
  &lt;/div&gt;
  &lt;div class=&quot;vx-row mb-6&quot;&gt;
    &lt;div class=&quot;vx-col sm:w-1/3 w-full&quot;&gt;
      &lt;span&gt;Mobile&lt;/span&gt;
    &lt;/div&gt;
    &lt;div class=&quot;vx-col sm:w-2/3 w-full&quot;&gt;
      &lt;vs-input class=&quot;w-full&quot; icon-pack=&quot;feather&quot; icon=&quot;icon-smartphone&quot; icon-no-border v-model=&quot;input7&quot; /&gt;
    &lt;/div&gt;
  &lt;/div&gt;
  &lt;div class=&quot;vx-row mb-6&quot;&gt;
    &lt;div class=&quot;vx-col sm:w-1/3 w-full&quot;&gt;
      &lt;span&gt;Password&lt;/span&gt;
    &lt;/div&gt;
    &lt;div class=&quot;vx-col sm:w-2/3 w-full&quot;&gt;
      &lt;vs-input type=&quot;password&quot; class=&quot;w-full&quot; icon-pack=&quot;feather&quot; icon=&quot;icon-lock&quot; icon-no-border v-model=&quot;input8&quot; /&gt;
    &lt;/div&gt;
  &lt;/div&gt;
  &lt;div class=&quot;vx-row mb-6&quot;&gt;
    &lt;div class=&quot;vx-col sm:w-2/3 w-full ml-auto&quot;&gt;
      &lt;vs-checkbox class=&quot;inline-flex&quot; v-model=&quot;check2&quot;&gt;Remember Me&lt;/vs-checkbox&gt;
    &lt;/div&gt;
  &lt;/div&gt;
  &lt;div class=&quot;vx-row&quot;&gt;
    &lt;div class=&quot;vx-col sm:w-2/3 w-full ml-auto&quot;&gt;
      &lt;vs-button class=&quot;mr-3 mb-2&quot;&gt;Submit&lt;/vs-button&gt;
      &lt;vs-button color=&quot;warning&quot; type=&quot;border&quot; class=&quot;mb-2&quot; @click=&quot;input5 = input6 = input7 = input8 = ''; check2 = false;&quot;&gt;Reset&lt;/vs-button&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/template&gt;
        </template>
			</vx-card>
		</div>
        
	</div>
</template>

<script>
import DatepickerDefault from './DatepickerDefault.vue'

import VuePerfectScrollbar from 'vue-perfect-scrollbar'

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
        DatepickerDefault,
    VuePerfectScrollbar
    },
    methods: {
     updateCurrImg(input) {
      if (input.target.files && input.target.files[0]) {
        var reader = new FileReader()
        reader.onload = e => {
          this.dataImg = e.target.result
        }
        reader.readAsDataURL(input.target.files[0])
      }
    }
    },
}
</script>

<style lang="scss" scoped>

    .img-upload {
      margin-top: 2rem;

      .con-img-upload {
        padding: 0;
      }

      .con-input-upload {
        width: 100%;
        margin: 0;
      }
    }

</style>