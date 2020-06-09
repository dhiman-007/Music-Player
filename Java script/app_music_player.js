

let songs = ["Let em play Karan aujla.mp3","Sheikh  Karan Aujla.mp3","East Side Flow - Sidhu Moose Wala.mp3",
    "Sooraj-dooba-hai-remix.mp3",
    "Daru-badnam-remix.mp3",
    "Rock-on-title-song.mp3",
    "woh-lamhe-woh-baatein.mp3",
    "I-Like-Me-Better.mp3"
];

let pics, sum 

window.onload = fill

function fill() {
    pics = songs.map((el, ind) => {
        if (ind % 3 == 0) {
            j = 0
        }
        return "images/Poster" + (++j) + ".jpg"
    })

    document.getElementById('number').innerHTML=1 +' / '+songs.length

    // console.log(songs)
    // for(let i =0 ;i <songs.length;i++){
    //         sum+='<a href= "">' + songs[i].substring(0, songs[i].length-3) +'</a>' + '<br/><br/>'
    // }
    // document.getElementById('main').innerHTML=sum.toString()
    // console.log(show)

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

document.getElementById("my-audio").addEventListener('ended', ()=>{
    next()
})


const bomb = (songName, ind) => {
	console.log(pics)
    document.getElementById("my-audio").setAttribute('src', 'music/' + songName)
    document.getElementById('songTitle').innerHTML = "d'MAN" + '<br/><br/>' + songName.substring(0, songName.length - 4);
    document.getElementById('number').innerHTML=i+1+' / '+songs.length
    $("#bg img").attr("src", pics[ind]);

}
