/*
  alternatingCase should take a string and return a string with every other letter either capital or lower case, starting with a capital letter.
  E.g 'hello' would become 'HeLlO'
  'hello world' would become 'HeLlO wOrLd'
*/

function alternatingCase (str) {
  let arr = str.split('');
  let mySwitch = true;
  let re = RegExp('[a-zA-Z]');
  for (let i = 0; i < arr.length; i++) {
    if (re.test(arr[i])) {
      if (mySwitch) {
        arr[i] = arr[i].toUpperCase();
        mySwitch = !mySwitch;
      } else {
        arr[i] = arr[i].toLowerCase();
        mySwitch = !mySwitch;
      }
    }
  }
  return arr.join('');
}

module.exports = alternatingCase;
