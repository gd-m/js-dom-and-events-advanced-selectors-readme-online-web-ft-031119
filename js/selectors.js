// declare your functions here...
$('img');
$('.pics');
$('#baby-ninja');
$('ul li');
$('div img:first-child');
$("img[alt='the beatles making faces']");
$('div:last');


function paragraphSelector(){
	return $('p');
}

function lastImageSelector(){
	return  $('img:last');
}

function ninjaBabySelector() {
	return  $('#baby-ninja');
}

function divSelector(){
return $('div[class = pics]');

}

function firstListItem(){
	return  $('ul[id = pic-list] li:first-child');

}