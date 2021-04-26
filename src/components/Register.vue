<template>
  <div class="register"><br><br><br><br>
  <div class="re-1">
    <h3>{{data1.name}} ประจำปี {{data1.year}} <br>ประจำเดือน {{data1.month}} ครั้งที่ {{data1.time}}</h3>
   </div>  
    
      <br><br>
    <div class="dt-2">
      <b-card no-body>
          <b-tabs pills card vertical nav-wrapper-class="w-50">

            <b-tab title="ชาย(ทั่วไป)" active>
              <b-card-text>
                <ul> 
                  <li><router-link class="nav-link" :to="{name:'form_normal_m',params:{data:s_data,data1:data1,data2:normal_man}}">ลงสมัคร</router-link></li>
                </ul></b-card-text></b-tab>

            <b-tab title="หญิง(ทั่วไป)">
              <b-card-text>
                <ul> 
                  <li><router-link class="nav-link" :to="{name:'form_normal_wm',params:{data:s_data,data1:data1,data2:normal_woman}}">ลงสมัคร</router-link></li>
                </ul></b-card-text></b-tab>

            <b-tab title="เยาวชน(ชาย)">
              <b-card-text>
                <ul>
                  <li><router-link class="nav-link" :to="{name:'form_junior_m',params:{data:s_data,data1:data1,data2:junior_man}}">ลงสมัคร</router-link></li>
                  </ul></b-card-text></b-tab>

            <b-tab title="เยาวชน(หญิง)">
              <b-card-text>
                <ul>
                  <li><router-link class="nav-link" :to="{name:'form_junior_wm',params:{data:s_data,data1:data1,data2:junior_woman}}">ลงสมัคร</router-link></li>
                  </ul></b-card-text></b-tab>

            <b-tab title="อาวุโส(ชาย)">
              <b-card-text>
                <ul>
                  <li><router-link class="nav-link" :to="{name:'form_master_m',params:{data:s_data,data1:data1,data2:master_man}}">ลงสมัคร</router-link></li>
                  </ul></b-card-text></b-tab>

            <b-tab title="อาวุโส(หญิง)">
              <b-card-text>
                <ul >
                  <li><router-link class="nav-link" :to="{name:'form_master_wm',params:{data:s_data,data1:data1,data2:master_woman}}">ลงสมัคร</router-link></li>
                  </ul></b-card-text></b-tab>
          </b-tabs>
      </b-card>
    </div>

    
  </div>
</template>
<script>
import firestore from "@/database/firebase"
var database = firestore.database()
var contactRef = database.ref('/contacts')


export default {
  name: "addregister",
  data(){
      return{
         s_data: this.$route.params.data,
         data1: this.$route.params.data1,
         contacts: {},
         kind: '',
         data2:'',
      }
  },
  methods: {
    insertToContact (kind,data) {
      let data2 = {
        kind: kind,
      }
        contactRef.child(data).push(data2)
         this.kind = '' 
    },
    
  },
  mounted () {
   contactRef.on('value', (snapshot) => {
      this.contacts = snapshot.val()
    })
  },
}
</script>
<style scoped>

ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: rgb(64, 6, 158);
}
h1{
 
  font-weight: 100;
  text-align: center;
  color: rgb(64, 6, 158);
}
div{
  padding: 20px ;
}
button{
  background-color: cornsilk;
  color: rgb(64, 6, 158);
}
.dt-1{
  text-align: center;
}
</style>