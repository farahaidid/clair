import state from "./clientsState"
import getters from "./clientsGetters"
import mutations from "./clientsMutations"
import actions from "./clientsActions"

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
