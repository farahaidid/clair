import state from "./entrepriseState"
import getters from "./entrepriseGetters"
import mutations from "./entrepriseMutations"
import actions from "./entrepriseActions"

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}