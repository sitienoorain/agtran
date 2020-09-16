<template>
  <div>
    <q-card style="width: 400px">
      <q-card-section>
        <p><b>Change Password</b></p>
      </q-card-section>
      <q-separator/>
      <q-card-section>
        <q-item>
          <q-list>
          <q-input square outlined dense  v-model="npass" type="password" label="New Password" style="width:350px">
            <template v-slot:prepend>
              <q-icon name="lock" />
            </template>
          </q-input>
          </q-list>
        </q-item>
         <q-item>
          <q-list>
          <q-input square outlined dense  v-model="cpass" type="password" label="Confirm Password" style="width:350px">
            <template v-slot:prepend>
              <q-icon name="lock" />
            </template>
          </q-input>
          </q-list>
        </q-item>
        <div v-if="cpass != npass">
          <p style="color: red">Please enter your correct password!</p>
        </div>
        <div align="right">
          <q-btn label="Change" color="primary" @click="edtpass()" />
          &nbsp;
          <q-btn flat label="Close" color="primary" v-close-popup />
        </div>

         <q-dialog v-if="succ == true" v-model="succ">
              <q-card style="width: 350px">
                <q-card-section>
                  <div class="text-h6">Alert</div>
                </q-card-section>
                <q-card-section>
                  Edit successfully! 
                </q-card-section>
                <q-card-actions align="right">
                  <q-btn flat label="OK" color="primary" v-close-popup />
                </q-card-actions>
              </q-card>
            </q-dialog>

            <q-dialog v-if="fail == true" v-model="fail">
              <q-card style="width: 350px">
                <q-card-section>
                  <div class="text-h6">Failed</div>
                </q-card-section>
                <q-card-section>
                  Failed to edit!
                </q-card-section>
                <q-card-actions align="right">
                  <q-btn flat label="OK" color="primary" v-close-popup />
                </q-card-actions>
              </q-card>
             </q-dialog>

      </q-card-section>
    </q-card>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Pwd',
  data() {
    return {
      npass:'',
      cpass:'',
      gpass:'',
      succ:false,
      fail: false
    }
  },
  methods : {
    getpass () {
      this.$axios.get("http://localhost:8080/getpwd/"+ this.$route.query.tid
      ).then((response) => {
          this.gpass = response.data
      })
    },
    edtpass () {
      this.$axios.put("http://localhost:8080/chgpwd/"+ this.$route.query.tid, {
        pwd : this.npass
      }).then(response => {
        this.succ = true
        this.fail = false
      }).catch(error => {
        this.fail = true
        this.succ = false
      })
    }
  },
  mounted() {
    this.getpass()
  }
}
</script>
