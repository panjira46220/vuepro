<template>
<div><br/><br/><br/><br/>
 <h3>{{data1.name}} ประจำปี {{data1.year}} <br>ประจำเดือน {{data1.month}} ครั้งที่ {{data1.time}}</h3>
 <h4>ประเภท เยาวชน(หญิง)</h4>
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
   
      <tr v-for="(junior_woman,index) in data1.namelist.junior_woman" :key="index">
        <th scope="row">{{index}}</th>
        <td>{{junior_woman.competitiontype1}}</td>
        <td>{{junior_woman.nameth_1}}&nbsp;&nbsp;{{junior_woman.nameth_2}}</td>
        <td>{{junior_woman.nameeng_1}}&nbsp;&nbsp;{{junior_woman.nameeng_2}}</td>
        <td>{{junior_woman.nationality}}/{{junior_woman.nationality2}}</td>
        <td>{{junior_woman.age}}</td>
        <td>{{junior_woman.phone}}</td>
        <td>{{junior_woman.email}}</td>
        <td>
          {{junior_woman.gun_name1}}&nbsp;{{junior_woman.gun_number1}}
          {{junior_woman.gun_name2}}&nbsp;{{junior_woman.gun_number2}}
          {{junior_woman.gun_name3}}&nbsp;{{junior_woman.gun_number3}}
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
  name: 'showlist4',
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
