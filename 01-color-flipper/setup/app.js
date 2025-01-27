const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.getElementById('btn');
const color = document.querySelector(".color");

btn.addEventListener("click", function(){
    // generate random number between 0 and the size of the array
    const randomNumber = getRandomNumbers();
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
});

function getRandomNumbers(){
    return Math.floor(Math.random()*colors.length);
}