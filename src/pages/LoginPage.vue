<template>
  <div id="outPopUp">
    <q-card style="width:400px;height:330px;">
      <q-card-section class="bg-blue" align="center">
         <h4 class="text-h5 text-white q-my-md">Sign In </h4>
      </q-card-section>
      <q-card-section>
        <q-input square v-model="uname" type="username" label="Username" autofocus>
          <template v-slot:prepend>
            <q-icon name="person" />
          </template>
        </q-input>
        <q-input square  v-model="pword" type="password" label="Password">
          <template v-slot:prepend>
            <q-icon name="lock" />
          </template>
        </q-input>
      </q-card-section>
      <q-card-actions class="q-px-md">
        <q-btn unelevated  color="primary" class="jin full-width" label="Submit" @click="login()"/><br>
      </q-card-actions>
    </q-card>
  </div>  
</template>

<script>

export default {
name: 'Login',
  data() {
    return {
      uname:'',
      pword:'',
    }
  },
  methods:{
    login() {
       this.$axios.post("http://localhost:8080/api/checklog", {
        unm: this.uname, 
        pwd: this.pword
      }).then(response =>{
          this.$router.push('/main')
      }).catch((error) => {
        if (error.response) {
      this.uname = '';
      this.pword = '';
        }
      })
    }
  }
}
</script>

<style>
#outPopUp {
  position: absolute;
  z-index: 15;
  top: 35%;
  left: 48%;
  margin: -100px 0 0 -150px;
  
}
</style>
