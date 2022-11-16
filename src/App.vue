<template>
        <Header  v-if="auth.is_authenticated">   
        </Header>
    <div id="section-body">
            <Nav  v-if="auth.is_authenticated">
            </Nav>
            <router-view class="section-router"></router-view>
    </div>
        <div  v-if="auth.is_authenticated" id="section-player">
            <AudioPlayer />
        </div>
</template>

<script>
import { auth } from '../src/stores/auth';

export default {
    data() {
        return {
           auth
        }
    },
    }
</script>

