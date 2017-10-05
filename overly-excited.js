let sentence = ["The", "walrus", "danced", "through", "the", "trees", "in", "the", "light", "of", "the", "moon"];

let secondSentence =["The", "Spider", "was", "squashed", "by", "the", "thing", "next", "to", "my", "hand", "when", "I", "saw", "it"];


addExcitement = (theWordArray) => {
    let phrase = "";
    for(i = 0; i < theWordArray.length; i++) {
        phrase += " " + theWordArray[i];
        console.log(phrase);
    }
}


function veryExcited (theWordArray, character) {
    let phrase = "";
    for(i = 0; i < theWordArray.length; i++) {
        phrase += " " + theWordArray[i];
        if(i%3 === 2) {
            phrase += character;
        }
        console.log(phrase);
    }
}

function evenMoreExcited (theWordArray, character) {
    let phrase = "";
    let numberOfCharacters = character;
    for(i = 0; i < theWordArray.length; i++) {
        phrase += " " + theWordArray[i];
        if(i%3 === 2) {
            phrase += numberOfCharacters;
            numberOfCharacters += character;
        }
        console.log(phrase);
    }
}

evenMoreExcited(sentence, "?");
evenMoreExcited(secondSentence, "&");
