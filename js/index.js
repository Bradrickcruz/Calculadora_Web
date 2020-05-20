function insert(num){
	document.form.textview.value = document.form.textview.value + num
}

function equal(){
	var expression = document.form.textview.value
	if(expression){
		document.form.textview.value = eval(expression)	
	}
}

function clean(){
	document.form.textview.value = "";
}				

function back(){
	var expression = document.form.textview.value
	document.form.textview.value = expression.substring(0,expression.length-1)
}