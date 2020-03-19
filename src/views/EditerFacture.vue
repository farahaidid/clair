<template>
	<div class="vx-row">
		<!-- MULTIPLE COLUMNS-->
		<div class="vx-col w-full mb-base">
			<vx-card >
				<div class="vx-row">
					<!-- <div class="vx-col sm:w-1/2 w-full mb-2">
						<vs-input class="w-full" label-placeholder="Selectionner Client" v-model="input25" />
					</div> -->
					<!-- <div class="vx-col sm:w-1/2 w-full mb-2">
						<vs-input class="w-full" label-placeholder="Facture" v-model="input26" />
					</div> -->
					<div class="col-6">
						<b-dropdown block split split-variant="outline-primary" variant="primary"
						class="m-2" :text="selectedCleint ? selectedCleint.adresseCli : 'Selectionner Client'"
						>
							<b-dropdown-item v-for="client in clients" :key="client.id" @click="selectClient(client)">{{client.adresseCli}}</b-dropdown-item>
						</b-dropdown>
					</div>
					<div class="col-6">
						<b-dropdown block split split-variant="outline-primary" variant="primary"
							class="m-2" :text="selectedFacture">
							<b-dropdown-item href="#" @click="selectFacture('Facture')">Facture</b-dropdown-item>
							<b-dropdown-item href="#" @click="selectFacture('Avoir')">Avoir</b-dropdown-item>
							<b-dropdown-item href="#" @click="selectFacture('Devis')">Devis</b-dropdown-item>
						</b-dropdown>
					</div>
				</div>
                
				<div class="vx-row product-service" v-for="number in productNumbers" :key=number>
                    <div class="vx-col w-full">
						<b-dropdown block split split-variant="outline-primary" variant="primary"
							class="m-2" :text="getProductSetelcted(number)">
							<b-dropdown-item v-for="product in produits" :key="product.id" @click="selectProduit(product, number)">{{product.nomProd}}</b-dropdown-item>
						</b-dropdown>
					</div>
					<div class="vs-input-number number-input ml-20 vs-input-number-size-null vs-input-number-primary">
						<button type="button" class="btn-less vs-input-number--button-less" @click="deQuantity(number)"><i class="vs-icon notranslate icon-scale material-icons null">expand_more</i></button><!---->
							<input type="number" min="0" :id="number" value=50 class="vs-input-number--input" style="width: 18.2px;">
						<button type="button" class="btn-plus vs-input-number--button-plus" @click="inQuantity(number)"><i class="vs-icon notranslate icon-scale material-icons null">expand_less</i></button>
					</div>
					<!-- <vs-input-number :id="number" class="number-input ml-20" v-model="quantity" icon-inc="expand_less" icon-dec="expand_more"/> -->
				</div>
                
				<div class="my-5">
					<b-button variant="outline-primary" @click="addProduct">
						<feather-icon icon="PlusIcon" svgClasses="h-4 w-4" /> Add
					</b-button>
				</div>
                
				<div class="vx-row">
					<div class="vx-col w-full">
						<vs-button class="mr-3 mb-2"  @click="Enregistrer">Enregistrer</vs-button>	
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
import SelectDropdownOptions from "./components/extra-components/select/SelectDropdownOptions.vue"
import SelectSelectingValues from "./components/extra-components/select/SelectSelectingValues.vue"

import moduleDataList from "@/store/data-list/moduleDataList.js"
import { mapActions, mapGetters } from "vuex"

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

			enregistrerId: "",
			selectedCleint: null,
			selectedFacture: "Facture",
			selectedProducts: [],
			quantity: 50,
			productNumbers: [1],
			getProductSetelcted(number) {
				let pro = this.selectedProducts.find(e => e.number === number);
				
				if (pro) {
					return pro.produit.nomProd;
				} else return "Ajouter un produit ou service";
			},
			getQuentity(q, n) {

			}
		}
	},

    components: {
        SelectDropdownOptions,
		SelectSelectingValues
	},
	computed: {
		...mapGetters("clients",["clients"]),
		...mapGetters("produits",["produits"]),
		currentPage() {
			if(this.isMounted) {
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

		}
	},
	methods: {
		...mapActions("clients",["FETCH_CLIENTS"]),
		...mapActions("produits",["ADD_PRODUITS", "FETCH_PRODUITS"]),
		...mapActions(["updateFacture", "updateInvoice", "updateCompanyData"]),
		async Enregistrer() {
			let products = [];

			this.productNumbers.forEach(num => {
				let ele = document.getElementById(num);
				
				let find = this.selectedProducts.find(e => e.number === num);
				if (find) {
					products.push({product: find.produit, quantity: ele.value});
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

			dicount = (5 * subTotal)/100;
			let total = subTotal - dicount;
			let companyData = {
				name: this.selectedCleint.nomCli,
				addressLine1: this.selectedCleint.adresseCli,
				addressLine2: this.selectedCleint.villeCli,
				zipcode: this.selectClient.nomRefCli,
				mailId: this.selectClient.emailCli,
				mobile: this.selectClient.nomRefCli,
			}

			this.updateFacture(this.selectedFacture);
			this.updateInvoice({
				tasks: task,
				subtotal: subTotal,
				discountPercentage: 5,
				discountedAmount: dicount,
				total: total,
			});
			this.updateCompanyData(companyData);

			this.$router.push({ path: `/pages/invoice` }) 

		},

		selectClient(client) {
			this.selectedCleint = client;
		},
		selectFacture(text) {
			this.selectedFacture = text;
		},
		selectProduit(Produit, number) {
			this.selectedProducts.push({produit: Produit, number: number})
		},
		addProduct() {
			this.productNumbers.push(this.productNumbers.length + 1);
		},
		deQuantity(num) {
			let ele = document.getElementById(num);
			if (ele) {
				ele.value = (ele.value*1) - 1;
			}
		},
		inQuantity(num) {
			let ele = document.getElementById(num);
			if (ele) {
				ele.value = (ele.value*1)  + 1;
			}
		}
	},
	created() {
		if(!moduleDataList.isRegistered) {
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
		}
	}
	.number-input {
		height: 2rem;
    	margin-top: 2rem;
	}
</style>
