import readlineSync from 'readline-sync'

const yourName = () => {
  const name = readlineSync.question('May I have your name? ')
  return `Hello, ${name}!`
}

export default yourName

