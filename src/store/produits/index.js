import state from "./produitsState"
import getters from "./produitsGetters"
import mutations from "./produitsMutations"
import actions from "./produitsActions"

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}