
var x = 0;
var y = 0;
var z = 0;

var posX = 0;
var posY = 0;
var posZ = 0;

var speed = 40;
var speedR = 0.4;

function update() {
	var p = document.querySelector('#vaisseau').style;
	console.log(x, y, z, posX, posY, posZ);
	p.filter = " sepia(" + Math.abs(posZ / 10) + "%)"; 
	// console.log(p.filter.match(/sepia*/));
	p.transform = "rotateX(" + x + "deg) " + "rotateZ(" + z + "deg) " + "rotateY(" + y + "deg)" + "translateX(" + posX + "px) " + "translateZ(" + posZ + "px) " + "translateY(" + posY + "px)";
};
document.addEventListener("wheel", function (ev) {
	var val = ev.deltaY;
	val < 0 ? posZ += speed : posZ -= speed;
	update();
});
document.addEventListener('keydown', function (ev) {
	console.log(ev.key);
	switch (ev.key) {
		case 'ArrowDown':
			x += speedR;
			break;
		case 'ArrowUp':
			x -= speedR;
			break;
		case 'ArrowLeft':
			y += speedR;
			break;
		case 'ArrowRight':
			y -= speedR;
			break;
		case 'z':
			posY -= speed;
			break;
		case 's':
			posY += speed;
			break;
		case 'q':
			posX -= speed;
			break;
		case 'd':
			posX += speed;
			break;
		case ' ':
			posX = posY = posZ = x = y = z = 0;
			break;
		default:
	};
	update();
});
var nbRocket = 0;
document.addEventListener('click', function (e) {
	var pos = document.querySelector("#vaisseau").getBoundingClientRect();
	var rocket = document.createElement('object', true);
	nbRocket++;
	console.log(pos);
	rocket.id = nbRocket;
	rocket.type = "image/svg+xml";
	rocket.data = "svg/rocket.svg";
	rocket.style.position = "absolute";
	rocket.style.top = pos.top;
	rocket.style.left = pos.left + pos.width - 50;
	rocket.width = 50;
	rocket.height = 50;
	// rocket.style.transform = "rotateZ(90deqg)";
	// rocket.style.transform=				"rotateX("+x+"deg) "+"rotateZ("+z+90+"deg) "+"rotateY("+y+"deg)" + "translateX("+posX+"px) "+"translateZ("+posZ+"px) "+"translateY("+posY+"px)";
	rocket.style.animation = "rocket 5s ease-in-out 0s 1 forwards";
	document.body.appendChild(rocket);
	setTimeout(function () {
		console.log("child removed");
		document.body.removeChild(rocket);
	}, 1000);
});

for (var i = 20 - 1; i >= 0; i--) {
	var elem = document.createElement('div');
	document.body.appendChild(elem);
	var s = `
		display:inline-block;
		border-radius:100%;
		z-index: -1000;
		position: relative;
		top: ${Math.random()*5 -20}vh;
		left: ${Math.random()*100}vw;
		width: ${Math.random() * 10+10}px;
		height: ${Math.random() * 10+10}px;
		background: radial-gradient(white, #333, #ddd, transparent);
		animation: goBack 10s linear 0s infinite;
	`;
	console.log(s);
	elem.id="stars"+i;
	elem.style.cssText=s;
}

// setInterval(function() {
// 	stars.style.transform="translateX"
// }, 1000)
