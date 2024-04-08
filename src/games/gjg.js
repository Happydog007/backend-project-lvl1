const getAllDividers = (dividers) => {
  let i = dividers[0] - 1
  while (i > 0) {
    if (dividers[0] % i === 0) {
      dividers.push(i)
    }
    console.log(dividers.length)
    i -= 1
  }
  return dividers.length
}

getAllDividers([16])