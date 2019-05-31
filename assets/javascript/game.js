var getRandomChar = function(){

    var chars = "abcdefghiklmnopqrstuvwxyz";
    var rnum = Math.floor(Math.random() * chars.length);
    var compG = chars.charAt(rnum);
    return compG;

};




var userG = document.getElementById('guessesSoFar');

var guesLeft = document.getElementById("guessesLeft");

var wins = document.getElementById("wins");

var losses = document.getElementById("losses");

wins.textContent=0;
var w=0;

losses.textContent=0;
var l=0;

guesLeft.textContent=9;
var i=9;



document.onkeyup = function(event){
myFun(event.key);

}

var myFun = function(uChar){
    if(i!==0){
        console.log(i);

        userG.textContent = userG.textContent + " "+uChar; 

        var compGG = getRandomChar();

        console.log(compGG+" "+uChar);
        
        if(compGG===uChar){
            
            wins.textContent=++w;
            console.log("wins"+wins);
        }
        else{
        
            losses.textContent=++l;
            console.log("losses"+losses);
        }


        guesLeft.textContent=i;
        i--;
    }

}



    



