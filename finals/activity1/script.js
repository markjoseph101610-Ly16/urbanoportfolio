// name
const Name = document.getElementById("Name");
// image
const Image = document.getElementById("Image");
// input
const nameInput = document.getElementById("nameInput");
// select
const YearLevel = document.getElementById("YearLevel");
// 1 btn
const clickBTN = document.getElementById("clickBTN");
// 2 btn
const ClickBTN = document.getElementById("ClickBTN");
// p btn
const pressBtn = document.getElementById("pressBtn");
// reset btn
const resetBtn = document.getElementById("resetBtn");
// s text
const statusText = document.getElementById("status");

// First Click
clickBTN.addEventListener("click", function () {
    Name.innerHTML = "Soon to be a Teacher";
    Name.style.color = "Brown";
    statusText.innerHTML = "Click Done.";
});

// Second Click
ClickBTN.addEventListener("dblclick", function () {
    Name.innerHTML = "Soon to be a Priest";
    Name.style.color = "Black";
    statusText.innerHTML = "Double click Done.";
});

// Image Mouseover
Image.addEventListener("mouseover", function () {
    Image.style.transform = "scale(0.1)";
    statusText.innerHTML = "Na daanan mo ang image.";
});

// Image Mouseout
Image.addEventListener("mouseout", function () {
    Image.style.transform = "scale(1.5)";
    statusText.innerHTML = "Inalisan mo ang image.";
});

// BTN Mousedown
pressBtn.addEventListener("mousedown", function () {
    Name.innerHTML = "Soon to be a Masters Teacher";
    pressBtn.style.backgroundColor = "white";
    statusText.innerHTML = "Na pindto mo ang button.";
});

// BTN Mouseup
pressBtn.addEventListener("mouseup", function () {
    Name.innerHTML = "Soon to be a Master of Ceremony";
    pressBtn.style.backgroundColor = "blue";
    statusText.innerHTML = "Inalis sa pag pindto mo ang button.";
});

// INPUT Focus
nameInput.addEventListener("focus", function () {
    nameInput.style.color = "yellow";
    nameInput.style.backgroundColor = "black";
    statusText.innerHTML = "Active kana.";
});

// INPUT Blur
nameInput.addEventListener("blur", function () {
    nameInput.style.backgroundColor = "blue";
    statusText.innerHTML = "Di kana Active.";
});

// SELECT Change
YearLevel.addEventListener("change", function () {
    statusText.innerHTML = "Year selected: " + YearLevel.value;
});

// INPUT Type
nameInput.addEventListener("input", function () {
    Name.innerHTML = nameInput.value || "Mark Joseph Urbano";
    statusText.innerHTML = "May type ka paba? "; 
});

// Reset all
resetBtn.addEventListener("click", function () {
    resetBtn.style.backgroundColor = "Blue";
    resetBtn.style.color = "white";
    Name.innerHTML = "Mark Joseph Urbano";
    Name.style.color = ""; 
    nameInput.value = "";
    nameInput.style.color = "";
    nameInput.style.backgroundColor = "";
    YearLevel.value = "";
    Image.style.transform = "scale(1)";
    pressBtn.style.backgroundColor = "";
    statusText.innerHTML = "Na-reset na ang lahat!";
});

// Submit
submitBtn.addEventListener("click", function () {
    statusText.innerHTML = "Closing webpage...";
    // close 
    window.close();

    // RESET ALL
    Name.innerHTML = "";
    Name.style.color = ""; 
    nameInput.value = "";
    nameInput.style.color = "";
    nameInput.style.backgroundColor = "";
    YearLevel.value = "";
    Image.style.transform = "scale(1)";
    pressBtn.style.backgroundColor = "";
});