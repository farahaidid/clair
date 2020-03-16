import state from "./employsState"
import getters from "./employesGetters"
import mutations from "./employesMutations"
import actions from "./employesActions"

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}