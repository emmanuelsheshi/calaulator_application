// alert("hello");

let number1=0;
let number2=0;

let operator_ = '+';

document.getElementById('value').innerHTML = " ";



function write1(){
number1 = 1;
document.getElementById('value').innerHTML += number1;
return number1;

}// end of the fucntion



function write2(){
    number2 = 2;
    document.getElementById('value').innerHTML += number2;
    return number2;
    
    }// end of the fucntion
    

        
function write_plus(){

    number1 = 1;
    number2 = 2;
    document.getElementById('value').innerHTML += operator_;



}

function clearMe(){

    number1 = 0;
    number2 = 0;
    document.getElementById('value').innerHTML = " ";



}



function add(){

  let val = document.getElementById('value').innerHTML;

  sum_ = eval(val) 
 

 document.getElementById('value').innerHTML = sum_;


}