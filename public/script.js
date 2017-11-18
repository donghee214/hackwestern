


let options = document.getElementById('options');

options.addEventListener('click', function(e){
	if (e.target.id == "create"){
		document.getElementById('backgroundImage').className += 'translateUp';
		document.getElementById('join').className += 'translateDown';
	},
	else if(e.target.id == "join"){
		console.log("join")
	}
	
});

