<template>
  <div ><br><br><br>
  <div class="dt-1">
    <br><h1>Let's talk with us</h1><br><br>
      <b-form-group
        id="input-group-1"
        label="Email address:"
        label-for="input-1"
        description=""
      >
        <b-form-input
          id="input-1"
          v-model="email"
          type="email"
          required
          placeholder="Enter email"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="name"
          required
          placeholder="Enter name"
        ></b-form-input>
      </b-form-group>

      <b-form-textarea
        id="message"
        v-model="textarea_message"
        placeholder="Message"
        rows="3"
        no-resize
      ></b-form-textarea>
<br>
      <b-button type="submit" variant="secondary" @click="insertToContact(email,name,textarea_message)">Send</b-button>
      

    <!-- <b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ form }}</pre>
    </b-card> -->
  </div></div>
</template>

<script>
import firestore from "@/database/firebase"
var database = firestore.database()
var registerRef = database.ref('/Message')

  export default {
    data() {
      return {
          registe:{},
          email: '',
          name: '',
          textarea_message: '',
        show: true,
      }
    },
    methods: {
      
      insertToContact (email,name,textarea_message) {
      let data = {
        email:email,
        name:name,
        textarea_message:textarea_message,
      }
      registerRef.push(data)
        this.email = ''
        this.name = ''
        this.textarea_message = ''
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

a {
  color: rgb(64, 6, 158);
}
h1{
  
  font-weight: 200;
  text-align: center;
  color: rgb(19, 105, 145);
}
div{
  padding: 10px ;
}
button{
  
  width: 4cm;
  border-radius: 12px;
}
.dt-1{
  width: 50%;
  
  border: 5px groove rgb(8, 191, 204); 
  margin: 7% 25% 7% 25%;
}
</style>