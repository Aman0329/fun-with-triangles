const input=document.querySelectorAll('.inputs');
const button=document.querySelector('#btn-hyp');
const output=document.querySelector('.out');
const button2=document.querySelector('#btn-area');
const output2=document.querySelector('.out2');
function square(a,b){
    var sqr=a*a+b*b;
    return sqr;
}
function hypotenuse(){
    var sqr=square(Number(input[0].value),Number(input[1].value));
    var hypo=Math.sqrt(sqr);
    output.innerText="Hypotenuse is "+hypo;

}
function area(){
    var area=0.5*Number(input[0].value)*Number(input[1].value);
    output2.innerText="Area of triangle is "+area;
}

button.addEventListener('click',hypotenuse);
button2.addEventListener('click',area);