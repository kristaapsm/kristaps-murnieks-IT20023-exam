<template>
    <div id="login-view">
        <form class="login-form">
            <div class="wrapper-logo">
                <img src="@/assets/logo.svg" />
                <div>KRAKEN.FM</div>
            </div>
            <input id="input-email" v-model="email" placeholder="E-mail" />
            <input id="input-password" v-model="password" placeholder="Password" />
            <button id="btn-submit" @click="login" :disabled="disabled">LOGIN</button>
        </form>
    </div>
</template>

<script>
import { auth } from '/src/stores/auth.js'
export default {
    data() {
      return {
        email: '',
        password: ''
      }
    },
    methods: {
        login(event) {
                auth.authenticate(this.email, this.password);
        }
    },
    computed: {
    disabled() { 
        if (this.email == ''|| this.password == '' || this.password.length < 6){
            return true;
        }else{
            return false;
        }
    
    }
   }
  }
</script>