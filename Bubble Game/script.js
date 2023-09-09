var score = 0;
var timer = 60;
var hitrn = 0;
function makebubble(){
    var x = "";
    for(var i = 0; i < 160 ; i++ )
    {
        var ran = Math.floor(Math.random()*100);
        x = x + `<div class="bubble">${ran}</div>`;     
    }
    document.querySelector("#display-container").innerHTML = x;
}
function runtimer(){
    var interval = setInterval(function(){
        if(timer>0)
        {
            timer--;
            document.querySelector("#timerval").textContent = timer; 
        }
        else
        {
            document.querySelector("#display-container").innerHTML = `<h2>Game Over</h2>`;
            clearInterval(interval);
            document.getElementById("gameOverSound").play();
        }    
    },1000)    
}
function getNewHit(){
    hitrn = Math.floor(Math.random()*100);
    document.querySelector("#Hitval").textContent = hitrn;
}
function AddScore(){
    score = score + 10;
    document.querySelector("#scoreval").textContent = score;
    document.getElementById("scoreSound").play();
}

document.querySelector("#display-container").addEventListener("click",function(details){
    var clickednum = (Number(details.target.textContent));
    if(clickednum === hitrn)
    {
        AddScore();
        getNewHit();
        makebubble();
    }
})

makebubble();
runtimer();
getNewHit();