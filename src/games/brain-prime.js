const randomNumber = () => Math.floor(Math.random() * 1000);

const isPrime = (number) => {
  for (let i = 2; i < number / 2; i += 1) {
    if (number % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};

const prime = () => {
  const arr = [['Answer "yes" if given number is prime. Otherwise answer "no".']];
  for (let i = 0; i < 3; i += 1) {
    const number = randomNumber();
    const correctAnswer = isPrime(number);
    arr.push([number, correctAnswer]);
  }
  return arr;
};

export default prime;
