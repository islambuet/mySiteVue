<template>
  <div>
      <div v-if="$system_variables.status_task_loaded==1">
        <a-card>
          <a-table :columns="columns" :data-source="data" :pagination="false">
            <a slot="name" slot-scope="text" :href="text" target="_blank">{{ text }}</a>
          </a-table>
        </a-card>
        
      </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  props: {
    msg: String
  },
  mounted:function()
  {
      this.$system_variables.status_task_loaded=1;  
      this.$system_variables.status_data_loaded=1;  
      this.$system_functions.set_page_title(this.$system_functions.get_label('label_site_title')); 
           
  },
  data() {
    return {
      columns: [{title: 'Name',dataIndex: 'name'},{title: 'Link',dataIndex: 'link',scopedSlots: { customRender: 'name' }},{title: 'Resource',dataIndex: 'resource'},{title: 'Descriptoin',dataIndex: 'descriptoin'}],
      data:[{name: 'Laravel','link':'https://laravel.shaiful.com.bd',resource:"Laravel",descriptoin:"Laravel Demo"},
        {name: 'vueLaravel','link':'http://vue.laravel8.shaiful.com.bd/ ',resource:"Vue.js+laravel8",descriptoin:"Api communication with Laravel8"},
        {name: 'vueSqlite','link':'http://vuesqlite.shaiful.com.bd/ ',resource:"Vue.js",descriptoin:"Sqlite Database.No server Language"},
        {name: 'Nasa API','link':'https://vuenasa.shaiful.com.bd  ',resource:"Vue.js. Nasa API",descriptoin:"Nasa API Demo"},
      ]
      
    }
  },
  methods: {    
    
    
    
  },
}
</script>
