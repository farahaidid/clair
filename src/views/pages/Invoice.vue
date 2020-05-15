<!-- =========================================================================================
    File Name: Invoice.vue
    Description: Invoice Page
    ----------------------------------------------------------------------------------------
    Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
	<div id="invoice-page">
		<div class="flex flex-wrap items-center justify-between">
			<vs-button
				class="mb-base mr-3 rond"
				type="border"
				icon-pack="feather"
				icon="icon icon-copy"
                to="../MesFactures.vue"
			>Mes factures</vs-button>

			<vs-button
				class="mb-base mr-3 rond"
				type="flat"
				icon-pack="feather"
				icon="icon"
				to="../DataClientListView.vue"
			>Clients</vs-button>

			<vs-button
				class="mb-base mr-3 rond"
				type="flat"
				icon-pack="feather"
				icon="icon"
				to="../DataProduitListView.vue"
			>Produits</vs-button>
			<vx-input-group class="mb-base mr-3"></vx-input-group>
			<div class="flex items-center">
				<vs-button
					class="mb-base mr-3 rond"
					type="border"
					icon-pack="feather"
					icon="icond"
					to="../EditerFacture.vue"
				>Editer Facture</vs-button>
				<vs-button
					class="mb-base mr-3 rond"
					icon-pack="feather"
					icon="icon icon-file"
					@click="printInvoice"
				>Enregistrer</vs-button>
			</div>
		</div>

		<vx-card id="invoice-container">
			<!-- INVOICE METADATA -->
			<div class="vx-row leading-loose p-base">
				<div class="vx-col w-full md:w-1/2 mt-base">
					<img :src="logo" alt="vuexy-logo" class="logo" />
				</div>
				<div class="vx-col w-full md:w-1/2 text-right">
					<h1>{{facture}}</h1>
					<div class="invoice__invoice-detail mt-6">
						<h6>NUMERO</h6>
						<p>{{ invoiceDetails.invoiceNo }}</p>

						<h6 class="mt-4">EN DATE DU</h6>
						<p>{{ formatDate(invoiceDetails.invoiceDate) }}</p>
					</div>
				</div>
				<div class="vx-col w-full md:w-1/2 mt-12">
					<h5>{{entreprise ? entreprise.nomEntreprise : 'CLAIR COMPTA'}}</h5>
				
					<div v-if="entreprise" class="invoice__recipient-info my-4">
						{{entrepriseAddress }}
					</div>
					<div v-else class="invoice__recipient-info my-4">
						<p>{{ recipientDetails.addressLine1 }}</p>
					</div>
                    	<div class="invoice__recipient-info my-4">
						SIREN: {{entreprise? entreprise.siren:'' }}
					</div>
					<div v-if="!entreprise" class="invoice__recipient-contact">
						<p class="flex items-center">
							<feather-icon icon="MailIcon" svgClasses="h-4 w-4"></feather-icon>
							<span class="ml-2">{{ recipientDetails.mailId }}</span>
						</p>
					</div>
				</div>
				<div class="vx-col w-full md:w-1/2 mt-base text-right mt-12">
					<h6>CLIENT</h6>
					<br />
					<h5>{{ nom }}</h5>
					<div v-if="(companyDetails && companyDetails.siret) || lastSelectedClient">{{ lastSelectedClient ? lastSelectedClient.siretCli : companyDetails.siret}}</div>
					{{lastSelectedClient ? lastSelectedClient.adresseCli : companyDetails.addressLine1}}
					<div class="invoice__company-info my-4"></div>
				</div>
			</div>

			<!-- INVOICE CONTENT -->
			<div class="p-base">
				<!-- INVOICE TASKS TABLE -->
				<vs-table hoverFlat :data="invoiceData.tasks">
					<!-- HEADER -->
					<template slot="thead">
						<vs-th>DESCRIPTION</vs-th>
						<vs-th>PRIX UNITAIRE</vs-th>
						<vs-th>QUANTITE</vs-th>
						<vs-th>TAUX TVA</vs-th>
						<vs-th>MONTANT</vs-th>
					</template>

					<!-- DATA -->
					<template slot-scope="{data}">
						<vs-tr v-for="(tr, index) in data" :key="index">
							<vs-td :data="data[index].task">{{ data[index].task }}</vs-td>
							<vs-td :data="data[index].hours">{{ data[index].hours }}</vs-td>
							<vs-td :data="data[index].rate">{{ data[index].rate }}</vs-td>
							<vs-td> {{data[index].tauxTva}}%</vs-td>
							<vs-td :data="data[index].amount">{{ data[index].amount }}</vs-td>
						</vs-tr>
					</template>
				</vs-table>

				<!-- INVOICE SUMMARY TABLE -->
				<vs-table hoverFlat class="w-1/2 ml-auto mt-4" :data="invoiceData">
					<vs-tr>
						<vs-th>TOTAL HT</vs-th>
						<vs-td>{{ invoiceData.subtotal }} &euro;</vs-td>
					</vs-tr>
					<vs-tr>
						<vs-th>TVA</vs-th>
						<vs-td>{{ calculateTvaWithTax() }} &euro;</vs-td>
					</vs-tr>
					<vs-tr>
						<th>TOTAL TTC</th>
						<vs-td>{{ totalTTC }} &euro;</vs-td>
					</vs-tr>
				</vs-table>
			</div>

			<!-- INVOICE FOOTER -->
			<div class="invoice__footer text-right p-base">
				<p class="mb-4">
            
             A regler pour le: {{ formatDate(invoiceDetails.invoiceReglerLe) }}
            <br><br>
					<span v-if="invoiceData.tva">Numero de TVA : {{entreprise&&entreprise.numeroTVA}}</span>
					<span v-else>TVA non applicable art. 293B du CG.</span>
					<br />
                    
                    Indemnit&eacute; forfaitaire de 40 &euro; pour frais de recouvrement, en cas de retard de paiement.<br>
                    Dispense d'immatriculation au RCS et au repertoire des metiers.
					<br />
					<span>{{invoiceDetails.userText}}</span>
					<span v-if="entreprise.isJoinAGM">
						Acceptant le reglement des sommes dues par cheques libelles a son nom en sa qualite de membre d'un centre de gestion agree par l'administration fiscale
					</span>
				</p>
			</div>
		</vx-card>
		<b-modal v-model="showPdfPrintModal" :hide-header="true" :hide-footer="true" centered :size="'md'">
			<h4 class="text-success text-center" style="margin-bottom:50px">Do you want to save PDF Invoice?</h4>
			<b-row class="justify-content-around">
				<b-button variant="danger" @click="showPdfPrintModal = false">No</b-button>
				<b-button variant="success" @click="printPdf">Yes</b-button>
			</b-row>
		</b-modal>
	</div>
</template>

<script>
import { mapGetters, mapActions } from "vuex"
import GLOBAL from "@/mixins/GLOBAL"
import moment from "moment"
import html2canvas from 'html2canvas'
import jsPDF from "jspdf"
import {invoiceStorage, db} from "@/firebase/firebaseConfig"

export default {
	data() {
		return {
			mailTo: "",
			// companyDetails: {
			//     name: 'Coca-Cola Company',
			//     addressLine1: '9 N. Sherwood Court',
			//     addressLine2: 'Elyria, OH',

			//     zipcode: '94203',
			//     mailId: 'hello@pixinvent.net',
			//     mobile: '+91 999 999 9999',
			// },
			recipientDetails: {
				fullName: 'Peter Stark',
				sirett: ' 31096714600500',
				addressLine1: '136 Avenue de Saint-Ouen, 75018 Paris',
				addressLine2: '75018 Paris',
				zipcode: '90001',
				mailId: 'contact@appclair.com',
				mobile: '+91 988 888 8888',
			},
			showPdfPrintModal: false,
			pdf: null
		}
	},
	mixins: [GLOBAL],
	computed: {
		...mapGetters("entreprise", ["entreprise"]),
		...mapGetters("clients",["lastSelectedClient"]),
		...mapGetters("produits",["lastSelectedProduit"]),
		...mapGetters(["invoiceDetails"]),
		logo() {
			return (this.entreprise && this.entreprise.logo) || require("@/assets/images/logo/logo.png")
		},
		invoiceData() {
			return this.$store.state.invoice;
		},
		facture() {
			return this.$store.state.facture
		},
		tauxTva(){
			return this.lastSelectedProduit ? this.lastSelectedProduit.tauxTva || 20 : 20
		},
		nom(){
			return this.lastSelectedClient ? this.lastSelectedClient.nomCli :this.companyDetails.name
		},
		companyDetails() {
			return this.$store.state.companyDetails;		
		},
		calculatedTva() {
			return (this.invoiceData.subtotal / 100) * 20
		},
		totalTTC(){
			if(this.lastSelectedProduit) return (parseFloat(this.invoiceData.subtotal) + parseFloat(this.calculateTvaWithTax())).toFixed(2)
			return this.invoiceData.tva ? this.invoiceData.subtotal + this.calculatedTva : this.invoiceData.total
		},
		tva(){
			return this.invoiceData.tva ? this.calculatedTva.toFixed(2) : this.invoiceData.discountedAmount.toFixed(2)
		},
		entrepriseAddress() {
			if (this.entreprise) {
				let { adresse, codePostal, ville } = this.entreprise
				return `${adresse} ${codePostal}, ${ville}`
			}
			return null
		}
	},
	methods: {
		...mapActions("entreprise", ["FETCH_ENTREPRISE"]),
		...mapActions("employes", ["ADD_EMPLOYEE","FETCH_EMPLOYES"]),
		calculateTvaWithTax(){
			let t = 0
			this.invoiceData.tasks.forEach(task=>{
				console.log(task,(parseFloat(task.hours) , parseFloat(task.rate) , (parseFloat(task.tauxTva)  / 100)));
				t += (parseFloat(task.hours) * parseFloat(task.rate) * (parseFloat(task.tauxTva)  / 100))
			})
			return (t).toFixed(2)
		},
		printInvoice() {
			let page = document.querySelector("#invoice-container .vx-card__collapsible-content .vx-card__body")
			let _this = this
			html2canvas(page).then(async function(canvas) {
				let dataUrl = canvas.toDataURL("image/png", 1.0)
				const imgHeight = (canvas.height * 200) / canvas.width;
				let pdf = new jsPDF("p", "mm", "a4")
				pdf.setPage(1)
				pdf.addImage( dataUrl, "PNG", 5, 5, 200, imgHeight,null, 'FAST')
				_this.pdf = pdf
				_this.showPdfPrintModal=true;
				const pdfData = pdf.output("datauristring")
				_this.addEmployee(pdfData, dataUrl)
				try{
					// let imageSnapShot = await invoiceStorage.child(Math.random().toString(36).substring(2)).putString(pdfData, 'data_url')
					// await imageSnapShot.ref.getDownloadURL().then(imgurl =>{
					// 	console.log("IMAGE",imgurl);
					// 	url = imgurl
					// })
				}catch(e){
					console.log(e);
				}
			});
		},
		printPdf(){
			if(this.pdf) {
				this.pdf.save('invoice.pdf')
				this.showPdfPrintModal = false
			}
		},
		async addEmployee(pdf,dataUrl){
			let data = {
				nom: this.nom,
				montant: this.totalTTC,
				tva: this.tva,
				date: moment(this.invoiceDetails.invoiceDate).format("DD/MM/YYYY"),
				typedoc: this.facture,
				categorie: 'Vente',
				invoice_pdf: pdf,
				photo: dataUrl
			}
			await this.ADD_EMPLOYEE(data).then(async res => {
				await this.FETCH_EMPLOYES()
			})
		},
		formatDate(dt){
			let d = moment(dt).format("D MMM YYYY")
			if(d == 'Invalid date') return ''
			return d
		}
	},
	components: {},
	async created() {
		console.log(this.lastSelectedProduit);
		this.FETCH_ENTREPRISE(this.firebaseUserId)
	},
	mounted() {
		this.$emit("setAppClasses", "invoice-page")
	}
}
</script>

<style lang="scss">
	@media print {
		.invoice-page {
			* {
				visibility: hidden;
			}

			#content-area {
				margin: 0 !important;
			}

			#invoice-container,
			#invoice-container * {
				visibility: visible;
			}
			#invoice-container {
				position: absolute;
				left: 0;
				top: 0;
				box-shadow: none;
			}
		}
	}

	.rond {
		border-radius: 7px;
	}
	.logo {
		width: 70px;
	}
</style>
