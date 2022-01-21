// let current_play = document.querySelector('curr-playing');
// let playing_pic = document.querySelector('playing-pic');
// let song_name = document.querySelector('song-name');
// let song_artist = document.querySelector('song-artist');

// let current_time = document.querySelector('current-time');
// let song_time = document.querySelector('song-time')
// let playingRange = document.querySelector('playingRange');
// let volumeRange = document.querySelector('volumeRange');


// let curr_track = document.createElement('audio')


// let trackindex = 0
// let isplaying = false
// let israndom = false

// let update_timer = 0


// loadtrack(trackindex)
// const loadtrack = (trackindex) =>{
//     clearInterval(update_timer);
//     reset();

//     curr_track.src = tracklist[trackindex].song;
//     curr_track.load();

//     song_name.textContent = tracklist[trackindex].name;
//     song_artist.textContent = tracklist[trackindex].artist;
//     playing_pic.style.backgroundImage = "url("+ tracklist[trackindex].img +")";

//     setInterval(setupdate, 1000)
// }

// curr_track.addEventListener('ended', )


let play = document.getElementById('play')
let music = document.querySelector('audio')
const img = document.querySelector('img')
const song_name = document.getElementById('song-name')
const song_artist = document.getElementById('song-artist')
// const song_name = document.get('song-name')
const next = document.getElementById('next')
const prev = document.getElementById('prev')



let tracklist = [{
    img: './images/faded.png',
    name : 'Faded',
    artist:'Atif Aslam',
    song: './track/music_Faded.mp3'
},
{
    img: './images/fallingdown.jpg',
    name : 'fallingdown',
    artist:'Atif Aslam',
    song: './track/music_fallingdown.mp3'
},
{
    img: './images/ratherbe.jpg',
    name : 'ratherbe',
    artist:'Atif Aslam',
    song: './track/music_Rather Be.mp3'
},
{
    img: './images/stay.png',
    name : 'Stay',
    artist:'Atif Aslam',
    song: './track/music_stay.mp3'
}
]

tracklist.push({five : 'a'})
console.log(tracklist)
let isplaying = false

const playmusic = () =>{
    isplaying = true
    music.play()
play.classList.replace('bi-play-circle-fill', 'bi-pause-circle-fill')
img.classList.add('anime')
}
const pausemusic = () =>{
    isplaying = false
    music.pause()
play.classList.replace('bi-pause-circle-fill','bi-play-circle-fill')
img.classList.remove('anime')
}


play.addEventListener('click', ()=>{
isplaying ?  pausemusic() : playmusic()
})
console.log(`./images${tracklist[0].img}`)
const loader = (tracklist) =>{
    song_name.textContent = tracklist.name
    song_artist.textContent = tracklist.artist
    img.src = tracklist.img
    music.src = tracklist.song
    

}

// loader(tracklist)

let songIndex = 0

const nextsong = ()=>{
    songIndex = (songIndex + 1) % tracklist.length
loader(tracklist[songIndex])
playmusic()
}
next.addEventListener('click', nextsong)

const prevSong = ()=>{
    songIndex = (songIndex - 1 + tracklist.length) % tracklist.length
loader(tracklist[songIndex])
playmusic()
}
prev.addEventListener('click', prevSong)