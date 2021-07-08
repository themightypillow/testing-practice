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
    });
  },
  subtract: function(...nums) {
    return nums.reduce((diff, n) => {
      if(typeof n !== 'number') throw new Error('One or more arguments not a number');
      return diff - n;
    });
  },
  multiply: function(...nums) {
    return nums.reduce((prod, n) => {
      if(typeof n !== 'number') throw new Error('One or more arguments not a number');
      return prod * n;
    });
  },
  divide: function(...nums) {
    return nums.reduce((quot, n) => {
      if(typeof n !== 'number') throw new Error('One or more arguments not a number');
      if(n === 0) throw new Error('Divide by zero');
      return quot / n;
    });
  }
};

export const caesar = function() {

};

export const analyze = function() {

};