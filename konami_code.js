const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

let index = 0;

function init() {
  onKeyDownHandler(e) {
    const key = parseInt(e.detail);
    if (key === code[index]) {
      index++;
    if (index === code) {
      alert("WOOOHOOOO! You've got the code!")
      index = 0;
    }
    }
    else {
      index = 0;
    }
  }
  // Write your JavaScript code inside the init() function

}