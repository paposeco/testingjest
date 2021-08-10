const encrypt = function (shift, string) {
  const abc = "abcdefghijklmnopqrstuvwxyz";
  let newstring = "";
  const regExp = /[\W\d]/g;
  for (let i = 0; i < string.length; i++) {
    if (string[i].match(regExp) !== null) {
      newstring += string[i];
      continue;
    }
    const indexAbc = abc.indexOf(string[i]);
    let newindex = indexAbc + shift;
    if (newindex > 25) {
      newindex = newindex % 26;
    }
    const newLetter = abc[newindex];
    newstring += newLetter;
  }
  return newstring;
};

module.exports = encrypt;
