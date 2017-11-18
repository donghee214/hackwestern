let options = document.getElementById('options');


var destroyFunction = function(){
	this.remove()
	document.getElementById('label').style.opacity = 1;
	document.getElementById('roomId').style.zIndex = 1;
}


options.addEventListener('click', function(e){
	if (e.target.id == "create"){
		document.getElementById('join').addEventListener("animationend", destroyFunction);
		document.getElementById('backgroundImage').style.WebkitAnimation = "translateUp 0.35s 1";
		document.getElementById('join').style.WebkitAnimation = "translateDown 0.35s 1";
		document.getElementById(e.target.id).style.WebkitAnimation = "translateTopTitleCreate 0.35s 1";
		document.getElementById('muse').style.WebkitAnimation = "translateTop 0.35s 1";
		// document.getElementById('backgroundImage').addEventListener("animationend", destroyFunction);

	}
	else if(e.target.id == "join"){
		console.log("join")
	}

	
});


