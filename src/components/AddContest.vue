<template>
  <div class='hello'><br><br><br><br>
  
    <h1>การจัดการการแข่งขันยิงปืน</h1>
    <br>

<!-- Button trigger modal -->
<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal" style="width:3cm ">
  + Add
</button>

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered modal-lg">
    <div class="modal-content">
      <div class="modal-header">
        <h3 class="modal-title" id="exampleModalLabel">Add Contest</h3>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <h5>ชื่อการแข่งขัน</h5>
        <b-form class="form1">
        <b-form-group id="input-group-1" label=" Contest Name : ชื่อการแข่งขัน" label-for="input-1">
        <b-form-input
          id="input-1"
          v-model="name"
          type="contest name"
          required
          placeholder=" เช่น การแข่งขันกีฬาชิงชนะเลิศสมาคมกีฬายิงปืนแห่งประเทศไทย ในพระบรมราชูปถัมภ์ "
        ></b-form-input>
      </b-form-group>
      
      <b-form-group id="input-group-2" label="Year : ประจำปี" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="year"
          required
          placeholder="เช่น 2563  "
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="Month : เดือน" label-for="input-3">
        <b-form-select
          id="input-3"
          v-model="month"
          :options="months"
          required
        ></b-form-select>
      </b-form-group> 

      <b-form-group id="input-group-4" label="Time : ครั้งที่" label-for="input-4">
        <b-form-input
          id="input-4"
          v-model="time"
          required
          placeholder="เช่น  1  "
        ></b-form-input>
      </b-form-group>
      
       </b-form>

      <b-form class="kind">
      <h5>ประเภทการแข่งขัน</h5>
        <b-form-group id="kind-1" label="ทั่วไป (ชาย)" label-for="kind_1">
        <b-form-checkbox-group v-model="normal_man" id="normal_1">
            <b-form-checkbox value="ไม่มี(None)">ไม่มี(None)</b-form-checkbox>
            <b-form-checkbox value="ปืนยาวท่านอน(50 M. Rifle Prone)" >ปืนยาวท่านอน(50 M. Rifle Prone)</b-form-checkbox>
            <b-form-checkbox value="ปืนยาวอัดลม(10 M. Air RiFle)" >ปืนยาวอัดลม(10 M. Air Rifle)</b-form-checkbox>
            <b-form-checkbox value="ปืนยาว 3 ท่า(50 M. Rifle 3 Position)" >ปืนยาว 3 ท่า(50 M. Rifle 3 Position)</b-form-checkbox>
            <b-form-checkbox value="ปืนสั้นอัดลม(10 M. Air Pistol)" >ปืนสั้นอัดลม(10 M. Air Pistol)</b-form-checkbox>
            <b-form-checkbox value="ปืนสั้นยิงเร็ว(25 M. Rapid Fire Pistol)" >ปืนสั้นยิงเร็ว(25 M. Rapid Fire Pistol)</b-form-checkbox>
            <b-form-checkbox value="ปืนสั้นยิงช้า(50 M. Pistol)" >ปืนสั้นยิงช้า(50 M. Pistol)</b-form-checkbox>
            <b-form-checkbox value="ปืนสั้น(25 M. Pistol)" >ปืนสั้น(25 M. Pistol)</b-form-checkbox>
            <b-form-checkbox value="ปืนสั้นมาตรฐาน(25 M. Standard Pistol)" >ปืนสั้นมาตรฐาน(25 M. Standard Pistol)</b-form-checkbox>
            <b-form-checkbox value="ปืนสั้นชนวนกลาง(25 M. Center Fire Pistol)" >ปืนสั้นชนวนกลาง(10 M. Center Fire Pistol)</b-form-checkbox>
        
            <b-form-checkbox value="ไม่มี(None)" >ไม่มี(None)</b-form-checkbox>
            <b-form-checkbox value="ปืนยาวท่านอน(50 M. Rifle Prone)" >ปืนยาวท่านอน(50 M. Rifle Prone)</b-form-checkbox>
            <b-form-checkbox value="ปืนยาวอัดลม(10 M. Air RiFle)" >ปืนยาวอัดลม(10 M. Air Rifle)</b-form-checkbox>
            <b-form-checkbox value="ปืนยาว 3 ท่า(50 M. Rifle 3 Position)" >ปืนยาว 3 ท่า(50 M. Rifle 3 Position)</b-form-checkbox>
            <b-form-checkbox value="ปืนสั้นอัดลม(10 M. Air Pistol)" >ปืนสั้นอัดลม(10 M. Air Pistol)</b-form-checkbox>
            <b-form-checkbox value="ปืนสั้นยิงเร็ว(25 M. Rapid Fire Pistol)" >ปืนสั้นยิงเร็ว(25 M. Rapid Fire Pistol)</b-form-checkbox>
            <b-form-checkbox value="ปืนสั้นยิงช้า(50 M. Pistol)" >ปืนสั้นยิงช้า(50 M. Pistol)</b-form-checkbox>
            <b-form-checkbox value="ปืนสั้น(25 M. Pistol)" >ปืนสั้น(25 M. Pistol)</b-form-checkbox>
            <b-form-checkbox value="ปืนสั้นมาตรฐาน(25 M. Standard Pistol)" >ปืนสั้นมาตรฐาน(25 M. Standard Pistol)</b-form-checkbox>
            <b-form-checkbox value="ปืนสั้นชนวนกลาง(25 M. Center Fire Pistol)" >ปืนสั้นชนวนกลาง(10 M. Center Fire Pistol)</b-form-checkbox>
        
        </b-form-checkbox-group>
      </b-form-group>

      <b-form-group id="kind-2" label="ทั่วไป (หญิง)" label-for="kind_2">
        <b-form-checkbox-group v-model="normal_woman" id="normal_2">
          <b-form-checkbox value="ไม่มี(None)">ไม่มี(None)</b-form-checkbox>
          <b-form-checkbox value="ปืนยาวท่านอน(50 M. Rifle Prone)">ปืนยาวท่านอน(50 M. Rifle Prone)</b-form-checkbox>
          <b-form-checkbox value="ปืนยาวอัดลม(10 M. Air RiFle)">ปืนยาวอัดลม(10 M. Air Rifle)</b-form-checkbox>
          <b-form-checkbox value="ปืนยาว 3 ท่า(50 M. Rifle 3 Position)">ปืนยาว 3 ท่า(50 M. Rifle 3 Position)</b-form-checkbox>
          <b-form-checkbox value="ปืนสั้นอัดลม(10 M. Air Pistol)">ปืนสั้นอัดลม(10 M. Air Pistol)</b-form-checkbox>
          <b-form-checkbox value="ปืนสั้นยิงเร็ว(25 M. Rapid Fire Pistol)">ปืนสั้นยิงเร็ว(25 M. Rapid Fire Pistol)</b-form-checkbox>
          <b-form-checkbox value="ปืนสั้นยิงช้า(50 M. Pistol)">ปืนสั้นยิงช้า(50 M. Pistol)</b-form-checkbox>
          <b-form-checkbox value="ปืนสั้น(25 M. Pistol)">ปืนสั้น(25 M. Pistol)</b-form-checkbox>
          <b-form-checkbox value="ปืนสั้นมาตรฐาน(25 M. Standard Pistol)">ปืนสั้นมาตรฐาน(25 M. Standard Pistol)</b-form-checkbox>
          <b-form-checkbox value="ปืนสั้นชนวนกลาง(25 M. Center Fire Pistol)">ปืนสั้นชนวนกลาง(10 M. Center Fire Pistol)</b-form-checkbox>
        </b-form-checkbox-group>
      </b-form-group>

      <b-form-group id="kind-3" label="เยาวชน (ชาย)" label-for="kind_3">
        <b-form-checkbox-group v-model="junior_man" id="normal_3">
          <b-form-checkbox value="ไม่มี(None)">ไม่มี(None)</b-form-checkbox>
          <b-form-checkbox value="ปืนยาวท่านอน(50 M. Rifle Prone)">ปืนยาวท่านอน(50 M. Rifle Prone)</b-form-checkbox>
          <b-form-checkbox value="ปืนยาวอัดลม(10 M. Air RiFle)">ปืนยาวอัดลม(10 M. Air Rifle)</b-form-checkbox>
          <b-form-checkbox value="ปืนยาว 3 ท่า(50 M. Rifle 3 Position)">ปืนยาว 3 ท่า(50 M. Rifle 3 Position)</b-form-checkbox>
          <b-form-checkbox value="ปืนสั้นอัดลม(10 M. Air Pistol)">ปืนสั้นอัดลม(10 M. Air Pistol)</b-form-checkbox>
          <b-form-checkbox value="ปืนสั้นยิงเร็ว(25 M. Rapid Fire Pistol)">ปืนสั้นยิงเร็ว(25 M. Rapid Fire Pistol)</b-form-checkbox>
          <b-form-checkbox value="ปืนสั้นยิงช้า(50 M. Pistol)">ปืนสั้นยิงช้า(50 M. Pistol)</b-form-checkbox>
          <b-form-checkbox value="ปืนสั้น(25 M. Pistol)">ปืนสั้น(25 M. Pistol)</b-form-checkbox>
          <b-form-checkbox value="ปืนสั้นมาตรฐาน(25 M. Standard Pistol)">ปืนสั้นมาตรฐาน(25 M. Standard Pistol)</b-form-checkbox>
          <b-form-checkbox value="ปืนสั้นชนวนกลาง(25 M. Center Fire Pistol)">ปืนสั้นชนวนกลาง(10 M. Center Fire Pistol)</b-form-checkbox>
        </b-form-checkbox-group>
      </b-form-group>

       <b-form-group id="kind-4" label="เยาวชน (หญฺิง)" label-for="kind_4">
        <b-form-checkbox-group v-model="junior_woman" id="normal_4">
          <b-form-checkbox value="ไม่มี(None)">ไม่มี(None)</b-form-checkbox>
          <b-form-checkbox value="ปืนยาวท่านอน(50 M. Rifle Prone)">ปืนยาวท่านอน(50 M. Rifle Prone)</b-form-checkbox>
          <b-form-checkbox value="ปืนยาวอัดลม(10 M. Air RiFle)">ปืนยาวอัดลม(10 M. Air Rifle)</b-form-checkbox>
          <b-form-checkbox value="ปืนยาว 3 ท่า(50 M. Rifle 3 Position)">ปืนยาว 3 ท่า(50 M. Rifle 3 Position)</b-form-checkbox>
          <b-form-checkbox value="ปืนสั้นอัดลม(10 M. Air Pistol)">ปืนสั้นอัดลม(10 M. Air Pistol)</b-form-checkbox>
          <b-form-checkbox value="ปืนสั้นยิงเร็ว(25 M. Rapid Fire Pistol)">ปืนสั้นยิงเร็ว(25 M. Rapid Fire Pistol)</b-form-checkbox>
          <b-form-checkbox value="ปืนสั้นยิงช้า(50 M. Pistol)">ปืนสั้นยิงช้า(50 M. Pistol)</b-form-checkbox>
          <b-form-checkbox value="ปืนสั้น(25 M. Pistol)">ปืนสั้น(25 M. Pistol)</b-form-checkbox>
          <b-form-checkbox value="ปืนสั้นมาตรฐาน(25 M. Standard Pistol)">ปืนสั้นมาตรฐาน(25 M. Standard Pistol)</b-form-checkbox>
          <b-form-checkbox value="ปืนสั้นชนวนกลาง(25 M. Center Fire Pistol)">ปืนสั้นชนวนกลาง(10 M. Center Fire Pistol)</b-form-checkbox>
        </b-form-checkbox-group>
      </b-form-group>

      <b-form-group id="kind-5" label="อาวุโส (ชาย)" label-for="kind_5">
        <b-form-checkbox-group v-model="master_man" id="normal_5">
          <b-form-checkbox value="ไม่มี(None)">ไม่มี(None)</b-form-checkbox>
          <b-form-checkbox value="ปืนยาวท่านอน(50 M. Rifle Prone)">ปืนยาวท่านอน(50 M. Rifle Prone)</b-form-checkbox>
          <b-form-checkbox value="ปืนยาวอัดลม(10 M. Air RiFle)">ปืนยาวอัดลม(10 M. Air Rifle)</b-form-checkbox>
          <b-form-checkbox value="ปืนยาว 3 ท่า(50 M. Rifle 3 Position)">ปืนยาว 3 ท่า(50 M. Rifle 3 Position)</b-form-checkbox>
          <b-form-checkbox value="ปืนสั้นอัดลม(10 M. Air Pistol)">ปืนสั้นอัดลม(10 M. Air Pistol)</b-form-checkbox>
          <b-form-checkbox value="ปืนสั้นยิงเร็ว(25 M. Rapid Fire Pistol)">ปืนสั้นยิงเร็ว(25 M. Rapid Fire Pistol)</b-form-checkbox>
          <b-form-checkbox value="ปืนสั้นยิงช้า(50 M. Pistol)">ปืนสั้นยิงช้า(50 M. Pistol)</b-form-checkbox>
          <b-form-checkbox value="ปืนสั้น(25 M. Pistol)">ปืนสั้น(25 M. Pistol)</b-form-checkbox>
          <b-form-checkbox value="ปืนสั้นมาตรฐาน(25 M. Standard Pistol)">ปืนสั้นมาตรฐาน(25 M. Standard Pistol)</b-form-checkbox>
          <b-form-checkbox value="ปืนสั้นชนวนกลาง(25 M. Center Fire Pistol)">ปืนสั้นชนวนกลาง(10 M. Center Fire Pistol)</b-form-checkbox>
        </b-form-checkbox-group>
      </b-form-group>

       <b-form-group id="kind-6" label="อาวุโส (หญฺิง)" label-for="kind_6">
        <b-form-checkbox-group v-model="master_woman" id="normal_6">
          <b-form-checkbox value="ไม่มี(None)">ไม่มี(None)</b-form-checkbox>
          <b-form-checkbox value="ปืนยาวท่านอน(50 M. Rifle Prone)">ปืนยาวท่านอน(50 M. Rifle Prone)</b-form-checkbox>
          <b-form-checkbox value="ปืนยาวอัดลม(10 M. Air RiFle)">ปืนยาวอัดลม(10 M. Air Rifle)</b-form-checkbox>
          <b-form-checkbox value="ปืนยาว 3 ท่า(50 M. Rifle 3 Position)">ปืนยาว 3 ท่า(50 M. Rifle 3 Position)</b-form-checkbox>
          <b-form-checkbox value="ปืนสั้นอัดลม(10 M. Air Pistol)">ปืนสั้นอัดลม(10 M. Air Pistol)</b-form-checkbox>
          <b-form-checkbox value="ปืนสั้นยิงเร็ว(25 M. Rapid Fire Pistol)">ปืนสั้นยิงเร็ว(25 M. Rapid Fire Pistol)</b-form-checkbox>
          <b-form-checkbox value="ปืนสั้นยิงช้า(50 M. Pistol)">ปืนสั้นยิงช้า(50 M. Pistol)</b-form-checkbox>
          <b-form-checkbox value="ปืนสั้น(25 M. Pistol)">ปืนสั้น(25 M. Pistol)</b-form-checkbox>
          <b-form-checkbox value="ปืนสั้นมาตรฐาน(25 M. Standard Pistol)">ปืนสั้นมาตรฐาน(25 M. Standard Pistol)</b-form-checkbox>
          <b-form-checkbox value="ปืนสั้นชนวนกลาง(25 M. Center Fire Pistol)">ปืนสั้นชนวนกลาง(10 M. Center Fire Pistol)</b-form-checkbox>
        </b-form-checkbox-group>
      </b-form-group>

      </b-form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" data-dismiss="modal" @click="insertToContact(name,time,year,month,normal_man,normal_woman,junior_man,junior_woman,master_man,master_woman)">Save</button>
      </div>
    </div>
  </div>
</div>


 <br><br>
   <table class="table table-bordered text-center ">
       <thead class="thead-dark">
          <tr>
            <th scope="col-6">ชื่อการแข่งขัน</th>
            <th scope="col-6"></th>
          </tr>
        </thead>
          
    <tbody :key="key" v-for="(contact, key) in contacts">
      <div v-if="updateKey === key">
        <div class="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel2" aria-hidden="true" >
        <div class="modal-dialog modal-dialog-centered modal-lg">
    <div class="modal-content">
      <div class="modal-header">
        <h4 class="modal-title" id="exampleModalLabel2">Add Contest</h4>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close" @click="updateContact( updateName,updateTime,updateYear,updateMonth,updateNormal_man,updateNormal_woman,updateJunior_man,updateJunior_woman,updateMaster_man,updateMaster_woman)">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
          <h5>ชื่อการแข่งขัน</h5>
        <b-form class="form1">
        <b-form-group id="input_group_1" label=" Contest Name : ชื่อการแข่งขัน" label-for="input_1">
        <b-form-input
          id="input_1"
          v-model="updateName"
          type="contest name"
          required
          placeholder=" เช่น การแข่งขันกีฬาชิงชนะเลิศสมาคมกีฬายิงปืนแห่งประเทศไทย ในพระบรมราชูปถัมภ์ "
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input_group_2" label="Year : ประจำปี" label-for="input_2">
        <b-form-input
          id="input_2"
          v-model="updateYear"
          required
          placeholder="เช่น 2563  "
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input_group_3" label="Month : เดือน" label-for="input_3">
        <b-form-select
          id="input_3"
          v-model="updateMonth"
          :options="months"
          required
        ></b-form-select>
      </b-form-group> 

      <b-form-group id="input_group_4" label="Time : ครั้งที่" label-for="input_4">
        <b-form-input
          id="input_4"
          v-model="updateTime"
          required
          placeholder="เช่น  1  "
        ></b-form-input>
      </b-form-group>
       
      
      <h5>ประเภทการแข่งขัน</h5>
        <b-form-group id="kind-1" label="ทั่วไป (ชาย)" label-for="kind_1" >
        <b-form-checkbox-group v-model="updateNormal_man" id="normal_1">
          <b-form-checkbox value="ไม่มี(None)">ไม่มี(None)</b-form-checkbox>
          <b-form-checkbox value="ปืนยาวท่านอน(50 M. Rifle Prone)">ปืนยาวท่านอน(50 M. Rifle Prone)</b-form-checkbox>
          <b-form-checkbox value="ปืนยาวอัดลม(10 M. Air RiFle)">ปืนยาวอัดลม(10 M. Air Rifle)</b-form-checkbox>
          <b-form-checkbox value="ปืนยาว 3 ท่า(50 M. Rifle 3 Position)">ปืนยาว 3 ท่า(50 M. Rifle 3 Position)</b-form-checkbox>
          <b-form-checkbox value="ปืนสั้นอัดลม(10 M. Air Pistol)">ปืนสั้นอัดลม(10 M. Air Pistol)</b-form-checkbox>
          <b-form-checkbox value="ปืนสั้นยิงเร็ว(25 M. Rapid Fire Pistol)">ปืนสั้นยิงเร็ว(25 M. Rapid Fire Pistol)</b-form-checkbox>
          <b-form-checkbox value="ปืนสั้นยิงช้า(50 M. Pistol)">ปืนสั้นยิงช้า(50 M. Pistol)</b-form-checkbox>
          <b-form-checkbox value="ปืนสั้น(25 M. Pistol)">ปืนสั้น(25 M. Pistol)</b-form-checkbox>
          <b-form-checkbox value="ปืนสั้นมาตรฐาน(25 M. Standard Pistol)">ปืนสั้นมาตรฐาน(25 M. Standard Pistol)</b-form-checkbox>
          <b-form-checkbox value="ปืนสั้นชนวนกลาง(25 M. Center Fire Pistol)">ปืนสั้นชนวนกลาง(10 M. Center Fire Pistol)</b-form-checkbox>
        </b-form-checkbox-group>
      </b-form-group>

      <b-form-group id="kind-2" label="ทั่วไป (หญิง)" label-for="kind_2">
        <b-form-checkbox-group v-model="updateNormal_woman" id="normal_2">
          <b-form-checkbox value="ไม่มี(None)">ไม่มี(None)</b-form-checkbox>
          <b-form-checkbox value="ปืนยาวท่านอน(50 M. Rifle Prone)">ปืนยาวท่านอน(50 M. Rifle Prone)</b-form-checkbox>
          <b-form-checkbox value="ปืนยาวอัดลม(10 M. Air RiFle)">ปืนยาวอัดลม(10 M. Air Rifle)</b-form-checkbox>
          <b-form-checkbox value="ปืนยาว 3 ท่า(50 M. Rifle 3 Position)">ปืนยาว 3 ท่า(50 M. Rifle 3 Position)</b-form-checkbox>
          <b-form-checkbox value="ปืนสั้นอัดลม(10 M. Air Pistol)">ปืนสั้นอัดลม(10 M. Air Pistol)</b-form-checkbox>
          <b-form-checkbox value="ปืนสั้นยิงเร็ว(25 M. Rapid Fire Pistol)">ปืนสั้นยิงเร็ว(25 M. Rapid Fire Pistol)</b-form-checkbox>
          <b-form-checkbox value="ปืนสั้นยิงช้า(50 M. Pistol)">ปืนสั้นยิงช้า(50 M. Pistol)</b-form-checkbox>
          <b-form-checkbox value="ปืนสั้น(25 M. Pistol)">ปืนสั้น(25 M. Pistol)</b-form-checkbox>
          <b-form-checkbox value="ปืนสั้นมาตรฐาน(25 M. Standard Pistol)">ปืนสั้นมาตรฐาน(25 M. Standard Pistol)</b-form-checkbox>
          <b-form-checkbox value="ปืนสั้นชนวนกลาง(25 M. Center Fire Pistol)">ปืนสั้นชนวนกลาง(10 M. Center Fire Pistol)</b-form-checkbox>
        </b-form-checkbox-group>
      </b-form-group>

      <b-form-group id="kind-3" label="เยาวชน (ชาย)" label-for="kind_3">
        <b-form-checkbox-group v-model="updateJunior_man" id="normal_3">
          <b-form-checkbox value="ไม่มี(None)">ไม่มี(None)</b-form-checkbox>
          <b-form-checkbox value="ปืนยาวท่านอน(50 M. Rifle Prone)">ปืนยาวท่านอน(50 M. Rifle Prone)</b-form-checkbox>
          <b-form-checkbox value="ปืนยาวอัดลม(10 M. Air RiFle)">ปืนยาวอัดลม(10 M. Air Rifle)</b-form-checkbox>
          <b-form-checkbox value="ปืนยาว 3 ท่า(50 M. Rifle 3 Position)">ปืนยาว 3 ท่า(50 M. Rifle 3 Position)</b-form-checkbox>
          <b-form-checkbox value="ปืนสั้นอัดลม(10 M. Air Pistol)">ปืนสั้นอัดลม(10 M. Air Pistol)</b-form-checkbox>
          <b-form-checkbox value="ปืนสั้นยิงเร็ว(25 M. Rapid Fire Pistol)">ปืนสั้นยิงเร็ว(25 M. Rapid Fire Pistol)</b-form-checkbox>
          <b-form-checkbox value="ปืนสั้นยิงช้า(50 M. Pistol)">ปืนสั้นยิงช้า(50 M. Pistol)</b-form-checkbox>
          <b-form-checkbox value="ปืนสั้น(25 M. Pistol)">ปืนสั้น(25 M. Pistol)</b-form-checkbox>
          <b-form-checkbox value="ปืนสั้นมาตรฐาน(25 M. Standard Pistol)">ปืนสั้นมาตรฐาน(25 M. Standard Pistol)</b-form-checkbox>
          <b-form-checkbox value="ปืนสั้นชนวนกลาง(25 M. Center Fire Pistol)">ปืนสั้นชนวนกลาง(10 M. Center Fire Pistol)</b-form-checkbox>
        </b-form-checkbox-group>
      </b-form-group>

       <b-form-group id="kind-4" label="เยาวชน (หญฺิง)" label-for="kind_4">
        <b-form-checkbox-group v-model="updateJunior_woman" id="normal_4">
          <b-form-checkbox value="ไม่มี(None)">ไม่มี(None)</b-form-checkbox>
          <b-form-checkbox value="ปืนยาวท่านอน(50 M. Rifle Prone)">ปืนยาวท่านอน(50 M. Rifle Prone)</b-form-checkbox>
          <b-form-checkbox value="ปืนยาวอัดลม(10 M. Air RiFle)">ปืนยาวอัดลม(10 M. Air Rifle)</b-form-checkbox>
          <b-form-checkbox value="ปืนยาว 3 ท่า(50 M. Rifle 3 Position)">ปืนยาว 3 ท่า(50 M. Rifle 3 Position)</b-form-checkbox>
          <b-form-checkbox value="ปืนสั้นอัดลม(10 M. Air Pistol)">ปืนสั้นอัดลม(10 M. Air Pistol)</b-form-checkbox>
          <b-form-checkbox value="ปืนสั้นยิงเร็ว(25 M. Rapid Fire Pistol)">ปืนสั้นยิงเร็ว(25 M. Rapid Fire Pistol)</b-form-checkbox>
          <b-form-checkbox value="ปืนสั้นยิงช้า(50 M. Pistol)">ปืนสั้นยิงช้า(50 M. Pistol)</b-form-checkbox>
          <b-form-checkbox value="ปืนสั้น(25 M. Pistol)">ปืนสั้น(25 M. Pistol)</b-form-checkbox>
          <b-form-checkbox value="ปืนสั้นมาตรฐาน(25 M. Standard Pistol)">ปืนสั้นมาตรฐาน(25 M. Standard Pistol)</b-form-checkbox>
          <b-form-checkbox value="ปืนสั้นชนวนกลาง(25 M. Center Fire Pistol)">ปืนสั้นชนวนกลาง(10 M. Center Fire Pistol)</b-form-checkbox>
        </b-form-checkbox-group>
      </b-form-group>

      <b-form-group id="kind-5" label="อาวุโส (ชาย)" label-for="kind_5">
        <b-form-checkbox-group v-model="updateMaster_man" id="normal_5">
          <b-form-checkbox value="ไม่มี(None)">ไม่มี(None)</b-form-checkbox>
          <b-form-checkbox value="ปืนยาวท่านอน(50 M. Rifle Prone)">ปืนยาวท่านอน(50 M. Rifle Prone)</b-form-checkbox>
          <b-form-checkbox value="ปืนยาวอัดลม(10 M. Air RiFle)">ปืนยาวอัดลม(10 M. Air Rifle)</b-form-checkbox>
          <b-form-checkbox value="ปืนยาว 3 ท่า(50 M. Rifle 3 Position)">ปืนยาว 3 ท่า(50 M. Rifle 3 Position)</b-form-checkbox>
          <b-form-checkbox value="ปืนสั้นอัดลม(10 M. Air Pistol)">ปืนสั้นอัดลม(10 M. Air Pistol)</b-form-checkbox>
          <b-form-checkbox value="ปืนสั้นยิงเร็ว(25 M. Rapid Fire Pistol)">ปืนสั้นยิงเร็ว(25 M. Rapid Fire Pistol)</b-form-checkbox>
          <b-form-checkbox value="ปืนสั้นยิงช้า(50 M. Pistol)">ปืนสั้นยิงช้า(50 M. Pistol)</b-form-checkbox>
          <b-form-checkbox value="ปืนสั้น(25 M. Pistol)">ปืนสั้น(25 M. Pistol)</b-form-checkbox>
          <b-form-checkbox value="ปืนสั้นมาตรฐาน(25 M. Standard Pistol)">ปืนสั้นมาตรฐาน(25 M. Standard Pistol)</b-form-checkbox>
          <b-form-checkbox value="ปืนสั้นชนวนกลาง(25 M. Center Fire Pistol)">ปืนสั้นชนวนกลาง(10 M. Center Fire Pistol)</b-form-checkbox>
        </b-form-checkbox-group>
      </b-form-group>

       <b-form-group id="kind-6" label="อาวุโส (หญฺิง)" label-for="kind_6">
        <b-form-checkbox-group v-model="updateMaster_woman" id="normal_6">
          <b-form-checkbox value="ไม่มี(None)">ไม่มี(None)</b-form-checkbox>
          <b-form-checkbox value="ปืนยาวท่านอน(50 M. Rifle Prone)">ปืนยาวท่านอน(50 M. Rifle Prone)</b-form-checkbox>
          <b-form-checkbox value="ปืนยาวอัดลม(10 M. Air RiFle)">ปืนยาวอัดลม(10 M. Air Rifle)</b-form-checkbox>
          <b-form-checkbox value="ปืนยาว 3 ท่า(50 M. Rifle 3 Position)">ปืนยาว 3 ท่า(50 M. Rifle 3 Position)</b-form-checkbox>
          <b-form-checkbox value="ปืนสั้นอัดลม(10 M. Air Pistol)">ปืนสั้นอัดลม(10 M. Air Pistol)</b-form-checkbox>
          <b-form-checkbox value="ปืนสั้นยิงเร็ว(25 M. Rapid Fire Pistol)">ปืนสั้นยิงเร็ว(25 M. Rapid Fire Pistol)</b-form-checkbox>
          <b-form-checkbox value="ปืนสั้นยิงช้า(50 M. Pistol)">ปืนสั้นยิงช้า(50 M. Pistol)</b-form-checkbox>
          <b-form-checkbox value="ปืนสั้น(25 M. Pistol)">ปืนสั้น(25 M. Pistol)</b-form-checkbox>
          <b-form-checkbox value="ปืนสั้นมาตรฐาน(25 M. Standard Pistol)">ปืนสั้นมาตรฐาน(25 M. Standard Pistol)</b-form-checkbox>
          <b-form-checkbox value="ปืนสั้นชนวนกลาง(25 M. Center Fire Pistol)">ปืนสั้นชนวนกลาง(10 M. Center Fire Pistol)</b-form-checkbox>
        </b-form-checkbox-group>
      </b-form-group>

      </b-form>
      




      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal" @click="updateContact( updateName,updateTime,updateYear,updateMonth,updateNormal_man,updateNormal_woman,updateJunior_man,updateJunior_woman,updateMaster_man,updateMaster_woman)">Close</button>
        <button type="button" class="btn btn-primary" data-dismiss="modal" @click="updateContact( updateName,updateTime,updateYear,updateMonth,updateNormal_man,updateNormal_woman,updateJunior_man,updateJunior_woman,updateMaster_man,updateMaster_woman)">Save</button>
      </div>
    </div>
  </div>
</div>  

      </div>
      <tr v-else>
        
        <th scope="row"><router-link :to="{name:'addtype',params:{data:key,data1:contact}}">{{contact.name}} ประจำปี {{contact.year}} ประจำเดือน {{contact.month}} ครั้งที่ {{contact.time}} </router-link></th>
        <td> <button type="button" class="btn btn-link" data-toggle="modal" data-target="#exampleModal2" @click="setUpdateContact(key, contact)">Update</button>
         <button type="button" class="btn btn-link" @click="deleteContact(key)">Delete</button>
         </td>
      
      </tr>
      
      
   </tbody></table>
  
 
    <AddType propsl="key"/>
    
     <div class="row">
        <div class="col-sm-12">
          <router-view/>
      </div>
      </div>  
  </div>
</template>

<script>
import AddType from '@/components/AddType.vue'

import firestore from "@/database/firebase"
var database = firestore.database()
var contactRef = database.ref('/contacts')
var childtRef = database.ref('/child')
export default {
  name: 'AddContest',
  data () {
    return {
      contacts: {},
      name: '',
      time: '',
      year: '',
      updateName: '',
      updateTime: '',
      updateYear: '',
      updateKey: '',
      month:null,
      months: [{ text: 'Select One', value: null }, 'มกราคม', ' กุมภาพันธ์', ' มีนาคม', 'เมษายน', 'พฤษภาคม' , 'มิถุนายน' , 'กรกฎาคม' , 'สิงหาคม', 'กันยายน' , 'ตุลาคม' , 'พฤศจิกายน' , 'ธันวาคม'],
      normal_man: [],
      normal_woman:[],
      junior_man:[],
      junior_woman:[],
      master_man:[],
      master_woman:[],
      updateNormal_man:[],
      updateNormal_woman:[],
      updateJunior_man:[],
      updateJunior_woman:[],
      updateMaster_man:[],
      updateMaster_woman:[]
    }  
  },
  components:{
   AddType,
   
  },
  methods: {
    insertToContact (name,time,year,month,normal_man,normal_woman,junior_man,junior_woman,master_man,master_woman) {
      let data = {
        name: name,
        time:time,
        year:year,
        month:month,
        normal_man:normal_man,
        normal_woman:normal_woman,
        junior_man:junior_man,
        junior_woman:junior_woman,
        master_man:master_man,
        master_woman:master_woman
      }
      contactRef.push(data)
      this.name = '',
      this.time = '',
      this.year = '',
      this.month = null,
      this.normal_man = []
      this.normal_woman = []
      this.junior_man=[]
      this.junior_woman=[]
      this.master_man=[]
      this.master_woman=[]
    },
    setUpdateContact (key, contact) {
      this.updateKey = key
     
      this.updateName = contact.name,
      this.updateTime = contact.time,
      this.updateYear = contact.year,
      this.updateMonth = contact.month,
      this.updateNormal_man =contact.normal_man,
      this.updateNormal_woman=contact.normal_woman,
      this.updateJunior_man=contact.junior_man,
      this.updateJunior_woman=contact.junior_woman,
      this.updateMaster_man=contact.master_man,
      this.updateMaster_woman=contact.master_woman
     
    },
    updateContact (name,time,year,month,normal_man,normal_woman,junior_man,junior_woman,master_man,master_woman) {
      contactRef.child(this.updateKey).update({
        
        name:name,
        time:time,
        year:year,
        month:month,
        normal_man:normal_man,
        normal_woman:normal_woman,
        junior_man:junior_man,
        junior_woman:junior_woman,
        master_man:master_man,
        master_woman:master_woman
        
      })
      this.updateKey = ''
      
      this.updateName = ''
      this.updateTime = ''
      this.updateYear = ''
      this.updateMonth = null
      this.updateNormal_man =[]
      this.updateNormal_woman=[]
      this.updateJunior_man=[]
      this.updateJunior_woman=[]
      this.updateMaster_man=[]
      this.updateMaster_woman=[]
     
    },
    deleteContact (key) {
      contactRef.child(key).remove()
    },
    setContact () {
      let data = {
       event:event
        
      }
      childtRef.push(data)
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
  margin: 0 ;
}
a {
  color: rgb(64, 6, 158);
}
h1{
  
  font-weight: 100;
  text-align: center;
  color: rgb(0, 38, 94)
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
</style>