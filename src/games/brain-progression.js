const randomSmallNumber = () => Math.floor((Math.random() * 9) + 1);
const randomBigNumber = () => Math.floor(Math.random() * 100);

const createArray = () => {
  const arr = [randomBigNumber()];
  const addNumber = randomSmallNumber();
  for (let i = 0; i < 9; i += 1) {
    arr.push(arr[i] + addNumber);
  }
  return arr;
};

const progression = () => {
  const arr = [['What number is missing in the progression?']];
  for (let i = 0; i < 3; i += 1) {
    const littleArr = createArray();
    const unknownNumber = randomSmallNumber();
    const correctAnswer = littleArr[unknownNumber];
    littleArr[unknownNumber] = '..';
    const finishArr = littleArr.join(' ');
    arr.push([finishArr, correctAnswer]);
  }
  return arr;
};

export default progression;
