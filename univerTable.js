    confirm("Answer the questions to be linked to sites of possible interest.");
    $("#entry").click(function(mouse){alert("Thank You"); 
        var values = document.getElementById("movie").value;console.log(values);
        if (values === "Horror"){
           //$("#result").append("I recommend this site for you: \n\t* http://www.rottentomatoes.com/top/bestofrt/top_100_horror_movies/?category=10 \n\t* http://www.slantmagazine.com/features/article/100-greatest-horror-films-of-all-time \n\t* http://www.timeout.com/london/film/best-horror-films")                    
           alert("I recommend these sites for you: \n\t* http://www.rottentomatoes.com/top/bestofrt/top_100_horror_movies/?category=10 \n\t* http://www.slantmagazine.com/features/article/100-greatest-horror-films-of-all-time \n\t* http://www.timeout.com/london/film/best-horror-films");
           } 
        else if (values === "Comedy") {                       
           alert("I recommend these sites for you: \n\t* http://www.timeout.com/london/film/100-best-comedy-movies \n\t* http://www.boston.com/ae/movies/top-funniest-movies-all-time/pv4inQKDfFY9ibAeZvzDYM/article.html \n\t*http://www.digitaldreamdoor.com/pages/movie-pages/movie_comedy.html ");                        
           }   
        else if (values === "Action-Adventure"){
           alert("I recommend these sites for you: \n\t* http://www.rottentomatoes.com/top/bestofrt/top_100_action__adventure_movies/?category=1 \n\t* http://www.bestadventuremovielist.com/ \n\t*http://www.vulture.com/2013/07/25-best-action-movies-since-die-hard.html ");                           
           }   
        else if (values === "Romance") {
           alert("I recommend these sites for you: \n\t* http://www.timeout.com/london/film/the-100-best-romantic-movies \n\t* http://movies.amctv.com/movie-guide/50-greatest-romantic-movies/ \n\t* http://www.usmagazine.com/entertainment/pictures/30-most-romantic-movies-of-all-time-2012102/20669 ");                          
           } 
        else{
           alert("I recommend these sites for you: \n\t* http://www.rottentomatoes.com/top/bestofrt/top_100_documentary_movies/?category=8 \n\t* http://topdocumentaryfilms.com/ \n\t* http://www.complex.com/pop-culture/2013/03/the-25-best-documentaries-streaming-on-netflix-right-now/ ");                                             
           }
           });   // closes jquery line                                                                                                                     
    $("#entry").click(function(mouse){var values = document.getElementById("music").value;console.log(values);
        if (values === "RnB"){
            alert("I recommend these sites for you: \n\t* http://www.singersroom.com/ \n\t* http://www.thisisrnb.com/ \n\t* http://www.djdownloadz.com/rnb-mixtapes \n\t* http://www.wbls.com/");                 
        } 
        else if (values === "Classical"){
            alert("I recommend these sites for you: \n\t* http://www.youtube.com/watch?v=wLkjMLdLf3s \n\t* http://www.youtube.com/watch?v=Ps6EtkLCLro \n\t* http://www.dailymotion.com/playlist/x2c66s_ClassicalExperience_compilation-the-best-of-classical-music/1#video=xva9ga ");                               
        } else if (values === "Pop"){
            alert("I recommend these sites for you: \n\t* http://www.youtube.com/watch?v=qQoA3cIraug \n\t* http://topsify.com/ \n\t* http://www.mtv.com/music/pop/");                                              
        } else if (values === "Hip-hop"){
            alert("I recommend these sites for you: \n\t* http://www.hipersonica.com/hip-hop/las-100-mejores-canciones-del-hip-hop \n\t* http://www.rollingstone.com/music/lists/the-50-greatest-hip-hop-songs-of-all-time-20121205 \n\t* http://www.hotnewhiphop.com/top100/ ");                          
        } else if (values === "Electronic"){
            alert("I recommend these sites for you: \n\t* http://www.youtube.com/watch?v=Xh2DEUUR7QU \n\t* https://soundcloud.com/quantumharmonics/sets/electronic-music-playlist-002/ \n\t* http://www.playlist.com/playlist/21444160267");                                
        } else if (values === "Rock") {
            alert("I recommend these sites for you: \n\t* http://ultimateclassicrock.com/tags/top-100-classic-rock-songs/ \n\t* https://soundcloud.com/mike-price-11/sets/rock-playlist \n\t* http://www.artistdirect.com/music/hard-rock/558");                        
        } else if (values==="Metal") {
            alert("I recommend these sites for you: \n\t* https://soundcloud.com/taleweaver/sets/metal-music/ \n\t* http://www.youtube.com/playlist?list=PLF2FDB9EE77808DA8 \n\t* http://www.npr.org/blogs/bestmusic2012/2012/12/21/167695210/top-10-metal-albums-of-2012");                                             
        } else{
            alert("I recommend these sites for you: \n\t* http://www.billboard.com/biz/charts/international \n\t* http://en.wikipedia.org/wiki/The_World's_Greatest_International_Hits \n\t* http://www.listenlive.eu/ \n\t* http://www.live-radio.net/worldwide.shtml");                                              
        } 
        }); // end jquery line                                                
    $("#entry").click(function(mouse){var values = document.getElementById("gender").value;console.log(values);
        genderArray = ["Male", "Female", "Other"];
        for (var i = 0; i < genderArray.length; i++){
            if (values === genderArray[i]){
                alert("I recommend this site for you: http://lmgtfy.com/?q=" + genderArray[i] + "health");                                                                                                                                                                                                               
            }
        } 
        }); // end jquery line                                                     
    $("#entry").click(function(mouse){var values = document.getElementById("sports").value;console.log(values);
        alert("I recommend this site for you: http://lmgtfy.com/?q=" + values);});                                                                                                                                               
    $("#entry").click(function(mouse){var values = document.getElementById("hobbies").value;console.log(values);
        alert("I recommend this site for you: http://lmgtfy.com/?q=" +  values)});                                                                                                                                            
    $("#entry").click(function(mouse){var values = document.getElementById("username").value;console.log(values);});                                                                                                                                      
    $("#entry").click(function(mouse){var values = document.getElementById("language").value;console.log(values);sn
       alert("I recommend this site for you: http://lmgtfy.com/?q=" +  values +"article")}); 
