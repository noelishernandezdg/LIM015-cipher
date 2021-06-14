const cipher = {
  encode: function (offSet, textOne) {
    let result = "";
    // console.log(offSet + textOne);
    textOne = textOne.toUpperCase();
    //Primero hay que recorer el string (bucle for)
    for (let i = 0; i < textOne.length; i++) {
      // console.log(textOne[i]);
      let textAscii = textOne.charCodeAt(i);
      // console.log(textAscii);
      if (textAscii >= 65 && textAscii <= 90) {
        let newAscii = (textAscii - 65 + parseInt(offSet)) % 26 + 65;
        // console.log(newAscii);
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
    // console.log(offSet + textOne);
    textOne = textOne.toUpperCase();
    //Primero hay que recorer el string (bucle for)
    for (let i = 0; i < textOne.length; i++) {
      // console.log(textOne[i]);
      let textAscii = textOne.charCodeAt(i);
      // console.log(textAscii);
      if (textAscii >= 65 && textAscii <= 90) {
        let newAscii = (textAscii - 65 - parseInt(offSet)) % 26 + 65;
        // console.log(newAscii);
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
