const things = ["rock", "paper", "scissors"];
let playerRound = 0;
let computerRound = 0;

const computerPlay = () => {
  let computerChoice = things[Math.floor(Math.random() * things.length)];
  return computerChoice;
};

const playerPlay = () => {
  const playerChoice = prompt(
    "Choose your weapon wisely: rock, paper, or scissors?"
  );
  const playerChoiceLowerCase = playerChoice.toLowerCase();
  if (
    playerChoiceLowerCase === "rock" ||
    playerChoiceLowerCase === "paper" ||
    playerChoiceLowerCase === "scissors"
  ) {
    return playerChoiceLowerCase;
  } else {
    alert(
      "Focus, soldier!\nChoose only one of the following:\nRock\nPaper\nScissors"
    );
    return playerPlay();
  }
};

const playRound = (playerSelection, computerSelection) => {
  switch (true) {
    case playerSelection === "rock" && computerSelection === "scissors":
      playerRound++;
      console.log(
        `Your ${playerSelection} crushed the Evil AI Lord's ${computerSelection}. 
        You won this round!\n\n[Evil AI Lord]\n"Noooooooooo, my scissors! 
        ... I have underestimated you, but I will not be defeated so easily!"`
      );
      alert(
        `Your ${playerSelection} crushed the Evil AI Lord's ${computerSelection}. You won this round!\n\n[Evil AI Lord]\n"Noooooooooo, my scissors! ... I have underestimated you, but I will not be defeated so easily!"`
      );
      console.log(`You ${playerRound} - ${computerRound} Evil AI Lord`);
      alert(`You ${playerRound} - ${computerRound} Evil AI Lord`);
      break;

    case playerSelection === "scissors" && computerSelection === "paper":
      playerRound++;
      console.log(
        `Your ${playerSelection} have cut through Evil AI Lord's ${computerSelection}.
         You won this round!\n\nEvil AI Lord]\n"My precious organic paper..
          YOU WILL PAY FOR THIS!"`
      );
      alert(
        `Your ${playerSelection} have cut through Evil AI Lord's ${computerSelection}. You won this round!\n\nEvil AI Lord]\n"My precious organic paper.. YOU WILL PAY FOR THIS!"`
      );
      console.log(`You ${playerRound} - ${computerRound} Evil AI Lord`);
      alert(`You ${playerRound} - ${computerRound} Evil AI Lord`);
      break;

    case playerSelection === "paper" && computerSelection === "rock":
      playerRound++;
      console.log(
        `Your ${playerSelection} smothered Evil AI Lord's ${computerSelection}.
         You won this round!\n\n[Evil AI Lord]\n"Ha. Not bad, 
         but you'll need more than that to defeat me!"`
      );
      alert(
        `Your ${playerSelection} smothered Evil AI Lord's ${computerSelection}. You won this round!\n\n[Evil AI Lord]\n"Ha. Not bad, but you'll need more than that to defeat me!"`
      );
      console.log(`You ${playerRound} - ${computerRound} Evil AI Lord`);
      alert(`You ${playerRound} - ${computerRound} Evil AI Lord`);
      break;

    case playerSelection === "rock" && computerSelection === "paper":
      computerRound++;
      console.log(
        `Your ${playerSelection} has been trapped by Evil AI Lord's ${computerSelection}.
         You lost this round!\n\n[Evil AI Lord]\n"HAHAHAHAHAHA. MWAHAHAHAHA. 
         You thought you could win?"`
      );
      alert(
        `Your ${playerSelection} has been trapped by Evil AI Lord's ${computerSelection}. You lost this round!\n\n[Evil AI Lord]\n"HAHAHAHAHAHA. MWAHAHAHAHA. You thought you could win?"`
      );
      console.log(`You ${playerRound} - ${computerRound} Evil AI Lord`);
      alert(`You ${playerRound} - ${computerRound} Evil AI Lord`);
      break;

    case playerSelection === "paper" && computerSelection === "scissors":
      computerRound++;
      console.log(
        `Your ${playerSelection} has been shredded to pieces by Evil AI Lord's ${computerSelection}.
         You lost this round!\n\n[Evil AI Lord]
         \n"Fool, your little tricks are no match for me."`
      );
      alert(
        `Your ${playerSelection} has been shredded to pieces by Evil AI Lord's ${computerSelection}. You lost this round!\n\n[Evil AI Lord]\n"Fool, your little tricks are no match for me."`
      );
      console.log(`You ${playerRound} - ${computerRound} Evil AI Lord`);
      alert(`You ${playerRound} - ${computerRound} Evil AI Lord`);
      break;

    case playerSelection === "scissors" && computerSelection === "rock":
      computerRound++;
      console.log(
        `Your ${playerSelection} have been crushed by the Evil AI Lord's ${computerSelection}.
         You lost this round!\n\n[Evil AI Lord]\n"Consider yourself honored 
         to have faced me, little knight."`
      );
      alert(
        `Your ${playerSelection} have been crushed by the Evil AI Lord's ${computerSelection}. You lost this round!\n\n[Evil AI Lord]\n"Consider yourself honored to have faced me, little knight."`
      );
      console.log(`You ${playerRound} - ${computerRound} Evil AI Lord`);
      alert(`You ${playerRound} - ${computerRound} Evil AI Lord`);
      break;

    case playerSelection === computerSelection:
      console.log(
        `You both chose ${playerSelection}. This round is a tie, but the battle must continue.
        \n\n[Evil AI Lord]\n"Not bad. But not good enough either. HAHAHAHA."`
      );
      alert(
        `You both chose ${playerSelection}. This round is a tie, but the battle must continue. \n\n[Evil AI Lord]\n"Not bad. But not good enough either. HAHAHAHA."`
      );
      console.log(`You ${playerRound} - ${computerRound} Evil AI Lord`);
      alert(`You ${playerRound} - ${computerRound} Evil AI Lord`);
      break;
    default:
  }
};

const game = () => {
  alert(
    "The Evil AI Lord has kidnapped Branko and threatens to unleash his Evil AI minions upon us!\nYou have been chosen to fight for our future in a duel of Rock, Paper, and Scissors.\n\nDo you wish to proceed to the Great Hall?"
  );
  alert(
    '[Evil AI Lord]\n"Do you have what it takes to defeat me, small fry? HAHAHAHA."'
  );
  for (let i = 0; i < 5; i++) {
    alert(`Round ${i + 1}`);
    const playerSelection = playerPlay();
    console.log("This is my choice", playerSelection);
    const computerSelection = computerPlay();
    console.log("This is the computer choice", computerSelection);
    playRound(playerSelection, computerSelection);
  }
  if (playerRound > computerRound) {
    alert(
      `ULTIMATE VICTORY\nYou have annihilatd the Evil AI Lord! The kingdom is saved and Branko is freed. You are celebrated as the greatest hero of all time!\n\nYou ${playerRound} - ${computerRound} Evil AI`
    );
  }
  if (playerRound < computerRound) {
    alert(
      `FINAL DEFEAT\nDespite your efforts, the Evil AI Lord has triumphed. The kingdom falls into darkness and Branko remains imprisoned. We can only hope for a hero to rise again ...\n\nYou ${playerRound} - ${computerRound} Evil AI`
    );
  }
  if (playerRound === computerRound) {
    alert(
      `DRAW\nThe battle ends in a stalemate. The kingdom remains on edge, awaiting the next showdown between good and evil.\n\n[Evil AI Lord]\nHA! You've got some backbone.. But I will crush you next time! HAHAHAHA.\n\nYou ${playerRound} - ${computerRound} Evil AI`
    );
  }
};

game();
