<template>
<div id="album-view">
    <div class="wrapper-header">
        <h1>ALBUMS</h1>
        <div class="settings">
            <button id="btn-grid" :class="{ active: status == true }" v-on:click= setStatus(true) >
                <IconGrid />
            </button>
            <button id="btn-list" :class="{ active: status == false }" v-on:click= setStatus(false) >
                <IconList />
            </button>
        </div>
    </div>
    <ul id="list-albums" v-bind:class="{ grid: status}">
        <li class="album" v-for="album in albums">
            <img id="img-album" :src="album.images[1].url" />
            <div class="album-info">
                <h4 id="txt-album-name">{{album.name}}</h4>
                <p id="txt-album-artists">{{album.artists[0].name}}</p>
                <div class="album-year">
                    <p id="txt-album-year">{{getYear(album.release_date)}}</p>
                    <p id="txt-album-tracks">2</p>
                </div>
            </div>
        </li>
    </ul>
</div>
</template>


<script>
import songs from '../data/songs'
import IconGrid from '../components/icons/IconGrid.vue'
import IconList from '../components/icons/IconList.vue'

export default {
    data() {
      return {
        songs: songs,
        status : true

      }
    },
    components:{
        IconGrid,
        IconList,
    },

    methods: {
        getYear(date) {
                return date.slice(0,4);
        },

        setStatus(value) {
            this.status = value;
    }
    },

    

    computed: {
        albums: {
                get() {
                    let song = songs;
                    let albumList = [];
                    let albumNames = [];
                    for (let i = 0; i<song.length; i++) {
                        if(albumNames.indexOf(song[i].album.name) <0) {
                            albumList.push(song[i].album);
                            albumNames.push(song[i].album.name)
                        }
                    }
                    return albumList
                }
            }
    },

  
  }
</script>
