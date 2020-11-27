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
           
  },
  data() {
    return {
      columns: [{title: 'Name',dataIndex: 'name'},{title: 'Link',dataIndex: 'link',scopedSlots: { customRender: 'name' }},{title: 'Resource',dataIndex: 'resource'},{title: 'Descriptoin',dataIndex: 'descriptoin'}],
      data:[{name: 'Laravel','link':'https://laravel.shaiful.me',resource:"Laravel",descriptoin:"Laravel Demo"},
        {name: 'Facebook API','link':'https://fb.shaiful.me ',resource:"Vue.js,Facebook API",descriptoin:"Facebook API Demo"},
        {name: 'Nasa API','link':'https://vuenasa.shaiful.me  ',resource:"Vue.js. Nasa API",descriptoin:"Nasa API Demo"},
      ]
      
    }
  },
  methods: {    
    
    
    
  },
}
</script>
