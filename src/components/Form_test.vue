<template>
<div class="b0x-1"><br><br><br>
    <b-img src="https://campus.campus-star.com/app/uploads/2019/12/songkla.png" fluid alt="Responsive image"  width="200px" center></b-img>
    <h1>ลงทะเบียนการแข่งขัน</h1>
    <h3>กรุณากรอกข้อมูลของท่านให้ถูกต้องครบถ้วน เพื่อใช้ในการลงทะเบียน</h3>
  <div class="box-2">
      <b-form-group id="input-group-1" label="ชื่อ-นามสกุล(ภาษาไทย):" label-for="input-1" description="">
      <b-row><b-col sm="6">
        <b-form-input
          id="input-1"
          v-model="nameth_1"
          type="nameth_1"
          required
          placeholder="ชื่อภาษาไทย"
        >
        </b-form-input></b-col>
      <b-col sm="6"><b-form-input
          id="input-2"
          v-model="nameth_2"
          type="nameth_2"
          required
          placeholder="นามสกุลภาษาไทย"
        >
        </b-form-input></b-col>
      </b-row>
      </b-form-group>

      <b-form-group id="input-group-2" label="ชื่อ-นามสกุล(ภาษาอังกฤษ):" label-for="input-2">
        <b-row><b-col sm="6">
        <b-form-input
          id="input-3"
          v-model="nameeng_1"
          type="nameeng_1"
          required
          placeholder="ชื่อภาษาอังกฤษ"
        >
        </b-form-input></b-col>
      <b-col sm="6"><b-form-input
          id="input-4"
          v-model="nameeng_2"
          type="nameeng_2"
          required
          placeholder="นามสกุลภาษาอังกฤษ"
        >
        </b-form-input></b-col>
      </b-row>
      </b-form-group>
  
  <!-- เชื้อขาติ สัญชาติ เกิดวันที่ เดือน พ.ศ. อายุ -->
      <b-row><b-col sm="3">
        
        <b-form-group id="input-group-3" label="เชื้อชาติ:" label-for="input-3">
          <b-form-input
          id="input-5"
          v-model="nationality"
          type="nationality"
          required
          placeholder="เชื้อชาติ"
        ></b-form-input>
        </b-form-group>
    
        </b-col>
        <b-col sm="3">

          <b-form-group id="input-group-4" label="สัญชาติ:" label-for="input-4">
          <b-form-input
          id="input-6"
          v-model="nationality2"
          type="nationality2"
          required
          placeholder="สัญชาติ"
        ></b-form-input>
        </b-form-group>

        </b-col>
        <b-col sm="3">

          <b-form-group id="input-group-5" label="อายุ:" label-for="input-5">
          <b-form-input
          id="input-7"
          v-model="age"
          type="age"
          required
          placeholder="กรุณากรอกข้อมูลเป็นตัวเลข"
        ></b-form-input>
        </b-form-group>
        </b-col>
      </b-row>


<!--  เบอร์โทร อีเมล -->
      
      <b-row><b-col sm="3">
        
        <b-form-group id="input-group-6" label="เบอร์โทร:" label-for="input-6">
          <b-form-input
          id="input-8"
          v-model="phone"
          type="phone"
          required
          placeholder="กรุณากรอกเป็นตัวเลข"
        ></b-form-input>
        </b-form-group>
    
        </b-col>
        <b-col sm="3">

          <b-form-group id="input-group-7" label="อีเมล:" label-for="input-7">
          <b-form-input
          id="input-7"
          v-model="email"
          type="email"
          required
          placeholder="อีเมลที่สามารถติดต่อได้"
        ></b-form-input>
        </b-form-group>
        </b-col>
      </b-row>
      
      <!-- ปืนที่ใช้ -->
      <b-form-group id="input-group-8" label="ปืนที่ใช้ในการแข่งขัน:" label-for="input-8">
       <b-row><b-col sm="3">
          <b-form-input
          id="input-9"
          v-model="gun_name1"
          type="gun_name1"
          required
          placeholder="ยี่ห้อ"
        ></b-form-input></b-col>
        <b-col sm="3">
        <b-form-input
          id="input-10"
          v-model="gun_number1"
          type="gun_number1"
          required
          placeholder="หมายเลขปืน"
        ></b-form-input>
        </b-col>
      </b-row>

      <b-row>
        <b-col sm="3">
          <b-form-input
          id="input-10"
          v-model="gun_name2"
          type="gun_name2"
          required
          placeholder="ยี่ห้อ"
        ></b-form-input></b-col>
        <b-col sm="3">
        <b-form-input
          id="input-11"
          v-model="gun_number2"
          type="gun_number2"
          required
          placeholder="หมายเลขปืน"
        ></b-form-input>
        </b-col>
      </b-row>
      
      <b-row>
        <b-col sm="3">
          <b-form-input
          id="input-10"
          v-model="gun_name3"
          type="gun_name3"
          required
          placeholder="ยี่ห้อ"
        ></b-form-input></b-col>
        <b-col sm="3">
        <b-form-input
          id="input-11"
          v-model="gun_number3"
          type="gun_number3"
          required
          placeholder="หมายเลขปืน"
        ></b-form-input>
        </b-col>
      </b-row>
      </b-form-group>

      <!-- ประเภทการแข่งขัน -->
      <b-form-group id="input-group-7" label="ประเภทที่สมัครแข่งขัน:" label-for="input-9">
          <b-form-select
          id="input-12"
          v-model="competitiontype"
          :options="competitiontypes"
          required
        ></b-form-select>
        </b-form-group>



      <b-button type="submit" variant="primary"  @click="insertToContact(nameth_1,nameth_2,nameeng_1,nameeng_2,nationality,nationality2,age, phone,email,gun_name1,gun_number1,gun_name2, gun_number2,gun_name3,gun_number3)">Submit</b-button>
       

    <!-- <b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ form }}</pre>
    </b-card> -->
  </div>
  </div>
</template>

<script>

import firestore from "@/database/firebase"
var database = firestore.database()
var registerRef = database.ref('/Register')

  export default {
    data() {
      return {
          registe:{},
          nameth_1: '',
          nameth_2: '',
          nameeng_1: '',
          nameeng_2: '',
          nationality: '',
          nationality2:'',
          age: '',
          phone: '',
          email: '',
          gun_name1: '',
          gun_number1: '',
          gun_name2: '',
          gun_number2: '',
          gun_name3: '',
          gun_number3: '',
          show: true,
          competitiontype: null,
          competitiontypes: [{ text: 'Select One', value: null }, ],
      }
    },
    methods: {
      
      insertToContact (nameth_1,nameth_2,nameeng_1,nameeng_2,nationality,nationality2,age, phone,email,gun_name1,gun_number1,gun_name2, gun_number2,gun_name3,gun_number3) {
      let data = {
          nameth_1:nameth_1,
          nameth_2:nameth_2,
          nameeng_1:nameeng_1,
          nameeng_2:nameeng_2,
          nationality:nationality,
          nationality2:nationality2,
          age:age,
          phone:phone,
          email:email,
          gun_name1:gun_name1,
          gun_number1:gun_number1,
          gun_name2:gun_name2,
          gun_number2:gun_number2,
          gun_name3:gun_name3,
          gun_number3:gun_number3,
      }
      registerRef.push(data)
          this.nameth_1 =  ''
          this.nameth_2 = ''
          this.nameeng_1 = ''
          this.nameeng_2 = ''
          this.nationality = ''
          this.nationality2 =''
          this.age = ''
          this.phone = ''
          this.email = ''
          this.gun_name1 = ''
          this.gun_number1 = ''
          this.gun_name2 = ''
          this.gun_number2 = ''
          this.gun_name3 = ''
          this.gun_number3 = ''
    },
    },
    mounted () {
    registerRef.on('value', (snapshot) => {
      this.register = snapshot.val()
    })
  },
  }
</script>
<style scoped>
ิ
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
h3{
   text-align: center;
}
h1{
  
  font-weight: 100;
  text-align: center;
  color: rgb(0, 38, 94)
}
div{
  padding: 10px ;
}
button{
  background-color: cornsilk;
  color: rgb(64, 6, 158);
  margin-left: 50%;
  margin-right: 50%;

}
.box-2{
  border: 2px solid; 
  margin: 2% 5% 2% 5%;
  }

</style>