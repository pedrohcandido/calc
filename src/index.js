var LASTRESULT

function onSubmit(event){
	event.preventDefault();
}
const form = document.querySelector("form");
form.addEventListener("submit", onSubmit);

function input(number){
	if (LASTRESULT){
			clean();
		}
	let beforeNumber = document.getElementById("result").value;
	console.log(beforeNumber)

	if( beforeNumber == "" && (number == "+" || number == "-" || number == "*" || number == "/") ){
		return;
	}

	if( beforeNumber.slice(-1) == "+" || beforeNumber.slice(-1) == "-" || beforeNumber.slice(-1) == "*" || beforeNumber.slice(-1) == "/" ){
		if (beforeNumber.slice(-1) == number){
			return;
		}
	}
	document.getElementById("result").value = beforeNumber + number;
}

function clean(){
	document.getElementById("result").value = null;
	LASTRESULT = null
}

function calculate(){
	let result
	result = document.getElementById("result").value;

	if( result ) {
		document.getElementById("result").value = eval(result)

		if(document.getElementById("result").value != result){
			LASTRESULT = document.getElementById("result").value;
		}
	}
	else{
		alert("Nada para calcular!!!")
	}
}