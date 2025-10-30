const buttons=document.querySelectorAll('button');
const playerScoreE1=document.getElementById("user-score");
const computerScoreE1=document.getElementById("computer-score"); 
const resultE1=document.getElementById("result");
let playerScore=0;
let computerScore=0;
buttons.forEach(button=>{
  button.addEventListener('click',()=>{
   const result=playRound(button.id,computerPlay());
   resultE1.textContent= result;
  // console.log(result);
  });
});

function computerPlay(){
  const choices=["rock","paper","scissors"];
  const randomChoice=Math.floor(Math.random()*choices.length);
  return choices[randomChoice];
}
function playRound(playerSelection,computerSelection){
  if(playerSelection==computerSelection){
    return "It's a Tie";
  }
  else if(
    (playerSelection==="rock" && computerSelection==="scissor") || (playerSelection==="paper" && computerSelection==="rock" )|| (playerSelection==="scissors" && computerSelection==="paper")){
      playerScore++;
      playerScoreE1.textContent=playerScore;
      return "You Win! "+playerSelection+"beats "+ computerSelection;
    }
  else{
    computerScore++;
    computerScoreE1.textContent=computerScore;
      return "You Lose "+ computerSelection+" beats"+playerSelection;
    }
  
}
