const randomNumber = () => Math.floor(Math.random() * 100);

const randomSign = () => {
  const arr = ['-', '+', '*'];
  return arr[Math.floor(Math.random() * 3)];
};

const answer = (number1, number2, sign) => {
  if (sign === '+') {
    return number1 + number2;
  } if (sign === '-') {
    return number1 - number2;
  }
  return number1 * number2;
};

const gameCalc = () => {
  const arr = [['What is the result of the expression?']];
  for (let i = 0; i < 3; i += 1) {
    const number1 = randomNumber();
    const number2 = randomNumber();
    const sign = randomSign();
    const correctAnswer = answer(number1, number2, sign);
    arr.push([`${number1} ${sign} ${number2}`, correctAnswer]);
  }
  return arr;
};

export default gameCalc;
