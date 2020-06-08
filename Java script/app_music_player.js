

let songs = ["Let em play Karan aujla.mp3",
    "Sooraj-dooba-hai-remix.mp3",
    "Daru-badnam-remix.mp3",
    "Rock-on-title-song.mp3",
    "woh-lamhe-woh-baatein.mp3",
    "I-Like-Me-Better.mp3"
];

let pics 

window.onload = fill

function fill() {
    pics = songs.map((el, ind) => {
        if (ind % 3 == 0) {
            j = 0
        }
        return "images/Poster" + (++j) + ".jpg"
    })
	
}



let i = 0;

const pre = () => {
    if (i == 0) {
        i = songs.length - 1;
        bomb(songs[i], i)
    } else {
        i--
        bomb(songs[i], i)

    }
}

const next = () => {
    if (i == songs.length - 1) {
        i = 0;
        bomb(songs[i], i)

    }
    else {
        i++;
        bomb(songs[i], i)

    }
}


const bomb = (songName, ind) => {
	console.log(pics)
    document.getElementById("my-audio").setAttribute('src', 'music/' + songName)
    document.getElementById('songTitle').innerHTML = "dMAN" + '<br/><br/>' + songName.substring(0, songName.length - 4);
	console.log(pics[ind])
    $("#bg img").attr("src", pics[ind]);

}
