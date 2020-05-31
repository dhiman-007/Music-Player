  var songs = ["music/Let em play Karan aujla.mp3","music/Sooraj-dooba-hai-remix.mp3",
		    "music/Daru-badnam-remix.mp3","music/Rock-on-title-song.mp3","music/woh-lamhe-woh-baatein.mp3","music/I-Like-Me-Better.mp3"
		    ];  
		//created a dynamic array according to the number of Songs, After every 3 images 
		//I loop again to the first image, It reduces manually entering background images for songs
        
        var poster = new Array();
	    var c=0,j=0;
		for(var i=0;i<songs.length;i++){
			if(i%3==0){
				c = 0;
				j=c;
			}

			poster.push("images/Poster"+(++j)+".jpg");
		}
		
		var songTitle = document.getElementById("songTitle");
        var fillBar = document.getElementById("fill");
        
        var song = new Audio();  // creating Audio class objetc
        var currentSong = 0;
       
	//
        window.onload = playSong;  
        
        function playSong(){
				song.src = songs[currentSong];
				var songNAME= songs[currentSong].substring(6, (songs[currentSong].length)-4); //to display only the name of Song playing.
				songTitle.textContent = songNAME;
				song.play();
        }
        
        function playOrPauseSong(){
			if(song.paused){
                song.play();
                $("#play img").attr("src","buttons/Pause.png");
            }
            else{
                song.pause();
                $("#play img").attr("src","buttons/Play.png");
            }
        }
        
        song.addEventListener('timeupdate', function(){ 
				let position = song.currentTime / song.duration;
				if(position*100==100){
					next(); //calling the function next() to play next song automatically after completion of current song.
				}
				fillBar.style.width = position * 100 +'%';
        });    
   


        function next(){
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
    
        function pre(){
            currentSong--;
            if(currentSong < (0)){
				
                currentSong = songs.length-1;
            }
            playSong();
            $("#play img").attr("src","buttons/Pause.png");
            $("#image img").attr("src",poster[currentSong]);
            $("#bg img").attr("src",poster[currentSong]);
        }
        
