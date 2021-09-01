// start
// ending
// step
let opacity = 1;
let img = document.querySelector("img");

console.log(img);

// function decreaseOpacity() {
//   opacity -= 0.005;
//   img.style.opacity = opacity;

//   if (opacity > 0) {
//     setTimeout(decreaseOpacity, 20);
//   }
// }

// decreaseOpacity();

// create a function that increase that width by 5 at a time

let width = 300;

function increaseWidth() {
  width += 1;
  img.style.width = `${width}px`;
  if (width < 600) {
    setTimeout(increaseWidth, 1000 / 60);
  }
}
increaseWidth();
