import { reactive } from 'vue'


export const player = reactive({
    playlist   : [],
    now_playing: {}, // SONG OBJECT
    setPlaylist(songs) {
        this.playlist = songs;
    },
    setNowPlaying(song) {
        this.now_playing = song;
    },
    getNowPlayingSongId() {
        return this.now_playing?.id;
    },
    getNowPlaying() {
        return this.now_playing;
    },
    getNowPlayingAlbumID() {
        return this.now_playing?.album?.id ?? null;
    },
    getNowPlayingSongName() {
        return this.now_playing?.name ?? '';
    },
    getNowPlayingSongImage() {
        return this.now_playing?.album?.images[1].url ?? '';
    },
    getNowPlayingArtists() {
        return this.now_playing?.artists?.map(artist => artist.name).join(', ');
    },
    getNowPlayingSongPreview() {
        return this.now_playing?.preview_url;
    },
    getNextSong(){
        const index = 0;
        let now_playingId = this.now_playing.id;
        for(let i =0; i < this.playlist.size; i++){
            if(this.playlist[i].id == now_playingId){
                i = index;
            }
        }
        return this.playlist[index + 1];
    },
    getPreviousSong() {
        const index = 0;
        let now_playingId = this.now_playing.id;
        for(let i =0; i < this.playlist.size; i++){
            if(this.playlist[i].id == now_playingId){
                i = index;
            }else{
                return false;
            }
        }
        return this.playlist[index -1];
    },
    resetNowPlaying() {
        this.now_playing = {};
    }
})