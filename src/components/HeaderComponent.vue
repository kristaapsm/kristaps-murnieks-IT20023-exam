<template>
    <div id="main-header" class="active">
        <div class="wrapper-logo">
            <img src="@/assets/logo.svg"/>
            <h2>KRAKEN.FM</h2>
        </div>
        <div class="wrapper-profile">
            <div class="section-user">
                <span class="avatar"></span>
                <h3 id="txt-full-name">NAME SURNAME</h3>
            </div>
            <button id="btn-logout" type="submit" @click="logout" >LOGOUT</button>
        </div>
    </div>
</template>


<script>
import { auth } from '../stores/auth.js'
export default {
    data() {
        return {
           authenticated: auth.is_authenticated
        }
    },
    methods: {
        logout(event) {
            auth.logout();
        }
    }
}
</script>
