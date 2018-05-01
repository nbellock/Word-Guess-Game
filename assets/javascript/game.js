function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
    }
  
  
  
  
  var artist=["kanyee", "drakee"];
  
  console.log("artist "+artist)
  
  var computerChoiceLength = artist.length;
  
  console.log("artistlength "+computerChoiceLength)
  
  var i = 10;
  
  var computerChoice = artist[getRandomInt(computerChoiceLength)];
  
  console.log("computerChoice "+computerChoice)
  
  var charArtist = Array.from(computerChoice);
  
  console.log("charArtist "+charArtist)
  
  artistLength =computerChoice.length;
  
  console.log("artistlength "+artistLength)
  
  blank = '-'.repeat(artistLength);
  
  console.log("blank "+blank)
  
  blankString = Array.from(blank);
  
  console.log("blankstring "+blankString)
  
  
  var test = computerChoice[0];
  
  console.log("this is test "+test)
  
  
  document.onkeyup = function(event) {
  
  var userGuess = event.key;
  
  console.log("userGuess "+userGuess)
  
  
  var check = charArtist.indexOf(userGuess);
  
  console.log("check "+check)
  
  
  n=0;
  
  function kelseySplice(n, artistLength, blankString, userGuess, computerChoice) {
  var kels = "";
     for (n=0; n < artistLength; n++) {
  
     
  
  if (userGuess === computerChoice[n]) {
  
  
   
     kels =blankString.splice(n, 1, userGuess);
  
    }
  }
  return blankstring = kels;
  }
  
  
  
  
  if (check>-1){
   
  // blankString.splice(check, 1, userGuess);
  
  blankString === kelseySplice(n, artistLength, blankString, userGuess, computerChoice);
  
   console.log("NEW BLANK STRING "+blankString)
  
   i=i-1
  
   console.log("i="+i)
  }
  
  
  
  blankAssString = blankString.join("");
  
  console.log("blankAssString "+blankAssString)
  
  
  
  if (blankAssString === computerChoice) {
  
   //console.log("YOU WIN")
  
  alert("YOU WIN!!!")
  
   location.reload()
  }
  
  
  if (check === -1) {
  
   i=i-1;
  
   console.log("i="+i)
  
  }
  
  if ( i<1) {
  
   alert("YOU LOSE!!!")
  
   location.reload()
  }
  
  
  
  
  }