const inputss=document.querySelectorAll('.inputs');
const button=document.querySelector('#btn');
var output=document.querySelector('.out');
function istriangle(){
    let sum=Number(inputss[0].value)+Number(inputss[1].value)+Number(inputss[2].value);
    console.log(sum);
    if(sum===180){
        output.innerText="yay! Its a Triangle";

    }
    else{
        output.innerText="oopss! Its not a triangle";
    }
};
button.addEventListener('click',istriangle);
