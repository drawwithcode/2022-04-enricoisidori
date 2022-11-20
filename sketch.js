//ho ripreso lo speech recognition da Daniel Shiffman (https://github.com/shiffman/A2Z-F18) (http://shiffman.net/a2z)

// Speech Object
let speech;
let appvoice;

function setup() {
  voiceapp = new p5.Speech(voiceReady); //callback, speech synthesis object
  voiceapp.setLang("en-UK");
  voiceapp.started();
  //speech.ended(endSpeaking);

  function voiceReady() {
    console.log(voiceapp.voices);
  }

  resizeCanvas(windowWidth, windowHeight);

  // Create a Speech Recognition object with callback
  speechRec = new p5.SpeechRec("en-UK", gotSpeech);
  // "Continuous recognition" (as opposed to one time only)
  let continuous = true;
  // If you want to try partial recognition (faster, less accurate)
  let interimResults = false;
  // This must come after setting the properties
  speechRec.start(continuous, interimResults);

  // DOM element to display results

  //aggiungo un array dei colori possibili
  const CSS_COLOR_NAMES = [
    "AliceBlue",
    "AntiqueWhite",
    "Aqua",
    "Aquamarine",
    "Azure",
    "Beige",
    "Bisque",
    "Black",
    "BlanchedAlmond",
    "Blue",
    "BlueViolet",
    "Brown",
    "BurlyWood",
    "CadetBlue",
    "Chartreuse",
    "Chocolate",
    "Coral",
    "CornflowerBlue",
    "Cornsilk",
    "Crimson",
    "Cyan",
    "DarkBlue",
    "DarkCyan",
    "DarkGoldenRod",
    "DarkGray",
    "DarkGrey",
    "DarkGreen",
    "DarkKhaki",
    "DarkMagenta",
    "DarkOliveGreen",
    "DarkOrange",
    "DarkOrchid",
    "DarkRed",
    "DarkSalmon",
    "DarkSeaGreen",
    "DarkSlateBlue",
    "DarkSlateGray",
    "DarkSlateGrey",
    "DarkTurquoise",
    "DarkViolet",
    "DeepPink",
    "DeepSkyBlue",
    "DimGray",
    "DimGrey",
    "DodgerBlue",
    "FireBrick",
    "FloralWhite",
    "ForestGreen",
    "Fuchsia",
    "Gainsboro",
    "GhostWhite",
    "Gold",
    "GoldenRod",
    "Gray",
    "Grey",
    "Green",
    "GreenYellow",
    "HoneyDew",
    "HotPink",
    "IndianRed",
    "Indigo",
    "Ivory",
    "Khaki",
    "Lavender",
    "LavenderBlush",
    "LawnGreen",
    "LemonChiffon",
    "LightBlue",
    "LightCoral",
    "LightCyan",
    "LightGoldenRodYellow",
    "LightGray",
    "LightGrey",
    "LightGreen",
    "LightPink",
    "LightSalmon",
    "LightSeaGreen",
    "LightSkyBlue",
    "LightSlateGray",
    "LightSlateGrey",
    "LightSteelBlue",
    "LightYellow",
    "Lime",
    "LimeGreen",
    "Linen",
    "Magenta",
    "Maroon",
    "MediumAquaMarine",
    "MediumBlue",
    "MediumOrchid",
    "MediumPurple",
    "MediumSeaGreen",
    "MediumSlateBlue",
    "MediumSpringGreen",
    "MediumTurquoise",
    "MediumVioletRed",
    "MidnightBlue",
    "MintCream",
    "MistyRose",
    "Moccasin",
    "NavajoWhite",
    "Navy",
    "OldLace",
    "Olive",
    "OliveDrab",
    "Orange",
    "OrangeRed",
    "Orchid",
    "PaleGoldenRod",
    "PaleGreen",
    "PaleTurquoise",
    "PaleVioletRed",
    "PapayaWhip",
    "PeachPuff",
    "Peru",
    "Pink",
    "Plum",
    "PowderBlue",
    "Purple",
    "RebeccaPurple",
    "Red",
    "RosyBrown",
    "RoyalBlue",
    "SaddleBrown",
    "Salmon",
    "SandyBrown",
    "SeaGreen",
    "SeaShell",
    "Sienna",
    "Silver",
    "SkyBlue",
    "SlateBlue",
    "SlateGray",
    "SlateGrey",
    "Snow",
    "SpringGreen",
    "SteelBlue",
    "Tan",
    "Teal",
    "Thistle",
    "Tomato",
    "Turquoise",
    "Violet",
    "White",
    "Yellow",
  ];

  //utilizzo questa funzione per far coincidere i testi rilevati con l'array
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  stroke("#f65246");
  // Speech recognized event
  function gotSpeech() {
    // Something is there
    // Get it as a string, you can also get JSON with more info
    console.log(speechRec);
    if (speechRec.resultValue) {
      let said = speechRec.resultString;
      const color = capitalizeFirstLetter(
        speechRec.resultString.split(" ").pop()
      );

      console.log(color);
      if (CSS_COLOR_NAMES.indexOf(color) !== -1) {
        console.log("✅ String is contained in Array");
        stroke(color);
        feedback();
      } else {
        console.log("⛔️ String is NOT contained in Array");
      }

      // Show user
    }
  }
}

function feedback() {
  push();
  strokeWeight(12);
  rect(0, 0, width, height, 10);
  noFill();
  pop();
}

function draw() {
  strokeWeight(6);
  if (mouseIsPressed) {
    line(mouseX, mouseY, pmouseX, pmouseY);
  }
}

function talkred() {
  voiceapp.speak("Red");
}
function talkorange() {
  voiceapp.speak("orange");
}

function talkyellow() {
  voiceapp.speak("yellow");
}

function talkyellow() {
  voiceapp.speak("yellow");
}

function talkgreen() {
  voiceapp.speak("green");
}

function talkblue() {
  voiceapp.speak("blue");
}

function talkpurple() {
  voiceapp.speak("purple");
}

function talkpink() {
  voiceapp.speak("pink");
}
