<!-- =========================================================================================
  File Name: AddNewDataSidebar.vue
  Description: Add New Data - Sidebar component
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
  <vs-sidebar click-not-close position-right parent="body" default-index="1" color="primary" class="add-new-data-sidebar items-no-padding" spacer v-model="isSidebarActiveLocal">
    <div class="mt-6 flex items-center justify-between px-6">
        <h4>{{ Object.entries(this.data).length === 0 ? "Ajouter" : "Modifier" }} Client</h4>
        <feather-icon icon="XIcon" @click.stop="isSidebarActiveLocal = false" class="cursor-pointer"></feather-icon>
    </div>
    <vs-divider class="mb-0"></vs-divider>

    <VuePerfectScrollbar class="scroll-area--data-list-add-new" :settings="settings" :key="$vs.rtl">

      <div class="p-6">

        <!-- Product Image -->
        <template v-if="dataImg">

          <!-- Image Container -->
          <div class="img-container w-64 mx-auto flex items-center justify-center">
            <img :src="dataImg" alt="img" class="responsive">
          </div>

          <!-- Image upload Buttons -->
          <div class="modify-img flex justify-between mt-5">
            <input type="file" class="hidden" ref="updateImgInput" @change="updateCurrImg" accept="image/*">
            <vs-button class="mr-4" type="flat" @click="$refs.updateImgInput.click()">Update Image</vs-button>
            <vs-button type="flat" color="#999" @click="dataImg = null">Remove Image</vs-button>
          </div>
        </template>

        
        <!-- NAME -->
        <vs-input label="Nom" v-model="dataNomCli" class="mt-5 w-full" name="item-nomCli" />
        <span class="text-danger text-sm" v-show="errors.has('item-nomCli')">{{ errors.first('item-nomCli') }}</span>


        <!-- CATEGORIE -->
        <vs-input label="Email" v-model="dataEmailCli" class="mt-5 w-full" name="item-emailCli" />
        <span class="text-danger text-sm" v-show="errors.has('item-emailCli')">{{ errors.first('item-emailCli') }}</span>

        <!-- CATEGORIE -->
        <vs-input label="Siret" v-model="dataSiretCli" class="mt-5 w-full" name="item-siretCli" />
        <span class="text-danger text-sm" v-show="errors.has('item-siretCli')">{{ errors.first('item-siretCli') }}</span>
        

        <!-- ORDER STATUS -->
        <!-- <vs-select v-model="dataOrder_status" label="Order Status" class="mt-5 w-full">
          <vs-select-item :key="item.value" :value="item.value" :text="item.text" v-for="item in order_status_choices" />
        </vs-select> -->

        <!-- PRICE -->
        <!-- <vs-input
          icon-pack="feather"
          icon="icon-dollar-sign"
          label="Price"
          v-model="dataPrice"
          class="mt-5 w-full"
          v-validate="{ required: true, regex: /\d+(\.\d+)?$/ }"
          name="item-price" />
        <span class="text-danger text-sm" v-show="errors.has('item-price')">{{ errors.first('item-price') }}</span> -->

        <!-- Upload -->
        <!-- <vs-upload text="Upload Image" class="img-upload" ref="fileUpload" /> -->

        <!-- <div class="upload-img mt-5" v-if="!dataImg">
          <input type="file" class="hidden" ref="uploadImgInput" @change="updateCurrImg" accept="image/*">
          <vs-button @click="$refs.uploadImgInput.click()">Upload Image</vs-button>
        </div> -->
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
      if(!val) return
      if(!this.data) {
        this.initValues()
        this.$validator.reset()
      }else {
        let { id, nomCli, emailCli, siretCli } = this.data
        this.clientId = id
        this.dataNomCli = nomCli
        this.dataEmailCli = emailCli
        this.dataSiretCli = siretCli
      }
    }
  },
  data() {
    return {

      dataId: null,
      dataName: "",
      dataCategory: null,
      dataImg: null,
      dataOrder_status: "pending",
      dataPrice: 0,

      /* EMPLOYES-DATA */
      clientId: "",
      dataNomCli: "",
      dataEmailCli: "",
      dataSiretCli: "",
      /* EMPLOYES-DATA */

      category_choices: [
        {text:'Audio',value:'audio'},
        {text:'Computers',value:'computers'},
        {text:'Fitness',value:'fitness'},
        {text:'Appliance',value:'appliance'}
      ],

      order_status_choices: [
        {text:'Pending',value:'pending'},
        {text:'Canceled',value:'canceled'},
        {text:'Delivered',value:'delivered'},
        {text:'On Hold',value:'on_hold'}
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
        if(!val) {
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
    ...mapActions("clients",["ADD_EMPLOYEE","FETCH_EMPLOYES","UPDATE_EMPLOYEE"]),
    initValues() {
      this.clientId = ""
      this.dataNomCli = ""
      this.dataEmailCli = ""
      this.dataSiretCli = ""
    },
    submitData() {
      this.$validator.validateAll().then(async result => {
        if (result) {
          let obj = {
            nomCli: this.dataNomCli,
            siretCli: this.dataSiretCli,
            emailCli: this.dataEmailCli,
          }
          if(this.clientId == null){
            /* ADD NEW */
            await this.ADD_EMPLOYEE(obj).then(res => {
              this.FETCH_EMPLOYES()
            }).catch(err => {
              console.log(`ERROR : VIEWS : DataClientSidebar.vue : submitData -> ADD NEW : ${err}`);
            }).finally(() => {
              this.$emit('closeSidebar')
              this.initValues()
              this.$validator.reset()
            })
          }else{
            /* UPDATE */
            obj.id = this.clientId
            await this.UPDATE_EMPLOYEE(obj).then(res => {
              this.FETCH_EMPLOYES()
            }).catch(err => {
              console.log(`ERROR : VIEWS : DataClientSidebar.vue : submitData -> UPDATE : ${err}`);
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
        var reader = new FileReader()
        reader.onload = e => {
          this.dataImg = e.target.result
        }
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
