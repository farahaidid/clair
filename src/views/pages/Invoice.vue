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
				>Options d'Envoi</vs-button>
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
						<p>{{ invoiceDetails.invoiceDate | date(true) }}</p>
					</div>
				</div>
				<div class="vx-col w-full md:w-1/2 mt-12">
					<h5>{{entreprise ? entreprise.nomEntreprise : 'CLAIR COMPTA'}}</h5>
					<div class="invoice__recipient-info my-4">
						<p>SIREN: {{entreprise? entreprise.siren:'' }}</p>
					</div>
					<div v-if="entreprise" class="invoice__recipient-info my-4">
						<p>{{entrepriseAddress }}</p>
					</div>
					<div v-else class="invoice__recipient-info my-4">
						<p>{{ recipientDetails.addressLine1 }}</p>
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
					<h5>{{ companyDetails.name }}</h5>
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
						<vs-th>MONTANT</vs-th>
					</template>

					<!-- DATA -->
					<template slot-scope="{data}">
						<vs-tr v-for="(tr, index) in data" :key="index">
							<vs-td :data="data[index].task">{{ data[index].task }}</vs-td>
							<vs-td :data="data[index].hours">{{ data[index].hours }}</vs-td>
							<vs-td :data="data[index].rate">{{ data[index].rate }}</vs-td>
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
						<vs-td v-if="invoiceData.tva">{{ calculatedTva }} &euro;</vs-td>
						<vs-td v-else>{{ invoiceData.discountedAmount }} &euro;</vs-td>
					</vs-tr>
					<vs-tr>
						<th>TOTAL TTC</th>
						<vs-td v-if="invoiceData.tva">{{ invoiceData.subtotal + calculatedTva }} &euro;</vs-td>
						<vs-td v-else>{{ invoiceData.total }} &euro;</vs-td>
					</vs-tr>
				</vs-table>
			</div>

			<!-- INVOICE FOOTER -->
			<div class="invoice__footer text-right p-base">
				<p class="mb-4">
            
             A regler pour le: 
            <br><br>
					<span v-if="invoiceData.tva">Numero de TVA : {{entreprise&&entreprise.numeroTVA}}</span>
					<span v-else>TVA non applicable art. 293B du CG.</span>
					<br />
                    
                    Indemnit&eacute; forfaitaire de 40 &euro; pour frais de recouvrement, en cas de retard de paiement.<br>
                    Dispense d'immatriculation au RCS et au repertoire des metiers.
				</p>
			</div>
		</vx-card>
	</div>
</template>

<script>
import { mapGetters, mapActions } from "vuex"
import GLOBAL from "@/mixins/GLOBAL"

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
			invoiceDetails: {
				invoiceNo: '001/2019',
				invoiceDate: 'Mon Dec 10 2018 07:46:00 GMT+0000 (GMT)',
			},
			// invoiceData: {
			//     tasks: [
			//         {
			//             id: 1,
			//             task: 'Website Redesign',
			//             hours: 60,
			//             rate: 15,
			//             amount: 90000,
			//         },
			//         {
			//             id: 2,
			//             task: 'Newsletter template design',
			//             hours: 20,
			//             rate: 12,
			//             amount: 24000,
			//         },
			//     ],
			//     subtotal: 114000,
			//     discountPercentage: 5,
			//     discountedAmount: 5700,
			//     total: 108300,
			// }
		}
	},
	mixins: [GLOBAL],
	computed: {
		...mapGetters("entreprise", ["entreprise"]),
		logo() {
			return (this.entreprise && this.entreprise.logo) || require("@/assets/images/logo/logo.png")
		},
		invoiceData() {
			return this.$store.state.invoice;
		},
		facture() {
			return this.$store.state.facture
		},
		companyDetails() {
			return this.$store.state.companyDetails
		},
		calculatedTva() {
			return (this.invoiceData.subtotal / 100) * 20
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
		printInvoice() {
			window.print()
		}
	},
	components: {},
	async created() {
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
