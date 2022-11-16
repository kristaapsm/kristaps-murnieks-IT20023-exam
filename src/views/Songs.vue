<template>
<div id="songs-view" @scroll="handleScroll">
    <div class="wrapper-header">
        <h1>SONGS</h1>
        <div class="wrapper-search">
            <input id="input-search" v-model="inputSearch" placeholder="Search by title..." />
        </div>
        <div class="wrapper-settings">
            <button id="btn-show-favorites" :class="{ active: active }" @click="active = !active">Show Favorites</button>
        </div>
    </div>
    <div class="wrapper-songs">
        <table cellspacing="0" cellpadding="0">
            <tr ref="header">
                <th id="th-id" >#</th>
                <th id="th-title" v-bind:class="{ active: sortedName}" @click = 'click += 1 , sortByName()'>
                    Title
                    <IconCaretUp v-if="sortedName == true" v-bind:class="{ 'flip-vertical': sortState === 1 }" />
                </th>
                <th id="th-artist">Artist</th>
                <th id="th-album">Album</th>
                <th id="th-duration" v-bind:class="{ active: sortedDur}" @click = 'click += 1 , sortByDuration()'>
                    Duration
                    <IconCaretUp v-if="sortedDur == true" v-bind:class="{ 'flip-vertical': sortState === 1 }"/>
                </th>
            </tr>
            <!-- Loop goes on this <tr> element -->
            <tr class="song" v-for="(songs, index) in songs">
                <td id="td-index">
                    <IconPlay />
                    <span id="txt-index">{{index + 1}} </span>
                </td>
                <td id="td-title">
                    <img :src='songs.album.images[0].url' />
                    {{songs.name}}
                </td>
                <td id="td-artist">{{getArtists(songs)}}</td>
                <td id="td-album">{{songs.album.name}}</td>
                <td id="td-duration">
                    {{millisToMinutesAndSeconds(songs.duration_ms)}}
                    <IconHeart />
                </td>
            </tr>
        </table>
    </div>
</div>
</template>

<script>

import songs  from '../data/songs'
import IconCaretUp from '../components/icons/IconCaretUp.vue'
import IconHeart from '../components/icons/IconHeart.vue'
import IconPlay from '../components/icons/IconPlay.vue'
export default {
    data() {
      return {
        songs: songs,
        search: '',
        active: false,
        inputSearch: '',
        password: '',
        click: 0,
        sortedName : false,
        sortedDur : false,
        sortState : 0,
        unsortedSongs : [],
        unsortDur : []

      }
    },
    components:{
        IconCaretUp,
        IconHeart,
        IconPlay
    },
    methods: {

        handleScroll(event) {
            this.$refs.header.classList.value = event.target.scrollTop > 100 ? 'scrolled' : '';
        },

        sortByName(){

            console.log(this.click);
            if(!this.sortedName){
                this.unsortedSongs = songs.concat();
                this.sortedName = true;
            };
            console.log(this.click);
            if(this.click == 0){
            }else if(this.click == 1){
                this.sortState = 1;
                return this.songs.sort((a, b) => {
                return a.name.localeCompare(b.name);
                });
            }else if(this.click == 2){
                this.sortState = 2;
                return this.songs.sort((b, a) => {
                return a.name.localeCompare(b.name);
                });
            }else if(this.click == 3){
                this.sortedName = false;
                this.click = 0;
                this.songs = this.unsortedSongs.concat();   
            }
        },
        sortByDuration(){
            console.log(this.click);
            if(!this.sortedDur){
                this.unsortDur = songs.concat();
                this.sortedDur = true;
            };
            console.log(this.click);
            if(this.click == 0){
            }else if(this.click == 1){
                this.sortState = 1;
                return this.songs.sort((a, b) => {
                return a.duration_ms.toString().localeCompare(b.duration_ms.toString());
                });
            }else if(this.click == 2){
                this.sortState = 2;
                return this.songs.sort((b, a) => {
                return a.duration_ms.toString().localeCompare(b.duration_ms.toString());
                });
            }else if(this.click == 3){
                this.sortedDur = false;
                this.click = 0;
                this.songs = this.unsortDur.concat();   
            }
            },

        selectSong(event){

        },

        getArtists(songs){
            let artist = songs.artists[0].name;
            if(songs.artists[1] === undefined){
                 return artist;
             }else{
                artist = artist + " , "+ songs.artists[1].name
             } if(songs.artists[2] === undefined){
               return artist;
            }else{
                artist = artist + " , "+ songs.artists[2].name
            }

              return artist;
        },

        millisToMinutesAndSeconds(millis) {
            var minutes = Math.floor(millis / 60000);
            var seconds = ((millis % 60000) / 1000).toFixed(0);
            return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
        }
    },
  }
</script>