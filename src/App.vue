<template>
  <div id="app">
      <div class = "row mt-4">
        <div class ="col-sm-12">
          <nav class="navbar navbar-expand-lg fixed-top navbar-light " style="background-color: #00CED1;">
            <button 
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              ar0a-expanded="false"
              aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
            </button> 
             <b-navbar-brand >
                <img src="https://www.computing.psu.ac.th/th/wp-content/uploads/2018/03/PSU_CoC_ENG.png"  
                 width="20%" height="20%" class="d-inline-block align-top" >
            </b-navbar-brand>
            <div class="collapse navbar-collapse"
            id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item active">
                  <router-link class="nav-link" to="/">Home</router-link>
                </li> 
                <li class="nav-item active">
                  <router-link class="nav-link" to="/contest">Contest</router-link>
                </li>  
                <li class="nav-item active">
                  <router-link class="nav-link" to="/addcontest">AddContest</router-link>
                </li> 
                <li class="nav-item active">
                  <router-link class="nav-link" to="/about">About</router-link>
                </li> 
              </ul>
            </div> 
          </nav>
      </div>
    </div>
      <div class="row">
        <div class="col-sm-12">
          <router-view/>
      </div>
      
      </div>
    </div>
</template>
<script>
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import Vue from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

export default {
  name: "app",
  
}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;400&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Kanit&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Prompt&display=swap');
#app {
  font-family: 'Prompt','Montserrat', 'Kanit',sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
 
}

#nav {
  padding: 0px;
 
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  
}

a.router-link-exact-active {
  color: #42b983;
  background-color: #0198f0;
}
h2,h3,h4,h5,h6 {font-family: 'Prompt','Montserrat', 'Kanit',sans-serif; font-weight: normal; }


</style>
