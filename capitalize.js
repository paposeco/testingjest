//capitalize(string) takes a string and returns that string with the first character capitalized.

const capitalizeit = function (string) {
  if (!Number.isNaN(Number(string[0]))) {
    return "Error";
  }
  const finalstring = string[0].toUpperCase() + string.substring(1);
  return finalstring;
};

module.exports = capitalizeit;
