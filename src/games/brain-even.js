const randomNumber = () => Math.floor(Math.random() * 100);

const gameArr = () => {
  const arr = [['Answer "yes" if the number is even, otherwise answer "no".']];
  for (let i = 0; i < 3; i += 1) {
    const number = randomNumber();
    const correctAnswer = number % 2 === 0 ? 'yes' : 'no';
    arr.push([String(number), correctAnswer]);
  }
  return arr;
};

export default gameArr;
