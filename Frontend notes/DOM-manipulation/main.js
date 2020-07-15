let sqbtn=document.getElementById('sq-button');
sqbtn.addEventListener('click',insertsquare);



function insertsquare(){

}

function randomval(min,max){
    return Math.floor(Math.random() * (max-min))+min;
}