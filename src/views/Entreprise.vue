<template>
	<div class="vx-row">
		<!-- HORIZONTAL LAYOUT WITH ICON-->
		<div class="vx-col md:w-1/2 w-full mb-base">
			<vx-card title="General">
				<br />
				<div class="vx-row mb-6 scroll-area--data-list-add-new">
					<template v-if="formData.logo">
						<!-- Image Container -->
						<div class="img-container w-64 mx-auto">
							<img :src="formData.logo" alt="img" class="responsive" />
							<div class="modify-img flex justify-between mt-5">
								<input
									type="file"
									class="hidden"
									ref="updateImgInput"
									@change="updateCurrImg"
									accept="image/*"
								/>
								<vs-button class="mr-4" type="flat" @click="$refs.updateImgInput.click()">Editer</vs-button>
								<vs-button type="flat" color="#999" @click="formData.logo = null">Supprimer</vs-button>
							</div>
						</div>

						<!-- Image upload Buttons -->
					</template>

					<div class="upload-img vx-col w-full" v-if="!formData.logo">
						<center>
							<input
								type="file"
								class="hidden"
								ref="uploadImgInput"
								@change="updateCurrImg"
								accept="image/*"
							/>
							<vs-button @click="$refs.uploadImgInput.click()">Ajouter Logo (Image)</vs-button>
						</center>
					</div>
					<br />
					<br />
					<br />
				</div>
				<div class="vx-row mb-6">
					<div class="vx-col sm:w-1/3 w-full">
						<span>Nom Entreprise</span>
					</div>
					<div class="vx-col sm:w-2/3 w-full">
						<vs-input
							class="w-full"
							icon-no-border
							v-model="formData.nomEntreprise"
							placeholder="Denomination Sociale"
						/>
					</div>
				</div>
				<div class="vx-row mb-6">
					<div class="vx-col sm:w-1/3 w-full">
						<span>SIREN</span>
					</div>
					<div class="vx-col sm:w-2/3 w-full">
						<vs-input class="w-full" icon-no-border v-model="formData.siren" />
					</div>
				</div>

				<div class="vx-row mb-6">
					<div class="vx-col sm:w-1/3 w-full">
						<span>Adresse</span>
					</div>
					<div class="vx-col sm:w-2/3 w-full">
						<vs-input
							class="w-full"
							icon-no-border
							v-model="formData.adresse"
							placeholder="Rue et numero"
						/>
					</div>
				</div>
				<div class="vx-row mb-6">
					<div class="vx-col sm:w-1/3 w-full">
						<span>Code Postal</span>
					</div>
					<div class="vx-col sm:w-2/3 w-full">
						<vs-input class="w-full" icon-no-border v-model="formData.codePostal" />
					</div>
				</div>

				<div class="vx-row mb-6">
					<div class="vx-col sm:w-1/3 w-full">
						<span>Ville</span>
					</div>
					<div class="vx-col sm:w-2/3 w-full">
						<vs-input class="w-full" icon-no-border v-model="formData.ville" />
					</div>
				</div>

				<div class="vx-row mb-6">
					<div class="vx-col sm:w-1/3 w-full">
						<span>Code NAF</span>
					</div>
					<div class="vx-col sm:w-2/3 w-full">
						<vs-input class="w-full" icon-no-border v-model="formData.codeNAF" />
					</div>
				</div>

				<br />
				<br />

				<div class="vx-row">
					<div class="vx-col sm:w-2/3 w-full ml-auto">
						<vs-button class="mr-3 mb-2" @click="updateEntreprise">Enregistrer les modifications</vs-button>
					</div>
				</div>

				<!-- CODE -->
				<template slot="codeContainer">
					&lt;template&gt; &lt;div class=&quot;vx-row mb-6&quot;&gt; &lt;div
					class=&quot;vx-col sm:w-1/3 w-full&quot;&gt; &lt;span&gt;First
					Name&lt;/span&gt; &lt;/div&gt; &lt;div class=&quot;vx-col sm:w-2/3
					w-full&quot;&gt; &lt;vs-input class=&quot;w-full&quot;
					icon-pack=&quot;feather&quot; icon=&quot;icon-user&quot;
					icon-no-border v-model=&quot;input5&quot; /&gt; &lt;/div&gt;
					&lt;/div&gt; &lt;div class=&quot;vx-row mb-6&quot;&gt; &lt;div
					class=&quot;vx-col sm:w-1/3 w-full&quot;&gt;
					&lt;span&gt;Email&lt;/span&gt; &lt;/div&gt; &lt;div class=&quot;vx-col
					sm:w-2/3 w-full&quot;&gt; &lt;vs-input type=&quot;email&quot;
					class=&quot;w-full&quot; icon-pack=&quot;feather&quot;
					icon=&quot;icon-mail&quot; icon-no-border v-model=&quot;input6&quot;
					/&gt; &lt;/div&gt; &lt;/div&gt; &lt;div class=&quot;vx-row
					mb-6&quot;&gt; &lt;div class=&quot;vx-col sm:w-1/3 w-full&quot;&gt;
					&lt;span&gt;Mobile&lt;/span&gt; &lt;/div&gt; &lt;div
					class=&quot;vx-col sm:w-2/3 w-full&quot;&gt; &lt;vs-input
					class=&quot;w-full&quot; icon-pack=&quot;feather&quot;
					icon=&quot;icon-smartphone&quot; icon-no-border
					v-model=&quot;input7&quot; /&gt; &lt;/div&gt; &lt;/div&gt; &lt;div
					class=&quot;vx-row mb-6&quot;&gt; &lt;div class=&quot;vx-col sm:w-1/3
					w-full&quot;&gt; &lt;span&gt;Password&lt;/span&gt; &lt;/div&gt;
					&lt;div class=&quot;vx-col sm:w-2/3 w-full&quot;&gt; &lt;vs-input
					type=&quot;password&quot; class=&quot;w-full&quot;
					icon-pack=&quot;feather&quot; icon=&quot;icon-lock&quot;
					icon-no-border v-model=&quot;input8&quot; /&gt; &lt;/div&gt;
					&lt;/div&gt; &lt;div class=&quot;vx-row mb-6&quot;&gt; &lt;div
					class=&quot;vx-col sm:w-2/3 w-full ml-auto&quot;&gt; &lt;vs-checkbox
					class=&quot;inline-flex&quot; v-model=&quot;check2&quot;&gt;Remember
					Me&lt;/vs-checkbox&gt; &lt;/div&gt; &lt;/div&gt; &lt;div
					class=&quot;vx-row&quot;&gt; &lt;div class=&quot;vx-col sm:w-2/3
					w-full ml-auto&quot;&gt; &lt;vs-button class=&quot;mr-3
					mb-2&quot;&gt;Submit&lt;/vs-button&gt; &lt;vs-button
					color=&quot;warning&quot; type=&quot;border&quot;
					class=&quot;mb-2&quot; @click=&quot;input5 = input6 = input7 = input8
					= ''; check2 = false;&quot;&gt;Reset&lt;/vs-button&gt; &lt;/div&gt;
					&lt;/div&gt; &lt;/template&gt;
				</template>
			</vx-card>
		</div>

		<!-- HORIZONTAL LAYOUT WITH ICON-->
		<div class="vx-col md:w-1/2 w-full mb-base">
			<vx-card title="Informations Fiscales">
				<br />

				<div class="vx-row mb-6">
					<div class="vx-col sm:w-1/3 w-full">
						<span>Forme Sociale</span>
					</div>
					<div class="vx-col sm:w-2/3 w-full">
						<vs-input
							class="w-full"
							icon-no-border
							v-model="formData.formeSociale"
							placeholder="Microentreprise"
						/>
					</div>
				</div>
				<!-- <div class="vx-row mb-6">
          <div class="vx-col sm:w-1/3 w-full">
            <span>Regime Fiscal</span>
          </div>
          <div class="vx-col sm:w-2/3 w-full">
            <vs-input
              class="w-full"
              disabled="true"
              placeholder="Microentreprise"
              v-model="formData.finExercice"
            />
          </div>
				</div>-->

				<div class="vx-row mb-6">
					<div class="vx-col sm:w-1/3 w-full">
						<span>Numero TVA</span>
					</div>
					<div class="vx-col sm:w-2/3 w-full">
						<vs-input class="w-full" icon-no-border v-model="formData.numeroTVA" />
					</div>
				</div>

				<!-- <div class="vx-row mb-6">
          <div class="vx-col sm:w-1/3 w-full">
            <span>Regime TVA</span>
          </div>
          <div class="vx-col sm:w-2/3 w-full">
            <vs-input
              class="w-full"
              disabled="true"
              placeholder="Exemption de TVA"
              v-model="input6"
            />
          </div>
				</div>-->
				<div class="vx-row mb-6">
					<div class="vx-col sm:w-1/3 w-full">
						<span>Fin d'Exercice</span>
					</div>
					<div class="vx-col sm:w-2/3 w-full">
						<datepicker-default :dateModel="formData.finExercice" @date-change="finExerciceChanged"></datepicker-default>
					</div>
				</div>
                	<br />
							<vs-checkbox v-model="checkboxTva">J'adhere a une AGA</vs-checkbox>
			
				<br />
                
				<br />

				<br />

				<br />

				<div class="vx-row">
					<div class="vx-col sm:w-2/3 w-full ml-auto">
						<vs-button class="mr-3 mb-2" @click="updateEntreprise">Enregistrer les modifications</vs-button>
					</div>
				</div>

				<!-- CODE -->
				<template slot="codeContainer">
					&lt;template&gt; &lt;div class=&quot;vx-row mb-6&quot;&gt; &lt;div
					class=&quot;vx-col sm:w-1/3 w-full&quot;&gt; &lt;span&gt;First
					Name&lt;/span&gt; &lt;/div&gt; &lt;div class=&quot;vx-col sm:w-2/3
					w-full&quot;&gt; &lt;vs-input class=&quot;w-full&quot;
					icon-pack=&quot;feather&quot; icon=&quot;icon-user&quot;
					icon-no-border v-model=&quot;input5&quot; /&gt; &lt;/div&gt;
					&lt;/div&gt; &lt;div class=&quot;vx-row mb-6&quot;&gt; &lt;div
					class=&quot;vx-col sm:w-1/3 w-full&quot;&gt;
					&lt;span&gt;Email&lt;/span&gt; &lt;/div&gt; &lt;div class=&quot;vx-col
					sm:w-2/3 w-full&quot;&gt; &lt;vs-input type=&quot;email&quot;
					class=&quot;w-full&quot; icon-pack=&quot;feather&quot;
					icon=&quot;icon-mail&quot; icon-no-border v-model=&quot;input6&quot;
					/&gt; &lt;/div&gt; &lt;/div&gt; &lt;div class=&quot;vx-row
					mb-6&quot;&gt; &lt;div class=&quot;vx-col sm:w-1/3 w-full&quot;&gt;
					&lt;span&gt;Mobile&lt;/span&gt; &lt;/div&gt; &lt;div
					class=&quot;vx-col sm:w-2/3 w-full&quot;&gt; &lt;vs-input
					class=&quot;w-full&quot; icon-pack=&quot;feather&quot;
					icon=&quot;icon-smartphone&quot; icon-no-border
					v-model=&quot;input7&quot; /&gt; &lt;/div&gt; &lt;/div&gt; &lt;div
					class=&quot;vx-row mb-6&quot;&gt; &lt;div class=&quot;vx-col sm:w-1/3
					w-full&quot;&gt; &lt;span&gt;Password&lt;/span&gt; &lt;/div&gt;
					&lt;div class=&quot;vx-col sm:w-2/3 w-full&quot;&gt; &lt;vs-input
					type=&quot;password&quot; class=&quot;w-full&quot;
					icon-pack=&quot;feather&quot; icon=&quot;icon-lock&quot;
					icon-no-border v-model=&quot;input8&quot; /&gt; &lt;/div&gt;
					&lt;/div&gt; &lt;div class=&quot;vx-row mb-6&quot;&gt; &lt;div
					class=&quot;vx-col sm:w-2/3 w-full ml-auto&quot;&gt; &lt;vs-checkbox
					class=&quot;inline-flex&quot; v-model=&quot;check2&quot;&gt;Remember
					Me&lt;/vs-checkbox&gt; &lt;/div&gt; &lt;/div&gt; &lt;div
					class=&quot;vx-row&quot;&gt; &lt;div class=&quot;vx-col sm:w-2/3
					w-full ml-auto&quot;&gt; &lt;vs-button class=&quot;mr-3
					mb-2&quot;&gt;Submit&lt;/vs-button&gt; &lt;vs-button
					color=&quot;warning&quot; type=&quot;border&quot;
					class=&quot;mb-2&quot; @click=&quot;input5 = input6 = input7 = input8
					= ''; check2 = false;&quot;&gt;Reset&lt;/vs-button&gt; &lt;/div&gt;
					&lt;/div&gt; &lt;/template&gt;
				</template>
			</vx-card>
		</div>
	</div>
</template>

<script>
import DatepickerDefault from "./DatepickerDefault.vue";

import VuePerfectScrollbar from "vue-perfect-scrollbar";
import GLOBAL from "@/mixins/GLOBAL"
import { mapGetters, mapActions } from "vuex"
import { entrepriseStorage } from "@/firebase/firebaseConfig"
import moment from "moment"

export default {
	data() {
		return {
			formData: {
				nomEntreprise: "",
				siren: "",
				adresse: "",
				codePostal: "",
				ville: "",
				codeNAF: "",
				formeSociale: "",
				numeroTVA: "",
				finExercice: null,
				logo: ""
			}
		};
	},
	mixins: [GLOBAL],
	components: {
		DatepickerDefault,
		VuePerfectScrollbar,
	},
	async created() {
		this.firebaseUserId && await this.FETCH_ENTREPRISE(this.firebaseUserId)
	},
	computed: {
		...mapGetters("entreprise", ["entreprise"]),
	},
	watch: {
		entreprise: {
			handler(v) {
				if (v) {
					console.log("ENTREPRISE-UPDATED", v);
					this.formData.nomEntreprise = this.entreprise.nomEntreprise || ""
					this.formData.siren = this.entreprise.siren || ""
					this.formData.adresse = this.entreprise.nomEntreprise || ""
					this.formData.codePostal = this.entreprise.nomEntreprise || ""
					this.formData.ville = this.entreprise.ville || ""
					this.formData.codeNAF = this.entreprise.codeNAF || ""
					this.formData.formeSociale = this.entreprise.formeSociale || ""
					this.formData.numeroTVA = this.entreprise.numeroTVA || ""
					this.formData.finExercice = this.entreprise.finExercice ? new Date(this.entreprise.finExercice * 1000) : new Date()
					this.formData.logo = this.entreprise.logo || ""
				}
			}, deep: true
		}
	},
	methods: {
		...mapActions("entreprise", ["UPDATE_ENTREPRISE", "FETCH_ENTREPRISE"]),
		finExerciceChanged(v) {
			this.formData.finExercice = v
		},
		async updateEntreprise() {
			let url = this.formData.logo
			// if(this.formData.logo){
			// 	try {
			// 		let imageSnapShot = await entrepriseStorage.child(new Date().getTime().toString()).putString(this.formData.logo, 'data_url')
			// 		await imageSnapShot.ref.getDownloadURL().then(imgurl =>{
			// 			console.log("IMAGE",imgurl);
			// 			url = imgurl
			// 		})
			// 	} catch (error) {
			// 		console.log(error.message)
			// 	}
			// }
			let obj = Object.assign({ uid: this.firebaseUserId }, this.formData, { logo: url }, { finExercice: moment(this.formData.finExercice).format("X") })
			console.log(obj);
			await this.UPDATE_ENTREPRISE(obj).then(async res => {
				await this.FETCH_ENTREPRISE(this.firebaseUserId)
			})
		},
		updateCurrImg(input) {
			if (input.target.files && input.target.files[0]) {
				var reader = new FileReader();
				reader.onload = (e) => {
					this.formData.logo = e.target.result;
				};
				reader.readAsDataURL(input.target.files[0]);
			}
		},
	},
};
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
