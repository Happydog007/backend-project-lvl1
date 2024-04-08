const randomNumber = () => Math.floor((Math.random() * 100) + 1);

const getAllDividers = (dividers) => {
  let i = dividers[0] - 1;
  while (i > 0) {
    if (dividers[0] % i === 0) {
      dividers.push(i);
    }
    i -= 1;
  }
  return dividers;
};

const calculateGcd = (allDividers, maxNumber) => {
  for (let i = 0; i < allDividers.length; i += 1) {
    if (maxNumber % allDividers[i] === 0) {
      return allDividers[i];
    }
  }
};

const gcd = () => {
  const arr = [['Find the greatest common divisor of given numbers.']];
  for (let i = 0; i < 3; i += 1) {
    const number1 = randomNumber();
    const number2 = randomNumber();
    let maxNumber = 0;
    const dividers = [];
    if (number1 < number2) {
      dividers.push(number1);
      maxNumber = number2;
    } else {
      dividers.push(number2);
      maxNumber = number1;
    }
    const allDividers = getAllDividers(dividers);
    const correctAnswer = calculateGcd(allDividers, maxNumber);
    arr.push([`${number1} ${number2}`, correctAnswer]);
  }
  return arr;
};

export default gcd;
