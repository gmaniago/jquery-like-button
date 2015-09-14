'use strict';

 $(document).ready(start);

function start(){

var $likeButton = $('#likebtn');
var counts = 0;

$likeButton.on('click', addClick);

function addClick(){
	counts++;
	if(counts === 1){
			$likeButton.html(counts + ' Like');
	}
	else{
		$likeButton.html(counts + ' Likes');
	}
}

}
