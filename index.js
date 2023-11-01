/** Quiz APP */

let readlineSync = require("readline-sync");
let kuler = require("kuler");

let score = 0;

let userName = readlineSync.question("What's your name: ")
console.log(kuler(`Hello ${userName} Welcome to The Game... Let's Begin🥳`,"#dc2626"));
console.log("--------------------------");
console.log("Please select an option from the following-(a/b/c/d): ")


/** Creating a Database */
const database={
  data: [
    {
      question: `Best Movie of All Time...`,
      option: {
        a: "Shutter Island",
        b: "Inception",
        c: "Django Unchained",
        d: "Spiderman: No Way Home",
        e: "None"

      },
      correctAnswer: "e",
    },
    {
      question: `Is America Safe?`,
      option: {
        a: "Nope",
        b: "Nay",
        c: "Obviously Not",
        d: "All Of The Above"        
      },
      correctAnswer: "d"
    },
    {
      question: `Is GoT Best Show of All Time?`,
      option: {
        a: "Ahh yess",
        b: "Can Decide",
        c: "No",
        d: "Breaking Bad"
      },
      correctAnswer: "d"

    },
    {
      question: `Does This Quiz Matter? `,
      option: {
        a: "No",
        b: "No*2",
        c: "No^2^2",
        d: "No*infinity"
      },
      correctAnswer: "d"

    }

  ]
}
  /** Creating Leaderboard */
const leaderBoard = {
  data: [
    {
      name: "Raju",
      score: 2
    },
    {
      name: "Punjabi",
      score: 5
    },
    {
      name: "Ajay",
      score: 1
    }
  ]
}

function playGame(userAnswer,correctAnswer){
  if(userAnswer === correctAnswer){
    console.log(kuler("Correct Answer","#059669"));
    score+=1;
  }else{
    console.log(kuler("Incorrect Answer","#b91c1c"));
    console.log(kuler(`Correct Answer is ${correctAnswer}`,"#1d4ed8"));
  }
}



function showQuestion(database){
  for(let i=0;i<database.data.length;i++){
    console.log(`\nQ${i+1} - ${database.data[i].question}\n`);
    for(let key in database.data[i].option){
      console.log(`${key} - ${database.data[i].option[key]}`)
    }

    let userAnswer = readlineSync.question("\nEnter your answer - (a/b/c/d) - ").toLowerCase();

    playGame(userAnswer, database.data[i].correctAnswer)

  }
}

function HighScorer(leaderBoard){
  leaderBoard.data.push({name: userName, score: score});
  let SortedList = leaderBoard.data.sort((a,b)=> b.score-a.score)
  console.log(kuler("\nSee Your Position On Leaderboard 🎉🎉","#fde047"))
  for(let leader of SortedList){
    console.log(`${leader.name} - ${leader.score}`)
  }

}



showQuestion(database)
console.log(`\nYour score is - 🥳🎉${score}`)

HighScorer(leaderBoard)

      
    
  



