
  function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
   }
 
 var artist=["kanye", "drake", "eminem", "kendrick"];
 
 console.log("artist: "+artist)
 
 var computerChoiceLength = artist.length;
 
 console.log("artistlength: "+computerChoiceLength) 
 
 var i = 10;
 
 
 //document.getElementById("i").innerHTML = i;
 
 
 var computerChoice = artist[getRandomInt(computerChoiceLength)];
 
 console.log("computerChoice: "+computerChoice)
 
 var charArtist = Array.from(computerChoice);
  
 console.log("charArtist: "+charArtist)
 
 var artistLength =computerChoice.length;
 
 console.log("artistlength: "+artistLength)
 
 var blank = '-'.repeat(artistLength);
 
 console.log("blank: "+blank)
 
 var charBlank = Array.from(blank);
 
 console.log("charBlank: "+charBlank)
 
 var array = [];
 
 console.log("array is "+array)
 
 trackArray = [];
 
 
 
 
 /////////////////////////////////
 
 
 document.onkeyup = function(event) {
 
 var userGuessCap = event.key;
 
 var userGuess = userGuessCap.toLowerCase();
 
 console.log("userGuess: "+userGuess)
 
 var check = charArtist.indexOf(userGuess);
 
 console.log("check: "+check)
 
 var x = 0;
 
 
 
 userGuessArray=Array.from(userGuess)
 
 
 
 
 ///////// BEGIN LOGIC HERE ////////
 
 if (trackArray.indexOf(userGuess) === -1) {
 
 
 
 
 function addArray(userGuess, array, userGuessArray){
 
  var newArray = new Array;
     
     if(array.indexOf(userGuess) === -1) {
 
      newArray = array.concat(userGuessArray);
    
     }
 
   if (array.indexOf(userGuess) > -1) {
     newArray = array.concat();
    
     
   }
 
   return array = newArray;
  
 }
 
 trackArray =addArray(userGuess, array, userGuessArray);
 
 document.getElementById("trackArray").innerHTML = trackArray;
 
 console.log("updated array "+trackArray)
 
 array = addArray(userGuess, array, userGuessArray);
 
 
 
 
 
 var n = 0;
 
  function kelseySplice(n, artistLength, charBlank, userGuess, computerChoice) {
    var kels = "";
     for (n=0; n < artistLength; n++) {
 
       if (userGuess === computerChoice[n]) {
   
         kels =charBlank.splice(n, 1, userGuess);
       }
     }
    return charBlank = kels;
   }
 
 
 
 console.log("this is tracker "+trackArray.indexOf(userGuess))
 
 
 
 
  if (check>-1){
   
    // charBlank.splice(check, 1, userGuess);
 
    charBlank === kelseySplice(n, artistLength, charBlank, userGuess, computerChoice);
 
    console.log("NEW BLANK STRING "+charBlank)
 
 
 
    i=i-1
 
    console.log("i="+i)
  }
 
 
 
 blankStringNew = charBlank.join("");
 
 console.log("blankStringNew "+blankStringNew)
 
 document.getElementById("blankStringNew").innerHTML = blankStringNew;
 
 
 
  if (blankStringNew === computerChoice) {
 
 
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
  
 
   document.getElementById("countdown").innerHTML = i;
 
 }
 }