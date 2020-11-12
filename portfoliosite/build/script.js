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
const button111 = document.getElementById("btn-11-1");
const button112 = document.getElementById("btn-11-2");
const button113 = document.getElementById("btn-11-3");
const button114 = document.getElementById("btn-11-4");
const button115 = document.getElementById("btn-11-5");
const button116 = document.getElementById("btn-11-6");
const button117 = document.getElementById("btn-11-7");
const button118 = document.getElementById("btn-11-8");
const button119 = document.getElementById("btn-11-9");
const button1110 = document.getElementById("btn-11-10");
const button1111 = document.getElementById("btn-11-11");
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
const h1SmallProject1 = document.getElementById("small-project-1-title");
const h1SmallProject2 = document.getElementById("small-project-2-title");
const h1SmallProject3 = document.getElementById("small-project-3-title");
const h1SmallProject4 = document.getElementById("small-project-4-title");

button1.addEventListener("click", e => {
  box.classList.remove("goToFrontFromBottom");
  box.classList.toggle("goToLeft");
  shape1.classList.add("hide");
  h1Main.classList.add("hide");
  h1Webdev.classList.add("hide");
  frontText.classList.add("hide");
  h1Projects.classList.remove("hide");
  leftText.classList.remove("hide");
  console.log("added");
  button5.focus();
});

button1.focus();

button4.addEventListener("click", e => {
  box.classList.remove("goToFrontFromBottom");
  box.classList.toggle("goToBottom");
  h1Webdev.classList.add("hide");
  h1Main.classList.add("hide");
  frontText.classList.add("hide");
  h1MyGithub.classList.remove("hide");
  bottomText.classList.remove("hide");
  console.log("added");
  button26.focus();
});
button4.addEventListener('keydown', event => {
    if (event.keyCode === 9) {
        event.preventDefault();
        button1.focus();
    }
});


button3.addEventListener("click", e => {
  button23.focus();
  box.classList.remove("goToFrontFromBottom");
  box.classList.toggle("goToTop");
  h1Main.classList.add("hide");
  h1Webdev.classList.add("hide");
  h1AboutMe.classList.remove("hide");
  topText.classList.remove("hide");
  console.log("added");
});

button5.addEventListener("click", e => {
  box.classList.remove("goToLeft");
  box.classList.toggle("goToBack");
  h1Projects.classList.add("hide");
  backBigText.classList.remove("hide");
  h1BigProjects.classList.remove("hide");
  leftText.classList.add("hide");
  button13.focus();
  console.log("added");
});

button6.addEventListener("click", e => {
  box.classList.remove("goToLeft");
  box.classList.toggle("goToBack");
  h1Projects.classList.add("hide");
  h1SmallProjects.classList.remove("hide");
  backSmallText.classList.remove("hide");
  leftText.classList.add("hide");
  button28.focus();
  console.log("added");
});

button8.addEventListener("click", e => {
  h1Main.classList.remove("hide");
  h1Webdev.classList.remove("hide");
  h1Projects.classList.add("hide");
  leftText.classList.add("hide");
  frontText.classList.remove("hide");
  box.classList.remove("goToLeft");
  console.log("added");
  button1.focus();
});
button8.addEventListener('keydown', event => {
    if (event.keyCode === 9) {
        event.preventDefault();
        button5.focus();
    }
});

button12.addEventListener("click", e => {
  box.classList.remove("goToRight");
  h1Main.classList.remove("hide");
  h1Webdev.classList.remove("hide");
  frontText.classList.remove("hide");
  bigProjectText1.classList.add("hide");
  h1BigProject1.classList.add("hide");
  button1.focus();
  // rightText.classList.add("hide");
  console.log("added");
});
button12.addEventListener('keydown', event => {
    if (event.keyCode === 9) {
        event.preventDefault();
        button11.focus();
    }
});

button13.addEventListener("click", e => {
  box.classList.remove("goToBack");
  box.classList.toggle("goToRight");
  h1BigProjects.classList.add("hide");
  frontText.classList.add("hide");
  h1BigProject1.classList.remove("hide");
  bigProjectText1.classList.remove("hide");
  backBigText.classList.add("hide");
  console.log("added");
  button11.focus();
});
button14.addEventListener("click", e => {
    box.classList.remove("goToBack");
    box.classList.toggle("goToRight");
    h1BigProjects.classList.add("hide");
    frontText.classList.add("hide");
    h1BigProject2.classList.remove("hide");
    bigProjectText2.classList.remove("hide");
    backBigText.classList.add("hide");
    console.log("added");
    button112.focus();
  });
button15.addEventListener("click", e => {
    box.classList.remove("goToBack");
    box.classList.toggle("goToRight");
    h1BigProjects.classList.add("hide");
    frontText.classList.add("hide");
    h1BigProject3.classList.remove("hide");
    bigProjectText3.classList.remove("hide");
    backBigText.classList.add("hide");
    console.log("added");
    button114.focus();
  });

  button28.addEventListener("click", e => {
    box.classList.remove("goToBack");
    box.classList.toggle("goToRight");
    h1SmallProjects.classList.add("hide");
    frontText.classList.add("hide");
    h1SmallProject1.classList.remove("hide");
    smallProjectText1.classList.remove("hide");
    backSmallText.classList.add("hide");
    console.log("added");
    button115.focus();
  });
  button29.addEventListener("click", e => {
    box.classList.remove("goToBack");
    box.classList.toggle("goToRight");
    h1SmallProjects.classList.add("hide");
    frontText.classList.add("hide");
    h1SmallProject2.classList.remove("hide");
    smallProjectText2.classList.remove("hide");
    backSmallText.classList.add("hide");
    console.log("added");
    button1110.focus();
  });
  button30.addEventListener("click", e => {
    box.classList.remove("goToBack");
    box.classList.toggle("goToRight");
    h1SmallProjects.classList.add("hide");
    frontText.classList.add("hide");
    smallProjectText3.classList.remove("hide");
    h1SmallProject3.classList.remove("hide");
    backSmallText.classList.add("hide");
    button118.focus();
    console.log("added");
  });
  button31.addEventListener("click", e => {
    box.classList.remove("goToBack");
    box.classList.toggle("goToRight");
    h1SmallProjects.classList.add("hide");
    frontText.classList.add("hide");
    h1SmallProject4.classList.remove("hide");
    smallProjectText4.classList.remove("hide");
    backSmallText.classList.add("hide");
    console.log("added");
    button116.focus();
  });

button16.addEventListener("click", e => {
  box.classList.remove("goToBack");
  box.classList.remove("goToLeft");
  h1Main.classList.remove("hide");
  h1Webdev.classList.remove("hide");
  h1BigProjects.classList.add("hide");
  backBigText.classList.add("hide");
  frontText.classList.remove("hide");
  button1.focus();
  console.log("added");
});
button16.addEventListener('keydown', event => {
    if (event.keyCode === 9) {
        event.preventDefault();
        button13.focus();
    }
});

button20.addEventListener("click", e => {
  box.classList.remove("goToBottomFromBack");
  box.classList.remove("goToBottom");
  box.classList.toggle("goToFrontFromBottom");
  h1Webdev.classList.remove("hide");
  h1Main.classList.remove("hide");
  bottomText.classList.add("hide");
  h1MyGithub.classList.add("hide");
  frontText.classList.remove("hide");
  console.log("added");
  button1.focus();
});
button20.addEventListener('keydown', event => {
    if (event.keyCode === 9) {
        event.preventDefault();
        button26.focus();
    }
});

button25.addEventListener("click", e => {
  box.classList.remove("goToTop");
  h1Main.classList.remove("hide");
  h1Webdev.classList.remove("hide");
  frontText.classList.remove("hide");
  topText.classList.add("hide");
  h1AboutMe.classList.add("hide");
  console.log("added");
  button1.focus();
});
button25.addEventListener('keydown', event => {
    if (event.keyCode === 9) {
        event.preventDefault();
        button25.focus();
    }
});

button32.addEventListener("click", e => {
  box.classList.remove("goToBack");
  box.classList.remove("goToLeft");
  frontText.classList.remove("hide");
  h1Main.classList.remove("hide");
  h1Webdev.classList.remove("hide");
  h1SmallProjects.classList.add("hide");
  backSmallText.classList.add("hide");
  console.log("added");
  button1.focus()
});

button32.addEventListener('keydown', event => {
    if (event.keyCode === 9) {
        event.preventDefault();
        button28.focus();
    }
});

button33.addEventListener("click", e => {
    box.classList.remove("goToRight");
    h1Main.classList.remove("hide");
    h1Webdev.classList.remove("hide");
    frontText.classList.remove("hide");
    bigProjectText2.classList.add("hide");
    h1BigProject2.classList.add("hide");
    console.log("added");
    button1.focus();
  });
button33.addEventListener('keydown', event => {
    if (event.keyCode === 9) {
        event.preventDefault();
        button112.focus();
    }
});
button36.addEventListener("click", e => {
    box.classList.remove("goToRight");
    h1Main.classList.remove("hide");
    h1Webdev.classList.remove("hide");
    frontText.classList.remove("hide");
    bigProjectText3.classList.add("hide");
    h1BigProject3.classList.add("hide");
    button1.focus()
    console.log("added");
  });

button36.addEventListener('keydown', event => {
    if (event.keyCode === 9) {
        event.preventDefault();
        button114.focus();
    }
});
button38.addEventListener("click", e => {
    box.classList.remove("goToRight");
    h1Main.classList.remove("hide");
    h1Webdev.classList.remove("hide");
    frontText.classList.remove("hide");
    smallProjectText1.classList.add("hide");
    h1SmallProject1.classList.add("hide");
    button1.focus();
    console.log("added");
  });
button38.addEventListener('keydown', event => {
    if (event.keyCode === 9) {
        event.preventDefault();
        button115.focus();
    }
});
button40.addEventListener("click", e => {
    box.classList.remove("goToRight");
    h1Main.classList.remove("hide");
    h1Webdev.classList.remove("hide");
    frontText.classList.remove("hide");
    smallProjectText4.classList.add("hide");
    h1SmallProject4.classList.add("hide");
    button1.focus();
    console.log("added");
  });
button40.addEventListener('keydown', event => {
    if (event.keyCode === 9) {
        event.preventDefault();
        button116.focus();
    }
});
button42.addEventListener("click", e => {
    box.classList.remove("goToRight");
    h1Main.classList.remove("hide");
    h1Webdev.classList.remove("hide");
    frontText.classList.remove("hide");
    smallProjectText3.classList.add("hide");
    h1SmallProject3.classList.add("hide");
    button1.focus();
    console.log("added");
  });
button42.addEventListener('keydown', event => {
    if (event.keyCode === 9) {
        event.preventDefault();
        button118.focus();
    }
});
button44.addEventListener("click", e => {
    box.classList.remove("goToRight");
    h1Main.classList.remove("hide");
    h1Webdev.classList.remove("hide");
    frontText.classList.remove("hide");
    smallProjectText2.classList.add("hide");
    h1SmallProject2.classList.add("hide");
    button1.focus();
    console.log("added");
  });
button44.addEventListener('keydown', event => {
    if (event.keyCode === 9) {
        event.preventDefault();
        button1110.focus();
    }
});
