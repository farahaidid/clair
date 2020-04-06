<template>
<div></div>
</template>
<script>
import {fb} from "@/firebase/firebaseConfig"
export default {
  computed: {
    firebaseUser(){
      return fb.auth().currentUser || null
    },
    firebaseUserId(){
      return this.firebaseUser.uid || null
    }
  }
}
</script>