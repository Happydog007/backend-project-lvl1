import readlineSync from 'readline-sync';

const startGame = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

const question = (number) => `Question: ${number}`;

const answer = () => (readlineSync.question('Your answer: '));

const youLose = (answerUser, correctAnswer, name) => {
  if (answerUser === 'yes') {
    console.log(`${answerUser} is wrong answer ;(. Correct answer was ${correctAnswer}.\nLet's try again, ${name}!`);
  } else {
    console.log(`${answerUser} is wrong answer ;(. Correct answer was ${correctAnswer}.\nLet's try again, ${name}!`);
  }
};

const youWin = (name) => console.log(`Congratulations, ${name}!`);

const game = (gameArr) => {
  const name = startGame();
  console.log(gameArr[0][0]);
  for (let i = 1; i <= 3; i += 1) {
    console.log(question(gameArr[i][0]));
    const answerUser = answer();
    if (answerUser === String(gameArr[i][1])) {
      console.log('Correct!');
    } else {
      youLose(answerUser, gameArr[i][1], name);
      return;
    }
  }
  youWin(name);
};

export default game;
