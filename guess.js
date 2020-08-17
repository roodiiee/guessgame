var number = Math.floor(Math.random() * 25);
var guess;
console.log(number);
document.getElementById("submit").onclick = function(){
    var guess = document.getElementById("guessField").value;
    if(guess==number){
        alert("Gotcha! You Guessed The Right Number");
    }
    else if(guess!= number){
        alert("You Got Wrong Guess");
        document.getElementById("guessFieldd").value = number;
    }
    else{
        alert("You Got Wrong Guess");
    }
}
function refresh(){
    location.reload();
}
function cancel(){
    var con = prompt("Do You Want To Exit (Y/N)");
    if(con=="y" || con =="Y"){
        window.close();
    }
    else if(con=="n"|| con=="N"){
        refresh();
    }
    else{
        refresh();
    }
    
}
