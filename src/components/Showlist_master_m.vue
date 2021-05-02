
<template>
<div><br/><br/><br/><br/>
 <h3>{{data1.name}} ประจำปี {{data1.year}} <br>ประจำเดือน {{data1.month}} ครั้งที่ {{data1.time}}</h3>
 <h4>ประเภท อาวุโส(ชาย)</h4>
   <br/><br/>
   <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">ประเภทที่ลงสมัคร</th>
      <th scope="col">ชื่อ-นามสกุล(ภาษาไทย)</th>
      <th scope="col">ชื่อ-นามสกุล(ภาษาอังกฤษ)</th>
      <th scope="col">เชื้อชาติ/สัญชาติ</th>
      <th scope="col">อายุ</th>
      <th scope="col">เบอร์โทร</th>
      <th scope="col">อีเมล</th>
      <th scope="col">ปืนที่ใช้ในการแข่ง</th>
    </tr>
  </thead>
  <tbody >
   
      <tr v-for="(master_man,index) in data1.namelist.master_man" :key="index">
        <th scope="row">{{index}}</th>
        <td>{{master_man.competitiontype1}}</td>
        <td>{{master_man.nameth_1}}&nbsp;&nbsp;{{master_man.nameth_2}}</td>
        <td>{{master_man.nameeng_1}}&nbsp;&nbsp;{{master_man.nameeng_2}}</td>
        <td>{{master_man.nationality}}/{{master_man.nationality2}}</td>
        <td>{{master_man.age}}</td>
        <td>{{master_man.phone}}</td>
        <td>{{master_man.email}}</td>
        <td>
          {{master_man.gun_name1}}&nbsp;{{master_man.gun_number1}}
          {{master_man.gun_name2}}&nbsp;{{master_man.gun_number2}}
          {{master_man.gun_name3}}&nbsp;{{master_man.gun_number3}}
        </td>
      </tr>
    
    
  </tbody>
</table>



</div>
    
   


</template>
<script>
import firestore from "@/database/firebase"
var database = firestore.database()
var contactRef = database.ref('/contacts')

export default {
  name: 'showlist5',
  data () {
    return {
      contacts: {},
       data: this.$route.params.data,
       data1: this.$route.params.data1,
       data2: this.$route.params.data1,
    }  
  },
  

  methods: {
    
    
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
  margin: 0 ;
}
a {
  color: rgb(64, 6, 158);
}
h3{
  
  font-weight: 100;
  text-align: center;
  color: rgb(18, 123, 131)
}
h4{
   text-align: center;
  color: rgb(24, 182, 169)
}
div{
  padding: 20px ;
  text-align:left;
}
button{
  background-color: cornsilk;
  color: rgb(64, 6, 158);
  margin: 1px;
}
input{
  width: 100%;
}
.dt-2   {
  margin: 0;
  width: 10cm;
  
}
p{
  color: crimson;
  font-size: 15px;
}

</style>
