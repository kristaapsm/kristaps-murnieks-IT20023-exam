<template>
        <Header  v-if="authenticated">   
        </Header>
    <div id="section-body">
            <Nav  v-if="authenticated">
            </Nav>
            <router-view class="section-router"></router-view>
    </div>
        <div  v-if="authenticated" id="section-player">
            <AudioPlayer />
        </div>
</template>

<script>
import { computed } from '@vue/reactivity';
import { auth } from '../src/stores/auth';

export default {
    data() {
        return {
           authenticated: auth.is_authenticated
        }
    },
    }

</script>

