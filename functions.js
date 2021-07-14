export const capitalize = function(str) {
  if(typeof str !== 'string') throw new Error('Not a string');
  if(str.length === 0) return '';
  return `${str[0].toUpperCase()}${str.slice(1)}`;
};

export const reverseString = function(str) {
  if(typeof str !== 'string') throw new Error('Not a string');
  return str.split('').reverse().join('');
};

export const calculator = {
  add: function(...nums) {
    return nums.reduce((sum, n) => {
      if(typeof n !== 'number') throw new Error('One or more arguments not a number');
      return sum + n;
    }, 0);
  },
  subtract: function(...nums) {
    if(typeof nums[0] !== 'number') throw new Error('One or more arguments not a number');
    return nums.reduce((diff, n) => {
      if(typeof n !== 'number') throw new Error('One or more arguments not a number');
      return diff - n;
    });
  },
  multiply: function(...nums) {
    return nums.reduce((prod, n) => {
      if(typeof n !== 'number') throw new Error('One or more arguments not a number');
      return prod * n;
    }, 1);
  },
  divide: function(...nums) {
    if(typeof nums[0] !== 'number') throw new Error('One or more arguments not a number');
    return nums.reduce((quot, n) => {
      if(typeof n !== 'number') throw new Error('One or more arguments not a number');
      if(n === 0) throw new Error('Divide by zero');
      return quot / n;
    });
  }
};

function letterShift(ch, n, lower, upper) {
  let charCode = ch.charCodeAt() + (n % 26);
  if(charCode < lower) charCode += 26;
  if(charCode > upper) charCode -= 26;
  return String.fromCharCode(charCode);
};

export const caesar = function(str, n) {
  if(typeof str !== 'string') throw new Error('Not a string');
  const lowerShift = str.replace(/[a-z]/g, match => letterShift(match, n, 97, 122));
  return lowerShift.replace(/[A-Z]/g, match => letterShift(match, n, 65, 90));
};

export const analyze = function(arr) {
  const data = arr.reduce((analysis, n) => {
    if(typeof n !== 'number') throw new Error('One or more elements not a number');
    analysis.average += n;
    if(analysis.min > n) analysis.min = n;
    if(analysis.max < n) analysis.max = n;
    return analysis;
  },
  {
    average: 0,
    min: arr[0],
    max: arr[0],
    length: arr.length 
  });
  if(arr.length === 0) data.average = undefined;
  else data.average = data.average / arr.length;
  return data;
};