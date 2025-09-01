/*
 * Starter file 
 * Name: John Dong
 * Date: August 31, 2025
 * Section: CSC 193A
 */
(function () {
  "use strict";

  /**
   * The starting point in our program, setting up a listener
   * for the "load" event on the window, signalling the HTML DOM has been constructed
   * on the page. When this event occurs, the attached function (init) will be called.
   */
  window.addEventListener("load", init);

  /**
   * Initializes event listeners for buttons when the page loads.
   */
  function init() {
    console.log("Window loaded!"); // Part I test

    // encrypt button
    let encryptBtn = document.getElementById("encrypt-it");
    encryptBtn.addEventListener("click", handleEncrypt);

    // reset button
    let resetBtn = document.getElementById("reset");
    resetBtn.addEventListener("click", handleReset);
  }

  /**
   * Handles clicking the "Encrypt-It!" button.
   * Grabs text, applies a shift cipher, and displays the result.
   */
  function handleEncrypt() {
    console.log("Button clicked!"); // testing button clicked logg

    let inputText = document.getElementById("input-text").value;
    let cipherText = shiftCipher(inputText);
    document.getElementById("result").textContent = cipherText;
  }

  /**
   * Handles clicking the "Reset" button.
   * Clears the text area and the result.
   */
  function handleReset() {
    document.getElementById("input-text").value = "";
    document.getElementById("result").textContent = "";
  }

  /**
   * Returns an encrypted version of the given text, where
   * each letter is shifted alphabetically ahead by 1 letter,
   * and 'z' is shifted to 'a' (creating an alphabetical cycle).
   * Non-letters are not modified.
   */
  function shiftCipher(text) {
    text = text.toLowerCase();
    let result = "";
    for (let i = 0; i < text.length; i++) {
      if (text[i] < 'a' || text[i] > 'z') {
        result += text[i];
      } else if (text[i] === 'z') {
        result += 'a';
      } else {
        let letter = text.charCodeAt(i);
        let resultLetter = String.fromCharCode(letter + 1);
        result += resultLetter;
      }
    }
    return result;
  }

})();
