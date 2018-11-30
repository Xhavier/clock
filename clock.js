function owo(tim) {
    return (tim.getMinutes() < 10 ? '0' : '') + tim.getMinutes();
};

function uwu(tim) {
    return (tim.getSeconds() < 10 ? '0' : '') + tim.getSeconds();

};

function kiwi(tim) {
    return (tim.getHours() < 10 ? '0' : '') + tim.getHours();

};

function clocc(){
	var tim = new Date();
	var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
	document.querySelector("#clocc").innerHTML = tim.getFullYear() + " " + months[tim.getMonth()] + " " + tim.getDate() + " " + kiwi(tim) + ":" + owo(tim) + ":" + uwu(tim) + ":" + tim.getMilliseconds();
	}

var interval = setInterval(function(){clocc()},1); 