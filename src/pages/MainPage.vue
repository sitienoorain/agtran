<template>
  <div class="q-pa-md">
    <div class="row">
      <div class="col-6 q-pl-lg">
        <q-input dense stack-label v-model="fname" label="First Name" autofocus/>
      </div>
      <div class="col-6 q-pl-lg">
        <q-input dense stack-label v-model="lname" label="Last Name"/>
      </div>
      <div class="col-6 q-pl-lg">
        <q-input dense stack-label v-model="idn" label="Passport/NRIC" />
      </div>
      <div class="col-6 q-pl-lg">
        <q-input dense stack-label type="date" v-model="bod" label="Birth Date" />
      </div>
      <div class="col-6 q-pl-lg">
        <q-input dense stack-label v-model="phn" label="Phone Number" />
      </div>
      <div class="col-6 q-pl-lg">
        <q-input dense stack-label v-model="eml" label="Email" />
      </div>
      <div class="col-6 q-pl-lg">
        <q-input dense stack-label type="password" v-model="pwd" label="Password" />
      </div>
      <div class="col-6 q-pl-lg">
        <q-input dense stack-label type="password" v-model="npwd" label="Confirm Password" />
        <p v-if="npwd != pwd" style="color:red"> Password not match!</p>
      </div>
    </div>
    <br/>
    <q-btn flat @click="register()">Register</q-btn>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fname:'',
      lname:'',
      idn:'',
      bod:'',
      phn:'',
      eml:'',
      pwd:'',
      npwd:'',
    }
  },
  methods: {
    register() {
      this.$axios.post("http://localhost:8080/api/register", {
        fnm: this.fname, 
        lnm: this.lname,
        idn: this.idn,
        bod: this.bod,
        phn: this.phn,
        eml: this.eml,
        pwd: this.pwd
      }).then(response =>{
          alert("Successfully registered the user")
      }).catch((error) => {
        if (error.response) {
          fname:'';
          lname:'';
          idn:'';
          bod:'';
          phn:'';
          eml:'';
          pwd:'';
          npwd:'';
        }
      })
    }
  }
}
</script>

<style>
.my-card {
  width: 100%;
  
}
</style>
