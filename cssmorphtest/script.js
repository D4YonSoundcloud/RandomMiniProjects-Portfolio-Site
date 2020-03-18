const button1 = document.getElementById("btn-1");
const button2 = document.getElementById("btn-2");
const button3 = document.getElementById("btn-3");
const button4 = document.getElementById("btn-4");
const button5 = document.getElementById("btn-5");
const button6 = document.getElementById("btn-6");
const button7 = document.getElementById("btn-7");
const button8 = document.getElementById("btn-8");
const button9 = document.getElementById("btn-9");
const button10 = document.getElementById("btn-10");
const button11 = document.getElementById("btn-11");
const button12 = document.getElementById("btn-12");
const button13 = document.getElementById("btn-13");
const button14 = document.getElementById("btn-14");
const button15 = document.getElementById("btn-15");
const button16 = document.getElementById("btn-16");
const button17 = document.getElementById("btn-17");
const button18 = document.getElementById("btn-18");
const button19 = document.getElementById("btn-19");
const button20 = document.getElementById("btn-20");
const button21 = document.getElementById("btn-21");
const button22 = document.getElementById("btn-22");
const button23 = document.getElementById("btn-23");
const button24 = document.getElementById("btn-24");
const button25 = document.getElementById("btn-25");
const button26 = document.getElementById("btn-26");
const box = document.getElementById("box");
const leftText = document.getElementById("left-text");
const topText = document.getElementById("top-text");
const shape1 = document.getElementById("shape-1");
const h1Main = document.getElementById("main");
const h1Webdev = document.getElementById("webdev");
const h1Projects = document.getElementById("projects");
const h1BigProjects = document.getElementById("big-projects");
const h1SmallProjects = document.getElementById("small-projects");

button1.addEventListener("click", e => {
  box.classList.remove("goToFrontFromBottom");
  box.classList.toggle("goToLeft");
  shape1.classList.add("hide");
  h1Main.classList.add("hide");
  h1Webdev.classList.add("hide");
  h1Projects.classList.remove("hide");
  leftText.classList.remove("hide");
  console.log("added");
});

button4.addEventListener("click", e => {
  box.classList.remove("goToFrontFromBottom");
  box.classList.toggle("goToBottom");
  console.log("added");
});

button3.addEventListener("click", e => {
  box.classList.remove("goToFrontFromBottom");
  box.classList.toggle("goToTop");
  h1Main.classList.add("hide");
  h1Webdev.classList.add("hide");
  topText.classList.remove("hide");
  console.log("added");
});

button5.addEventListener("click", e => {
  box.classList.remove("goToLeft");
  box.classList.toggle("goToBack");
  console.log("added");
});

button6.addEventListener("click", e => {
  box.classList.remove("goToLeft");
  box.classList.toggle("goToBack");
  console.log("added");
});

button8.addEventListener("click", e => {
  h1Main.classList.remove("hide");
  h1Webdev.classList.remove("hide");
  h1Projects.classList.add("hide");
  leftText.classList.add("hide");
  box.classList.remove("goToLeft");
  console.log("added");
});

button12.addEventListener("click", e => {
  box.classList.remove("goToRight");
  console.log("added");
});

button13.addEventListener("click", e => {
  box.classList.remove("goToBack");
  box.classList.toggle("goToRight");
  console.log("added");
});

button16.addEventListener("click", e => {
  box.classList.remove("goToBack");
  box.classList.remove("goToLeft");
  console.log("added");
});

button20.addEventListener("click", e => {
  box.classList.remove("goToBottomFromBack");
  box.classList.remove("goToBottom");
  box.classList.toggle("goToFrontFromBottom");
  console.log("added");
});

button25.addEventListener("click", e => {
  box.classList.remove("goToTop");
  h1Main.classList.remove("hide");
  h1Webdev.classList.remove("hide");
  topText.classList.add("hide");
  console.log("added");
});
