//dMAN


let songs = ["Sooraj dooba hai remix.mp3",
    "Allah Ke Bande.mp3",
    "Chitta Kurta.mp3",
    "Befikra.mp3",
	"Munde Pind De.mp3",
	"Thandi Hawa (Lost Stories) @ ritwiz.mp3",
	"SANJU  Sidhu Moose Wala.mp3",
    "Sia NGU.mp3",
    "Saadi Galli Aaja(Ayushman).mp3",
    "Tere karke guitar sikhda.mp3",
    "PLAY DATE.mp3",
    "02 Tere Mere.mp3",
    "Old skool.mp3",
    "DIL CHEEZ TUJHE DEDI Full Song AIRLIFT.mp3",
    "Let em play Karan aujla.mp3",
    "Abhi Toh Party Shuru Hui Hai.mp3",
    "Rock on title song.mp3",
    "Dil Dooba.mp3",
    "Outlaw.mp3",
    "I Like Me Better.mp3",
    "woh lamhe woh baatein.mp3",
    "Sheikh  Karan Aujla.mp3",
];

let pics, sum = "", sng, i = 0, individual, addMe = "", min=1, max=songs.length

const song = document.getElementById('my-audio')
const main = document.getElementById('main')
const giphyt = document.getElementById('gift')
const number = document.getElementById('number')
const list = document.getElementById('list')
const songTitle = document.getElementById('songTitle')

window.onload = fill

function fill() {

    pics = songs.map((el, ind) => {
        if (ind % 3 == 0) {
            j = 0
        }
        return "images/Poster" + (++j) + ".jpg"
    })

    number.innerHTML = 1 + ' / ' + songs.length

    sum += '<h2 style="color:teal">' + 'Songs(' + songs.length + ')</h2>' + '<br/>'

    for (let i = 0; i < songs.length; i++) {
        sum += '<br/>' + songs[i].substring(0, songs[i].length - 4) + '<br/><br/>' +
            '<button class ="beat" id=' + i + '>' + 'Play' + '</button>' +
            '<br/><br/>'
    }
    list.innerHTML = sum.toString()
    document.getElementById('inp').focus()

}

list.addEventListener('click', (e) => {
    if (e.target.tagName == 'BUTTON') {
        sng = songs[e.target.id]
        i = (parseInt)(e.target.id)
        bajaoPhir(sng, i + 1)

    }

})

const pre = () => {
    if (i == 0) {
        i = songs.length - 1
        bajaoPhir(songs[i], i + 1)
    } else {
        i--
        bajaoPhir(songs[i], i + 1)
    }
}

const next = () => {
    if (i == songs.length - 1) {
        i = 0
        bajaoPhir(songs[i], i + 1)

    }
    else {
        i++
        bajaoPhir(songs[i], i + 1)

    }
}

const bajaoPhir = (songName, ind) => {
    song.setAttribute('src', 'music/' + songName)

    songTitle.innerHTML = 'dman/>' + '<br/><br/>' + songName.substring(0, songName.length - 4)
    number.innerHTML = (ind) + ' / ' + songs.length
    $("#bg img").attr("src", pics[ind])
}

const random = () =>{
    
    let random = Math.round(Math.random() * (max - min) + min)
    bajaoPhir(songs[random], random+1)
}


checkInputDataAndRespond = () => {

    const inputSearch = document.getElementById("inp")

    songs.forEach((song, ind) => {
        individual = song.substring(0, song.length - 4).toLowerCase()

        if (individual.includes(inputSearch.value.toLowerCase().trim())) {
            addMe += '<br/><br/>' + individual + '<br/><br/>' +
                '<button class ="beat" id=' + ind + '>' + 'Play' + '</button>' +
                '<br/><br/>'

        }
    })

    if (addMe.length == "") {

        list.innerHTML = "<h3>Not found in list</h3>"
        inputSearch.focus()

    } else {

        list.innerHTML = addMe.toString()
        addMe = ""
        inputSearch.focus()
    }

    checkingMyInputValue(inputSearch.value.length)
}

const checkingMyInputValue = (julyOn) => {

    if (julyOn == 0) {
        list.innerHTML = sum.toString()
    }
}

song.addEventListener('ended', () => {
    next()
})


song.addEventListener('pause', () => {
    $("#image img").attr("src", 'images/stat2.jpg')
})


song.addEventListener('play', () => {
    $("#image img").attr("src", 'images/move9.gif')
})

window.addEventListener("offline", () => {
    song.pause()
    function repeat() {
        main.style.display = 'none'
        alert('checck your internet connectivity')
        setTimeout(() => {
            repeat()
        }, 1000)
    }
    repeat()

}, false);


window.addEventListener("online", () => {
    location.reload()

}, false);

