<!-- =========================================================================================
    File Name: Clipboard.vue
    Description: Clipboard demo
    ----------------------------------------------------------------------------------------
    Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
  
    <div id="basic-card"><br>
    
        <vs-button type="relief" size="large" >
		<h2><font color="white">Microentrepreneur</font></h2>
		</vs-button> <br><br><br>
   
        <vs-button type="relief" size="large">
			<h2><font color="white">Profession Liberale (BNC)</font></h2>
		</vs-button> <br><br><br>
        
    
      <vs-button type="relief" size="large">
			<h2><font color="white">Declaration TVA</font></h2>
		</vs-button> <br><br><br>
        
        
        
        <vs-button type="relief" size="large">
			<h2><font color="white">Declaration Sociale (DSI)</font></h2>
		</vs-button> <br><br><br>
        
        <clipboard-ac></clipboard-ac>
    </div>
</template>

<script>
import ClipboardAC from './ClipboardAC.vue'

export default{
    components: {
        ClipboardAC
    }
}
</script>
