get('milse-container').innerHTML='<div class="milse-container"><div class="milse-screen1"><div class="container"><audio id="background-music"><source src="media/background1.mp3" type="audio/mpeg"></audio><div class="row"><div class="col-sm-4"></div><div class="col-sm-4 padded-30" align="center"><p>&nbsp;</p><img src="media/sample.jpg" class="img-responsive"><h1 onclick="experienceHandler(1)" class="screen1-text" id="e-target1"><u>Start Experience</u></h1><p class="screen1-text padded-40" id="e-target2">tell them the vision is clear... they\'re naked if they don\'t own a milse... they\'re all naked</p><div><small class="screen1-text">&copy;2022</small></div></div><div class="col-sm-4"></div></div></div></div></div>'
function experienceHandler(action){
	switch (action){
		case 1:
		get('background-music').play();
		experience1();
		break;
	}
}
function experience1(){
	get('e-target1').classList.add('screen1-text-exp1');
	get('e-target2').classList.add('screen1-text-exp1');
	setTimeout(deopatize, 3000);
	function deopatize(){
		get('e-target1').style.opacity = "0";
		get('e-target1').style.transition = "6s";
		setTimeout(hzero, 6000);
		function hzero(){
			get('e-target1').style.display = "none";
			setTimeout(lineone, 5000);
			function lineone(){
				get('e-target2').innerHTML = "confidence made you get that girl";
				setTimeout(linetwo, 5000);
				function linetwo(){
					get('e-target2').innerHTML = "get that job";
					setTimeout(linethree, 3000);
					function linethree(){
						get('e-target2').innerHTML = "that promotion";
						setTimeout(linefour, 3000);
						function linefour(){
							get('e-target2').innerHTML = "these are not just clothes";
							setTimeout(finalline, 5000);
							function finalline(){
								get('e-target2').innerHTML = "welcome to milse";
							}
						}
					}
				}
			}
		}
	}
}
