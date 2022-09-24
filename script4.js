const input=document.querySelectorAll('.inputs');
const button=document.querySelector('#btn-hyp');
const output=document.querySelector('.out');
function square(a,b){
    var sqr=a*a+b*b;
    return sqr;
}
function hypotenuse(){
    var sqr=square(Number(input[0].value),Number(input[1].value));
    var hypo=Math.sqrt(sqr);
    output.innerText="Hypotenuse is "+hypo;

}
button.addEventListener('click',hypotenuse);