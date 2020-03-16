import state from "./enregistrerState"
import getters from "./enregistrerGetters"
import mutations from "./enregistrerMutations"
import actions from "./enregistrerActions"

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}