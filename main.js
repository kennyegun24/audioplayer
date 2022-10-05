const musicContainer = document.querySelector('.music_container')
const musicImage = document.querySelector('.music__images')
const musicImages = document.querySelector('.music__image')
const audio = document.querySelector('.audio')
const progress = document.querySelector('.progress')
const progressContainer = document.querySelector('.progress_container')
const progressMeter = document.querySelector('.progress__meter')
const btn = document.querySelector('.btn1')
const btns = document.querySelectorAll('.btn')
const btn2 = document.querySelector('.btn2')
const btn3 = document.querySelector('.btn3')
const btn4 = document.querySelector('.btn4')
const btn5 = document.querySelector('.btn5')
const navigationBtns = document.querySelector('.navigation__buttons')
const author = document.querySelector('.author')
const title = document.querySelector('.title')
const musicUi = document.querySelector('.musicUi')
const arrow = document.querySelector('.uparrow')
const flex = document.querySelector('.flex')
const arrowup = document.querySelector('.arrowup')
const volume = document.querySelector('.volume')
const volumeSm = document.querySelector('.vol')
const volumeLow = document.querySelector('.fa-volume-low')
const volumeLoud = document.querySelector('.fa-volume-high')


const song =[{
  title: 'Africa Giant',
  author: 'Burna Boy',
  image: 'africangiant',
  audio: 'Africa-Giant',
},{
  title: 'Another Story',
  author: 'Burna Boy',
  image: 'africangiant',
  audio: 'Another-Story',
},{
  title: 'Anybody',
  author: 'Burna Boy',
  image: 'africangiant',
  audio: 'Anybody',
},{
  title: 'Dangote',
  author: 'Burna Boy',
  image: 'africangiant',
  audio: 'Dangote',
},{
  title: 'Destiny',
  author: 'Burna Boy',
  image: 'outside',
  audio: 'Destiny',
},{
  title: 'Different Lies',
  author: 'Burna Boy',
  image: 'africangiant',
  audio: 'Different-Lies',
},{
  title: 'Giddem',
  author: 'Burna Boy',
  image: 'africangiant',
  audio: 'Giddem',
},{
  title: 'Gum Body',
  author: 'Burna Boy',
  image: 'africangiant',
  audio: 'Gum-Body',
},{
  title: 'Heavens Gate',
  author: 'Burna Boy',
  image: 'outside',
  audio: 'Heavens-Gate',
},{
  title: 'Ja Ara E',
  author: 'Burna Boy',
  image: 'africangiant',
  audio: 'Ja-Ara-E',
},{
  title: 'Killin Dem',
  author: 'Burna Boy',
  image: 'africangiant',
  audio: 'Killin-dem',
},{
  title: 'On the low',
  author: 'Burna Boy',
  image: 'africangiant',
  audio: 'On-the-low',
},{
  title: 'Outside',
  author: 'Burna Boy',
  image: 'outside',
  audio: 'Outside',
},{
  title: 'Ph City',
  author: 'Burna Boy',
  image: 'outside',
  audio: 'Outside',
},{
  title: 'Pree me',
  author: 'Burna Boy',
  image: 'outside',
  audio: 'Pree-me',
},{
  title: 'Pull Up',
  author: 'Burna Boy',
  image: 'outside',
  audio: 'Pull-up',
},{
  title: 'Secrets',
  author: 'Burna Boy',
  image: 'africangiant',
  audio: 'Secrets',
},{
  title: 'Sekkle Down',
  author: 'Burna Boy',
  image: 'africangiant',
  audio: 'Sekkle-Down',
},{
  title: 'Show and tell',
  author: 'Burna Boy',
  image: 'africangiant',
  audio: 'Show-and-tell',
},{
  title: 'Spiritual',
  author: 'Burna Boy',
  image: 'africangiant',
  audio: 'Spiritual',
},{
  title: 'Streets Of Africa',
  author: 'Burna Boy',
  image: 'africangiant',
  audio: 'Streets-Of-Africa',
},{
  title: 'This Side',
  author: 'Burna Boy',
  image: 'africangiant',
  audio: 'This-Side',
},{
  title: 'Wetyn man go do',
  author: 'Burna Boy',
  image: 'africangiant',
  audio: 'Wetyn-Man-Go-Do',
},{
  title: 'Legacy',
  author: 'Eminem',
  image: 'Legacy',
  audio: 'legacy',
},{
  title: 'Love the way you lie',
  author: 'Eminem',
  image: 'lovethewayyoulie',
  audio: 'Lovethewayyoulie',
},{
  title: 'Nice guy',
  author: 'Eminem',
  image: 'niceguy',
  audio: 'Niceguy',
},{
  title: 'Pure Water',
  author: 'Eminem',
  image: 'walkonwater',
  audio: 'purewatermigos',
},{
  title: 'River',
  author: 'Eminem',
  image: 'river',
  audio: 'River',
},{
  title: 'The Ringer',
  author: 'Eminem',
  image: 'theringer',
  audio: 'theringer',
},{
  title: 'Venom',
  author: 'Eminem',
  image: 'venom',
  audio: 'Venom',
},{
  title: 'Blisters',
  author: 'Nasty C',
  image: 'stringsandbling',
  audio: 'Nasty-C-Blisters',
},{
  title: 'Cassanova',
  author: 'Nasty C',
  image: 'stringsandbling',
  audio: 'Nasty-C-Cassanova',
},{
  title: 'Do You Digg',
  author: 'Nasty C',
  image: 'stringsandbling',
  audio: 'Nasty-C-Do-U-Dig',
},{
  title: 'Everything',
  author: 'Nasty C',
  image: 'stringsandbling',
  audio: 'Nasty-C-Everything',
},{
  title: 'Givenchy',
  author: 'Nasty C',
  image: 'stringsandbling',
  audio: 'Nasty-C-Givenchy',
},{
  title: 'Gravy',
  author: 'Nasty C',
  image: 'stringsandbling',
  audio: 'Nasty-C-Gravy',
},{
  title: 'Jiggy Jigga',
  author: 'Nasty C',
  image: 'stringsandbling',
  audio: 'Nasty-C-Jiggy-Jigga',
},{
  title: 'Mrs Me',
  author: 'Nasty C',
  image: 'stringsandbling',
  audio: 'Nasty-C-Mrs-Me',
},{
  title: 'My Baby',
  author: 'Nasty C',
  image: 'stringsandbling',
  audio: 'Nasty-C-My Baby',
},{
  title: 'No Respect',
  author: 'Nasty C',
  image: 'stringsandbling',
  audio: 'Nasty-C-No-Respect',
},{
  title: 'Send Me Away',
  author: 'Nasty C',
  image: 'stringsandbling',
  audio: 'Nasty-C-Sma',
},{
  title: 'Strings and Bling',
  author: 'Nasty C',
  image: 'stringsandbling',
  audio: 'Nasty-C-Strings-Bling',
},{
  title: 'U Played Yourself',
  author: 'Nasty C',
  image: 'stringsandbling',
  audio: 'Nasty-C-U-Played-Yourself',
},];

let index = 0;
const suuu = () => {
song.forEach((songUi) => {
  // const musicDiv = document.createElement('div')
  // const img = document.createElement('img')
  // const songTitle = document.createElement('h4')
  // const songAuthor = document.createElement('h4')
  // const playBtn = document.createElement('button')
  // const uiAudio = document.createElement('audio')
  // const playUi = document.createElement('i')

  // songTitle.innerText = 'Title: ' + songUi.title
  // songAuthor.innerText = 'Artist: ' + songUi.author
  // uiAudio.src = `/audio/${songUi.audio}.mp3`
  // img.src = `/images/${songUi.image}.jpg`
  // playUi.classList = ('fa-solid playUi fa-play')
  // songTitle.classList = ('song__title')
  // songAuthor.classList = ('song__author')
  // musicDiv.classList = ('music__div')
  // playBtn.classList.add('uiBtn')
  // playBtn.classList.add('playy')
  // playBtn.classList.add('btn6')
  // uiAudio.classList = ('aud')
  // uiAudio.classList = ('audioUi')
  // img.classList = ('img')
  // playBtn.append(playUi)
  // musicDiv.append(img, songTitle, songAuthor, playBtn, uiAudio)
  // musicUi.appendChild(musicDiv)

  // const playSongUi = () => {
  //   uiAudio.classList.add('aud')
  //   playUi.classList.remove('fa-play')
  //   playUi.classList.add('fa-pause')
  
  //   uiAudio.play()
  // }
  
  // const pauseSongUi = () => {
  //   uiAudio.classList.remove('aud')
  //   playUi.classList.add('fa-play')
  //   playUi.classList.remove('fa-pause')
  
  //   uiAudio.pause()
  // }
  
  // musicDiv.addEventListener('click', () => {
  //   musicUi.style.display = 'none'
  //   musicContainer.style.display = 'flex'
  //   musicContainer.classList.remove('cont')
  //   musicImages.classList.remove('cont_image')
  //   arrow.classList.remove('cont_arrow')
  //   progressContainer.classList.remove('cont_prog_cont')
  //   const btnss = [...btns]
  //   btnss.forEach((btns) =>{
  //     btns.classList.remove('cont_btn')
  //   })
  //   btn2.classList.remove('cont_btn1')
  //   title.classList.remove('cont_title')
  //   author.classList.remove('cont_author')
  //   navigationBtns.classList.remove('cont_btns')
  //   flex.classList.remove('flex')
  //   arrowup.style.display = 'none'
  // })

  // arrow.addEventListener('click', () => {
  //   musicContainer.style.display = 'block'
  //   musicUi.style.display = 'block'
  //   musicContainer.classList.add('cont')
  //   musicImages.classList.add('cont_image')
  //   arrow.classList.add('cont_arrow')
  //   progressContainer.classList.add('cont_prog_cont')
  //   const btnss = [...btns]
  //   btnss.forEach((btns) =>{
  //     btns.classList.add('cont_btn')
  //   })    
  //   btn2.classList.add('cont_btn1')
  //   title.classList.add('cont_title')
  //   author.classList.add('cont_author')
  //   navigationBtns.classList.add('cont_btns')
  //   flex.classList.add('flex')
  //   arrowup.style.display = 'block'
  // })

  // arrowup.addEventListener('click', () => {
  //   musicUi.style.display = 'none'
  //   musicContainer.style.display = 'flex'
  //   musicContainer.classList.remove('cont')
  //   musicImages.classList.remove('cont_image')
  //   arrow.classList.remove('cont_arrow')
  //   progressContainer.classList.remove('cont_prog_cont')
  //   const btnss = [...btns]
  //   btnss.forEach((btns) =>{
  //     btns.classList.remove('cont_btn')
  //   })    
  //   btn2.classList.remove('cont_btn1')
  //   title.classList.remove('cont_title')
  //   author.classList.remove('cont_author')
  //   navigationBtns.classList.remove('cont_btns')
  //   flex.classList.remove('flex')
  //   arrowup.style.display = 'none'
  // })
})

const loadSong = (song) => {
  title.innerText = song.title
  author.innerText = song.author
  audio.src = `./audio/${song.audio}.mp3`
  musicImage.src = `./images/${song.image}.jpg`
}

loadSong(song[index])

const playSong = () => {
  progress.classList.remove('prog')
  document.querySelector('.play').classList.remove('fa-play')
  document.querySelector('.play').classList.add('fa-pause')
  btn2.style.color = 'red'
  btn2.style.setProperty('--red', 'red')

  audio.play()
}

const pauseSong = () => {
  progress.classList.add('prog')
  document.querySelector('.play').classList.add('fa-play')
  document.querySelector('.play').classList.remove('fa-pause')
  btn2.style.color = 'black'
  btn2.style.setProperty('--red', 'black')

  audio.pause()
}

btn2.addEventListener('click', () => {
  const isPlaying = progress.classList.contains('prog')
  if(!isPlaying){
    pauseSong()
  }else {
    playSong()
  }
})

btn3.addEventListener('click', () => {
  index--

  if(index < 0) {
    index = song.length - 1
  }

  loadSong(song[index])
  btn3.style.color = 'red'
  setTimeout(() => { btn3.style.color = 'initial'; }, 200);
  playSong()
})


btn.addEventListener('click', () => {
  if(btn5.classList.contains('shuffle')) {
    let randomSong = Math.floor((Math.random() * song.length) + 1)
    do{
      randomSong = Math.floor((Math.random() * song.length) + 1)
    } while (index == randomSong)
    index = randomSong;
  }else
  index++

  if(index > song.length - 1) {
    index = 0
  }
  loadSong(song[index])
  btn.style.color = 'red'
  setTimeout(() => { btn.style.color = 'initial'; }, 200);
  playSong()
})

audio.addEventListener('timeupdate', (e) => {
  const currentTime = e.target.currentTime;
  const duration = e.target.duration
  const progressPerc = (currentTime / duration) * 100
  progress.style.width = `${progressPerc}%`
  progressMeter.style.setProperty('--aft', `${progressPerc}%`)


  let time = document.querySelector('.time')
  let currentMin = Math.floor(currentTime / 60)
  let totalSec = Math.floor(currentTime % 60)
  if(totalSec < 10) {
  totalSec = `0${totalSec}`
  }
  time.innerText = `${currentMin}:${totalSec}`
}
)

volumeSm.addEventListener('change', () => {
  audio.volume = volumeSm.value / 100
})

volumeLow.addEventListener('click', () => {
  volumeSm.value = 0
  audio.volume = 0
})

volumeLoud.addEventListener('click', () => {
  let volumeS = volumeSm.value++
  audio.volume = volumeS / 100
})

audio.addEventListener('loadeddata', () => {
  let durations = document.querySelector('.total_duration')
  
  let audioDuration = audio.duration
  let totalDur = Math.floor(audioDuration / 60)
  let remSec = Math.floor(audioDuration % -(60))
    if(remSec < 10) {
      remSec = `0${remSec}`
    }
  durations.innerText = `${totalDur}:${remSec}`
})

progressContainer.addEventListener('click', (e) => {
  const width = progressContainer.clientWidth
  const offSetX = e.offsetX
  const duration = audio.duration
  audio.currentTime = (offSetX / width) * duration
})

audio.addEventListener('ended', () => {
  if(btn5.classList.contains('shuffle')) {
    let randomSong = Math.floor((Math.random() * song.length) + 1)
    do{
      randomSong = Math.floor((Math.random() * song.length) + 1)
    } while (index == randomSong)
    index = randomSong;
    loadSong(song[index])
  }else

  index++

  if(index > song.length - 1) {
    index = 0
  }
  loadSong(song[index])
  playSong()

})

btn5.addEventListener('click', () => {
  btn5.classList.toggle('shuffle')
})

}

let indexY = 0;

suuu(song[indexY])

