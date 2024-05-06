for(let i = 1; i <= 20; i++){
if(i==12){
    break
}else{
    console.log(i);
}}
const minNum = 1;
const maxNum = 100;
const answer =Math.floor( Math.random() *(maxNum-minNum + 1)+minNum);
console.log(answer);
let attempts = 0;
let guess;
let running = true;
while(running){
    guess = window.prompt(`Guess a number bettwen ${minNum} - ${maxNum}`);
    guess =Number(guess);
   if(isNaN(guess)){
    window.alert(`Please enter the value number`)
   }else if(guess<minNum || guess>maxNum) {
   alert(`Please enter the value number AGAIN`)
   }else{
    attempts++;
    if(guess<answer){
        alert(`TRY AGAIN, ITS TOO LOW`);
    }else if(guess>answer){
       alert(`TRY AGAIN, ITS TOO HEIGHT`); 
    }else{
alert(`CORRECT, THE ANSWER WAS ${answer}. It took you the ${attempts}atempts`);
running = false;
    }
   }

}
