# Music-Player
### A Music application built using Java script with help of Audio class.
 
Used Audio class methods and built function for various operations such as Play/pause, nextSong, PreviousSong.

###### Also dynamically changed background to give a pleasant view using jQuery.
  function playOrPauseSong(){
			if(song.paused){
                song.play();
                ###### $("#play img").attr("src","buttons/Pause.png");
            }
            else{
                song.pause();
               ###### $("#play img").attr("src","buttons/Play.png");
            }
        }

###### Used logic for automatically shift to the original poster after every 3 songs, which was done manually before.
for(var i=0;i<songs.length;i++){
			if(i%3==0){
				c = 0;
			}
      poster.push("images/Poster"+(++c)+".jpg");
		}

###### working on  implementing the seek bar, and Volume buttons.
End.

