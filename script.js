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
const button47 = document.getElementById("btn-47");
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
const button27 = document.getElementById("btn-27");
const button28 = document.getElementById("btn-28");
const button29 = document.getElementById("btn-29");
const button30 = document.getElementById("btn-30");
const button31 = document.getElementById("btn-31");
const button32 = document.getElementById("btn-32");
const button33 = document.getElementById("btn-33");
const button36 = document.getElementById("btn-36");
const button38 = document.getElementById("btn-38");
const button40 = document.getElementById("btn-40");
const button42 = document.getElementById("btn-42");
const button44 = document.getElementById("btn-44");
const button48 = document.getElementById("btn-48");
const box = document.getElementById("box");
const leftText = document.getElementById("left-text");
const topText = document.getElementById("top-text");
const frontText = document.getElementById("front-text");
const bottomText = document.getElementById("bottom-text");
const backBigText = document.getElementById("back-text");
const backSmallText = document.getElementById("back-text-small");
const bigProjectText1 = document.getElementById("big-project-1");
const bigProjectText2 = document.getElementById("big-project-2");
const bigProjectText3 = document.getElementById("big-project-3");
const bigProjectText4 = document.getElementById("big-project-4");
const smallProjectText1 = document.getElementById("small-project-1");
const smallProjectText2 = document.getElementById("small-project-2");
const smallProjectText3 = document.getElementById("small-project-3");
const smallProjectText4 = document.getElementById("small-project-4");
const shape1 = document.getElementById("shape-1");
const h1Main = document.getElementById("main");
const h1Webdev = document.getElementById("webdev");
const h1Projects = document.getElementById("projects");
const h1BigProjects = document.getElementById("big-projects");
const h1SmallProjects = document.getElementById("small-projects");
const h1AboutMe = document.getElementById("about-me");
const h1MyGithub = document.getElementById("my-github");
const h1BigProject1 = document.getElementById("big-project-1-title");
const h1BigProject2 = document.getElementById("big-project-2-title");
const h1BigProject3 = document.getElementById("big-project-3-title");
const h1BigProject4 = document.getElementById("big-project-4-title");
const h1SmallProject1 = document.getElementById("small-project-1-title");
const h1SmallProject2 = document.getElementById("small-project-2-title");
const h1SmallProject3 = document.getElementById("small-project-3-title");
const h1SmallProject4 = document.getElementById("small-project-4-title");

button1.addEventListener("click", (e) => {
  box.classList.remove("goToFrontFromBottom");
  box.classList.toggle("goToLeft");
  shape1.classList.add("hide");
  h1Main.classList.add("hide");
  h1Webdev.classList.add("hide");
  frontText.classList.add("hide");
  h1Projects.classList.remove("hide");
  leftText.classList.remove("hide");
  console.log("added");
});

button4.addEventListener("click", (e) => {
  box.classList.remove("goToFrontFromBottom");
  box.classList.toggle("goToBottom");
  h1Webdev.classList.add("hide");
  h1Main.classList.add("hide");
  frontText.classList.add("hide");
  h1MyGithub.classList.remove("hide");
  bottomText.classList.remove("hide");
  console.log("added");
});

button3.addEventListener("click", (e) => {
  box.classList.remove("goToFrontFromBottom");
  box.classList.toggle("goToTop");
  h1Main.classList.add("hide");
  h1Webdev.classList.add("hide");
  h1AboutMe.classList.remove("hide");
  topText.classList.remove("hide");
  console.log("added");
});

button5.addEventListener("click", (e) => {
  box.classList.remove("goToLeft");
  box.classList.toggle("goToBack");
  h1Projects.classList.add("hide");
  backBigText.classList.remove("hide");
  h1BigProjects.classList.remove("hide");
  leftText.classList.add("hide");
  console.log("added");
});

button6.addEventListener("click", (e) => {
  box.classList.remove("goToLeft");
  box.classList.toggle("goToBack");
  h1Projects.classList.add("hide");
  h1SmallProjects.classList.remove("hide");
  backSmallText.classList.remove("hide");
  leftText.classList.add("hide");
  console.log("added");
});

button8.addEventListener("click", (e) => {
  h1Main.classList.remove("hide");
  h1Webdev.classList.remove("hide");
  h1Projects.classList.add("hide");
  leftText.classList.add("hide");
  frontText.classList.remove("hide");
  box.classList.remove("goToLeft");
  console.log("added");
});

button12.addEventListener("click", (e) => {
  box.classList.remove("goToRight");
  h1Main.classList.remove("hide");
  h1Webdev.classList.remove("hide");
  frontText.classList.remove("hide");
  bigProjectText1.classList.add("hide");
  h1BigProject1.classList.add("hide");
  rightText.classList.add("hide");
  console.log("added");
});

button13.addEventListener("click", (e) => {
  box.classList.remove("goToBack");
  box.classList.toggle("goToRight");
  h1BigProjects.classList.add("hide");
  frontText.classList.add("hide");
  h1BigProject1.classList.remove("hide");
  bigProjectText1.classList.remove("hide");
  backBigText.classList.add("hide");
  console.log("added");
});
button14.addEventListener("click", (e) => {
  box.classList.remove("goToBack");
  box.classList.toggle("goToRight");
  h1BigProjects.classList.add("hide");
  frontText.classList.add("hide");
  h1BigProject2.classList.remove("hide");
  bigProjectText2.classList.remove("hide");
  backBigText.classList.add("hide");
  console.log("added");
});
button15.addEventListener("click", (e) => {
  box.classList.remove("goToBack");
  box.classList.toggle("goToRight");
  h1BigProjects.classList.add("hide");
  frontText.classList.add("hide");
  h1BigProject3.classList.remove("hide");
  bigProjectText3.classList.remove("hide");
  backBigText.classList.add("hide");
  console.log("added");
});
button47.addEventListener("click", (e) => {
  box.classList.remove("goToBack");
  box.classList.toggle("goToRight");
  h1BigProjects.classList.add("hide");
  frontText.classList.add("hide");
  h1BigProject4.classList.remove("hide");
  bigProjectText4.classList.remove("hide");
  backBigText.classList.add("hide");
  console.log("added");
});

button28.addEventListener("click", (e) => {
  box.classList.remove("goToBack");
  box.classList.toggle("goToRight");
  h1SmallProjects.classList.add("hide");
  frontText.classList.add("hide");
  h1SmallProject1.classList.remove("hide");
  smallProjectText1.classList.remove("hide");
  backSmallText.classList.add("hide");
  console.log("added");
});
button29.addEventListener("click", (e) => {
  box.classList.remove("goToBack");
  box.classList.toggle("goToRight");
  h1SmallProjects.classList.add("hide");
  frontText.classList.add("hide");
  h1SmallProject2.classList.remove("hide");
  smallProjectText2.classList.remove("hide");
  backSmallText.classList.add("hide");
  console.log("added");
});
button30.addEventListener("click", (e) => {
  box.classList.remove("goToBack");
  box.classList.toggle("goToRight");
  h1SmallProjects.classList.add("hide");
  frontText.classList.add("hide");
  smallProjectText3.classList.remove("hide");
  h1SmallProject3.classList.remove("hide");
  backSmallText.classList.add("hide");
  console.log("added");
});
button31.addEventListener("click", (e) => {
  box.classList.remove("goToBack");
  box.classList.toggle("goToRight");
  h1SmallProjects.classList.add("hide");
  frontText.classList.add("hide");
  h1SmallProject4.classList.remove("hide");
  smallProjectText4.classList.remove("hide");
  backSmallText.classList.add("hide");
  console.log("added");
});

button16.addEventListener("click", (e) => {
  box.classList.remove("goToBack");
  box.classList.remove("goToLeft");
  h1Main.classList.remove("hide");
  h1Webdev.classList.remove("hide");
  h1BigProjects.classList.add("hide");
  backBigText.classList.add("hide");
  frontText.classList.remove("hide");
  console.log("added");
});

button20.addEventListener("click", (e) => {
  box.classList.remove("goToBottomFromBack");
  box.classList.remove("goToBottom");
  box.classList.toggle("goToFrontFromBottom");
  h1Webdev.classList.remove("hide");
  h1Main.classList.remove("hide");
  bottomText.classList.add("hide");
  h1MyGithub.classList.add("hide");
  frontText.classList.remove("hide");
  console.log("added");
});

button25.addEventListener("click", (e) => {
  box.classList.remove("goToTop");
  h1Main.classList.remove("hide");
  h1Webdev.classList.remove("hide");
  frontText.classList.remove("hide");
  topText.classList.add("hide");
  h1AboutMe.classList.add("hide");
  console.log("added");
});

button32.addEventListener("click", (e) => {
  box.classList.remove("goToBack");
  box.classList.remove("goToLeft");
  frontText.classList.remove("hide");
  h1Main.classList.remove("hide");
  h1Webdev.classList.remove("hide");
  h1SmallProjects.classList.add("hide");
  backSmallText.classList.add("hide");
  console.log("added");
});

button33.addEventListener("click", (e) => {
  box.classList.remove("goToRight");
  h1Main.classList.remove("hide");
  h1Webdev.classList.remove("hide");
  frontText.classList.remove("hide");
  bigProjectText2.classList.add("hide");
  h1BigProject2.classList.add("hide");
  rightText.classList.add("hide");
  console.log("added");
});
button36.addEventListener("click", (e) => {
  box.classList.remove("goToRight");
  h1Main.classList.remove("hide");
  h1Webdev.classList.remove("hide");
  frontText.classList.remove("hide");
  bigProjectText3.classList.add("hide");
  h1BigProject3.classList.add("hide");
  rightText.classList.add("hide");
  console.log("added");
});
button48.addEventListener("click", (e) => {
  box.classList.remove("goToRight");
  h1Main.classList.remove("hide");
  h1Webdev.classList.remove("hide");
  frontText.classList.remove("hide");
  bigProjectText4.classList.add("hide");
  h1BigProject4.classList.add("hide");
  rightText.classList.add("hide");
  console.log("added");
});
button38.addEventListener("click", (e) => {
  box.classList.remove("goToRight");
  h1Main.classList.remove("hide");
  h1Webdev.classList.remove("hide");
  frontText.classList.remove("hide");
  smallProjectText1.classList.add("hide");
  h1SmallProject1.classList.add("hide");
  rightText.classList.add("hide");
  console.log("added");
});
button40.addEventListener("click", (e) => {
  box.classList.remove("goToRight");
  h1Main.classList.remove("hide");
  h1Webdev.classList.remove("hide");
  frontText.classList.remove("hide");
  smallProjectText4.classList.add("hide");
  h1SmallProject4.classList.add("hide");
  rightText.classList.add("hide");
  console.log("added");
});
button42.addEventListener("click", (e) => {
  box.classList.remove("goToRight");
  h1Main.classList.remove("hide");
  h1Webdev.classList.remove("hide");
  frontText.classList.remove("hide");
  smallProjectText3.classList.add("hide");
  h1SmallProject3.classList.add("hide");
  rightText.classList.add("hide");
  console.log("added");
});
button44.addEventListener("click", (e) => {
  box.classList.remove("goToRight");
  h1Main.classList.remove("hide");
  h1Webdev.classList.remove("hide");
  frontText.classList.remove("hide");
  smallProjectText2.classList.add("hide");
  h1SmallProject2.classList.add("hide");
  rightText.classList.add("hide");
  console.log("added");
});
