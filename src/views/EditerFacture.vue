<template>
	<div class="vx-row">
		<!-- MULTIPLE COLUMNS-->
		<div class="vx-col w-full mb-base">
			<vx-card>
				<div class="vx-row">
					<!-- <div class="vx-col sm:w-1/2 w-full mb-2">
						<vs-input class="w-full rond" label-placeholder="Selectionner Client" v-model="input25" />
					</div>-->
					<!-- <div class="vx-col sm:w-1/2 w-full mb-2">
						<vs-input class="w-full" label-placeholder="Facture" v-model="input26" />
					</div>-->
					<div class="col-6">
						<v-select placeholder="Selectionner Client" label="nomCli" 
						:options="clients" :dir="$vs.rtl ? 'rtl' : 'ltr'" v-model="selectedCleint"/>
					</div>
					<div class="col-6">
						<!-- <b-dropdown
							block
							split
							split-variant="outline-primary"
							variant="primary"
							class="m-2 rond"
							:text="selectedFacture"
						>
							<b-dropdown-item href="#" @click="selectFacture('Facture')">Facture</b-dropdown-item>
							<b-dropdown-item href="#" @click="selectFacture('Avoir')">Avoir</b-dropdown-item>
							<b-dropdown-item href="#" @click="selectFacture('Devis')">Devis</b-dropdown-item>
						</b-dropdown> -->
						<!-- <div class="form-group row">
							<label for="staticFacture" class="col-sm-2 col-form-label">Facture</label>
							<div class="col-sm-10">
								<input type="text" class="form-control" v-model="facture">
							</div>
						</div> -->
						<div class="vx-row mb-6">
							<div class="vx-col sm:w-1/3 w-full">
								<span>Fecture</span>
							</div>
							<div class="vx-col sm:w-2/3 w-full">
								<vs-input class="w-full" icon-no-border v-model="facture" />
							</div>
						</div>
						<div class="vx-row mb-6">
							<div class="vx-col sm:w-1/3 w-full">
								<span>Date</span>
							</div>
							<div class="vx-col sm:w-2/3 w-full">
								<datepicker-default :dateModel="date" @date-change="dateChanged"></datepicker-default>
							</div>
						</div>
						<div class="vx-row mb-6">
							<div class="vx-col sm:w-1/3 w-full">
								<span>A régler le</span>
							</div>
							<div class="vx-col sm:w-2/3 w-full">
								<datepicker-default :dateModel="reglerLe" @date-change="reglerLeChanged"></datepicker-default>
							</div>
						</div>
					</div>
				</div>

				<div class="vx-row product-service mt-5" v-for="number in productNumbers" :key="number">
					<div class="vx-col rond w-full">
						<!-- <b-dropdown
							block
							split
							split-variant="outline-primary"
							variant="primary"
							class="m-2 rond"
							:text="getProductSetelcted(number)"
						>
							<b-dropdown-item
								v-for="product in produits"
								:key="product.id"
								@click="selectProduit(product, number)"
							>{{product.nomProd}}</b-dropdown-item>
						</b-dropdown> -->
						<v-select placeholder="Selectionner Produit" label="nomProd" :value="$store.myValue"
						:options="getProduits(produits, number)" :dir="$vs.rtl ? 'rtl' : 'ltr'" @input="setSelected"/>
					</div>
					<div class="vs-input-number number-input ml-20 vs-input-number-size-null vs-input-number-primary">
						<button
							type="button"
							class="btn-less vs-input-number--button-less"
							size="medium"
							@click="deQuantity(number)"
						>
							<i class="vs-icon notranslate icon-scale material-icons null">expand_more</i>
						</button>
						<!---->
						<input
							type="number"
							min="0"
							:id="number"
							value="1"
							class="vs-input-number--input"
							style="width: 18.2px;"
						/>
						<button
							type="button"
							class="btn-plus vs-input-number--button-plus"
							@click="inQuantity(number)"
						>
							<i class="vs-icon notranslate icon-scale material-icons null">expand_less</i>
						</button>
					</div>
					<!-- <vs-input-number :id="number" class="number-input ml-20" v-model="quantity" icon-inc="expand_less" icon-dec="expand_more"/> -->
				</div>

				<div class="my-5">
					<b-button class="rond cheka" variant="outline-primary" @click="addProduct">
						<feather-icon icon="PlusIcon" svgClasses="h-4 w-4" />Ajouter produit
					</b-button>
				</div>

				<div class="vx-row mb-6">
					<div class="vx-col sm:w-3/3 w-full">
						<vs-textarea class="w-full" icon-no-border v-model="userText" />
					</div>
				</div>

				<br />
				<br />
				<div class="vx-row">
					<div class="vx-col w-full">
						<center>
							<vs-button class="mr-6 mb-2 rond" @click="Enregistrer">Enregistrer</vs-button>
							<br />
							<vs-checkbox v-model="checkboxTva">TVA</vs-checkbox>
						</center>
					</div>
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
import SelectDropdownOptions from "./components/extra-components/select/SelectDropdownOptions.vue";
import SelectSelectingValues from "./components/extra-components/select/SelectSelectingValues.vue";
import DatepickerDefault from "./DatepickerDefault.vue";

import vSelect from 'vue-select'

import moduleDataList from "@/store/data-list/moduleDataList.js"
import { mapActions, mapGetters } from "vuex"

export default {
	data() {
		return {
			checkboxTva: false,
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

			enregistrerId: "",
			selectedCleint: null,
			selectedFacture: "Facture",
			selectedProducts: [],
			quantity: 1,
			productNumbers: [1],
			getProductSetelcted(number) {
				let pro = this.selectedProducts.find(e => e.number === number);

				if (pro) {
					return pro.produit.nomProd;
				} else return "Selectionner produit";
			},
			getQuentity(q, n) {

			},
			getProduits(product, number) {
				let data = [];

				if (product && product.length) {
					product.forEach(e => {
						e.number = number;
						data.push(e)
					})
				}
				
				return data;
			},
			facture: '2020-0001',
			date: new Date(),
			reglerLe: new Date(),
			userText: 'Mentions complémentaires'
		}
	},

	components: {
		SelectDropdownOptions,
		SelectSelectingValues,
		DatepickerDefault,
		'v-select': vSelect,
	},
	computed: {
		...mapGetters("clients", ["clients"]),
		...mapGetters("produits", ["produits"]),
		currentPage() {
			if (this.isMounted) {
				return this.$refs.table.currentx
			}
			return 0
		},
		products() {
			return this.$store.state.dataList.products
		},
		queriedItems() {
			return this.$refs.table ? this.$refs.table.queriedResults.length : this.products.length
		}
	},
	watch: {
		enregistrer(data) {
			this.input25 = data[0].client;
			this.input26 = data[0].facture;
			this.input23 = data[0].productOnService;
			this.enregistrerId = data[0].id
		},
		produits(data) {

		},
		selected(data) {
			console.log("data", data);
			
		}
	},
	methods: {
		...mapActions("clients", ["FETCH_CLIENTS"]),
		...mapActions("produits", ["ADD_PRODUITS", "FETCH_PRODUITS"]),
		...mapActions(["updateFacture", "updateInvoice", "updateCompanyData", "updateInvoiceDetails"]),
		async Enregistrer() {
			let products = [];

			this.productNumbers.forEach(num => {
				let ele = document.getElementById(num);

				let find = this.selectedProducts.find(e => e.number === num);
				if (find) {
					products.push({ product: find.produit, quantity: ele.value });
				}
			})

			let task = [],
				subTotal = 0,
				dicount = 0;

			products.forEach(p => {
				let data = {
					id: p.product.id,
					task: p.product.nomProd,
					hours: p.product.prixU,
					rate: p.quantity,
					amount: (p.product.prixU || 1) * (p.quantity || 1),
				}

				task.push(data);
				subTotal = subTotal + data.amount;
			});

			dicount = (5 * subTotal) / 100;
			let total = subTotal - dicount;
			let companyData = {
				name: this.selectedCleint.nomCli,
				addressLine1: this.selectedCleint.adresseCli,
				addressLine2: this.selectedCleint.villeCli,
				zipcode: this.selectedCleint.cpCli,
				mailId: this.selectedCleint.emailCli,
				mobile: this.selectedCleint.nomRefCli,
				siret: this.selectedCleint.siretCli
			}

			this.updateFacture(this.selectedFacture);
			this.updateInvoice({
				tasks: task,
				subtotal: subTotal,
				discountPercentage: 5,
				discountedAmount: dicount,
				tva: this.checkboxTva,
				total: total,
			});
			this.updateCompanyData(companyData);

			let invoiceDetails = {
				invoiceNo: this.facture,
				invoiceDate: this.date,
				invoiceReglerLe: this.reglerLe,
				userText: this.userText
			};

			this.updateInvoiceDetails(invoiceDetails);

			this.$router.push({ path: `/pages/invoice` });
		},
		selectFacture(text) {
			this.selectedFacture = text;
		},
		selectProduit(Produit, number) {
			this.selectedProducts.push({ produit: Produit, number: number })
		},
		setSelected(produit) {
			this.selectedProducts.push({ produit: produit, number: produit.number })
		},
		addProduct() {
			this.productNumbers.push(this.productNumbers.length + 1);
		},
		deQuantity(num) {
			let ele = document.getElementById(num);
			if (ele) {
				ele.value = (ele.value * 1) - 1;
			}
		},
		inQuantity(num) {
			let ele = document.getElementById(num);
			if (ele) {
				ele.value = (ele.value * 1) + 1;
			}
		},
		dateChanged(v) {
			this.date = v
		},
		reglerLeChanged(v) {
			this.reglerLe = v;
		}
	},
	created() {
		if (!moduleDataList.isRegistered) {
			this.$store.registerModule('dataList', moduleDataList)
			moduleDataList.isRegistered = true
		}
		this.$store.dispatch("dataList/fetchDataListItems")

		this.FETCH_CLIENTS();
		this.FETCH_PRODUITS()
	},
	mounted() {
		this.isMounted = true;
	}
}
</script>
<style lang="scss">
	.product-service {
		.w-full {
			width: 80% !important;
			color: red;
		}
	}
	.number-input {
		height: 2rem;
	}

	.rond {
		border-radius: 7px;
	}

	.cheka {
		border-color: transparent;
	}
</style>
