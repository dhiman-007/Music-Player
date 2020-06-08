# Music-Player
* Used Audio class Methods By **instantiating** an object of **Audio** class.

``` var audio = new Audio() ```

### Method Used of Audio CLass:

``` 
    play(); 
    pause();
    paused(); //return true or false
    
    
```

### Fetching Of Songs:

* Used an **Array** where every value holds the **Path** for the song to be played, as shown below: 
	```
	 var songs = ["music/Sooraj-dooba-hai-remix.mp3",
	 "music/Daru-badnam-remix.mp3","music/Rock-on-title-song.mp3","music/woh-lamhe-woh-baatein.mp3","music/I-Like-Me-Better.mp3"
	 ];  
	```
	
* With the help **src attribute**, Set the path to the current Song as.
	```
		song.src = songs[currentSong];
	```

### Function Created:

*  function for Playing a Song:

```
    function playSong(){
				song.src = songs[currentSong];
				var songNAME= songs[currentSong].substring(6, (songs[currentSong].length)-4); //Display song name only
				songTitle.textContent = songNAME;
				song.play();
        }
```

* function for Handling of Play and Pause of songs

```
	 const playOrPauseSong =()=>{
			if(song.paused){
                song.play();
                $("#play img").attr("src","buttons/Pause.png");
            }
            else{
                song.pause();
                $("#play img").attr("src","buttons/Play.png");
            }
        }
```

* function for Next song to play :

```
	const next = () =>{
            currentSong++; 
            if(currentSong > (songs.length-1)){   
			// if Queue of songs is completed, set the currentSong to first song of Queue.
                currentSong = 0;
            }
            playSong();
            $("#play img").attr("src","buttons/Pause.png");
            $("#image img").attr("src",poster[currentSong]);
            $("#bg img").attr("src",poster[currentSong]);
        }
```

* function for Previous song to play:

```
	   const pre = () =>{
            currentSong--;
            if(currentSong < (0)){
				
                currentSong = songs.length-1;
            }
            playSong();
            $("#play img").attr("src","buttons/Pause.png");
            $("#image img").attr("src",poster[currentSong]);
            $("#bg img").attr("src",poster[currentSong]);
        }

```

#### Logic for automatically shift to the **first poster** after every 3 songs, which was done manually before.
```
for(var i=0;i<songs.length;i++){
			if(i%3==0){
				c = 0;
			}
      poster.push("images/Poster"+(++c)+".jpg");
		}
```

#### working on  implementing the seek bar, and Volume buttons.
End.

