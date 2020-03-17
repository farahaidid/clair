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
                
				<div class="vx-row product-service">
                    <div class="vx-col w-full">
						<!-- <vs-input class="w-full" icon-pack="feather" icon="icon-plus" 
						label-placeholder="Ajouter un produit ou service" v-model="input23" />
                        <br><br> -->
						<b-dropdown block split split-variant="outline-primary" variant="primary"
							class="m-2" :text="selectedProduct && selectedProduct.prixU ? selectedProduct.prixU : 'Ajouter un produit ou service'">
							<b-dropdown-item v-for="product in produits" :key="product.id" @click="selectProduit(product)">{{product.prixU}}</b-dropdown-item>
						</b-dropdown>
					</div>
					<vs-input-number class="number-input ml-20" v-model="number2" icon-inc="expand_less" icon-dec="expand_more"/>
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
			selectedProduct: null,
			number2: 50,
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
			console.log("data",data);
			
		}
	},
	methods: {
		// ...mapActions("enregistrer",["ADD_ENREGISTRER", "FETCH_ENREGISTRER","DELETE_ENREGISTRER", "UPDATE_ENREGISTRER"]),
		...mapActions("clients",["FETCH_CLIENTS"]),
		...mapActions("produits",["ADD_PRODUITS", "FETCH_PRODUITS"]),
		async Enregistrer() {
			
			console.log("input25", this.selectedCleint);
			console.log("input25", this.selectedFacture);
			console.log("input25", this.selectedProduct);
			console.log("number2", this.number2);
			
			// let obj = {
			// 	client: this.input25,
			// 	facture: this.input26,
			// 	productOnService: this.input23
			// }

			// if (this.enregistrerId) {
			// 	obj.id = this.enregistrerId;
			// 	await this.UPDATE_ENREGISTRER(obj).then(res => {
			// 		this.FETCH_ENREGISTRER();
			// 		}
			// 	)
			// } else {
			// 	await this.ADD_ENREGISTRER(obj).then(res => {
			// 		this.FETCH_ENREGISTRER()
			// 	}).catch(err => {
			// 		console.log(`ERROR : VIEWS : DataViewSidebar.vue : submitData -> ADD NEW : ${err}`);
			// 	})
			// }


		},

		selectClient(client) {
			this.selectedCleint = client;
		},
		selectFacture(text) {
			this.selectedFacture = text;
		},
		selectProduit(Produit) {
			this.selectedProduct = Produit;
		},
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
