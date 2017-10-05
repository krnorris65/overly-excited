let sentence = ["The", "walrus", "danced", "through", "the", "trees", "in", "the", "light", "of", "the", "moon"];


addExcitement = (theWordArray) => {
    let phrase = "";
    for(i = 0; i < theWordArray.length; i++) {
        phrase += " " + theWordArray[i];
        console.log(phrase);
    }
}


function veryExcited (theWordArray, char) {
    let phrase = "";
    for(i = 0; i < theWordArray.length; i++) {
        phrase += " " + theWordArray[i];
        if(i%3 === 2) {
            phrase += char;
        }
        console.log(phrase);
    }
}

function evenMoreExcited (theWordArray, char) {
    let phrase = "";
    let numOfChar = char;
    for(i = 0; i < theWordArray.length; i++) {
        phrase += " " + theWordArray[i];
        if(i%3 === 2) {
            phrase += numOfChar;
            numOfChar += char;
        }
        console.log(phrase);
    }
}

addExcitement(sentence, "?");
