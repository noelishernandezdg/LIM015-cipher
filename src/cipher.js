const cipher = {
  encode: function (offSet, textOne) {
    console.log(offSet + textOne)
//Primero hay que recorer el string (bucle for)
    for (let i = 0; i < textOne.length; i++) {
      console.log(textOne[i])
      let textAscii = textOne.charCodeAt(i)
      if (textAscii >= 65 && text <= 90) {
        let newText = ((text - 65 + offSet) % 26) + 65;
        console.log(newText);
        
        // let uni = text.String.fromCharCode(i)
      


      }
    }
//obteber CharCodeAt por cada elemento del string
  }
};

export default cipher;
