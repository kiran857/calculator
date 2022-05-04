function clearScreen(){
    document.getElementById("result").value="";
} 

function display(value){
    document.getElementById("result").value +=value;
}

function calculate(){
   var calculation= document.getElementById("result").value;
   var result=eval(calculation);
   document.getElementById("result").value=result;

}