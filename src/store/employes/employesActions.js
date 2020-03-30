import { db } from "../../firebase/firebaseConfig"

export default {
   async FETCH_EMPLOYES({ commit }) {
      return await db.collection("employes").get().then(snapshot => {
         if (!snapshot.empty) {
            let emps = snapshot.docs.map(doc => Object.assign({ id: doc.id }, doc.data()))
            commit("SET_EMPLOYES", emps)
            return emps
         }
         return []
      }).catch(err => {
         console.log(`ERROR : STORE : employes : employesActions : FETCH_EMPLOYES : ${err}`);
         return []
      })
   },
   async ADD_EMPLOYEE({ }, data) {
      return await db.collection("employes").add(data).then(ref => {
         return ref
      }).catch(err => {
         console.log(`ERROR : STORE : employes : employesActions : ADD_EMPLOYEE : ${err}`);
         throw new Error(err)
      })
   },
   async UPDATE_EMPLOYEE({ }, data) {
      if (!data.id) return
      let obj = Object.assign({}, data)
      delete obj.id
      return await db.collection("employes").doc(data.id).update(data).then(ref => {
         return ref
      }).catch(err => {
         console.log(`ERROR : STORE : employes : employesActions : UPDATE_EMPLOYEE : ${err}`);
         throw new Error(err)
      })
   },
   async DELETE_EMPLOYEE({ }, data) {
      if (!data.id) return
      return await db.collection("employes").doc(data.id).delete().then(ref => {
         return ref
      }).catch(err => {
         console.log(`ERROR : STORE : employes : employesActions : DELETE_EMPLOYEE : ${err}`);
         throw new Error(err)
      })
   }
}