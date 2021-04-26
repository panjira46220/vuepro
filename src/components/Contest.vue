<template>
  <div class="show"><br><br><br><br>
    <h1>Contest</h1>
    <br><br>
    <div class="dt-1">
      <div :key="key" v-for="(contact, key) in contacts">
        <div class="dt-2">
        <b-card bg-variant="info" text-variant="white" title=""  >
           <b-card-text>
             <p>{{contact.name}} ประจำปี {{contact.year}} ประจำเดือน {{contact.month}} ครั้งที่ {{contact.time}}</p>
          </b-card-text>
          <router-link :to="{name:'addregister',params:{data:key,data1:contact}}"><b-button  variant="light">ลงทะเบียน</b-button></router-link>
         
        </b-card>
        <br>
      </div>
      </div>
      </div>
  </div>
  
</template>
<script>
import firestore from "@/database/firebase"

var database =  firestore.database()
var contactRef = database.ref('/contacts')
export default {
  name: 'AddContest',
  data () {
    return {
      contacts: {},
      name: '',
     
    }
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
  margin: 0 px;
}


h1{
  margin: 10px;
  font-weight: 100;
  text-align: center;
  color: rgb(0, 38, 94)
}
.dt-1{
  max-width: 1600px;
  margin-left: 8%;
  margin-right: 7%;
}
.dt-2{
  align-items: center;
}
</style>






