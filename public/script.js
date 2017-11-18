let options = document.getElementById('options');


var destroyFunction = function(){
	this.remove()
}

var createRoom = function(){
	document.getElementById('label').style.opacity = 1;
	document.getElementById('roomId').style.zIndex = 1;
	var continueButton = document.createElement("div");
	continueButton.className = "continueButton";
	document.getElementById('body').appendChild(continueButton);

}

var createPlaylist = function(){
	document.getElementById('roomId').addEventListener("animationend", destroyFunction);
	document.getElementById('roomId').style.WebkitAnimation = "translateIdToBottom 0.35s 1";
	document.getElementsByClassName('continueButton')[0].remove()
	document.getElementById('create').innerHTML = document.getElementById('input1').value;
	document.getElementById('create').style.marginTop = 0;
	var title = document.getElementById('muse');
	title.className = "joinCode"
	title.innerHTML = "CODE:";
	var addSongButton = document.createElement("div");
	addSongButton.className = "addSongButton";
	document.getElementById('body').appendChild(addSongButton);
	document.getElementsByClassName('addSongButton')[0].addEventListener('click', searchSong)
}

var searchSong = function(){
	var searchBar = document.createElement("input");
	searchBar.className += "searchBar";
	searchBar.placeholder = "Search for a song to add"
	document.getElementById('body').appendChild(searchBar);
	document.getElementsByClassName('searchBar')[0].style.WebkitAnimation = "showSearchBar 0.35s 1";
	document.getElementsByClassName('addSongButton')[0].removeEventListener('click', searchSong)
	document.getElementsByClassName('addSongButton')[0].addEventListener('click', searchFunction)
}

// var returnResults(songName){
	
// }

var searchFunction = function(){
	var title = document.getElementById('muse');
	title.innerHTML = "Search Results For";
	document.getElementById('create').innerHTML = document.getElementsByClassName('searchBar')[0].value;
	document.getElementById('body').appendChild(searchBar);
	document.getElementsByClassName('searchBar')[0].addEventListener("animationend", destroyFunction);
	document.getElementsByClassName('searchBar')[0].style.WebkitAnimation = "hideSearchBar 0.35s 1";
	returnResults(document.getElementsByClassName('searchBar')[0].value);
}

options.addEventListener('click', function(e){
	if (e.target.id == "create"){
		document.getElementById('join').addEventListener("animationend", destroyFunction);
		document.getElementById('backgroundImage').addEventListener("animationend", destroyFunction);
		document.getElementById('muse').addEventListener("animationend", createRoom);
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

document.getElementById('input1').addEventListener('keydown', function(){
	if(this.value.length > 3){
		document.getElementsByClassName('continueButton')[0].className += ' continueGreen';
		document.getElementsByClassName('continueButton')[0].addEventListener('click', createPlaylist)
	}
});
