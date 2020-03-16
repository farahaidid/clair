import { db } from "../../firebase/firebaseConfig"

export default {
  async FETCH_CLIENTS({commit}){
    return await db.collection("clients").get().then(snapshot => {
      console.log("snapshot", snapshot)
      if(!snapshot.empty){
        let emps = snapshot.docs.map(doc => Object.assign({id: doc.id},doc.data()) )
        commit("SET_CLIENTS", emps)

        console.log("emps", emps);
        return emps
      }
      return []
    }).catch(err => {
      console.log(`ERROR : STORE : clients : clientsActions : FETCH_CLIENTS : ${err}`);
      return []
    })
  },
  async ADD_CLIENTS({}, data){
    return await db.collection("clients").add(data).then(ref => {
      return ref
    }).catch(err => {
      console.log(`ERROR : STORE : clients : clientsActions : ADD_CLIENTS : ${err}`);
      throw new Error(err)
    })
  },
  async UPDATE_CLIENTS({}, data){
    if(!data.id) return
    let obj = Object.assign({},data)
    delete obj.id
    return await db.collection("clients").doc(data.id).update(data).then(ref => {
      return ref
    }).catch(err => {
      console.log(`ERROR : STORE : clients : clientsActions : UPDATE_CLIENTS : ${err}`);
      throw new Error(err)
    })
  },
  async DELETE_CLIENTS({}, data){
    if(!data.id) return
    return await db.collection("clients").doc(data.id).delete().then(ref => {
      return ref
    }).catch(err => {
      console.log(`ERROR : STORE : clients : clientsActions : DELETE_CLIENTS : ${err}`);
      throw new Error(err)
    })
  }
}
