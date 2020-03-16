<template lang="html">
  
  <div>
    <h4>Emails importes depuis votre boite :</h4><br>
    Vous pouvez selectionner manuellement les factures qui n'ont pas ete importees.<br><br>
    
      <vs-table stripe :data="j.data.messages">
      <template slot="header">
      <br>
      </template>
    	<template slot="thead" width="100%" style="width:100%">
  			<vs-th>Nom</vs-th>
  			<vs-th>Message</vs-th>
  			<vs-th>Date</vs-th>
		</template>

      <tbody slot-scope="{data}">
        <vs-tr :key="indextr" v-for="(tr, indextr) in data" >
          <vs-td :data="data[indextr].id">
            {{data[indextr].id}}
          </vs-td>

          <vs-td :data="data[indextr].threadId">
            {{data[indextr].threadId}}
          </vs-td>

          <vs-td :data="data[indextr].date">
            {{data[indextr].date}}
          </vs-td>

        </vs-tr>
      </tbody>
    </vs-table>
  </div>
</template>
<script>
import json from "../response.json";
export default {
  data() {
    return {
      users: [
        {
          id: 1,
			threadId:'asd',
            date:'asd'
		}

      ],
      j: json
    };
  },
  computed: {
    // eslint-disable-nextc-line vue/return-in-computed-property
    // eslint-disable-next-line vue/return-in-computed-property
    getResponse() {
      console.log(this.j);
    }
  },
  watch: {
    getResponse() {}
  }
};
</script> 