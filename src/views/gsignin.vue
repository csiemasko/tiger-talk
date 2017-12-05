<template lang="pug">
  g-signin-button(:params="googleSignInParams" @success="onSignInSuccess" @error="onSignInError")
     i.fa.fa-google
     | Sign In With Google    
</template>
 
<script>
export default {
  data () {
    return {
      /**
       * The Auth2 parameters, as seen on
       * https://developers.google.com/identity/sign-in/web/reference#gapiauth2initparams.
       * As the very least, a valid client_id must present.
       * @type {Object}
       */
      googleSignInParams: {
        client_id: '637796729929-ituv77blbneefedj83l28uug9v0j9vn9.apps.googleusercontent.com'
      }
    }
  },
  methods: {
    onSignInSuccess (googleUser) {    
      const profile = googleUser.getBasicProfile() // etc etc 
       var axios = require('axios');
        axios.post('/login', { type: 'google', token: googleUser.getAuthResponse().id_token }).then(r => {
            if (r.data.result == 'success') { 
                console.log(r.data.user);               
                this.$emit('glogin', r.data.user);
            } else {
                console.log(r);
                console.log('Google Login Failed');
            }           
        });
    },
    onSignInError (error) {     
    }
  }
}
</script> 
 
<style>

</style> 