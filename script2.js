const quizform=document.querySelector('.form');
const button=document.querySelector('#btnn');
const correctans=["acute triangle","70","80,50,50","60,60,60"];
let output=document.querySelector('.out');
function results(){
    
    let score=0;
    let index=0;
    const formresult=new FormData(quizform);
    for(var value of formresult.values()){
        if(correctans[index]===value){
        score=score+1;
        }
        index=index+1;
    }
    output.innerText="your score is "+ score;
}
    
        
    
button.addEventListener('click',results);