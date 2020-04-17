
<script src="https://www.gstatic.com/firebasejs/7.9.2/firebase-app.js"></script>
<script src="https://www.gstatic.com/firebasejs/7.9.2/firebase-firestore.js"></script>


<template>

  <div id="data-client-list-view" class="data-list-container">

    <data-view-sidebar :isSidebarActive="addNewDataSidebar" @closeSidebar="toggleDataSidebar" :data="sidebarData" />

    <vs-table ref="table" multiple v-model="selected" pagination :max-items="itemsPerPage" search :data="clients">

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

          <!-- ADD NEW -->
          <!-- <div class="btn-add-new p-3 mb-4 mr-4 rounded-lg cursor-pointer flex items-center justify-center text-lg font-medium text-base text-primary border border-solid border-primary"  height="8" @click="addNewData">
              <feather-icon icon="PlusIcon" svgClasses="h-4 w-4" />
              <span class="ml-2 text-base text-primary">Ajouter Client</span>
          </div> -->

          <b-button class="add-client" v-b-modal.modal-prevent-closing>
            <feather-icon icon="PlusIcon" svgClasses="h-4 w-4" />
            <span class="ml-2 text-base text-primary">Ajouter Client</span>
          </b-button>

          <div>
            <b-modal id="modal-prevent-closing"
              ref="modal"
              title="Nouveau Client"
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
                    id="nom-input"
                    v-model="nomCli"
                    :state="nameState"
                    required
                  ></b-form-input>
                </b-form-group>

                <b-form-group
                  :state="nameState"
                  label="Email"
                  label-for="name-input"
                  invalid-feedback="Name is required"
                >
                  <b-form-input
                    id="email-input"
                    v-model="emailCli"
                    :state="nameState"
                    required
                  ></b-form-input>
                </b-form-group>

                <b-form-group
                  :state="nameState"
                  label="Siret"
                  label-for="name-input"
                  invalid-feedback="Name is required"
                >
                  <b-form-input
                    id="sire-input"
                    v-model="siretCli"
                    :state="nameState"
                    required
                  ></b-form-input>
                </b-form-group>

                <b-form-group
                  :state="nameState"
                  label="Adresse"
                  label-for="name-input"
                  invalid-feedback="Name is required"
                >
                  <b-form-input
                    id="adress-input"
                    v-model="adresseCli"
                    :state="nameState"
                    required
                  ></b-form-input>
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
        <vs-th sort-key="nomCli">Nom</vs-th>
        <vs-th sort-key="emailCli">Email</vs-th>
        <vs-th sort-key="siretCli">SIRET</vs-th>
        <!-- <vs-th>Action</vs-th> -->
      </template>

        <template slot-scope="{data}">
          <tbody>
            <vs-tr :data="tr" :key="indextr" v-for="(tr, indextr) in data">

              <vs-td>
                <p class="product-nomCli font-medium truncate mb-0" >{{ tr.nomCli }}</p>
              </vs-td>

              <vs-td>
                <p class="product-emailCli mb-0">{{ tr.emailCli }} <br><font color="#e4bcb3"></font></p>
              </vs-td>

              <vs-td>
                <p class="product-siretCli mb-0">{{ tr.siretCli }} <br><font color="#e4bcb3"></font></p>
              </vs-td>

              <vs-td class="whitespace-no-wrap">
                <b-button class="add-client edit-client p-0 mt-1" v-b-modal.modal-prevent-closing @click="editData(tr)">
                  <feather-icon icon="EditIcon" svgClasses="w-5 h-5 hover:text-primary stroke-current"/>
                </b-button>
                <!-- <feather-icon icon="EditIcon" svgClasses="w-5 h-5 hover:text-primary stroke-current" @click.stop="editData(tr)" /> -->
                <b-button class="add-client edit-client p-0 mt-1" v-b-modal.modal-center @click="deleteClient(tr)">
                  <feather-icon icon="TrashIcon" svgClasses="w-5 h-5 hover:text-danger stroke-current"  class="ml-2"/>
                </b-button>
                </vs-td>

            </vs-tr>
          </tbody>
        </template>
    </vs-table>

    <b-modal id="modal-center" centered title="Supprimer Client" @ok="deleteClientOk">
      <p class="my-4">Etes-vous sur.e de vouloir supprimer ce client ?</p>
    </b-modal>
  </div>
</template>



<script>
import DataClientSidebar from './DataClientSidebar.vue'
import moduleDataList from "@/store/data-list/moduleDataList.js"
import { mapActions, mapGetters } from "vuex"

export default {
  components: {
    DataClientSidebar
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

      nameState: null,
      submittedNames: [],

      adresseCli: "",
      cpCli: "",
      emailCli: "",
      nomCli: "",
      nomRefCli: "",
      paysCli: "",
      siretCli: "",
      villeCli: "",
      clientId: "",

      deleteClientId: "",
    }
  },
  computed: {
    ...mapGetters("clients",["clients"]),
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
      // return this.$refs.table ? this.$refs.table.queriedResults.length : this.products.length
    }
  },
  methods: {
    ...mapActions("clients",["ADD_CLIENTS", "FETCH_CLIENTS","DELETE_CLIENTS", "UPDATE_CLIENTS"]),
    deleteEmployee(){
      for(let i=0;i<this.selected.length;i++){
        console.log(this.selected[i],i);
        this.DELETE_CLIENTS({id:this.selected[i].id}).then(res => {
          console.log(res);
          if(i == this.selected.length-1){
            this.FETCH_CLIENTS()
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
      this.toggleDataSidebar(true)

      this.adresseCli = data.adresseCli;
      this.cpCli= data.cpCli;
      this.emailCli= data.emailCli;
      this.nomCli= data.nomCli;
      this.nomRefCli= data.nomRefCli;
      this.paysCli= data.paysCli;
      this.siretCli= data.siretCli;
      this.villeCli= data.villeCli,
      this.clientId = data.id
    },
    getOrderStatusColor(status) {
      if(status == 'on_hold') return "warning"
      if(status == 'delivered') return "success"
      if(status == 'canceled') return "danger"
      return "primary"
    },
    getPopularityColor(num) {
      if(num > 90) return "success"
      if(num > 70) return "primary"
      if(num >= 50) return "warning"
      if(num < 50) return "danger"
      return "primary"
    },
    toggleDataSidebar(val=false) {
      this.addNewDataSidebar = val
    },

    checkFormValidity() {
      const valid = this.$refs.form.checkValidity()
      // this.nameState = valid
      return valid
    },
    resetModal() {
      // console.log("3232");
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
        adresseCli: this.adresseCli,
        cpCli: this.cpCli,
        emailCli: this.emailCli,
        nomCli: this.nomCli,
        nomRefCli: this.nomRefCli,
        paysCli: this.paysCli,
        siretCli: this.siretCli,
        villeCli: this.villeCli
      }

      if (!this.clientId) {
        await this.ADD_CLIENTS(obj).then(res => {
          this.FETCH_CLIENTS()
        }).catch(err => {
          console.log(`ERROR : VIEWS : DataViewSidebar.vue : submitData -> ADD NEW : ${err}`);
        })
      } else {
        obj.id = this.clientId;
        await this.UPDATE_CLIENTS(obj).then(res => {
          this.FETCH_CLIENTS();

          this.adresseCli = "";
          this.cpCli= "";
          this.emailCli= "";
          this.nomCli= "";
          this.nomRefCli= "";
          this.paysCli= "";
          this.siretCli= "";
          this.villeCli= "";
          this.clientId = "";
          
        }).catch(err => {
          console.log(`ERROR : VIEWS : DataViewSidebar.vue : submitData -> UPDATE : ${err}`);
        })
      }
      

      // Hide the modal manually
      this.$nextTick(() => {
        this.$bvModal.hide('modal-prevent-closing')
      })
    },
    deleteClient(tr) {
      console.log("hello", tr);
      this.deleteClientId = tr.id;
    },
    deleteClientOk() {
      if (this.deleteClientId) {
        this.DELETE_CLIENTS({id: this.deleteClientId}).then(res => {
            this.FETCH_CLIENTS()
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

    this.FETCH_CLIENTS()
  },
  mounted() {
    this.isMounted = true;
  }
}
</script>



<style lang="scss">
#data-client-list-view {
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
           // padding: 20px !important;
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

.add-client {
  background-color: transparent;
  border-color: #007BB6;
  padding: 1rem;
  margin-top: -.7rem;
  border-radius: 7px;

  .feather-icon {
    color: #007BB6;
  }

  &:hover, &:active, &:active {
    background-color: #edf5f5;
    border-color: #007BB6;
    
    box-shadow: none;
  }
}

.edit-client {
  border-color: transparent;

  &:hover, &:active, &:active {
    border-color: transparent;
  }
}

.modal-content {
  margin-top: 20%;
}


.rond {
  border-radius: 7px;}
</style>
