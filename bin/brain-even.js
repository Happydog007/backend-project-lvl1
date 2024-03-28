import readlineSync from 'readline-sync';

const randomNumber = () => Math.floor(Math.random() * 100)

const uniqueNumber = (arr) => {
  let number = randomNumber()
  if (arr.includes(number)) {
    uniqueNumber(arr)
  } else {
    arr.push(number)
    return arr
  }
}

const youLose = (answer, name) => {
  if (answer === 'yes') {
    console.log(`'yes' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${name}!`)
  } else {
    console.log(`'no' is wrong answer ;(. Correct answer was 'yes'.\nLet's try again, ${name}!`)
  }
}

const isEven = (name) => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".')
  let i = 0
  let arr = []
  while (i < 3) {
    arr = uniqueNumber(arr)
    console.log(`Question: ${arr[i]}`)
    const answer = readlineSync.question('Your answer: ')
    if ((arr[i] % 2 === 0 && answer === 'yes') || (arr[i] % 2 !== 0 && answer === 'no')) {
      console.log('Correct!')
    } else {
      youLose(answer, name)
      return 
    }
    i+=1
  }
  console.log(`Congratulations, ${name}!`)
}

export default isEven