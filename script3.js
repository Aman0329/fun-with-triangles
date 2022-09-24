const input=document.querySelectorAll('.inputs');
const button2=document.querySelector('#btn-area');
const output2=document.querySelector('.out2');
function area(){
    var area=0.5*Number(input[0].value)*Number(input[1].value);
    output2.innerText="Area of triangle is "+area;
}


button2.addEventListener('click',area);