<template>
    
        <Header>   
        </Header>
   

    <div id="section-body">

       
            <Nav>
            </Nav>
      

            <router-view class="section-router"></router-view>
        
    </div>

        <div id="section-player">
            <AudioPlayer />
        </div>

</template>

<script>
import { auth } from '../src/stores/auth'
export default {
    data() {
        return {
           authenticated: auth.is_authenticated
        }
    }
}
</script>

