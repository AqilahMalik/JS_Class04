function pageReady() {
  console.log("The DOM has been loaded");

  // right click + format doc + prettier

  // Event listeners
  //  Target DOM Node - h1
  //  Event type - click
  //  Callback Function - Log out the heading was clicked

  let heading = document.querySelector("h1");
  let eventType = "click";

  function onHeadingClick() {
    console.log("The heading was clicked");
  }

  heading.addEventListener(eventType, onHeadingClick);

  //  When the button is clicked, log the button was clicked
  let button = document.querySelector("button");

  function onButtonClick() {
    console.log("The button was clicked");
  }

  button.addEventListener(eventType, onButtonClick);

  /////////////////////////////////////////////////////
  let theme = "Light";
  let themeButton = document.querySelector(".theme");

  function themeClick() {
    if (theme === "light") {
      theme = "dark";
      document.body.style.color = "white";
      document.body.style.background = "black";
    } else {
      theme = "light";
      // Make the light mode work
      document.body.style.color = "black";
      document.body.style.background = "white";
    }
    console.log(theme);
  }
  themeButton.addEventListener("click", themeClick);

  ////////////////////////////////////////////////////

  // Start with a ClickCount of 0
  let clickCount = 0;
  let clickCountButton = document.querySelector(".click-count");
  let paragraph = document.querySelector("p");

  function showClickCount() {
    let newHTML = `Number of clicks: ${clickCount}`; // Interpolation
    paragraph.innerHTML = newHTML; // put the output string in HTML
  }

  function increment() {
    clickCount += 1;
    showClickCount();
  }
  clickCountButton.addEventListener("click", increment);

  let decrementButton = document.querySelector(".decrement");
  function decrement() {
    clickCount -= 1;
    showClickCount();
  }
  decrementButton.addEventListener("click", decrement);
}

document.addEventListener("DOMContentLoaded", pageReady);
