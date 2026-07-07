"use strict"

function solveEquation(a, b, c) {
  let arr = [];

  const d = b ** 2 - 4 * a * c;

  if (d < 0) {
  } else if (d === 0) {
    const x = -b / (2 * a);
    arr.push(x);
  } else if (d > 0) {
    const x1 = (-b + Math.sqrt(d)) / (2 * a);
    const x2 = (-b - Math.sqrt(d)) / (2 * a);
    arr.push(x1, x2);
  }

  return arr;
}

console.log(solveEquation(2, 5, 2)); 
            

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  percent = Number(percent);
  if (!Number.isFinite(percent)) {
    return false;
  }
  contribution = Number(contribution);
  if (!Number.isFinite(contribution)) {
    return false;
  }
  amount = Number(amount);
  if (!Number.isFinite(amount)) {
    return false;
  }
  countMonths = Number(countMonths);
  if (!Number.isFinite(countMonths)) {
    return false;
  }
  const percentMonth = percent / 100 / 12;
  const creditBody = amount - contribution;
  const payment = creditBody * (percentMonth + (percentMonth / (((1 + percentMonth) ** countMonths) - 1)));
  const allSum = payment * countMonths;
  const allSumRounded = +allSum.toFixed(2);
  return allSumRounded;
}

console.log(calculateTotalMortgage(10, 0, 50000, 12));
console.log(calculateTotalMortgage(10, 1000, 50000, 12));
console.log(calculateTotalMortgage(10, 0, 20000, 24));
console.log(calculateTotalMortgage(10, 1000, 20000, 24));
console.log(calculateTotalMortgage(10, 20000, 20000, 24));
console.log(calculateTotalMortgage(10, 0, 10000, 36));
console.log(calculateTotalMortgage(15, 0, 10000, 36));