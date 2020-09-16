<template>
  <div class="q-pa-md">
    <div class="row">
      <div class="col-6 q-pl-lg">
        <q-input dense stack-label v-model="dtl.fname" label="First Name" autofocus/>
      </div>
      <div class="col-6 q-pl-lg">
        <q-input dense stack-label v-model="dtl.lname" label="Last Name"/>
      </div>
      <div class="col-6 q-pl-lg">
        <q-input dense stack-label v-model="dtl.idn" label="Passport/NRIC" />
      </div>
      <div class="col-6 q-pl-lg">
        <q-input dense stack-label type="date" v-model="dtl.bod" label="Birth Date" />
      </div>
      <div class="col-6 q-pl-lg">
        <q-input dense stack-label v-model="dtl.phn" label="Phone Number" />
      </div>
      <div class="col-6 q-pl-lg">
        <q-input dense stack-label v-model="dtl.eml" label="Email" />
      </div>
      <div class="col-6 q-pl-lg">
        <q-input dense stack-label type="password" v-model="dtl.pwd" label="Password" />
      </div>
      <div align="right">
        <q-badge color="black" text-color="white" >
          <a @click="chnge(dtl.tid)">Change Password</a>
        </q-badge>
      </div>
    </div>
    <br/>
    <q-btn flat @click="update()">Update</q-btn>
    <q-dialog v-model="pp">
      <Pwd></Pwd>
    </q-dialog>
  </div>
  
</template>

<script>
import Pwd from 'components/pwd.vue'

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
      pp:false,
      dtl:''
    }
  },
  components : {
    Pwd
  },
  methods: {
    details() {
      this.$axios.get('http://103.230.124.245:8090/users/find/'+ this.$route.query.tid
      ).then((response) => {
        this.dtl = response.data
      })
    },
    update() {
      this.$axios.put('http://103.230.124.245:8090/users/update/'+ this.$route.query.tid, {
        fnm: this.dtl.fname, 
        lnm: this.dtl.lname,
        idn: this.dtl.idn,
        bod: this.dtl.bod,
        phn: this.dtl.phn,
        eml: this.dtl.eml,
        pwd: this.dtl.pwd
      }).then(response => {
        alert("Successfully update the details")
      }).catch(error => {
          alert("Update failed")
      })
    },
    chnge(tid) {
      this.tid = tid;
      this.pp = true;
    }
  },
  mounted() {
    this.details()
  }
}
</script>

<style>
.my-card {
  width: 100%;
  
}
</style>
