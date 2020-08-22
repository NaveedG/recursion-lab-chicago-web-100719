function printString(str) {
  console.log(str[0])
  if (str.length <= 1) {
    return true // base case
  } else {
    printString(str.slice(1)) // recursive call
  }
}

function reverseString(str) {
  if (str.length <= 1) {
    return str // base case
  } else {
    return str[str.length - 1] + reverseString(str.slice(0, str.length - 1)) // recursive call
  }
}

function isPalindrome(str) {
  if (str.length <= 1) {
    return true // base case
  } else if (str[0] === str[str.length - 1]) {
      return isPalindrome(str.slice(1, str.length - 1)) // recursive call
  } else return false
}

function addUpTo(arr, i) {
  if (arr[0] === arr[i]) {
    return arr[0] // base case
  } else {
    return arr[0] + addUpTo(arr.slice(1), --i) // recursive call
  }
}

function maxOf(arr) {
  if (arr.length <= 1) {
    return arr[0] // base case
  } else {
    return Math.max(arr[0], maxOf(arr.slice(1))) // recursive call
  }
}

function includesNumber(arr, x) {
  if (arr[0] === x) {
    return true // base case
  } else if (arr.length > 0) {
    return includesNumber(arr.slice(1), x) // recursive call
  } else return false
}
