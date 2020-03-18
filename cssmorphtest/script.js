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
const button11= document.getElementById("btn-11");
const button12= document.getElementById("btn-12");
const button13= document.getElementById("btn-13");
const button14= document.getElementById("btn-14");
const button15= document.getElementById("btn-15");
const button16= document.getElementById("btn-16");
const box = document.getElementById('box');
const shape1 = document.getElementById('shape-1')

button1.addEventListener("click", e => {
    box.classList.add("goToLeft");
    shape1.classList.add("hide")
    console.log("added");
})


button2.addEventListener("click", e => {
    box.classList.add("goToRight");
    shape1.classList.add("hide")
    console.log("added");
})

button3.addEventListener("click", e => {
    box.classList.add("goToBottom");
    console.log("added");
})

button5.addEventListener("click", e => {
    box.classList.remove("goToLeft");
    box.classList.add("goToBack");
    console.log("added");
})

button13.addEventListener("click", e => {
    box.classList.add("goToBottomFromBack");
    console.log("added");
})