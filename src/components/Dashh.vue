<template>
<div id="dashboard">
<ul class="collection with-header">
<li class="collection-header">
<h4>Employee
</h4>
</li>

</ul>

<div class="btn">

<router-link to="/new" class="btn-floating btn-large red">
</router-link>

</div>
</div>
</template>

<script>
import db from './firebaseInit'
export default {

        name: 'dashboard',
        data() {
        return {
        employes: []
        }
        },
        created () {
        db.collection('employes').get().then
        (querySnapshot => {
        querySnapshot.forEach(doc => {
        console.log(doc.data());
        const data = {
        'id' : doc.id,
        'emp_id' : doc.data().emp_id,
        'nom' : doc.data().nom,
        'job' : doc.data().job
        }
        this.employes.push(data)
        
        })
        })
   }     
   
}

</script>