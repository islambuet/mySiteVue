<template>
  <div>
    <div v-if="$system_variables.status_task_loaded == 1">
      <a-card>
       
        
          <table class="">
            <colgroup>
              <col style="width: 20%; min-width: 20%" />              
              <col />
            </colgroup>
            
            <tbody class="ant-table-tbody">
              <tr>
                <td><strong>Email</strong></td>
                <td>shaiful@shaiful.me</td>
              </tr>
              <tr>
                <td><strong>Job Experience</strong></td>
                <td>
                  DISB Solution (Pvt.) Ltd (February 2016 – October 2020) <br>
                  Soft BD Ltd (May 2014 – January 2016) <br>
                  Boo2 (February 2013 - April 2014) <br>
                  Technovilla solutions limited (March 2011 - December 2012)
                </td>
              </tr>
              <tr>
                <td><strong>Programing</strong></td>
                <td>
                  <strong>Current</strong> <br>                  
                    •	Frontend :vue.js <br>
                    •	Backend; Codeigniter-3/Laravel8 <br>
                    •	Language: PHP <br>
                    •	Database: Mysql <br>
                  <strong>Previous</strong> <br>                      
                    •	Android development <br>
                    •	Joomla,wordpress <br>
                    •	Slim, Cakephp -3,laravel <br>
                    •	Oracle database with Codeigner-2 framwrok <br>
                    •	Javascipt,jquery <br>
                    •	Java,.Net <br>
                </td>
              </tr>
              <tr>
                <td><strong>Stackoverflow</strong></td>
                <td>
                  <a href="https://stackoverflow.com/users/4184913/shaiful-islam" target="_blank">https://stackoverflow.com/users/4184913/shaiful-islam</a> <br>                  
                </td>
              </tr>
              <tr>
                <td><strong>Github</strong></td>
                <td>
                  <a href="https://github.com/islambuet/" target="_blank">https://github.com/islambuet/</a> <br>                  
                </td>
              </tr>
              <tr>
                <td><strong>Freelancing Profiles</strong></td>
                <td>
                  <a href="https://www.freelancer.com/u/amieshaiful.html" target="_blank">https://www.freelancer.com/u/amieshaiful.html</a> <br>
                  <a href="https://www.upwork.com/o/profiles/users/_~017cac0de1e5bbb2bd" target="_blank">https://www.upwork.com/o/profiles/users/_~017cac0de1e5bbb2bd</a>
                </td>
              </tr>
            </tbody>
          </table>
          
      </a-card>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutMe",
  props: {
    msg: String,
  },
  mounted: function () {
    this.$system_variables.status_task_loaded = 1;
    this.$system_variables.status_data_loaded = 1;
    this.$system_functions.set_page_title(this.$system_functions.get_label('label_about_me'));
  },
  data() {
    return {
      columns: [
        { title: "Name", dataIndex: "name" },
        {
          title: "Link",
          dataIndex: "link",
          scopedSlots: { customRender: "name" },
        },
        { title: "Resource", dataIndex: "resource" },
        { title: "Descriptoin", dataIndex: "descriptoin" },
      ],
      data: [
        {
          name: "Larvel",
          link: "https://laravel.shaiful.me",
          resource: "Laravel",
          descriptoin: "Laravel Demo",
        },
        {
          name: "Facebook API",
          link: "https://fb.shaiful.me ",
          resource: "Vue.js,Facebook API",
          descriptoin: "Facebook API Demo",
        },
        {
          name: "Nasa API",
          link: "https://vuenasa.shaiful.me  ",
          resource: "Vue.js. Nasa API",
          descriptoin: "Nasa API Demo",
        },
      ],
    };
  },
  methods: {},
};
</script>
