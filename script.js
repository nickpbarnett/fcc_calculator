function addDigit(val){
	document.Calc.Display2.value += val;
}

function calcAns(){
	x=document.Calc.Display2.value;
	ans=eval(x)
	document.Calc.Display1.value = ans;

}


function clearDisplay(){
	document.Calc.Display1.value="";
	document.Calc.Display2.value="";

}