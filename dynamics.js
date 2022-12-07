get('milse-container').innerHTML='<div class="container"><div class="row"><div class="col-sm-4"></div><div class="col-sm-4 padded-30" align="center"><p>&nbsp;</p><img src="https://milseofficial.github.io/media/sample.jpg" class="img-responsive paint-exp1"><h1 onclick="experienceHandler(1)" class="screen1-text" id="e-target1"><u>Start Experience</u></h1><p class="screen1-text padded-40" id="e-target2">they\'re naked if they don\'t own a milse... they\'re all naked</p><div><small class="screen1-text">&copy;2022</small></div></div><div class="col-sm-4"></div></div></div>'
get('circle').setAttribute("onclick", "experienceHandler(1)");
function experienceHandler(action){
	switch (action){
		case 1:
		get('background-music').play();
		experience1();
		break;
	}
}
document.addEventListener('mousemove', function(e) {
	  let body = document.querySelector('body');
	  let circle = get('circle');
	  let left = event.pageX;
	  let top = event.pageY;
	  circle.style.left = left + 'px';
	  circle.style.top = top + 'px';
	});
	function playtn(action){
		if (action == 0){
			get('circle').style.borderRadius = "none";
			get('circle').style.width = "250px";
			get('circle').style.height = "100px";
			get('circle').style.mixBlendMode = "none";
			get('circle').style.backgroundColor = "transparent";
			get('circle').style.padding = '50px'
			get('circle').innerHTML='<h3 class="ctw">CLICK TO WATCH</h3>';
			get('circle').setAttribute("onclick", "playtn(1)");
		}
		else if (action == 1){
			get('relationship').play();
		}
		else if (action == 2){
			get('circle').style.borderRadius = "50%";
			get('circle').style.border = "none";
			get('circle').style.width = "20px";
			get('circle').style.height = "20px";
			get('circle').style.mixBlendMode = "difference";
			get('circle').style.backgroundColor = "#fff";
			get('circle').style.padding = '0px'
			get('circle').innerHTML='';
			get('circle').setAttribute("onclick", "");
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
								setTimeout(secondPhase, 5000);
								function secondPhase(){
									get('milse-container').style.backgroundImage = "none";
									setTimeout(sp1, 3000);
									function sp1(){
										get('e-target2').style.opacity = "0";
										get('e-target2').style.transition = "6s";
										setTimeout(sp2, 3000);
										function sp2(){
											get('milse-container').style.backgroundColor = "#F4EBEC";
											setTimeout(sp3, 3000);
											function sp3(){
												get('milse-container').innerHTML = '<div class="container-fluid lg-menu" style="padding:0"><div class="logo-container padded-50" align="center" onmouseover="playtn(2)"><img class="img-responsive main-logo" src="media/trial.png"></div><div class="row"><div class="col-xs-2 col-xs-1-spacer brr navtems"><div class="padded-20" align="center">NEW ARRIVALS</div></div><div class="col-xs-2 col-xs-1-spacer brr navtems" onmouseover="playtn(2)"><div class="padded-20" align="center">MEN</div></div><div class="col-xs-2 col-xs-1-spacer brr navtems" onmouseover="playtn(2)"><div class="padded-20" align="center">WOMEN</div></div><div class="col-xs-2 col-xs-1-spacer brr navtems" onmouseover="playtn(2)"><div class="padded-20" align="center">EXPLORE</div></div><div class="col-xs-2 col-xs-1-spacer brr navtems" onmouseover="playtn(2)"><div class="padded-20" align="center">CLIENT SERVICES</div></div><div class="col-xs-2 col-xs-1-spacer navtems" onmouseover="playtn(2)"><div class="padded-20" align="center">SEARCH</div></div></div><div class="row btt c1c"><div class="col-sm-6 col-xs-1-spacer brr blank-p" onclick="playtn(1)" onmouseover="playtn(0)"><div class="sm-6-spacer" align="center"><video style="width:30vw;height:400px" id="relationship"><source src="media/1.mp4" type="video/mp4"></source></video></div></div><div class="col-sm-6 col-xs-1-spacer" onmouseover="playtn(2)"><div class="sm-6-spacer padded-100 padded-l-10 padded-r-10" align="left"><h1>still counting milse</h1><p>Founded in December 2022</p><p>&nbsp;</p><div class="row"><div class="col-sm-4"><div class="padded-20 fbb navtems col-xs-1-spacer"><small>Start Shopping</small></div></div><div class="col-sm-8"></div></div></div></div></div><div class="informative-div padded-70 c2c btt bbb" align="center" onmouseover="playtn(2)"><p>Defining a new blueprint of client experience, our highly-tailored and meticulous approach is driven by results and grounded by integrity – led by an accomplished team of lawyers with a laser-like focus on litigation, arbitration and investigations.</p><div class="row"><div class="col-sm-4"></div><div class="col-sm-4 padded-30"><div class="padded-20 fbb navtems"><small>Find Out More</small></div></div><div class="col-sm-4"></div></div></div><div class="informative-div bbb c3c" align="center"><p>&nbsp;</p><h1>NEW ARRIVALS</h1><p>&nbsp;</p><div class="row"><div class="col-sm-3"><div class="padded-30 brr blank2-p"><h3>PRODUCT-1</h3><img src="media/CS.gif" class="img-responsive promage"><h3>PRICE-1</h3></div></div><div class="col-sm-3"><div class="padded-30 blank2-p"><h3>PRODUCT-2</h3><img src="media/CS.gif" class="img-responsive promage"><h3>PRICE-2</h3></div></div><div class="col-sm-3"><div class="padded-30 blank2-p"><h3>PRODUCT-3</h3><img src="media/CS.gif" class="img-responsive promage"><h3>PRICE-3</h3></div></div><div class="col-sm-3"><div class="padded-30 blank2-p"><h3>PRODUCT-4</h3><img src="media/CS.gif" class="img-responsive promage"><h3>PRICE-4</h3></div></div></div><p>&nbsp;</p></div><div class="informative-div col-xs-1-spacer padded-30 bbb" align="center"><h1>ABOUT</h1></div><div class="row col-xs-1-spacer"><div class="col-sm-6 brr"><div class="sm-6-spacer padded-30" align="left"><h3>A True Partner</h3><p>For us, collaboration and group achievement outshine the more traditional siloed and disjointed ways of working. Transparency and collegiality are key – ensuring effective communication, cohesion and loyalty between us, and you. This unique and open-minded approach means we’re able to look beyond the conventional field of vision and identify the opportunities our competitors can’t.</p></div></div><div class="col-sm-6"><div class="sm-6-spacer padded-30" align="left"><p>“Creative problem solvers who bring first-class litigation skills to bear on any problem. They are always willing to go the extra mile to get things done and are highly professional in all of their dealings.”</p></div></div></div><div class="informative-div padded-50 btt bbb c3c" align="center"><h1>CONTACT</h1></div><div class="row bbb c3c"><div class="col-sm-6 blank-p brr"><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p></div><div class="col-sm-6" style="padding:0"><div class="sm-6-spacer bbb" align="center"><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p></div><div class="row"><div class="col-sm-6 brr"><div class="sm-6-spacer" align="left"><h3>Nairobi, KE</h3><div class="padded-t-80"><small>+254-792-284-381</small><br><small>no-reply.milse@proton.me</small><p>&nbsp;</p></div></div></div><div class="col-sm-6"><div class="sm-6-spacer" align="left"><h3>Dubai, UAE</h3><div class="padded-t-80"><small>+971-52-984-7364</small><br><small>no-reply.milse@proton.me</small><p>&nbsp;</p></div></div></div></div></div></div><div class="row c4c"><div class="col-sm-6 brr"><div class="sm-6-spacer" align="center"><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><div class="row"><div class="col-sm-8"></div><div class="col-sm-4"><img src="media/trial2.png" class="img-responsive"></div></div></div></div><div class="col-sm-6"><div class="sm-6-spacer" align="center"><div class="row bbb"><div class="col-sm-6 brr"><div class="sm-6-spacer" align="left"><small>New Arrivals</small><br><small>Men</small><br><small>Women</small><br><small>Explore</small><br><small>Client Services</small><br><small>Home</small></div></div><div class="col-sm-6 paddedt-30"><div class="sm-6-spacer" align="left"><small>Instagram</small><br><small>TikTok</small></div></div></div><div class="row"><div class="col-sm-6 padded-100 padded-l-10 padded-t-10 brr"><div class="sm-6-spacer" align="left"><small>Privacy Policy</small><br><small>Legal Notices</small><br><small>Cookie Policy</small></div></div><div class="col-sm-6 padded-t-80"><div class="sm-6-spacer" align="left">Designed and Run by Seobli Coop</div></div></div></div></div></div></div>';
											}
										}
									}
								}
							}
						}
					}
				}
			}
		}
	}
}
