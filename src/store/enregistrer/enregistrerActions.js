import { db } from "../../firebase/firebaseConfig"

export default {
  async FETCH_ENREGISTRER({commit}) {
    return await db.collection("enregistrer").get().then(snapshot => {
      if(!snapshot.empty){
        let emps = snapshot.docs.map(doc => Object.assign({id: doc.id},doc.data()) )
        commit("SET_ENREGISTRER", emps)
        return emps
      }
      return []
    }).catch(err => {
      console.log(`ERROR : STORE : enregistrer : enregistrerActions : FETCH_ENREGISTRER : ${err}`);
      return []
    })
  },
  async ADD_ENREGISTRER({}, data) {
    return await db.collection("enregistrer").add(data).then(ref => {
      return ref
    }).catch(err => {
      console.log(`ERROR : STORE : enregistrer : enregistrerActions : ADD_ENREGISTRER : ${err}`);
      throw new Error(err)
    })
  },
  async UPDATE_ENREGISTRER({}, data){
    if(!data.id) return
    let obj = Object.assign({},data)
    delete obj.id
    return await db.collection("enregistrer").doc(data.id).update(data).then(ref => {
      return ref
    }).catch(err => {
      console.log(`ERROR : STORE : enregistrer : enregistrerActions : UPDATE_ENREGISTRER : ${err}`);
      throw new Error(err)
    })
  },
  async DELETE_ENREGISTRER({}, data){
    if(!data.id) return
    return await db.collection("enregistrer").doc(data.id).delete().then(ref => {
      return ref
    }).catch(err => {
      console.log(`ERROR : STORE : enregistrer : enregistrerActions : DELETE_ENREGISTRER : ${err}`);
      throw new Error(err)
    })
  }
}