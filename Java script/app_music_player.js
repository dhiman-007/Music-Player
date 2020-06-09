//dMAN

let songs = ["Let em play Karan aujla.mp3", "Sheikh  Karan Aujla.mp3", "East Side Flow - Sidhu Moose Wala.mp3",
    "Sooraj-dooba-hai-remix.mp3",
    "Daru-badnam-remix.mp3",
    "Rock-on-title-song.mp3",
    "woh-lamhe-woh-baatein.mp3",
    "I-Like-Me-Better.mp3"
];

let pics, sum = "", sng, i=0

window.onload = fill

function fill() {
    pics = songs.map((el, ind) => {
        if (ind % 3 == 0) {
            j = 0
        }
        return "images/Poster" + (++j) + ".jpg"
    })

    document.getElementById('number').innerHTML = 1 + ' / ' + songs.length

    sum += '<h3 style="color:cornflowerblue">' + 'Songs(' + songs.length + ')</h3>' + '<br/>'

    for (let i = 0; i < songs.length; i++) {
        sum += '<br/>' + songs[i].substring(0, songs[i].length - 4) + '<br/><br/>' +
            '<button class ="beat" id=' + i + '>' + 'Play' + '</button>' +
            '<br/><br/>'
    }
    document.getElementById('list').innerHTML = sum.toString()

}

document.getElementById('list').addEventListener('click', (e) => {
    if (e.target.tagName == 'BUTTON') {
        sng = songs[e.target.id]
        i = (parseInt)(e.target.id)
        bomb(sng, i + 1)

    }

})

const pre = () => {
    if (i == 0) {
        i = songs.length - 1;
        bomb(songs[i], i + 1)
    } else {
        i--
        bomb(songs[i], i + 1)
    }
}

const next = () => {
    if (i == songs.length - 1) {
        i = 0;
        bomb(songs[i], i + 1)

    }
    else {
        i++;
        bomb(songs[i], i + 1)

    }
}

document.getElementById("my-audio").addEventListener('ended', () => {
    next()
})

const bomb = (songName, ind) => {
    document.getElementById("my-audio").setAttribute('src', 'music/' + songName)
    document.getElementById('songTitle').innerHTML = "d'MAN" + '<br/><br/>' + songName.substring(0, songName.length - 4);
    document.getElementById('number').innerHTML = (ind) + ' / ' + songs.length
    $("#bg img").attr("src", pics[ind])
}

window.addEventListener("offline", () => {
    
    function repeat() {
        document.getElementById('main').style.display='none'
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





