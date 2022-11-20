// A2Z F18
// Daniel Shiffman
// http://shiffman.net/a2z
// https://github.com/shiffman/A2Z-F18

// Speech Object
let speech;

function setup() {
  resizeCanvas(windowWidth, windowHeight);
  background("orange");
  // Create a Speech Recognition object with callback
  speechRec = new p5.SpeechRec("en-US", gotSpeech);
  // "Continuous recognition" (as opposed to one time only)
  let continuous = true;
  // If you want to try partial recognition (faster, less accurate)
  let interimResults = false;
  // This must come after setting the properties
  speechRec.start(continuous, interimResults);

  textSize(48);
  textAlign(CENTER);
  textFont("sans-serif");
  text("SAY A COLOR", width / 2, height / 2);

  // DOM element to display results

  const colors = [];

  // Speech recognized event
  function gotSpeech() {
    // Something is there
    // Get it as a string, you can also get JSON with more info
    console.log(speechRec);
    if (speechRec.resultValue) {
      let said = speechRec.resultString;
      const color = speechRec.resultString.split(" ").pop();
      text(color, width / 2, height / 2);
      console.log(color);
      background(color);
      // Show user
    }
  }
}
