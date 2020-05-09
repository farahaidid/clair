
<script src="https://www.gstatic.com/firebasejs/7.9.2/firebase-app.js"></script>
<script src="https://www.gstatic.com/firebasejs/7.9.2/firebase-firestore.js"></script>


<template>

  <div id="data-produit-list-view" class="data-list-container">

    <data-view-sidebar :isSidebarActive="addNewDataSidebar" @closeSidebar="toggleDataSidebar" :data="sidebarData" />

    <vs-table ref="table" multiple v-model="selected" pagination :max-items="itemsPerPage" search :data="produits">

      <div slot="header" class="flex flex-wrap-reverse items-center flex-grow justify-between">

        <div class="flex flex-wrap-reverse items-center data-list-btn-container">

          <!-- ACTION - DROPDOWN -->
          <vs-dropdown vs-trigger-click class="dd-actions cursor-pointer mr-4 mb-4">

            <div class="p-4 shadow-drop rounded-lg d-theme-dark-bg cursor-pointer flex items-center justify-center text-lg font-medium w-32 w-full">
              <span class="mr-2">Modifier</span>
              <feather-icon icon="ChevronDownIcon" svgClasses="h-4 w-4" />
            </div>

            <vs-dropdown-menu>
              <vs-dropdown-item>
                <span class="flex items-center" v-if="selected.length == 1" @click="editEmployee">
                  <feather-icon icon="TrashIcon" svgClasses="h-4 w-4" class="mr-2" />
                  <span>Editer</span>
                </span>
              </vs-dropdown-item>
              <vs-dropdown-item @click="deleteEmployee">
                <span class="flex items-center">
                  <feather-icon icon="TrashIcon" svgClasses="h-4 w-4" class="mr-2" />
                  <span>Supprimer</span>
                </span>
              </vs-dropdown-item>
            </vs-dropdown-menu>
          </vs-dropdown>

          <b-button class="add-Produit" v-b-modal.modal-prevent-closing>
            <feather-icon icon="PlusIcon" svgClasses="h-4 w-4" />
            <span class="ml-2 text-base text-primary">Ajouter Produit</span>
          </b-button>

          <div>
            <b-modal id="modal-prevent-closing"
              ref="modal"
              title="Nouveau Produit"
              @show="resetModal"
              @hidden="resetModal"
              @ok="handleOk"
            >
              <form ref="form" @submit.stop.prevent="handleSubmit">
                <b-form-group
                  :state="nameState"
                  label="Nom"
                  label-for="name-input"
                  invalid-feedback="Name is required"
                >
                  <b-form-input
                    id="name-input"
                    v-model="nomProd"
                    :state="nameState"
                    v-validate="{ required: true, min: 3 }"
                    required
                  ></b-form-input>
                </b-form-group>

                <b-form-group
                  :state="nameState"
                  label="Prix unitaire"
                  label-for="name-input"
                  invalid-feedback="Name is required"
                >
                  <b-form-input
                    id="name-input"
                    v-model="prixU"
                    :state="nameState"
                    required
                  ></b-form-input>
                </b-form-group>

                <b-form-group
                  :state="nameState"
                  label="Description"
                  label-for="name-input"
                  invalid-feedback="Name is required"
                >
                  <b-form-input
                    id="name-input"
                    v-model="description"
                    :state="nameState"
                    required
                  ></b-form-input>
                </b-form-group>
                <b-form-group label="Taux TVA" invalid-feedback="Taux TVA is required">
                  <b-form-select v-model="tauxTva" :options="tauxTvaOptions"></b-form-select>
                </b-form-group>
              </form>
            </b-modal>
          </div>
        </div>

        <!-- ITEMS PER PAGE -->
        <vs-dropdown vs-trigger-click class="cursor-pointer mb-4 mr-4 items-per-page-handler">
          <div class="p-4 border border-solid d-theme-border-grey-light rounded-full d-theme-dark-bg cursor-pointer flex items-center justify-between font-medium">
            <span class="mr-2">{{ currentPage * itemsPerPage - (itemsPerPage - 1) }} - {{ products.length - currentPage * itemsPerPage > 0 ? currentPage * itemsPerPage : products.length }} of {{ queriedItems }}</span>
            <feather-icon icon="ChevronDownIcon" svgClasses="h-4 w-4" />
          </div>
          <!-- <vs-button class="btn-drop" type="line" color="primary" icon-pack="feather" icon="icon-chevron-down"></vs-button> -->
          <vs-dropdown-menu>

            <vs-dropdown-item @click="itemsPerPage=4">
              <span>4</span>
            </vs-dropdown-item>
            <vs-dropdown-item @click="itemsPerPage=10">
              <span>10</span>
            </vs-dropdown-item>
            <vs-dropdown-item @click="itemsPerPage=15">
              <span>15</span>
            </vs-dropdown-item>
            <vs-dropdown-item @click="itemsPerPage=20">
              <span>20</span>
            </vs-dropdown-item>
          </vs-dropdown-menu>
        </vs-dropdown> 
      </div>
     

      <template slot="thead">
        <vs-th sort-key="nomProd">Produit</vs-th>
        <vs-th sort-key="prixU">Prix Unitaire</vs-th>
        <vs-th sort-key="description">Description</vs-th>
        <!-- <vs-th>Action</vs-th> -->
      </template>

        <template slot-scope="{data}">
          <tbody>
            <vs-tr :data="tr" :key="indextr" v-for="(tr, indextr) in data">

              <vs-td>
                <p class="product-nomProd font-medium truncate mb-0" >{{ tr.nomProd }}</p>
              </vs-td>

              <vs-td>
                <p class="product-prixU mb-0">{{ tr.prixU }} <br><font color="#e4bcb3"></font></p>
              </vs-td>

              <vs-td>
                <p class="product-description mb-0">{{ tr.description }} <br><font color="#e4bcb3"></font></p>
              </vs-td>

              <vs-td class="whitespace-no-wrap">
                <b-button class="add-Produit edit-Produit p-0 mt-1" v-b-modal.modal-prevent-closing @click="editData(tr)">
                  <feather-icon icon="EditIcon" svgClasses="w-5 h-5 hover:text-primary stroke-current"/>
                </b-button>
                
                <b-button class="add-Produit edit-Produit p-0 mt-1" v-b-modal.modal-center @click="deleteProduit(tr)">
                  <feather-icon icon="TrashIcon" svgClasses="w-5 h-5 hover:text-danger stroke-current"  class="ml-2"/>
                </b-button>
                </vs-td> 

            </vs-tr>
          </tbody>
        </template>
    </vs-table>

    <b-modal id="modal-center" centered title="Delete Produit" @ok="deleteProduitOk">
      <p class="my-4">Are you sure you want to delete this?</p>
    </b-modal>
  </div>
</template>



<script>
import DataProduitSidebar from './DataProduitSidebar.vue'
import moduleDataList from "@/store/data-list/moduleDataList.js"
import { mapActions, mapGetters, mapMutations } from "vuex"

export default {
  components: {
    DataProduitSidebar
  },
  data() {
    return {
      selected: [],
      // products: [],
      itemsPerPage: 10,
      isMounted: false,

      // Data Sidebar
      addNewDataSidebar: false,
      sidebarData: {},

      produitId: "",
      nomProd: '',
      prixU: '',
      description: "",
      tauxTva: 20,
      tauxTvaOptions: [
        {value: 5, text: '5%'},
        {value: 10, text: '10%'},
        {value: 20, text: '20%'},
      ],
      name: "",
      nameState: null,
      submittedNames: [],
      deleteProduitId: ""
    }
  },
  computed: {
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
  methods: {
    ...mapActions("produits",["ADD_PRODUITS", "FETCH_PRODUITS","DELETE_PRODUITS", "UPDATE_PRODUITS"]),
    ...mapMutations("produits",["SET_LAST_SELECTED_PRODUIT"]),
    deleteEmployee(){
      for(let i=0;i<this.selected.length;i++){
        console.log(this.selected[i],i);
        this.DELETE_PRODUITS({id:this.selected[i].id}).then(res => {
          console.log(res);
          if(i == this.selected.length-1){
            this.FETCH_PRODUITS()
          }
        })
      }
    },
    editEmployee(){
      this.sidebarData = this.selected[0]
      this.toggleDataSidebar(true)
    },
    addNewData() {
      this.sidebarData = {}
      this.toggleDataSidebar(true)
    },
    deleteData(id) {
      this.$store.dispatch("dataList/removeItem", id).catch(err => { console.error(err) })
    },
    editData(data) {
      // this.sidebarData = JSON.parse(JSON.stringify(this.blankData))
      this.sidebarData = data
      this.toggleDataSidebar(true);

      this.produitId = data.id;
      this.nomProd=  data.nomProd;
      this.prixU = data.prixU;
      this.description = data.description;
      this.tauxTva = data.tauxTva || 20;
    },
    getOrderStatusColor(status) {
      if(status == 'on_hold') return "warning"
      if(status == 'delivered') return "success"
      if(status == 'canceled') return "danger"
      return "primary"
    },
    getPopularityColor(num) {
      if(num > 90) return "success"
      if(num >70) return "primary"
      if(num >= 50) return "warning"
      if(num < 50) return "danger"
      return "primary"
    },
    toggleDataSidebar(val=false) {
      this.addNewDataSidebar = val
    },

    checkFormValidity() {
      const valid = this.$refs.form.checkValidity()
      console.log(valid);
      this.nameState = valid
      return valid
    },
    resetModal() {
      this.name = ''
      this.nameState = null
    },
    handleOk(bvModalEvt) {
      // Prevent modal from closing
      bvModalEvt.preventDefault()
      // Trigger submit handler
      this.handleSubmit()
    },
    async handleSubmit() {
      // Exit when the form isn't valid
      if (!this.checkFormValidity()) {
        return
      }

      let obj = {
        nomProd: this.nomProd,
        prixU: this.prixU,
        description: this.description,
        tauxTva: this.tauxTva
      }

      if (!this.produitId) {
        await this.ADD_PRODUITS(obj).then(res => {
          this.FETCH_PRODUITS()
        }).catch(err => {
          console.log(`ERROR : VIEWS : DataViewSidebar.vue : submitData -> ADD NEW : ${err}`);
        })
      } else {
        obj.id = this.produitId;
        await this.UPDATE_PRODUITS(obj).then(res => {
          this.FETCH_PRODUITS();

          this.produitId = "";
          this.nomProd= "";
          this.prixU = "";
          this.description = "";
        }).catch(err => {
          console.log(`ERROR : VIEWS : DataViewSidebar.vue : submitData -> UPDATE : ${err}`);
        })
      }

      this.SET_LAST_SELECTED_PRODUIT(obj)


      // Push the name to submitted names
      this.submittedNames.push(this.name)
      // Hide the modal manually
      this.$nextTick(() => {
        this.$bvModal.hide('modal-prevent-closing')
      })
    },
    deleteProduit(tr) {
      this.deleteProduitId = tr.id;
    },
    deleteProduitOk() {
      if (this.deleteProduitId) {
       this.DELETE_PRODUITS({id: this.deleteProduitId}).then(res => {
          this.FETCH_PRODUITS();
        })
      }
    }
  },
  created() {
    if(!moduleDataList.isRegistered) {
      this.$store.registerModule('dataList', moduleDataList)
      moduleDataList.isRegistered = true
    }
    this.$store.dispatch("dataList/fetchDataListItems")

    this.FETCH_PRODUITS()
  },
  mounted() {
    this.isMounted = true;
  }
}
</script>



<style lang="scss">
#data-produit-list-view {
  .vs-con-table {

    /*
      Below media-queries is fix for responsiveness of action buttons
      Note: If you change action buttons or layout of this page, Please remove below style
    */
    @media (max-width: 689px) {
      .vs-table--search {
        margin-left: 0;
        max-width: unset;
        width: 100%;

        .vs-table--search-input {
          width: 100%;
        }
      }
    }

    @media (max-width: 461px) {
      .items-per-page-handler {
        display: none;
      }
    }

    @media (max-width: 341px) {
      .data-list-btn-container {
        width: 100%;

        .dd-actions,
        .btn-add-new {
          width: 100%;
          margin-right: 0 !important;
        }
      }
    }

    .product-name {
      max-width: 23rem;
    }

    .vs-table--header {
      display: flex;
      flex-wrap: wrap;
      margin-left: 1.5rem;
      margin-right: 1.5rem;
      > span {
        display: flex;
        flex-grow: 1;
      }

      .vs-table--search{
        padding-top: 0;

        .vs-table--search-input {
          padding: 0.9rem 2.5rem;
          font-size: 1rem;

          &+i {
            left: 1rem;
          }

          &:focus+i {
            left: 1rem;
          }
        }
      }
    }

    .vs-table {
      border-collapse: separate;
      border-spacing: 0 .5rem;
      padding: 0 1rem;

      tr{
          box-shadow: 0 4px 20px 0 rgba(0,0,0,.05);
          td{
            padding: 20px;
            &:first-child{
              border-top-left-radius: .5rem;
              border-bottom-left-radius: .5rem;
            }
            &:last-child{
              border-top-right-radius: .5rem;
              border-bottom-right-radius: .5rem;
            }
          }
          td.td-check{
          //  padding: 20px !important;
          }
      }
    }

    .vs-table--thead{
      th {
        padding-top: 0;
        padding-bottom: 0;

        .vs-table-text{
          text-transform: uppercase;
          font-weight: 600;
        }
      }
      th.td-check{
        padding: 0 15px !important;
      }
      tr{
        background: none;
        box-shadow: none;
      }
    }

    .vs-table--pagination {
      justify-content: center;
    }
  }
}


.add-Produit {
  background-color: transparent;
  border-color: #007BB6;
  padding: 1rem;
  margin-top: -.7rem;
  border-radius: 8px;

  .feather-icon {
    color: #007BB6;
  }

  &:hover, &:active, &:active {
    background-color: #edf5f5;
    border-color: #007BB6;
    box-shadow: none;
  }
}

.edit-Produit {
  border-color: transparent;

  &:hover, &:active, &:active {
    border-color: transparent;
  }
}

.modal-content {
  margin-top: 20%;
}
</style>
