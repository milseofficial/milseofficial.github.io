function backplay101(){
  get('background-music').play();
}
get('milse-container').innerHTML='<div class="milse-container"><div class="milse-screen1"><div class="container"><audio id="background-music"><source src="media/background1.mp3" type="audio/mpeg"></audio><div class="row"><div class="col-sm-4"></div><div class="col-sm-4 padded-30" align="center"><img src="media/sample.png" class="img-responsive"><h1 onclick="backplay101()" class="screen1-text">Start Experience</h1></div><div class="col-sm-4"></div></div></div></div></div>'
