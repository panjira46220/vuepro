<template>
  <div class="addtype"><br><br><br><br>
  <div class="dt-1">
    <h3>{{data1.name}} ประจำปี {{data1.year}} <br>ประจำเดือน {{data1.month}} ครั้งที่ {{data1.time}}</h3>
   </div>  
    <!-- Button trigger modal -->
    <!-- <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal" style="width:5cm ">
      + Add 
    </button>-->

  <!-- Modal -->
<!--<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered modal-lg">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Competition type</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <input type="text"  class="form-control" v-model="kind" placeholder="Competition Type">
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary"  data-dismiss="modal" @click="insertToContact(kind,data)">Save</button>
      </div>
    </div>
  </div>
</div> -->
      <br><br>
    <div class="dt-2">
      <b-card no-body>
          <b-tabs pills card vertical nav-wrapper-class="w-50">
            <!-- <ul v-for="(normal_man,index) in data1.normal_man" :key="index"><li><router-link class="nav-link" :to="{name:'showlist',params:{data:data,data1:data1,data2:'normal_man'}}">{{normal_man}}</router-link></li></ul> -->
            <b-tab title="ชาย(ทั่วไป)" active><b-card-text>
              <ul>
                <li><router-link class="nav-link" :to="{name:'showlist',params:{data:data,data1:data1,data2:'normal_man'}}">รายชื่อ</router-link></li>
              </ul></b-card-text></b-tab>

            <b-tab title="หญิง(ทั่วไป)"><b-card-text>
              <ul >
                <li><router-link class="nav-link" :to="{name:'showlist2',params:{data:data,data1:data1,data2:'normal_woman'}}">รายชื่อ</router-link></li>
              </ul></b-card-text></b-tab>

            <b-tab title="เยาวชน(ชาย)"><b-card-text>
              <ul >
                <li><router-link class="nav-link" :to="{name:'showlist3',params:{data:data,data1:data1,data2:'junior_man'}}">รายชื่อ</router-link></li>
              </ul></b-card-text></b-tab>

            <b-tab title="เยาวชน(หญิง)"><b-card-text>
              <ul >
                <li><router-link class="nav-link" :to="{name:'showlist4',params:{data:data,data1:data1,data2:'junior_woman'}}">รายชื่อ</router-link></li>
              </ul></b-card-text></b-tab>

            <b-tab title="อาวุโส(ชาย)"><b-card-text>
              <ul >
                <li><router-link class="nav-link" :to="{name:'showlist5',params:{data:data,data1:data1,data2:'master_man'}}">รายชื่อ</router-link></li>
              </ul></b-card-text></b-tab>

            <b-tab title="อาวุโส(หญิง)"><b-card-text>
              <ul >
                <li><router-link class="nav-link" :to="{name:'showlist6',params:{data:data,data1:data1,data2:'master_woman'}}">รายชื่อ</router-link></li>
              </ul></b-card-text></b-tab>

          </b-tabs>
      </b-card>
    </div>
<!--        
        <h5>ชาย(ทั่วไป)</h5>{{data1.normal_man}}  <br><br>
        <h5>หญิง(ทั่วไป)</h5>  {{data1.normal_woman}}  <br><br>
        <h5>เยาวชน(ชาย)</h5>{{data1.junior_man}}<br><br>
       <h5>เยาวชน(หญิง)</h5>{{data1.junior_woman}} <br><br>
       <h5>อาวุโส(ชาย)</h5>{{data1.master_man}} <br><br>
      <h5>อาวุโส(หญิง)</h5> {{data1.master_woman}} <br><br> -->
     

    
  </div>
</template>
<script>
import firestore from "@/database/firebase"
var database = firestore.database()
var contactRef = database.ref('/contacts')


export default {
  name: "AddType",
  data(){
      return{
         data: this.$route.params.data,
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