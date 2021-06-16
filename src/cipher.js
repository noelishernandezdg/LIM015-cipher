const cipher = {
  encode: function (offSet, textOne) {
    let result = "";
    textOne = textOne.toUpperCase();
    //Primero hay que recorer el string (bucle for)
    for (let i = 0; i < textOne.length; i++) {
      let textAscii = textOne.charCodeAt(i);
      if (textAscii >= 65 && textAscii <= 90) {
        let newAscii = (textAscii - 65 + parseInt(offSet)) % 26 + 65;
        result += String.fromCharCode(newAscii);
      }
      else {
        result += textOne[i];
      }
    }
    return result;
  },
  decode: function (offSet, textOne) {
    let result = "";
    textOne = textOne.toUpperCase();
    for (let i = 0; i < textOne.length; i++) {
      let textAscii = textOne.charCodeAt(i);
      if (textAscii >= 65 && textAscii <= 90) {
        let newAscii = (textAscii - 90 - parseInt(offSet)) % 26 + 90;
        result += String.fromCharCode(newAscii);
      }
      else {
        result += textOne[i];
      }
    }
    return result;
    }
};

export default cipher;
