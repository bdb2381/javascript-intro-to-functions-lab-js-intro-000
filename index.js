function shout(string){         //function returns strings in UPPERCASE

  return string.toUpperCase()
}

function whisper(string){       //function returns strings in lowercase
  return string.toLowerCase()
}


function logShout(string){      //logs the string in UPPERCASE
  console.log(string.toUpperCase())
}

function logWhisper(string){    //logs the string in lowercase
  console.log(string.toLowerCase())
}

function sayHiToGrandma(string){
  if (string === string.toLowerCase()) {
    return "I can't hear you!"
  }

  else if (string ===string.toUpperCase()){
    return "YES INDEED!"
  }

}
