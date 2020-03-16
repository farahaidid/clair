import { db } from "../../firebase/firebaseConfig"

export default {
  async FETCH_PRODUITS({commit}){
    return await db.collection("produits").get().then(snapshot => {
      if(!snapshot.empty){
        let emps = snapshot.docs.map(doc => Object.assign({id: doc.id},doc.data()) )
        commit("SET_PRODUITS", emps)
        return emps
      }
      return []
    }).catch(err => {
      console.log(`ERROR : STORE : produits : produitsActions : FETCH_PRODUITS : ${err}`);
      return []
    })
  },
  async ADD_PRODUITS({}, data){
    return await db.collection("produits").add(data).then(ref => {
      return ref
    }).catch(err => {
      console.log(`ERROR : STORE : produits : produitsActions : ADD_PRODUITS : ${err}`);
      throw new Error(err)
    })
  },
  async UPDATE_PRODUITS({}, data){
    if(!data.id) return
    let obj = Object.assign({},data)
    delete obj.id
    return await db.collection("produits").doc(data.id).update(data).then(ref => {
      return ref
    }).catch(err => {
      console.log(`ERROR : STORE : produits : produitsActions : UPDATE_PRODUITS : ${err}`);
      throw new Error(err)
    })
  },
  async DELETE_PRODUITS({}, data){
    if(!data.id) return
    return await db.collection("produits").doc(data.id).delete().then(ref => {
      return ref
    }).catch(err => {
      console.log(`ERROR : STORE : produits : produitsActions : DELETE_PRODUITS : ${err}`);
      throw new Error(err)
    })
  }
}
