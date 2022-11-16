import router from '../router/index.js';
import { reactive } from 'vue'


export const auth = reactive({

is_authenticated: localStorage.is_authenticated ?? false,

user : {
    name: "Kristaps",
    surname: "Mūrnieks",
    code: "IT20023",
    favorite_songs: [],
},
    

setUserData(name, surname, code) {
    this.name = name;
    this.surname = surname;
    this.code = code;
},

authenticate(email, password) {
    alert("Izpildias");
    if(email == 'kristaps@va.lv' && password == '123456'){
        localStorage.is_authenticated = true;
        this.is_authenticated = true;
        router.push('/');
    }
},

logout() {
    console.log("logged out");
    localStorage.clear();
    this.is_authenticated = false;
    router.push('/login');
},

toggleFavorite(songID) {
    if(index !== -1){
        this.favorite_songs.splice(index,1);
        }else{
            this.favorite_songs.push(songID);
        }
},

getFavoriteSongs() {
    return this.favorite_songs
}

});