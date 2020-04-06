import { db } from "../../firebase/firebaseConfig"

export default {
   async FETCH_ENTREPRISE({ commit }, uid) {
      return await db.collection("entreprise").doc(uid).get().then(snapshot => {
         console.log(snapshot);
         if (!snapshot.empty) {
            let ent = Object.assign({ uid: snapshot.id }, snapshot.data())
            commit("SET_ENTREPRISE", ent)
            return ent
         }
         return []
      }).catch(err => {
         console.log(`ERROR : STORE : entreprise : entrepriseActions : FETCH_EMPLOYES : ${err}`);
         return []
      })
   },
   async UPDATE_ENTREPRISE({ }, data) {
      if (!data.uid) return
      let uid = data.uid
      let obj = Object.assign({}, data)
      delete obj.uid
      return await db.collection("entreprise").doc(uid).set(data).then(ref => {
         return ref
      }).catch(err => {
         console.log(`ERROR : STORE : entreprise : entrepriseActions : UPDATE_ENTREPRISE : ${err}`);
         throw new Error(err)
      })
   },
}