			                        //dMAN


        let songs = ["Sooraj-dooba-hai-remix.mp3", "Allah Ke Bande.mp3" ,"Chitta Kurta.mp3","Something_something.mp3",
				"Tere karke guitar sikhda.mp3","02 Tere Mere.mp3","Old_skool.mp3","Rock-on-title-song.mp3","Outlaw.mp3","I-Like-Me-Better.mp3","Let em play Karan aujla.mp3","woh-lamhe-woh-baatein.mp3","Sheikh  Karan Aujla.mp3",
				   
        ];

        let pics, sum = "", sng, i = 0

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

            sum += '<h3 style="color:cornflowerblue">' + 'Songs(' + songs.length + ')</h3>' + '<br/>'

            for (let i = 0; i < songs.length; i++) {
                sum += '<br/>' + songs[i].substring(0, songs[i].length - 4) + '<br/><br/>' +
                    '<button class ="beat" id=' + i + '>' + 'Play' + '</button>' +
                    '<br/><br/>'
            }
            list.innerHTML = sum.toString()


        }

        list.addEventListener('click', (e) => {
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

        song.addEventListener('ended', () => {
            next()
        })

        song.addEventListener('pause', () => {
            $("#image img").attr("src", 'images/stat1.jpg')
        })

        song.addEventListener('play', () => {
            $("#image img").attr("src", 'images/move9.gif')
        })

        const bomb = (songName, ind) => {
            song.setAttribute('src', 'music/' + songName)
            songTitle.innerHTML = "d'MAN" + '<br/><br/>' + songName.substring(0, songName.length - 4);
            number.innerHTML = (ind) + ' / ' + songs.length
            $("#bg img").attr("src", pics[ind])
        }

        
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

        