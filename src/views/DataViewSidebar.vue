<!-- =========================================================================================
  File Name: AddNewDataSidebar.vue
  Description: Add New Data - Sidebar component
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
	<vs-sidebar
		click-not-close
		position-right
		parent="body"
		default-index="1"
		color="primary"
		class="add-new-data-sidebar items-no-padding"
		spacer
		v-model="isSidebarActiveLocal"
	>
		<div class="mt-6 flex items-center justify-between px-6">
			<h4>{{ Object.entries(this.data).length === 0 ? "Ajouter" : "Modifier" }} Document</h4>
			<feather-icon icon="XIcon" @click.stop="isSidebarActiveLocal = false" class="cursor-pointer"></feather-icon>
		</div>
		<vs-divider class="mb-0"></vs-divider>

		<VuePerfectScrollbar class="scroll-area--data-list-add-new" :settings="settings" :key="$vs.rtl">
			<div class="p-6">
				<!-- Product Image -->
				<template v-if="dataImg">
					<!-- Image Container -->
					<div class="img-container w-64 mx-auto flex items-center justify-center">
						<img :src="dataImg" alt="img" class="responsive" />
					</div>

					<!-- Image upload Buttons -->
					<div class="modify-img flex justify-between mt-5">
						<input
							type="file"
							class="hidden"
							ref="updateImgInput"
							@change="updateCurrImg"
							accept="image/*"
						/>
						<vs-button class="mr-4" type="flat" @click="$refs.updateImgInput.click()">Editer</vs-button>
						<vs-button type="flat" color="#999" @click="dataImg = null">Supprimer</vs-button>
					</div>
				</template>

				<center>
					<div class="upload-img mt-5" v-if="!dataImg">
						<input
							type="file"
							class="hidden"
							ref="uploadImgInput"
							@change="updateCurrImg"
							accept="image/*"
						/>
						<vs-button @click="$refs.uploadImgInput.click()">Ajouter fichier (PDF ou image)</vs-button>
					</div>
				</center>

				<!-- NAME -->
				<vs-input label="Nom" v-model="dataNom" class="mt-5 w-full" name="item-name" />
				<span
					class="text-danger text-sm"
					v-show="errors.has('item-name')"
				>{{ errors.first('item-name') }}</span>

				<!-- MONTANT -->
				<vs-input label="Montant" v-model="dataMontant" class="mt-5 w-full" name="item-montant" />
				<span
					class="text-danger text-sm"
					v-show="errors.has('item-montant')"
				>{{ errors.first('item-montant') }}</span>

				<!-- CATEGORIE -->
				<vs-input label="TVA" v-model="dataTVA" class="mt-5 w-full" name="item-tva" />
				<span class="text-danger text-sm" v-show="errors.has('item-tva')">{{ errors.first('item-tva') }}</span>

				<!-- CATEGORIE -->
				<vs-input label="Categorie" v-model="dataCategorie" class="mt-5 w-full" name="item-categorie" />
				<span
					class="text-danger text-sm"
					v-show="errors.has('item-categorie')"
				>{{ errors.first('item-categorie') }}</span>

				<!-- DATE -->
				<vs-input label="Date" v-model="dataDate" class="mt-5 w-full" name="item-date" />
				<span
					class="text-danger text-sm"
					v-show="errors.has('item-date')"
				>{{ errors.first('item-date') }}</span>

				<!-- ORDER STATUS -->
				<!-- <vs-select v-model="dataOrder_status" label="Order Status" class="mt-5 w-full">
               <vs-select-item :key="item.value" :value="item.value" :text="item.text" v-for="item in order_status_choices" />
				</vs-select>-->

				<!-- PRICE -->
				<!-- <vs-input
               icon-pack="feather"
               icon="icon-dollar-sign"
               label="Price"
               v-model="dataPrice"
               class="mt-5 w-full"
               v-validate="{ required: true, regex: /\d+(\.\d+)?$/ }"
               name="item-price" />
				<span class="text-danger text-sm" v-show="errors.has('item-price')">{{ errors.first('item-price') }}</span>-->

				<!-- Upload -->
				<br />
			</div>
		</VuePerfectScrollbar>

		<div class="flex flex-wrap items-center p-6" slot="footer">
			<vs-button class="mr-6" @click="submitData" :disabled="!isFormValid">Submit</vs-button>
			<vs-button type="border" color="danger" @click="isSidebarActiveLocal = false">Cancel</vs-button>
		</div>
	</vs-sidebar>
</template>

<script>
import VuePerfectScrollbar from 'vue-perfect-scrollbar'
import { mapActions } from 'vuex'
import { employesStorage } from "../firebase/firebaseConfig"

export default {
	props: {
		isSidebarActive: {
			type: Boolean,
			required: true
		},
		data: {
			type: Object,
			default: null
		}
	},
	watch: {
		isSidebarActive(val) {
			if (!val) return
			if (!this.data) {
				this.initValues()
				this.$validator.reset()
			} else {
				let { id, nom, montant, tva, categorie, date, photo } = this.data
				this.employeeId = id
				this.dataNom = nom
				this.dataMontant = montant
				this.dataCategorie = categorie
				this.dataTVA = tva
				this.dataDate = date
				this.dataImg = photo
			}
		}
	},
	data() {
		return {

			dataId: null,
			dataName: "",
			dataCategory: null,

			dataOrder_status: "pending",
			dataPrice: 0,

			/* EMPLOYES-DATA */
			employeeId: "",
			dataEmpId: "",
			dataNom: "",
			dataMontant: "",
			dataCategorie: "",
			dataTVA: "",
			dataDate: "",
			dataJob: "",
			dataImg: null,
			dataImgFile: null,
			/* EMPLOYES-DATA */

			category_choices: [
				{ text: 'Audio', value: 'audio' },
				{ text: 'Computers', value: 'computers' },
				{ text: 'Fitness', value: 'fitness' },
				{ text: 'Appliance', value: 'appliance' }
			],

			order_status_choices: [
				{ text: 'Pending', value: 'pending' },
				{ text: 'Canceled', value: 'canceled' },
				{ text: 'Delivered', value: 'delivered' },
				{ text: 'On Hold', value: 'on_hold' }
			],
			settings: { // perfectscrollbar settings
				maxScrollbarLength: 60,
				wheelSpeed: .60,
			},
		}
	},
	computed: {
		isSidebarActiveLocal: {
			get() {
				return this.isSidebarActive
			},
			set(val) {
				if (!val) {
					this.$emit('closeSidebar')
					// this.$validator.reset()
					// this.initValues()
				}
			}
		},
		isFormValid() {
			return !this.errors.any()
		}
	},
	methods: {
		...mapActions("employes", ["ADD_EMPLOYEE", "FETCH_EMPLOYES", "UPDATE_EMPLOYEE"]),
		initValues() {
			this.employeeId = ""
			this.dataEmpId = ""
			this.dataNom = ""
			this.dataMontant = ""
			this.dataCategorie = ""
			this.dataTVA = ""
			this.dataDate = ""
			this.dataJob = ""
			this.dataImg = null
			this.dataImgFile = null
		},
		async submitData() {
			let url = ""
			if(this.dataImg){
				try {
					let imageSnapShot = await employesStorage.child(new Date().getTime() + this.dataImgFile.name).putString(this.dataImg, 'data_url')
					await imageSnapShot.ref.getDownloadURL().then(imgurl =>{
						url = imgurl
					})
				} catch (error) {
					console.log(error.message)
				}
			}
			this.$validator.validateAll().then(async result => {
				if (result) {
					let obj = {
						emp_id: this.dataEmpId,
						nom: this.dataNom,
						montant: this.dataMontant,
						categorie: this.dataCategorie,
						date: this.dataDate,
						tva: this.dataTVA,
						job: this.dataJob,
						photo: url
					}
					if (this.employeeId == null) {
						/* ADD NEW */
						await this.ADD_EMPLOYEE(obj).then(res => {
							this.FETCH_EMPLOYES()
						}).catch(err => {
							console.log(`ERROR : VIEWS : DataViewSidebar.vue : submitData -> ADD NEW : ${err}`);
						}).finally(() => {
							this.$emit('closeSidebar')
							this.initValues()
							this.$validator.reset()
						})
					}
					else {
						/* UPDATE */
						obj.id = this.employeeId
						await this.UPDATE_EMPLOYEE(obj).then(res => {
							this.FETCH_EMPLOYES()
						}).catch(err => {
							console.log(`ERROR : VIEWS : DataViewSidebar.vue : submitData -> UPDATE : ${err}`);
						}).finally(() => {
							this.$emit('closeSidebar')
							this.initValues()
							this.$validator.reset()
						})
					}
				}
			})
		},
		updateCurrImg(input) {
			if (input.target.files && input.target.files[0]) {
				this.dataImgFile = input.target.files[0];
				var reader = new FileReader()
				reader.onload = e => { this.dataImg = e.target.result }
				reader.readAsDataURL(input.target.files[0])
			}
		}
	},
	components: {
		VuePerfectScrollbar,
	}
}
</script>

<style lang="scss" scoped>
	.add-new-data-sidebar {
		::v-deep .vs-sidebar--background {
			z-index: 52010;
		}

		::v-deep .vs-sidebar {
			z-index: 52010;
			width: 400px;
			max-width: 90vw;

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
		}
	}

	.scroll-area--data-list-add-new {
		// height: calc(var(--vh, 1vh) * 100 - 4.3rem);
		height: calc(var(--vh, 1vh) * 100 - 16px - 45px - 82px);
	}
</style>
